/**
 * @jest-environment node
 */

const assert = require("bsert")

const {Database, Collection, DatabaseValidator} = require("./database")
const {CollectionValidator} = require("../models/validator")

const dbConfigBad = {
    version: "0.0.0"
}



const dbConfigGood = {
    name: "database",
    version: "0.0.0"
}


const collectionConfigBad = {
    version: "0.0.0"
}


const collectionConfig = {
    name: "collection",
    version: "0.0.0",
    type: "Document",
    schema: ""
}

const collectionConfigGood = {
    name: "collection",
    version: "0.0.1",
    type: "Document",
    schema: ""
}

describe("Database Configuration and Model Tests", () => {
    describe("Main Database Tests", () => {
       
        it ("Should validate database configuration based on good and bad config values", () => {
            var databaseValidator = DatabaseValidator
            databaseValidator.validate(dbConfigBad)
            databaseValidator.validate(dbConfigGood)
        })

        it("Should be able to create database from configuration, and that there exists a valid state update, and the json can be printed", () => {
            let name = "database"
            let dbConfig = {
                name: "database",
                version: "0.0.0"
            }
            
            let database = new Database(name, dbConfig)
            assert(database)
            let updateConfigGood = {
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
        })
    })

    describe("Collection tests", () => {
        it("Should be able to validate configuration for collections", () => {
            var collectionValidator = CollectionValidator
            assert(!collectionValidator.validate(collectionConfigBad))
            assert(collectionValidator.validate(collectionConfig))
        });


        it("Should be able to create database from configuration, and that there exists a valid state update, and the json can be printed", async () => {
            let name = "database"
            let dbConfig = {
                name: "database",
                version: "0.0.0"
            }
            
            let database = new Database(name, dbConfigGood) 

            let collection = await database.createCollection(name, collectionConfig)
            assert(collection)

            collection = await database.getCollection(name)
            assert(collection)

            let badCollection = await database.updateCollectionConfig(name, collectionConfigBad)
            assert(!badCollection)


            // let resp = await database.deleteCollection(name)
            // assert(resp)

        });



        it("Should be able to create database from configuration, and that there exists a valid state update, and the json can be printed", async () => {
            let name = "database"
            let dbConfig = {
                name: "database",
                version: "0.0.0"
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
            let name = "database"
            let dbConfig = {
                name: "database",
                version: "0.0.0"
            }
            
            let database = new Database(name, dbConfig) 

            let documentSchema = {
                properties: {
                    id: {type: "string"},
                    value: {type: "string"}
                }
            }

            let collectionConfig = {
                name: "collection",
                version: "0.0.0",
                type: "Document",
                schema: JSON.stringify(documentSchema)
            }

            let collection = new Collection(database, name, collectionConfig)
            assert(collection)

            let documentBad = {}
            assert(collection.validateDocument(documentBad) == false)

            let documentGood = {
                id: "id",
                value: "Value"
            }
            assert(collection.validateDocument(documentGood))

            
            let newDocumentSchema = {
                properties: {
                   key: {type: "string"}, 
                   val: {type: "string"}
            }
        }

        let newCollectionConfig = {
            name: "collection",
            version: "0.0.1",
            type: "Document",
            schema: JSON.stringify(newDocumentSchema)
        }

        assert(collection.updateConfig(newCollectionConfig))

        let newDocumentGood = {
            key: "key",
            val: "value"
        }
        assert(collection.validateDocument(newDocumentGood))
        assert(collection.validateDocument(documentGood) == false)

        }); 
    });





})