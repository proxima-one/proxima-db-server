
/**
 * @jest-environment node
 */

//const { Database, Table } = require("proxima-db");
const {Database} = require("../backend/db/database.js")
const express = require('express');

const bodyParser = require('body-parser');
const {parseKey, parseValue, parseProof, parseRoot} = require("../helpers")
const router = express.Router();

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../docs-ui/swagger_output.json')



class ProximaDBHttpServer {
    constructor(args) {
      const app = express();


      const port = 80;
      this.port = 80
      this.server = app
      this.db = this.initDB();
      this.initServer(args);
    }
    start() {
        this.port = 80
        this.server.listen(this.port, () => {
        console.log(`Proxima db app is listening at http://localhost:${this.port}`)
        });
    }
  
    initDB(args = {}) {
      return new Database("Default");
    }
  
    initServer(args = {}) {
      let ip = args["ip"] || "0.0.0.0";
      let port = args["port"] || "50051";
      this.port = port 
      this.ip = ip
      this.server.use(bodyParser.json({limit: '50mb',}));
      this.server.use(
        bodyParser.urlencoded({
            limit: '50mb',
          extended: true,
        })
      );

      this.initRoutes()
      this.swaggerDocs()
    }

swaggerDocs() {
    this.server.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
}

initRoutes() {
/*
Routes 
*/

/*
Node
*/

this.server.get('/', (req, res) => {
    res.json({message: "ok"});
})

this.server.post("/", (req, res) => {
    try {
        let body = req.body 
        this.db.updateConfig(body)
        res.json(this.db.toJSON())
    } catch (error) {
        console.log(error)
    }

})

this.server.put("/", (req, res) => {
    try {
        let body = req.body 
        this.db = new Database(body.name, body)
        res.json(body.name)
    } catch (error) {
        console.log(error)
    }
})

/*
Collections
*/

this.server.get('/collections/:id', (req, res) => {
    res.json({'message': 'ok'});
});

this.server.put('/collections/:id', async (req, res) => {
    try {
        let newCollectionResp = await this.db.updateCollectionConfig(req.params.id, req.body)
        let collection = await this.db.getCollection(req.params.id)
        res.json({updated: true, collection: req.body})
    } catch(err) {
        console.log("Error with getting the database stats: ", err.message)
        res.json({updated: false, error: err.message})
    }
});

this.server.post('/collections', async (req, res) => {
    try {
        let collection = await this.db.createCollection(req.params.id, req.body)
        res.json({"created": true, "table" :  req.params.id})
    } catch(err) {
        console.log("Error creating collection: ", err.message)
        res.json({"error" : err.message})
    }
})

this.server.delete('/collections/:id', async (req, res) => {
    try {
        await this.db.deleteCollection(req.params.id)
        res.json({"removed": true, "table name" :  req.params.id})
    } catch(err) {
        console.log("Error deleting collection: ", err.message)
        res.json({updated: false, error: err.message})
    }
})

// this.server.get('/collections/:id/stats', async (req, res) => {
//     try {
//         let table = await this.db.get(req.params.id);
//         let stats =await table.stat()
//         res.json({"table name" :  req.params.id, "table stats": stats})
//     } catch(err) {
//         console.log("Error getting collection: ", err.message)
//     }
// })

//collection document 
this.server.get('/collections/:id/documents/:docId', async (req, res) => {
    try {
        const table = await this.db.getCollection(req.params.id)
        let key = parseKey(req.params.docId.toString());
        let prove = req.params.prove || false;
        let response = await table.get(key, prove);
        let reply = {
          value: response.value,
          root: parseRoot(response.root),
          proof: parseProof(response.proof)
        };
        res.json(reply)
    } catch(err) {
        console.log("Error getting document: ", err.message)
    }
})

    this.server.delete('/collections/:id/documents/:docId', async (req, res) => {
        try {
            const table = await this.db.getCollection(req.params.id)
            let key = parseKey(req.params.docId.toString());
            let prove = req.params.prove || false;
            await table.transaction();
            await table.remove(key);
            await table.commit();
            let reply = {
              key: req.key,
              confirmation: true
            };
            res.json(reply)
        } catch(err) {
            console.log("Error deleting document: ", err.message)
        }
    })



    //insert 
    this.server.post('/collections/:id/documents', async (req, res) => {
        try {
            const table = await this.db.getCollection(req.params.id)
            //check if 
            let reqBody = req.body //JSON.parse(req.body)s
             let key = parseKey(reqBody.key.toString());
             let value = parseValue(reqBody.value.toString())
            let prove = reqBody.prove || false;
            let response = await table.put(key, value, prove);
            let reply = {
                value: value,
                confirmation: true,
                root: parseRoot(response.root),
                proof: parseProof(response.proof)
            };
            res.json(reply)
        } catch(err) {
            console.log("Error inserting documents: ", err.message)
        }
    })




    this.server.post('/collections/:id/documents/bulkInsert', async (req, res) => {
        try {
            const table = await this.db.getCollection(req.params.id)
            //check if 
            let reqBody = req.body //JSON.parse(req.body)s
            const entries = reqBody.entries;
            let replies = new Array();
            let tx = await table.transaction();
            for (var entry of entries) {
                entry.value = parseValue(entry.value.toString());
                entry.key = parseKey(entry.key.toString())
                entry.prove = entry.prove || false;
                let response = await table.put(entry.key, entry.value, entry.prove);
                console.log(response)
              replies.push({
                key: entry.key,
                confirmation: true,
                // proof: parseProof(response.data.proof),
                // root: parseRoot(response.data.root)
              });
            }
            let resp = await table.commit();
            // let key = ;
            // let prove = reqBody.prove || false;
            // let 
            // let response = await table.put(key, value, prove);
            // let reply = {
            //     value: value,
            //     confirmation: true,
            //     root: parseRoot(response.root),
            //     proof: parseProof(response.proof)
            // };
            console.log(replies)
            res.json(replies)
        } catch(err) {
            console.log("Error inserting documents: ", err.message)
        }
    })

    //update 
    this.server.put('/collections/:id/documents/:docId', async (req, res) => {
        try {
            const table = await this.db.getCollection(req.params.id)
            let key = parseKey(req.params.docId.toString());
            let prove = req.params.prove || false;
            console.log(value)
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
        }
    });



    //query
    this.server.post('/collections/:id/query', async (req, res) => {
        try {
            const table = await this.db.getCollection(req.params.id)
            let key = parseKey(req.params.key.toString());
            let query = req.params.query; //"[{\"expression\": \"<\",\"name\":\"numUsers\",\"value\":100}]"
            let queryJSON = JSON.parse(query);
            let prove = req.params.prove || false;
            let limit = req.params.limit || 100;
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
            res.json(queryReply)
        } catch(err) {
            console.log("Error with document query: ", err.message)
        }
    })


    this.server.put('/collections/:id/streams/:streamId', async (req, res) => {
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
        }
    });

    this.server.get('/collections/:id/streams/:streamId', async (req, res) => {
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
        }
    });

    this.server.post('/collections/:id/streams/:streamId', async (req, res) => {
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
        }
    });


    this.server.put('/collections/:id/streams/:streamId', async (req, res) => {
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
        }
    });

    this.server.get('/collections/:id/streams/:streamId/commits/:commitId', async (req, res) => {
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
        }
    });

    this.server.post('/collections/:id/streams/:streamId/commits', async (req, res) => {
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
        }
    });

    //controllers

    this.server.post('/controllers/:controllerId', async (req, res) => {
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
        }
    });


    this.server.get('/controllers/:controllerId', async (req, res) => {
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
        }
    });

    this.server.delete('/controllers/:controllerId', async (req, res) => {
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
        }
    });

    this.server.put('/controllers/:controllerId', async (req, res) => {
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
        }
    });

    this.server.get('/controllers', async (req, res) => {
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
        }
    });
}

}

module.exports = {ProximaDBHttpServer}

