const grpc = require("grpc");
const { Database, Table } = require("proxima-db");
const protoLoader = require("@grpc/proto-loader");
const packageDefinition = protoLoader.loadSync("./src/proto/proxima.proto");
const proximaProto = grpc.loadPackageDefinition(packageDefinition);
const {
  parseProof,
  parseKey,
  parseValue,
  parseRoot
} = require("../helpers.js");

class ProximaDBServer {
  constructor(args) {
    this.server = new grpc.Server();
    this.db = this.initDB();
    this.initServer(args);
  }
  start() {
    this.server.start();
  }

  initDB(args = {}) {
    return new Database(args["hash"], args["bits"], args["db_path"]);
  }

  initServer(args = {}) {
    let ip = args["ip"] || "0.0.0.0";
    let port = args["port"] || "50051";
    this.server.bind(ip + ":" + port, grpc.ServerCredentials.createInsecure());
    this._initServices();
  }

  _initServices() {
    this.server.addService(proximaProto.ProximaService.service, {
      create: (call, callback) => {
        let request = call.request;
        this.db
          .create(request.name)
          .then(function(response) {
            let reply = {
              confirmation: true
            };
            callback(null, reply);
          })
          .catch(function(error) {
            let reply = {
              confirmation: false
            };
            callback(error, reply);
          });
      },
      open: (call, callback) => {
        let request = call.request;

        this.db
          .open(request.name)
          .then(function(response) {
            let reply = {
              confirmation: true
            };
            callback(null, reply);
          })
          .catch(function(error) {
            let reply = {
              confirmation: false
            };
            callback(error, reply);
          });
      },
      close: (call, callback) => {
        let request = call.request;
        this.db
          .close(request.name)
          .then(function(response) {
            let reply = {
              confirmation: true
            };
            callback(null, reply);
          })
          .catch(function(error) {
            let reply = {
              confirmation: false
            };
            callback(error, reply);
          });
      },
      put: async (call, callback) => {
        let request = call.request;
        console.log(request);
        // console.log(request.name);
        // console.log(request.key);
        //console.log("String request: ", request.value.toString());
        // console.log(this.db.tables);
        let name = request.name;
        let table = await this.db.get(name);
        let key = parseKey(request.key.toString());
        console.log(key)
        let value = parseValue(request.value.toString());
        let prove = request.prove || false;
        // console.log(request.name);
        // console.log("table");
        // console.log(table);
        //console.log("Request: ", value);
        let response = await table.put(key, request.value, prove);
        //console.log("Proof response: ", response)
        let reply = {
          root: parseRoot(response.root),
          proof: parseProof(response.proof)
        };
        //console.log("reply: ", reply);
        callback(null, reply);
      },
      tableRemove: async (call, callback) => {
        let request = call.request;
        let response = await this.db.remove(request.name);
        let reply = {
          confirmation: true
        };
        callback(null, reply);
      },
      get: async (call, callback) => {
        let request = call.request;
        console.log(request);
        
        let name = request.name;
        let key = parseKey(request.key.toString());
        //console.log(request.value.toString());
        console.log(key);
        let prove = request.prove || false;
        let table = await this.db.get(name);
        let response = await table.get(key, prove);
        //console.log("Proof response: ", response.proof);
        console.log(response);
        //console.log(response.value.toString())
        let reply = {
          value: response.value,
          root: parseRoot(response.root),
          proof: parseProof(response.proof)
          //parseProof(response.root),
        };
        callback(null, reply);
      },
      remove: async (call, callback) => {
        let request = call.request;
        let name = request.name;
        let key = parseKey(request.key);
        let prove = request.prove || false;
        let table = await this.db.get(request.name);
        await table.transaction();
        await table.remove(key);
        await table.commit();

        table
          .get(key, prove)
          .then(function(response) {
            let reply = {
              root: parseRoot(response.root),
              proof: parseProof(response.proof)
            };
            callback(null, reply);
          })
          .catch(function(error) {
            callback(error, null);
          });
      },
      batch: async (call, callback) => {
        let request = call.request;
        const entries = request.requests;
        let prove = request.prove;
        for (var entry of entries) {
          entry.prove = false;
        }

        let responses = await this.db.batch(entries);
        let replies = new Array();
        for (var response in responses) {
          replies.push({
            proof: parseProof(response.proof),
            root: parseRoot(response.root)
          });
        }
        callback(null, replies);
      },
      checkout: async (call, callback) => {
        let request = call.request;
        let table = await this.db.get(request.name);

        let response = await table.transaction();
        let reply = true;
        callback(null, reply);
      },
      commit: async (call, callback) => {
        let request = call.request;
        let table = await this.db.get(request.name);
        let response = await table.commit();
        let reply = true;
        callback(null, reply);
      },
      scan: async (call, callback) => {
        let request = call.request;
        let table = await this.db.get(request.name);
        let first = request.first;
        let last = request.last;
        let limit = request.limit;
        limit = 2;
        let direction = limit < 0;
        first = 0;
        last = 2;
        let prove = this.prove || false;
        //console.log(request);
        //range(start, finish, direction, offset = 0, limit = 100, prove = false)
        let responses = await table.range(first, last, direction, limit, prove);

        let replies = new Array();
        for (var response of responses) {
          //console.log(response.root.toString())
          replies.push({
            value: parseValue(response.value),
            proof: parseProot(response.proof),
            root: parseRoot(response.root)
          });
        }
        let queryReply = {
          responses: replies
        };
        console.log(queryReply);
        callback(null, queryReply);
      },
      compact: async (call, callback) => {
        let request = call.request;
        let table = await this.db.get(request.name);
        let response = await table.compact();
        let reply = true;
        callback(null, reply);
      },
      stat: async (call, callback) => {
        let request = call.request;
        let table = await this.db.get(request.name);
        let response = await table.stat();
        let reply = {
          stats: response.stats,
          proof: parseProof(response.proof),
          root: parseRoot(response.root)
        };
        callback(null, reply);
      },
      query: async (call, callback) => {
        let request = call.request;
        let table = await this.db.get(request.name);
        let query = request.query; //"[{\"expression\": \"<\",\"name\":\"numUsers\",\"value\":100}]"
        let queryJSON = JSON.parse(query);
        let prove = request.prove || false;
        let limit = request.limit || 100;
        let responses = await table.query(
          JSON.stringify(queryJSON),
          limit,
          prove
        );
        let replies = new Array();
        for (var response of responses) {
          let root = response.root || "";
          replies.push({
            value: parseValue(response.value),
            proof: parseProof(response.proof),
            root: parseRoot(response.root)
          });
        }
        let queryReply = {
          responses: replies
        };
        callback(null, queryReply);
      }
    });
  }
}

module.exports = { ProximaDBServer };
