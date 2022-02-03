
/**
 * @jest-environment node
 */

//const { Database, Table } = require("proxima-db");
const {parseKey, parseValue, parseProof, parseRoot} = require("../../helpers")
const swaggerFile = require('../swagger/swagger_output.json')
const {Database} = require("../../backend/database/database")
const {Executor} = require("../../backend/executor/executor")
const express = require('express');
const path = require("path")

const bodyParser = require('body-parser');

const router = express.Router();

const swaggerUi = require('swagger-ui-express');
const { error } = require("ajv/dist/vocabularies/applicator/dependencies");
const { program } = require("commander");
var cors = require('cors');

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
        this.server.close();
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
      this.app.use(cors());

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
this.app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, "../../ui/index.html"))
})


this.app.get('/', async (req, res) => {
/* #swagger.responses[200] = { 
    schema: { "$ref": "#/definitions/Database" },
    description: "Database Node information." } */
    res.json(this.db.toJSON());
    
})

this.app.post("/", (req, res) => {
    try {
    /* #swagger.responses[200] = { 
        schema: { "$ref": "#/definitions/Database" },
        description: "Database updated successfully." } */
        let body = req.body 
        this.db.updateConfig(body)
        res.status(200).json(this.db.toJSON())
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

this.app.put("/", (req, res) => {
    try {
        let body = req.body 
        this.db = new Database(body.name, body)
        res.status(200).json(body.name)
    } catch (error) {
        console.log(error)
        res.status(500).json("Error: ", error.message)
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
        let getReply = await this.executor.process(rawTx)
        let reply = {exists: (getReply != null), collection: getReply}
        /* #swagger.responses[200] = { 
           schema: { "$ref": "#/definitions/Collection" },
           description: "Collection retrieved successfully." } */
        res.status(200).json(reply);
    } catch(err){
        /* #swagger.responses[200] = { 
           description: "Collection retrieval issue." } */
        res.status(500).json({exists: false, name: req.params.id, collection: null, error: err.message})
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
        res.status(200).json(reply)
    } catch(err) {
        console.log(err.message)
        res.status(500).json({updated: false, name: req.params.id, error: err.message})
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
        res.status(200).json({updated: true, name: req.body.name, collection: req.body})
    } catch(err) {
        console.log("Error getting document: ", err.message)
        res.json({updated: false, name: req.body.name, error : err.message})
    }
})

this.app.delete('/collections/:id', async (req, res) => {
    try {
        let resp = await this.db.deleteCollection(req.params.id)
        res.status(200).json({removed: true, collection: req.params.id})
    } catch(err) {
        console.log("Error deleting collection: ", err.message)
        res.status(500).json({removed: false, collection: req.params.id, error: err.message})
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
        res.status(200).json(reply)
    } catch(err) {
        console.log("Error getting document: ", err.message)
        res.status(500).json({error: err.message})
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
            res.status(200).json(reply)
        } catch(err) {
            console.log("Error deleting document: ", err.message)
            res.status(500).json({error: err.message})
        }
    })



    //insert 
    this.app.post('/collections/:id/documents', async (req, res) => {
        try {
            let rawTx = {
                type: "WRITE",
                command: "INSERT",
                params: {
                    collection: req.params.id,
                    type: "Document",
                    key: req.body.key,
                    value: req.body.value,
                    prove: req.body.prove
                }
            }

            let reply = await this.executor.process(rawTx)
            res.status(200).json(reply)
        } catch(err) {
            console.log("Error inserting document: ", err.message)
            res.status(500).json({Error: err.message})
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
            res.status(200).json(reply)
        } catch(err) {
            console.log("Error inserting documents: ", err.message)
            res.status(500).json({error: err.message})
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
            res.status(200).json(reply)
        } catch(err) {
            console.log("Error updating document: ", err.message)
            res.status(500).json({error: err.message})
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
            res.status(200).json(reply)
        } catch(err) {
            console.log("Error with document query: ", err.message)
            res.status(500).json({error: err.message})
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
                res.status(200).json(reply)
        } catch(err) {
            console.log("Error deleting document: ", err.message)
            res.status(500).json("Error: ", err.message)
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
            res.status(200).json(reply)
        } catch(err) {
            console.log("Error deleting document: ", err.message)
            res.status(500).json("Error: ", err.message)
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
            res.status(200).json(reply)
        } catch(err) {
            console.log("Error deleting document: ", err.message)
            res.status(500).json("Error: ", err.message)
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
            res.status(200).json(reply)
        } catch(err) {
            console.log("Error updating document: ", err.message)
            res.status(500).json({error: err.message})
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
            res.status(200).json(reply)
        } catch(err) {
            console.log("Error: ", err.message)
            res.status(500).json("Error: ", err.message)
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
            res.status(200).json(reply)
        } catch(err) {
            console.log("Error: ", err.message)
            res.status(500).json("Error: ", err.message)
        }
    });
}

}

module.exports = {ProximaDBHttpServer}

