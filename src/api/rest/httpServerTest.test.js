/**
 * @jest-environment node
 */

const request = require('supertest');
const { ProximaDBServer } = require("../../servers/newServer.js");
const {start, ProximaDBHttpServer} = require(".");
const Config = require("../../config")


function setup() {
    var options = {
        configPath: "../config.yaml",
        ip: "0.0.0.0",
        port: "80"
    }
    var config = Config.fromYamlFile(options.configPath);
    config.ip = options.ip;
    config.port = options.port;
    config.dbConfigPath = "./config.json"
    try {
      const httpServer = new ProximaDBHttpServer(config)
      httpServer.start()
      return httpServer
    } catch (err) {
      console.error(`Error creating the http server`, err.message);
    }
}

let server;
let app;

beforeAll(() => {
    server = setup()
    app = server.app
});

afterAll(async () => { 
   await server.stop()
})


// afterAll(done => {
//     app.close(done);
//   });


describe("Proxima DB server test, end-to-end documents", () => {

    it("should be able to connect to server from localhost", async () => {
        let resp = await request(app)
        .get('/')
        .set('Accept', 'application/json')

    });


    it("should be able to do put operations with database with json schema", async () => {
        const dbConfig = {
            _id: "Database_id_1",
            name: "Database",
            version: "0.0.0"
        }
        let resp = await request(app)
        .put('/')
        .send(dbConfig)
        .set('Accept', 'application/json')
    });
    
    it("should be able to do update operations with database with json schema", async () => {
        const dbConfig = {
            _id: "Database_id",
            name: "Database",
            owner: "",
            version: "0.0.1"
        }
        let resp = await request(app)
        .post('/')
        .send(dbConfig)
        .set('Accept', 'application/json')
    });

    describe("Collection CRUD", () => {

        it("should be able to create the collection with json schema", async () => {
            let newDocumentSchema = {
                properties: {
                   _id: {type: "string"},
                   key: {type: "string"}, 
                   val: {type: "string"}
            }
        }

        let collectionConfig = {
            _id: "collection_id",
            name: "collection",
            version: "0.0.0",
            type: "Document",
            schema: JSON.stringify(newDocumentSchema)
        }
            let collectionName = "collection"

            let resp = await request(app)
            .post('/collections')
            .send(collectionConfig)
            .set('Accept', 'application/json')
            expect(resp.body).toHaveProperty("updated", true)
            expect(resp.body).toHaveProperty("collection")
            expect(resp.body).toHaveProperty("name", collectionName)
        });

        it ("should be able to get the collection JSON schema", async () => {
            let collectionName = "collection"
            let resp = await request(app)
            .get("/collections/" + collectionName)
            .set("Accept", "application/json")
            expect(resp.body).toHaveProperty("collection")
            expect(resp.body).toHaveProperty("name", collectionName)
        });

        it("should be able to update the collection with JSON schema", async () => {
            let collectionName = "collection"
            let newDocumentSchema = {
                properties: {
                    _id: {type: "string"},
                   key: {type: "string"}, 
                   val: {type: "string"}
            }
        }

        let newCollectionConfig = {
            _id: "collection",
            name: "collection",
            version: "0.0.1",
            type: "Document",
            schema: JSON.stringify(newDocumentSchema)
        }
        let resp = await request(app)
            .put('/collections/' + collectionName)
            .send(newCollectionConfig)
            .set('Accept', 'application/json')
            //console.log(resp.body)
            expect(resp.body).toHaveProperty("updated", true)
        });


        it("Should be able to delete a collection", async () => {
            let collectionName = "collection"
            let newDocumentSchema = {
                properties: {
                    _id: {type: "string"},
                   key: {type: "string"}, 
                   val: {type: "string"}
            }
        }
            let resp = await request(app)
            .delete("/collections/" + collectionName)
            .set("Accept", "application/json")
            expect(resp.body).toHaveProperty("removed", true)

            let newCollectionConfig = {
                _id: "collection",
                name: "collection",
                version: "0.0.1",
                type: "Document",
                schema: JSON.stringify(newDocumentSchema)
            }
            resp = await request(app)
                .post('/collections')
                .send(newCollectionConfig)
                .set('Accept', 'application/json')
            expect(resp.body).toHaveProperty("updated", true)
            });

    })


    describe("CRUD for Documents",  () => {
        it("Should be able to create schema for documents", async () => {
            let collectionName = "collection"
            let newDocumentSchema = {
                properties: {
                    _id: {type: "string"},
                   key: {type: "string"}, 
                   val: {type: "string"}
            }
        }

        let newCollectionConfig = {
            _id: "collection",
            name: "collection",
            version: "0.0.2",
            type: "Document",
            schema: JSON.stringify(newDocumentSchema)
        }
        let resp = await request(app)
            .put('/collections/' + collectionName)
            .send(newCollectionConfig)
            .set('Accept', 'application/json')

            expect(resp.body).toHaveProperty("updated", true)
        });

        it("Should be able to insert a new document", async () => {
            let collectionName = "collection"
            let document1 = {
                _id: "Document 1",
                key: "Document 1",
                value: { _id: "ID", val: 100, position_size: 10000}
            }

            let resp = await request(app)
             .post('/collections/' + collectionName + "/documents")
             .send(document1)
             .set('Accept', 'application/json')
             expect(resp.body).toHaveProperty("value")
             expect(resp.body).toHaveProperty("proof")
             expect(resp.body).toHaveProperty("root")
             expect(typeof resp.body.value).toBe("object")
        })



        it("Should be able to query a documents", async () => {
            let collectionName = "collection"
            let query = [{name: "position_size", expression: ">", value: 0}]
            let queryData = {"query": query}
            let document1 = {
                _id: "Document1",
                key: "Document1",
                value: { "_id": "Document1","trader_acc": "Account 1",
                "program_proof": "Relayer Proof", "val": 100, "position_size": 10000}
            }

            let insertResp = await request(app)
             .post('/collections/' + collectionName + "/documents")
             .send(document1)
             .set('Accept', 'application/json')
            let resp = await request(app).post('/collections/' + collectionName + "/query").send(queryData).set('Accept', 'application/json')
            //console.log(resp.body)
            
            expect(resp.body).toHaveProperty("responses")
            expect(resp.body.responses).toHaveLength(1)

     
        })

    })
});