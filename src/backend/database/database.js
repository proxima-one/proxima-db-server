const {DatabaseValidator, CollectionValidator, ModelValidator} = require("../models/validator")
const {parseKey, parseValue, parseProof, parseRoot} = require("../../helpers")
const proxima = require("proxima-db")
const {DatabaseModel, DEFAULT_DB_CONFIG, DEFAULT_COLLECTION_CONFIG} = require("../models/models")
const json = require("../../../node_modules/js-yaml/lib/schema/json")
const { fstat } = require("fs-extra")
const fs= require("fs-extra")
const assert = require("assert")
const { urlToHttpOptions } = require("http")

class Database {
    static validator = DatabaseValidator

    constructor(name, config = {}) {
        assert(Database.validator.validate(config))
        this._id = config._id
        this.name = config.name
        this.version = config.version
        this.owner = config.owner || ""
        this.internal_config = config.internal_config || DEFAULT_COLLECTION_CONFIG
        this.db = new proxima.Database(this.internal_config["hash"], this.internal_config["bits"], this.internal_config["db_path"])
        this.collections = {}
        if (config.collections) {
            this.collections = Object.assign({}, ...config.collections.map((collectionConfig) => 
                ({[collectionConfig.name]: (new Collection(this, collectionConfig.name, collectionConfig))})))
        }
    }

    async close() {
        try {
            let collections = await this.getCollections()
        for (const [name, collection] of Object.entries(collections)) {
            let resp = await collection.close()

        }
        } catch (e) {
            console.log("Error Closing collection: ", e)
        }
    }

    async update(tx) {
        var reply;
        switch(tx.command) {
            case "COLLECTION_CREATE":
                reply = await this.createCollection(tx.params.name, tx.params.config)
                break
            case "COLLECTION_UPDATE":
                let newCollectionResp = await this.updateCollection(tx.params.name, tx.params.config)
                let collection = await this.getCollection(tx.params.name)
                reply = {updated: newCollectionResp, collection: collection.toJSON()}
                break
            case "COLLECTION_DELETE":
                reply = await this.deleteCollection(tx.params.name)
                break
            case "DATABASE_UPDATE":
                reply = this.updateConfig(tx.params.config)
                break
            default:
                throw new Error("Not implemented: ", tx.command)
        }
        this.writeToJSON()
        return reply
    }

    async queryCollection(tx) {
        var reply;
        switch(tx.command) {
            case "FIND_ONE_COLLECTION":
                reply = await this.getCollection(tx.name)
                break
            case "FIND_COLLECTION": 
                reply = await this.getCollections()
                break
            default:
                throw new Error("Not implemented: ", tx.command)
        }
        return reply
    }

    canUpdateConfig(config) {
        if (!this.version) {
            return true
        } else {
            return (this.version < config.version)
        }
    }

    updateConfig(config = {}) {
        if (Database.validator.validate(config) && this.canUpdateConfig(config)) {
            this.name = config.name
            this.version = config.version
            return true
        } else {
            return false
        }
    }

    async createCollection(name, config = {}) {
        try{
            if (!(name in this.collections)) {
                let collection = new Collection(this, name, config)
                if (collection) {
                 let collectionTable = await this.db.create(name)
                  this.collections[collection.name] = collection
                }
                return true
            } 
            return false
        } catch(error) {
            console.log("Error creating a collection", error.message, config)
            return error
        }
    }

    async getCollection(name) {
        if (name in this.collections) {
            let collection = await this.db.get(name)
            return this.collections[name]
        }
        return null
    }

    async getCollections() {
        return this.collections
    }


    async updateCollection(name, config = {}) {
        if (name in this.collections) {
            let collection = await this.getCollection(name)
            return collection.updateConfig(config)
        }
        return false
    }

    async deleteCollection(name) {
        if (name in this.collections) {
            this.collections[name] = null
            await fs.remove("./DB/" + name)
        }
    }

    toJSON() {
        return {_id: this._id, name: this.name, version: this.version, owner: this.owner, collections: Object.values(this.collections).map(collection => collection.toJSON())}
    }

    static readFromJSON(jsonFile = "./DB/config.json") {
        let dbJSON = DEFAULT_DB_CONFIG
        if (fs.existsSync(jsonFile)) {
            let jsonText = fs.readFileSync(jsonFile, "utf8")
            dbJSON = JSON.parse(jsonText)
        }
        return new Database(dbJSON.name, dbJSON)
    }

    writeToJSON(jsonFile = "./DB/config.json") {
        let dbJSON = this.toJSON()
        let jsonText = JSON.stringify(dbJSON)
        fs.writeFileSync(jsonFile, jsonText)
        return true
    }
}

