const {DatabaseValidator, CollectionValidator, ModelValidator} = require("../models/validator")

const proxima = require("proxima-db")
const {DatabaseModel, DEFAULT_DB_CONFIG, DEFAULT_COLLECTION_CONFIG} = require("../models/models")
const json = require("../../../node_modules/js-yaml/lib/schema/json")

class Database {

    constructor(name, config = {}) {
        this.name = name 
        this.validator = DatabaseValidator
        this.config = DEFAULT_DB_CONFIG
        if (this.validator.validate(config)) {
            this.config = config
        }
        this.db = new proxima.Database(config["hash"], config["bits"], config["db_path"])
        this.collections = {}
    }

    canUpdateConfig(config) {
        if (!this.config.version) {
            return true
        } else {
            return (this.config.version < config.version)
        }
    }

    updateConfig(config = {}) {
        if (this.validator.validate(config) && this.canUpdateConfig(config)) {
            this.name = config.name
            this.config = config 
            return true
        } else {
            return false
        }
    }

    async createCollection(name, config = {}) {
        //check that collection is not in the 
        if (!(name in this.collections)) {
            let collection = new Collection(this, name, config)
            if (collection) {
               let collectionTable = await this.db.create(name)
               this.collections[name] = collection
            }
            return true
        } 
        return false
    }

    async getCollection(name) {
        if (name in this.collections || true) {
            let collection = await this.db.get(name)
            return collection
        }
        return null
    }


    updateCollectionConfig(name, config = {}) {
        if (name in this.collections) {
            return this.collections[name].updateConfig(config)
        }
        return false
    }


    async deleteCollection(name) {
        if (name in this.collections) {
            await this.db.delete(name)
        }
    }

    toJSON() {
        return this.config
    }
}

//collection
class Collection {
    constructor(db, name, config = {}) {
        this.name = name 
        this.validator = CollectionValidator
        this.config = DEFAULT_COLLECTION_CONFIG 
        this.updateConfig(config)
        this.db = db
    }

    canUpdateConfig(config) {
        if (!this.config.version) {
            return true
        } else {
            return (this.config.version < config.version)
        }
    }

    updateConfig(config) {
        if (this.validator.validate(config) && this.canUpdateConfig(config)) {
             this.config = config 
             if (this.config.schema) {
                this.updateValidator(this.config.schema)
             }
             return true
        }
        return false
    }

    updateValidator(schemaObj) {
        this.documentValidator = new ModelValidator(JSON.parse(schemaObj))
    }

    validateDocument(obj) {
        try {
            if (this.documentValidator) {
                return this.documentValidator.validate(obj)
            }
        } catch(e) {
            console.log(e, obj)
            return false
        }
        return true
    }

    delete() {
        throw new Error("Not Implemented")
    }

    toJSON() {
        return this.config
    }
}



module.exports = {
    Collection,
    DatabaseModel,
    DatabaseValidator, 
    Database
}