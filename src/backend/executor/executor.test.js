const assert = require("bsert");
const { Database } = require("../database/database");
const { Executor } = require("./executor");

var executor;
var db;

function setup() {
    let dbConfig = {
        _id: "database_id",
        name: "database",
        version: "0.0.0"
    }
    db = new Database(dbConfig.name, dbConfig)
    executor = new Executor(db)
}

beforeAll(()=> {
    setup()
})
afterAll(async () => {
    await db.close()
})

describe("Test Collection Operations", () => {
    it("Should be able to insert and get a collection from the database with valid transactions", async () => {
        let newDocumentSchema = {
            properties: {
                _id: {type: "string"},
               key: {type: "string"}, 
               val: {type: "string"}
        },
        required: ["_id"]
    }

    let collectionConfig = {
        _id: "collection_id",
        name: "collection1",
        version: "0.0.1",
        type: "Document",
        schema: JSON.stringify(newDocumentSchema)
    }
        
        let createCollectionTx = {
            type: "WRITE", 
            command: "COLLECTION_CREATE",
            params: {
                name: "collection_id",
                config: collectionConfig
            }
        }
        assert(db && db.toJSON())
        let reply = await executor.process(createCollectionTx)
        assert(reply)

        let getCollectionTx = {
            type: "READ",
            command: "FIND_ONE_COLLECTION",
            params: {
                name: collectionConfig.name
            }
        }
        getReply = await executor.process(getCollectionTx)
        Object.keys(collectionConfig).map((key) => {
            assert(collectionConfig[key] == getReply[key])
        }) 
        let updateCollectionConfig = {
            _id: "collection_id",
            name: "collection1",
            version: "0.0.2",
            type: "Document",
            schema: "{}"
        }
            
            let updateCollectionTx = {
                type: "WRITE", 
                command: "COLLECTION_UPDATE",
                params: {
                    name: collectionConfig.name,
                    config: updateCollectionConfig
                }
            }
            let updateReply = await executor.process(updateCollectionTx)
            //updated 
            assert(updateReply)
            let getNewCollectionTx = {
                type: "READ",
                command: "FIND_ONE_COLLECTION",
                params: {
                    name: collectionConfig.name
                }
            }
            let getNewReply = await executor.process(getNewCollectionTx)
            Object.keys(updateCollectionConfig).map((key) => {
                assert.equal(updateCollectionConfig[key],getNewReply[key])
            }) 
            let deleteCollectionTx = {
                type: "WRITE",
                command: "COLLECTION_DELETE",
                params: {
                    name: collectionConfig.name
                }
            }
            let deleteReply = await executor.process(deleteCollectionTx)
    })
})