<<<<<<< HEAD
const { isString } = require("mocha/lib/utils")
=======
>>>>>>> b5785d4dff497d9809057fd5942370dd24e8ee02
const {parseKey, parseValue, parseProof, parseRoot} = require("../../helpers")

class Executor {
    constructor(db) {
        this.db = db
    }

    _validate(tx) {
        return true 
    }

    parseRawTx(rawTx) {
        //ensure json 
        //ensure params 
        let tx = rawTx
<<<<<<< HEAD
        for (const [name, value] of Object.entries(rawTx.params)) {
            tx.params[name] = this._parseTxParam(name, value)
          }
=======
        Object.keys(rawTx.params).map((name) => {
            tx.params[name] = this._parseTxParam(name, rawTx.params[name])
         })
>>>>>>> b5785d4dff497d9809057fd5942370dd24e8ee02
        return tx
    }

    _parseTxParam(name, value, txType = "Document") {
        var returnValue;
        switch(name) {
            case "key": 
<<<<<<< HEAD
                returnValue = parseKey(toString(value))
                break
            case "value":
                returnValue = parseValue(toString(value))
=======
                returnValue = parseKey(value.toString())
                break
            case "value":
                returnValue = parseValue(JSON.stringify(value))
>>>>>>> b5785d4dff497d9809057fd5942370dd24e8ee02
                break
            case "limit": 
                returnValue = value || 100 
                break
            case "prove":
<<<<<<< HEAD
                returnValue = value || false
=======
                returnValue = value || false 
>>>>>>> b5785d4dff497d9809057fd5942370dd24e8ee02
                break
            case "query": 
                returnValue = value
                break 
            case "collection":
                returnValue =  value
                break
            default: 
                returnValue =  value
                break
        }
        return returnValue
    }

    async process(rawTx) {
        let tx = this.parseRawTx(rawTx)
        var response;
        var rawResponse;
        switch (tx.type) {
            case "READ":
                rawResponse = await this._query(tx)
                break;
            case "WRITE":
                rawResponse = await this._update(tx)
                break;
            default:
                throw new Error("Not implemented: ", tx.type)
        
        }
        response = this.parseRawResponse(rawResponse)
        return response 
    }

    async _update(tx) {
        var reply;
        if (tx.params.collection) {
            const table = await this.db.getCollection(tx.params.collection)
            reply = await table.update(tx)
        } else {
            reply = await this.db.update(tx)
        }
        return reply
    }

    async _query(tx) {
        var reply;
        if (tx.params.collection) {
            const table = await this.db.getCollection(tx.params.collection)
            reply = await table.query(tx)
        } else {
            reply = await this.db.queryCollection(tx)
        }
        return reply
    }

    parseRawResponse(rawResponse) {
<<<<<<< HEAD
        var response = {}
        for (const key of Object.keys(rawResponse)) {
            response[key] = this._parseResponseParam(key, rawResponse[key])
          }

=======
        let response = rawResponse
        Object.keys(rawResponse).map((name) => {
            response[name] = this._parseResponseParam(name, rawResponse[name])
         })
>>>>>>> b5785d4dff497d9809057fd5942370dd24e8ee02
        return response
    }

    _parseResponseParam(name, value, collectionType= "Document") {
        var returnValue;
        switch(name) {
            case "key":
<<<<<<< HEAD
                returnValue = toString(value)
=======
                returnValue = value.toString()
>>>>>>> b5785d4dff497d9809057fd5942370dd24e8ee02
                break;
            case "root":
                returnValue = parseRoot(value)
                break
            case "value":
<<<<<<< HEAD
                returnValue = toJSON(value)
                break
            case "proof": 
                returnValue = toString(value)
=======
                returnValue = value.toString()
>>>>>>> b5785d4dff497d9809057fd5942370dd24e8ee02
                break
            case "query":
                returnValue = value
                break
            case "error":
<<<<<<< HEAD
                returnValue = "None" || value 
                break
            default:
                returnValue = value
                break
        }
        return returnValue
    }
}

function toJSON(rawValue) {
    if (Buffer.isBuffer(rawValue)){
        value = JSON.parse(toString(rawValue))
        return value
    }

    if (typeof rawValue == "string") {
        return JSON.parse(rawValue)
    } 

    if (typeof rawValue == "buffer") {
        return JSON.parse(toString(rawValue))
    } 

    if (typeof rawValue == "object") {
        return rawValue
    }
    return JSON.parse(toString(rawValue))
}

function stringClean(rawString) {
    return rawString.split("\x00").join("").replace(/^[\s\uFEFF\xA0\0]+|[\s\uFEFF\xA0\0]+$/g, "")
}

function toString(rawValue) {
    var value;
    if (Buffer.isBuffer(rawValue)){
        
        value = rawValue.toString("utf8")
        return stringClean(value)
    }
    switch (typeof rawValue) {
        case "string":
            value = rawValue.toString()
            break
        case "object":
            value = JSON.stringify(rawValue)
            break
        case "buffer":
            value = rawValue.toString()
            break
        default:
            value = rawValue.toString()
            break
    }
    return stringClean(value)
=======
                returnValue = value
                break
            default:
                returnValue = value
        }
        return returnValue
    }



    // execute(tx) {
    //     //collection 

    //     //read request

    //     //write request
    // }

    // journal(tx) {
    //     //collection 
    //     //journal
    // }

    // update(tx) {
    //     this.db.update(tx)
    // }

    // query(request) {
    //     this.db.query(tx)
    // }
>>>>>>> b5785d4dff497d9809057fd5942370dd24e8ee02
}

module.exports = {Executor}