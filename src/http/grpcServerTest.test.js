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
    try {
      const httpServer = new ProximaDBHttpServer(config)
      httpServer.start()
      return httpServer.server
    } catch (err) {
      console.error(`Error creating the http server`, err.message);
    }
}

var app;

beforeAll(() => {
    app = setup()
});


describe("Proxima DB server test, end-to-end documents", () => {

    it("should be able to connect to server from localhost", function (done) {
        request(app)
        .get('/')
        .set('Accept', 'application/json')
        .expect(200, done);

    });

    it("should be able to do get operations with database with json schema", function (done) {
        request(app)
        .get('/')
        .set('Accept', 'application/json')
        .expect(200, done);
    });


    it("should be able to do put operations with database with json schema", function (done) {
        const dbConfig = {
            name: "Database",
            version: "0.0.0"
        }
        request(app)
        .put('/')
        .send(dbConfig)
        .set('Accept', 'application/json')
        .expect(200, done);
    });
    
    it("should be able to do update operations with database with json schema", function (done) {
        const dbConfig = {
            name: "Database",
            version: "0.0.0"
        }
        request(app)
        .post('/')
        .send(dbConfig)
        .set('Accept', 'application/json')
        .expect(200, done);
    });

    describe("Collection CRUD", () => {

        it("should be able to create the collection with json schema", function (done) {
            let newDocumentSchema = {
                properties: {
                   key: {type: "string"}, 
                   val: {type: "string"}
            }
        }

        let collectionConfig = {
            name: "collection",
            version: "0.0.0",
            type: "Document",
            schema: JSON.stringify(newDocumentSchema)
        }
            let collectionName = "collection"

            request(app)
            .post('/collections')
            .send(collectionConfig)
            .set('Accept', 'application/json')
            .expect(200, done);
        });

        it ("should be able to get the collection JSON schema", function (done) {
            let collectionName = "collection"
            request(app)
            .get("/collections/" + collectionName)
            .set("Accept", "application/json")
            .expect(200, done)
        });

        it("should be able to update the collection with JSON schema", function (done) {
            let collectionName = "collection"
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
            request(app)
            .put('/collections/' + collectionName)
            .send(newCollectionConfig)
            .set('Accept', 'application/json')
            .expect(200, done);
        });

        it("Should be able to delete a collection", function (done) {
            let collectionName = "collection"
            request(app)
            .delete("/collections/" + collectionName)
            .set("Accept", "application/json")
            .expect(200, done)
        }); 

    })


    describe("CRUD for Documents", function (done) {
        it("Should be able to create schema for documents", function (done) {
            let collectionName = "collection"
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
            request(app)
            .put('/collections/' + collectionName)
            .send(newCollectionConfig)
            .set('Accept', 'application/json')
            .expect(200, done);
        });

        it("Should be able to insert a new document", function (done) {
            let collectionName = "collection"
            let document1 = {
                key: "Document 1",
                value: JSON.stringify({"values": "hello"})
            }

            request(app)
             .post('/collections/' + collectionName + "/documents")
             .send(document1)
             .set('Accept', 'application/json')
             .expect(200, done)
        })

    })
});