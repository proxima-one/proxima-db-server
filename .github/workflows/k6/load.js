const http =  require('k6/http');
const { sleep, check } = require('k6');
//const assert = require('bsert');
const {randomKey, randomValue, randomBytes} = require('./utils.js')

const SLEEP_DURATION = 0.01;

export let options = {
    stages: [
        { duration: "1m", target: 100 },
        { duration: "1m", target: 100 },
        { duration: "1m", target: 0 }
    ],
    thresholds: {
        http_req_duration: ['p(95)<1000'] // 99% request must complete below 1s
    }
}

const BASE_URL = "http://192.168.64.2:30080"  //"http://localhost:80" 
const HEADERS = { "Content-Type": "application/json" }

const LOAD_TESTING_TYPES = ["STRESS", "SOAK", "LOAD", "CAPACITY"]


const config = {
    type: "STRESS",
    tables: 1,
    duration: "5m",
    operations: {
        range: 0.1,
        put: 0.1,
        update: 0.1, 
        get: 0.3,
        delete: 0.1
    },
    collection_type: "stream",
    update_type: "Commit",
    proofs: 0.1,
    location: {
        ip: "0.0.0.0",
        port: "80"
    },
}

class LoadBalancer {
    constructor(args = config) {
        this.type = config.type 
        this.operations = config.operations
        this.tableNum = config.tables
        this.docNum = 1000
        this.SLEEP_DURATION = SLEEP_DURATION
        this.collections = []
        this.documents = []
        this.counter = 0
    }

    request() {
       const requestType = this.getRequestType()
       switch (requestType) {
           case "STATS": 
                return stats()
                break
            case "GET": 
                return this.getRequest()
                break
            case "PUT": 
                return this.putRequest()
                break
            case "UPDATE":
                return this.updateRequest()
                break
            case "DELETE":
                return this.deleteRequest()
                break
           default: 
            throw new Error("Not Implemented")
            break
       }
    }

    getRequest() {
        var key = this.getKey()
        var collection = this.getRandomCollection()
        return get(collection.name, key)
    }

    putRequest() {
        var entries = this.newDocuments()
        var collection = this.getRandomCollection()
        return put("collection-01", {entries: entries})
    }

    updateRequest() {
        var key = this.getKey()
        var document = this.newDocument()
        var collection = this.getRandomCollection()
        return update(collection.name, key, document)
    }

    deleteRequest() {
        var key = this.getKey()
        var collection = this.getRandomCollection()
        
        return remove(collection.name, key)
    }

    getRequestType() {
        var randNumber = Math.random()
        if (true) {
           return "PUT" 
        }
        if (randNumber == 0) {
            return "STATS"
        }
        if (randNumber <= this.operations.get) {
            return "GET"
        }

        if (randNumber <= this.operations.get + this.operations.put) {
            return "PUT"
        }

        if (randNumber <= this.operations.get + this.operations.put + this.operations.update) {
            return "UPDATE"
        }

        if (randNumber <= this.operations.get + this.operations.put + this.operations.update + this.operations.range) {
            return "UPDATE"
        }

        return "DELETE"
    }

    getRandomCollection() {
        var index = random(0, this.collections.length)
        return this.collections[index]
    }

    getKey() {
        var index = random(0, this.documents.length)
        return this.documents[index].key
    }

    newDocument(random = true) {
        var key = this.counter.toString()
        this.counter++
        if (random) {
            key = randomKey(32)
        }
        var value = randomValue(300)
        var document = {key: key.toString(), value: value.toString()}
        //this.documents.push(document) 
        return document
    }

    newDocuments(num = 5000) {
        var newDocs = new Array(num)
        for (var i = 0; i < num; i++) {
            newDocs[i] = this.newDocument(false)
        }
        return newDocs
    }

    newCollection() {
        var collectionName = "collection-"+randomKey(20)
        var collection = {
            name: collectionName,
            version: "0.0.0",
        }
        this.collections.push(collection)
        return collection
    }

    setup() {
        for (var i = 0; i < this.tableNum; i++) {
            this.newCollection()
        }

        for (var j = 0; j < this.documentNum; j++) {
            let doc = this.newDocument()
            let collection = this.getRandomCollection()
            this.putRequest(collection, doc)
        }
    }
}

function stats() {
    http.get(BASE_URL + "/stats")
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


function get(collection, key) {
    let res = http.get(BASE_URL + "/collections/" + collection + "/documents/" + key)
    check(res, { 'status was 200': (r) => r.status == 200 });
}

function put(collection, document) {
    console.log(document)
    let payload =  JSON.stringify(document);
    let res = http.post(BASE_URL + "/collections/" + collection + "/documents", payload, { headers: { 'Content-Type': 'application/json' } })
    check(res, { 'status was 200': (r) => r.status == 200 });
}

function update(collection, key, document) {
    let payload =  JSON.stringify(document);
    let res = http.put(BASE_URL + "/collections/" + collection + "/documents/" + key, payload)
    check(res, { 'status was 200': (r) => r.status == 200 });
}

function remove(collection, key) {
    let res = http.delete(BASE_URL + "/collections/" + collection + "/documents/" + key)
    check(res, { 'status was 200': (r) => r.status == 200 });
}

const loadBalancer = new LoadBalancer(config)

export function setup() {
    //var loadBalancer = new LoadBalancer(config)
    //loadBalancer.setup()
    //sleep(10)
    //return loadBalancer
}


export default () => {
    //console.log(loadBalancer)
    loadBalancer.request()
    sleep(loadBalancer.SLEEP_DURATION);
}
