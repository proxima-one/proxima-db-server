
/**
 * @jest-environment node
 */

//const { Database, Table } = require("proxima-db");
const {parseKey, parseValue, parseProof, parseRoot} = require("../helpers")
const swaggerFile = require('../docs-ui/swagger_output.json')
const {Database} = require("../backend/database/database")
const {Executor} = require("../backend/executor/executor")
const express = require('express');

const bodyParser = require('body-parser');

const router = express.Router();

const swaggerUi = require('swagger-ui-express');
const { error } = require("ajv/dist/vocabularies/applicator/dependencies");
const { program } = require("commander");




class ProximaDBHttpServer {
    constructor(args) {
      const app = express();
      const port = 80;
      this.port = 80
      this.app = app

      this.db = this.initDB();
      //console.log(this.db.toJSON())
      this.initServer(args);
    }
    start() {
        this.port = 80
        this.server = this.app.listen(this.port, () => {
            console.log(`Proxima db app is running\n`)
        });
        
        process.on('SIGINT', async () => { await this.stop();});
        process.on('SIGQUIT', async () => {await this.stop()});
        process.on('SIGTERM', async () => {await this.stop()});
    }

    async stop() {
        this.server.close(function () {       
            console.log("Closing database")
        });
        this.db.writeToJSON(this.dbConfigPath)
        await this.db.close()
        console.log("Database Closed")
    }
  
    initDB(configPath = "./config.json") {
      var db
      try {
        this.dbConfigPath = "./config.json"
        db = Database.readFromJSON(configPath)//new Database("Default", config);
      } catch(e) {
        let config = {_id: "Default", name: "Default", version: "0.0.0", internal_config: {}}
        db = new Database("Default", config)
      }
      //console.log(db.toJSON())
      return db
    }
  
