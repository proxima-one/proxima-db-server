/**
 * @jest-environment node
 */

const assert = require("bsert")

const {Database, Collection, DatabaseValidator} = require("./database")
const {CollectionValidator} = require("../models/validator")
const { fstat, fchown } = require("fs-extra")
const fs = require("fs-extra")

const dbConfigBad = {
    version: "0.0.0"
}



const dbConfigGood = {
    _id: "database_id",
    name: "database",
    version: "0.0.0"
}


const collectionConfigBad = {
    version: "0.0.0"
}

const documentSchemaGood = {
    type: "object",
    title: "Good Document",
    properties: {
        _id: {type: "string"},
        name: {type: "string"}
    },
    required: ["_id"],
    additionalProperties: true
}

const collectionConfig = {
    _id: "collection_id",
    name: "collection",
    version: "0.0.0",
    type: "Document",
    schema: JSON.stringify(documentSchemaGood)
}

const documentSchemaBad = {
    type: "object",
    title: "Bad Document",
    properties: {
        name: {type: "string"}
    }
}


const collectionConfigGood = {
    _id: "collection_id",
    name: "collection",
    version: "0.0.1",
    type: "Document",
    schema: JSON.stringify(documentSchemaGood)
}

describe("Database Configuration and Model Tests", () => {
    describe("Main Database Tests", () => {
       
        it ("Should validate database configuration based on good and bad config values", () => {
            var databaseValidator = DatabaseValidator
            databaseValidator.validate(dbConfigBad)
            databaseValidator.validate(dbConfigGood)
        })

        it("Should be able to create database from configuration, and that there exists a valid state update, and the json can be printed", async () => {
            let name = "database"
            let dbConfig = {
                _id: "database_id",
                name: "database",
                version: "0.0.0"
            }
            
            let database = new Database(name, dbConfig)
            assert(database)
            let updateConfigGood = {
                _id: "database_id",
                name: "database-good",
                version: "0.0.1"
            }

            let updateResponseGood = database.updateConfig(updateConfigGood)
            assert(updateResponseGood == true)

            let updateConfigBad = {
                name: "database-bad",
                version: "0.0.0"
            }
            let updateResponseBad  = database.updateConfig(updateConfigBad)
            assert(updateResponseBad == false)
            

            let dbJSON = database.toJSON()
            var databaseValidator = DatabaseValidator
            assert(databaseValidator.validate(dbJSON))
            let resp = await database.close()
        })
    })

    describe("Collection tests", () => {
        it("Should be able to validate configuration for collections", () => {
            var collectionValidator = CollectionValidator
            assert(!collectionValidator.validate(collectionConfigBad))
            assert(collectionValidator.validate(collectionConfig))
        });


        it("Should be able to create database from configuration, and that there exists a valid state update, and the json can be printed", async () => {
            let name = "collection"
            let dbConfig = {
                _id: "database-id",
                name: "database",
                version: "0.0.0"
            }  
            const collectionConfig = {
                _id: "collection_id",
                name: "collection",
                version: "0.0.0",
                type: "Document",
                schema: JSON.stringify(documentSchemaGood)
            }

            let filePath = "./config.json"
            fs.removeSync(filePath)
            let database = new Database(name, dbConfigGood) 

            let collection = await database.createCollection(name, collectionConfig)
            assert(collection)
            let collections1 = await database.getCollections()
            //console.log(Object.keys(collections1).length)
            assert(collections1 && Object.keys(collections1).length == 1)
            let collection1 = await database.getCollection(name)
            assert(collection1)
     
            database.writeToJSON(filePath)
            let badCollection = await database.updateCollection(name, collectionConfigBad)
            assert(!badCollection)
            let databaseReplica = Database.readFromJSON(filePath)
            let collections = await databaseReplica.getCollections()
            assert(collections)
            let resp = await database.close()


            // let resp = await database.deleteCollection(name)
            // assert(resp)
        });



        it("Should be able to create database from configuration, and that there exists a valid state update, and the json can be printed", async () => {
            let name = "database"
            let dbConfig = {
                _id: "database_id",
                name: "database",
                version: "0.0.0"
            }

            const documentSchema = {
                type: "object",
                title: "Good Document",
                properties: {
                    _id: {type: "string"},
                    name: {type: "string"}
                },
                required: ["_id"],
                additionalProperties: true
            }

            let collectionConfig = {
                _id: "collection_id",
                name: "collection1",
                version: "0.0.0",
                type: "Document",
                schema: JSON.stringify(documentSchema)
            }
            
            let database = new Database(name, dbConfigGood) 

            let collection = new Collection(database, name, collectionConfig)
            assert(collection)

            let badCollection = collection.updateConfig(name, collectionConfigBad)
            assert(badCollection == false)

            let goodCollection = collection.updateConfig(collectionConfigGood)
            assert(goodCollection == true)

        }); 


        it("Should be able to create a document collection that allows for schema, and validates documents", async () => {
            let name = "collection1"
            let dbConfig = {
                _id: "database_id",
                name: "database",
                version: "0.0.0"
            }
            
            let database = new Database(name, dbConfig) 

            let documentSchema = {
                properties: {
                    _id: {type: "string"},
                    value: {type: "string"}
                },
                required: ["_id"]
            }

            let collectionConfig = {
                _id: "collection_id",
                name: "collection1",
                version: "0.0.0",
                type: "Document",
                schema: JSON.stringify(documentSchema)
            }

            let collection = new Collection(database, name, collectionConfig)
            assert(collection)

            let documentBad = {}
            assert(collection.validateDocument(documentBad) == false)

            let documentGood = {
                _id: "id",
                value: "Value"
            }
            assert(collection.validateDocument(documentGood))

            
            let newDocumentSchema = {
                properties: {
                    _id: {type: "string"},
                   key: {type: "string"}, 
                   val: {type: "string"}
            },
            required: ["_id"]
        }

        let newCollectionConfig = {
            _id: "collection_id",
            name: "collection1",
            version: "0.0.1",
            type: "Document",
            schema: JSON.stringify(newDocumentSchema)
        }

        assert(collection.updateConfig(newCollectionConfig))

        let newDocumentGood = {
            _id: "id",
            key: "key",
            val: "value"
        }
        assert(collection.validateDocument(newDocumentGood))
        assert(collection.validateDocument(documentGood))

        let resp = await database.close()
        }); 
    });





})