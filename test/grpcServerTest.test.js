const request = require('supertest');
const { ProximaDBServer } = require("../src/servers/newServer.js");
const {start, ProximaDBHttpServer} = require("../src/http");
const Config = require("../src/config")


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

    // it("should be able to do collection operations with json schema", async () => {
    //     throw new Error("Not Implemented")
    //     //      .send({name: 'john'})
    // });

    // it("should be able to get document proofs for updates and requests", async () => {
    //     throw new Error("Not Implemented")
    // });
});