    initServer(args = {}) {
      let ip = args["ip"] || "0.0.0.0";
      let port = args["port"] || "8080";
      this.port = port 
      this.ip = ip
      this.executor = new Executor(this.db)
      this.app.use(bodyParser.json({limit: '50mb',}));
      this.app.use(
        bodyParser.urlencoded({
            limit: '50mb',
          extended: true,
        })
      );

      this.initRoutes()
      this.swaggerDocs()
    }

swaggerDocs() {
    this.app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
}

initRoutes() {
/*
Routes 
*/

/*
Node
*/

this.app.get('/', async (req, res) => {
    res.json(this.db.toJSON());
})

this.app.post("/", (req, res) => {
    try {
        let body = req.body 
        this.db.updateConfig(body)
        res.json(this.db.toJSON())
    } catch (error) {
        res.json({error: error.message})
    }
})

this.app.put("/", (req, res) => {
    try {
        let body = req.body 
        this.db = new Database(body.name, body)
        res.json(body.name)
    } catch (error) {
        console.log(error)
        res.json("Error: ", error.message)
    }
})

/*
Collections
*/

this.app.get('/collections/:id', async (req, res) => {
    try {
        let rawTx = {
            type: "READ",
            command: "FIND_ONE_COLLECTION",
            params: {
                id: req.params.id,
                name: req.body.name,
                config: req.body
            }
        }
        let reply = await this.executor.process(rawTx)
        res.json(reply);
    } catch(err){
        res.json({error: err.message})
    }
});

this.app.put('/collections/:id', async (req, res) => {
    try {
        let rawTx = {
            type: "WRITE",
            command: "COLLECTION_UPDATE",
            params: {
                name: req.params.id,
                config: req.body
            }
        }
        let reply = await this.executor.process(rawTx)
        res.json(reply)
    } catch(err) {
        console.log(err.message)
        res.json({updated: false, error: err.message})
    }
});

this.app.post('/collections', async (req, res) => {
    try {
        let rawTx = {
            type: "WRITE",
            command: "COLLECTION_CREATE",
            params: {
                name: req.body.name,
                config: req.body
            }
        }
        let reply = await this.executor.process(rawTx)
       // let collection = await this.db.createCollection(reqBody.name, reqBody)
        res.json(reply)
    } catch(err) {
        console.log(err.message)
        res.json({"error" : err.message})
    }
})

this.app.delete('/collections/:id', async (req, res) => {
    try {
        await this.db.deleteCollection(req.params.id)
        res.json({"removed": true, "table name" :  req.params.id})
    } catch(err) {
        console.log("Error deleting collection: ", err.message)
        res.json({updated: false, error: err.message})
    }
})

//collection document 
this.app.get('/collections/:id/documents/:docId', async (req, res) => {
    try {
        let rawTx = {
            type: "READ",
            command: "FIND_ONE" ,
            params: {
                    collection: req.params.id,
                    type: "Document",
                    key: req.params.docId,
                    prove: req.params.prove
             }
        }
        let reply = await this.executor.process(rawTx)
        res.json(reply)
    } catch(err) {
        console.log("Error getting document: ", err.message)
        res.json({error: err.message})
    }
})

    this.app.delete('/collections/:id/documents/:docId', async (req, res) => {
        try {
            const table = await this.db.getCollection(req.params.id)
            let key = parseKey(req.params.docId.toString());
            let prove = req.params.prove || false;
            await table.transaction();
            await table.remove(key);
            await table.commit();
            let reply = {
              key: req.params.key,
              confirmation: true
            };
            res.json(reply)
        } catch(err) {
            console.log("Error deleting document: ", err.message)
            res.json({error: err.message})
        }
    })



    //insert 
    this.app.post('/collections/:id/documents', async (req, res) => {
        try {

            const table = await this.db.getCollection(req.params.id)
            let rawTx = {
                type: "WRITE",
                command: "INSERT",
                params: {
                    collection: req.params.id,
                    type: "Document",
                    key: req.body.key,
                    value: req.body.value,
                    prove: req.body.prove || false 
                }
            }

            let reply = await this.executor.process(rawTx)
            res.json(reply)
        } catch(err) {
            console.log("Error inserting document: ", err.message)
            res.json(err.message)
        }
    })




    this.app.post('/collections/:id/documents/bulkInsert', async (req, res) => {
        try {
            let rawTx = {
                command: "BULK_UPDATE",
                type: "WRITE",
                params: {
                    collection: req.params.id,
                    type: "Document",
                    txs: req.body.entries
                }
            }
            let reply = await this.executor.process(rawTx)
            res.json(reply)
        } catch(err) {
            console.log("Error inserting documents: ", err.message)
            res.json({error: err.message})
        }
    })

    //update 
    this.app.put('/collections/:id/documents/:docId', async (req, res) => {
        try {
            let rawTx = {
                type: "WRITE",
                command: "UPDATE",
                params: {
                    collection: req.params.id,
                    type: "Document",
                    key: req.params.docId,
                    value: req.body.value,
                    prove: req.body.prove
                }
            }
            let reply = await this.executor.process(rawTx)
            res.json(reply)
        } catch(err) {
            console.log("Error updating document: ", err.message)
            res.json({error: err.message})
        }
    });



    //query
    this.app.post('/collections/:id/query', async (req, res) => {
        try {
            let rawTx = {
                type: "READ", 
                command: "FIND", 
                params: {
                    collection: req.params.id,
                    type: "Document",
                    query: req.body.query,
                    limit: req.body.limit,
                    prove: req.body.prove
                }
            }
            let reply = await this.executor.process(rawTx)
            res.json(reply)
        } catch(err) {
            console.log("Error with document query: ", err.message)
            res.json({error: err.message})
        }
    })


    this.app.put('/collections/:id/streams/:streamId', async (req, res) => {
        try {
                let rawTx = {
                    type: "WRITE",
                    command: "UPDATE",
                    params: {
                        collection: req.params.id,
                        type: "Stream",
                        key: req.params.docId,
                        value: req.body.value,
                        prove: req.body.prove
                    }
                }
                let reply = await this.executor.process(rawTx)
                res.json(reply)
        } catch(err) {
            console.log("Error deleting document: ", err.message)
            res.json("Error: ", err.message)
        }
    });

    this.app.get('/collections/:id/streams/:messageId', async (req, res) => {
        try {
            let rawTx = {
                type: "READ",
                command: "FIND_ONE" ,
                params: {
                        collection: req.params.id,
                        type: "Stream",
                        key: req.params.messageId,
                        prove: req.params.prove
                 }
            }
            let reply = await this.executor.process(rawTx)
            res.json(reply)
        } catch(err) {
            console.log("Error deleting document: ", err.message)
            res.json("Error: ", err.message)
        }
    });

    this.app.post('/collections/:id/streams/:messageId', async (req, res) => {
        try {
            const table = await this.db.getCollection(req.params.id)
            let key = parseKey(req.params.key.toString());

            let prove = req.params.prove || false;
            let value = parseValue(req.params.value.toString());
            let response = await table.put(key, req.params.value, prove);
            let reply = {
                value: req.params.value,
                confirmation: true,
                root: parseRoot(response.root),
                proof: parseProof(response.proof)
            };
            res.json(reply)
        } catch(err) {
            console.log("Error deleting document: ", err.message)
            res.json("Error: ", err.message)
        }
    });


    this.app.put('/collections/:id/streams/:streamId', async (req, res) => {
        try {
            const table = await this.db.getCollection(req.params.id)
            let key = parseKey(req.params.key.toString());

            let prove = req.params.prove || false;
            let value = parseValue(req.params.value.toString());
            let response = await table.put(key, req.params.value, prove);
            let reply = {
                value: req.params.value,
                confirmation: true,
                root: parseRoot(response.root),
                proof: parseProof(response.proof)
            };
            res.json(reply)
        } catch(err) {
            console.log("Error updating document: ", err.message)
            res.json({error: err.message})
        }
    });

    this.app.get('/collections/:id/streams/:streamId/commits/:commitId', async (req, res) => {
        try {
            const table = await this.db.getCollection(req.params.id)
            let key = parseKey(req.params.key.toString());

            let prove = req.params.prove || false;
            let value = parseValue(req.params.value.toString());
            let response = await table.put(key, req.params.value, prove);
            let reply = {
                value: req.params.value,
                confirmation: true,
                root: parseRoot(response.root),
                proof: parseProof(response.proof)
            };
            res.json(reply)
        } catch(err) {
            console.log("Error: ", err.message)
            res.json("Error: ", err.message)
        }
    });

    this.app.post('/collections/:id/streams/:streamId/commits', async (req, res) => {
        try {
            const table = await this.db.getCollection(req.params.id)
            let key = parseKey(req.params.key.toString());

            let prove = req.params.prove || false;
            let value = parseValue(req.params.value.toString());
            let response = await table.put(key, req.params.value, prove);
            let reply = {
                value: req.params.value,
                confirmation: true,
                root: parseRoot(response.root),
                proof: parseProof(response.proof)
            };
            res.json(reply)
        } catch(err) {
            console.log("Error: ", err.message)
            res.json("Error: ", err.message)
        }
    });
}

}

module.exports = {ProximaDBHttpServer}

