const grpc = require("grpc");
const { Database, Table } = require("proxima-db");
const protoLoader = require("@grpc/proto-loader");
const packageDefinition = protoLoader.loadSync("./src/proto/proxima.proto");
const proximaProto = grpc.loadPackageDefinition(packageDefinition);
const { parseProof } = require("./helpers.js");

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
    ip = args["ip"] || "0.0.0.0";
    port = args["port"] || "50051";
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
        //console.log(request)
        //console.log(this.db.tables)
        let table = await this.db.get(request.name);
        //console.log(request.name)
        //console.log("table")
        //console.log(table)
        //console.log("Request: ", request.value.toString())
        let response = await table.put(
          request.key,
          request.value,
          request.prove
        );
        //console.log("Proof response: ", response)
        //console.log(response.root.length)
        // console.log(response)
        let reply = {
          root: response.root,
          proof: parseProof(response.proof)
          //parseProof(response.root)
        };
        //console.log("reply: ", reply)
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
        let table = await this.db.get(request.name);
        let response = await table.get(request.key, request.prove);
        //console.log("Proof response: ", response.root)
        //console.log(response)
        let reply = {
          value: response.value,
          root: response.root,
          proof: parseProof(response.proof)
          //parseProof(response.root),
        };
        callback(null, reply);
      },
      remove: async (call, callback) => {
        let request = call.request;
        let table = await this.db.get(request.name);
        table
          .remove(request.key, request.prove)
          .then(function(response) {
            let reply = {
              root: response.root,
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
            root: response.root
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
        let direction = limit < 0;
        let prove = this.prove || false;
        //range(start, finish, direction, offset = 0, limit = 100, prove = false)
        let responses = await table.range(first, last, direction, limit, prove);
        let replies = new Array();
        for (var response of responses) {
          //console.log(response.root.toString())
          let proof = parseProof(response.proof) || "";
          let root = response.root || "";
          replies.push({
            value: response.value,
            proof: proof,
            root: root
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
          root: response.root
        };
        callback(null, reply);
      },
      query: async (call, callback) => {
        let request = call.request;
        let table = await this.db.get(request.name);
        //console.log(request.query)
        let query = request.query; //"[{\"expression\": \"<\",\"name\":\"numUsers\",\"value\":100}]"
        let queryJSON = JSON.parse(query);
        let prove = request.prove || false;
        let limit = request.limit || 100;
        let responses = await table.query(
          JSON.stringify(queryJSON),
          limit,
          prove
        );

        //console.log(responses)
        let replies = new Array();
        for (var response of responses) {
          //  console.log("response value: ", response.value.toString())
          //åconsole.log(response.root)
          //let proof = parseProof(response.parseProof) || "";
          let proof = parseProof(response.proof) || "";
          let root = response.root || "";
          let replies = replies.push({
            value: response.value,
            proof: proof, //parseProof(response.proof),
            root: root //response.root,
          });
        }
        let queryReply = {
          responses: replies
        };
        console.log("Reply: ", queryReply);
        callback(null, queryReply);
      }
    });
  }
}

module.exports = { ProximaDBServer };
