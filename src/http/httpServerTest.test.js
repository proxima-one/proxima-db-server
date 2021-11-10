/**
 * @jest-environment node
 */

const request = require('supertest');
const { ProximaDBServer } = require("../servers/newServer.js");
const {start, ProximaDBHttpServer} = require(".");
const Config = require("../config")


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
        });

        it ("should be able to get the collection JSON schema", async () => {
            let collectionName = "collection"
            let resp = await request(app)
            .get("/collections/" + collectionName)
            .set("Accept", "application/json")
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
        });

        // it("Should be able to delete a collection", function (done) {
        //     let collectionName = "collection"
        //     request(app)
        //     .delete("/collections/" + collectionName)
        //     .set("Accept", "application/json")
        //     .expect(200, done)
        // }); 

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
        });

        it("Should be able to insert a new document", async () => {
            let collectionName = "collection"
            let document1 = {
                key: "Document 1",
                value: { '_id': 'ID', 'values': 'hello'}
            }

            let resp = await request(app)
             .post('/collections/' + collectionName + "/documents")
             .send(document1)
             .set('Accept', 'application/json')
        })



        it("Should be able to query a documents", async () => {
            let collectionName = "collection"
            let query = [{name: "id", expression: "=", value: 1}]
            let queryData = {"query": query}

            let resp = await request(app).post('/collections/' + collectionName + "/query").send(queryData).set('Accept', 'application/json')
            console.log(resp.data)
        })

    })
});