//collection
class Collection {
    static collection_validator = CollectionValidator 
    constructor(db, name, config = {}) {
        assert(Collection.collection_validator.validate(config))
        this._id = config._id
        this.type = config.type 
        this.name = config.name || name 
        this.version = config.version
        this.owner = config.owner || ""
        this.internal_config = config.internal_config || DEFAULT_COLLECTION_CONFIG 
        this.db = db
        this.schema = config.schema || ""
        this.updateValidator(this.schema)
    }

    async close() {
        try {
            let resp = await this.db.db.close(this.name)
        } catch (e) {
            console.log("Error: ", e.message)
        }
    }

    canUpdateConfig(config) {
        if (!this.version) {
            return true
        } else {
            return (this.version < config.version)
        }
    }

    updateConfig(config = {}) {
        if (Collection.collection_validator.validate(config) && this.canUpdateConfig(config)) {
        this.version = config.version
        if (config.schema) {
            this.updateValidator(config.schema)
        }
        return true
        }
        return false 
    }

    updateValidator(schemaObj) {
        if (schemaObj != "") {
            this.validator = new ModelValidator(JSON.parse(schemaObj))
        }
    }

    validateDocument(obj) {
        try {
            if (this.validator) {
                return this.validator.validate(obj)
            }
        } catch(e) {
            console.log(e, obj)
            return false
        }
        return true
    }

    exec(tx) {
        //check the execution... 
        //check values in the correct format 

        //check the return values are in the correct format 
    }

    async update(tx) {
        var reply;
        switch(tx.command) {
            case "INSERT":
                reply = await this._insert(tx.params.key, tx.params.value, tx.params.prove)
                break
            case "UPDATE":
                reply = await this._insert(tx.params.key, tx.params.value, tx.params.prove)
                break
            case "DELETE":
                reply = await this._delete(tx.params.key, tx.params.prove)
                break
            case "BULK_UPDATE":
                reply = await this._bulkUpdate(tx.params.txs)
                break
            default: 
                throw new Error("Not implemented: ", tx.command)
        }
        return reply
    }

    async _bulkUpdate(txs) {
        const table = await this.db.db.get(this.name)
        const entries = txs
        console.log(txs)
        let replies = new Array();
        let tx = await table.transaction();
        for (var entry of entries) {
            console.log("Entry key: ", entry.key)
            console.log("Entry value: ", entry.value)
            let value = parseValue(JSON.stringify(entry.value));
            entry.key = parseKey(entry.key.toString())
            entry.prove = entry.prove || false;
            let response = await table.put(entry.key, value, entry.prove);
          replies.push({
            value: value,
            confirmation: true,
            proof: JSON.parse(parseProof(response.proof).toString() || "{}"),
            root: parseRoot(response.data.root)
          });
        }
        let resp = await table.commit();
        return replies
    }

    async _update(key, value, prove) {
        let table = await this.db.db.get(this.name)

        let response = await table.put(key, value, prove);
        let reply = {
            confirmation: true,
            value: value,
            root: response.root,
            proof: response.proof,
            error: null
        };
        return reply
    }

    async _insert(key, value, prove) {
        let table = await this.db.db.get(this.name)
       let response = await table.put(key, value, prove);
       
       let reply = {
           value: value.toString(),
           confirmation: true,
           root: parseRoot(response.root),
           proof: JSON.parse(parseProof(response.proof).toString() || "{}")
       };
       return reply
    }

    async query(query) {
        switch(query.command) {
            case "FIND_ONE": 
                let resp = await this._find_one(query.params.key, query.params.prove)
                return resp
            case "FIND":
                let respFind = await this._find(query.params.query, query.params.prove, query.params.limit)
                return respFind
            default:
                throw new Error("Not implemented")
        }
    }


    async _find_one(key, prove) {
        let table = await this.db.db.get(this.name)
        let response = await table.get(key, prove);
        let reply = {
          value: JSON.parse(response.value.toString()),
          root: parseRoot(response.root),
          proof: JSON.parse(parseProof(response.proof).toString() || "{}")
        };
        return reply
    }

    async _find(query, prove, limit) {
        let table = await this.db.db.get(this.name)
        let responses = await table.query(
          JSON.stringify(query),
          limit,
          prove
        );
        let replies = new Array();
        for (var response of responses) {
          let root = response.root || "";
          replies.push({
            value: JSON.parse(response.value.toString()),
            proof: JSON.parse(parseProof(response.proof).toString() || "{}"),
            root: parseRoot(response.root)
          });
        }
        let queryReply = {
          query: query,
          responses: replies
        };
        return queryReply
    }

    async _delete(key, prove) {
        const table = await this.db.db(this.name)
        await table.transaction();
        await table.remove(key);
        await table.commit();
        let reply = {
          key: req.params.key,
          confirmation: true
        };
        return reply
    }

    toJSON() {
        return {_id: this._id, name: this.name, version: this.version, owner: this.owner, type: this.type, schema: this.schema, internal_config: this.internal_config}
    }
}



module.exports = {
    Collection,
    DatabaseModel,
    DatabaseValidator, 
    Database
}