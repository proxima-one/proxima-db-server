
const { Database, Table } = require("proxima-db");
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
      return new Database(args["hash"], args["bits"], args["db_path"]);
    }
  
    initServer(args = {}) {
      let ip = args["ip"] || "0.0.0.0";
      let port = args["port"] || "50051";
      this.port = port 
      this.ip = ip
      this.server.use(bodyParser.json());
      this.server.use(
        bodyParser.urlencoded({
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

    res.json({'message': 'ok'});
})

this.server.get('/stats', (req, res) => {

    res.json({'message': 'ok'});
})

this.server.get('/health', (req, res) => {

    res.json({'message': 'ok'});
});

/*
Collections
*/

this.server.get('/collections', (req, res) => {
  res.json({'message': 'ok'});
})

this.server.get('collections/stats', async (req, res) => {
    try {
    res.json({"tables": this.db.tables})
    } catch(err) {
        console.log("Error with getting the database stats: ", err.message)
    }
});

this.server.put('/collections/:id', async (req, res) => {
    try {
    res.json({"tables": this.db.tables})
    } catch(err) {
        console.log("Error with getting the database stats: ", err.message)
    }
});

this.server.post('/collections', async (req, res) => {
    try {
        await this.db.create(req.params.id)
        res.json({"created": true, "table" :  req.params.id})
    } catch(err) {
        console.log("Error creating collection: ", err.message)
    }
} )

this.server.get('/collections/:id/stats', async (req, res) => {
    try {
        let table = await this.db.get(req.params.id);
        let stats =await table.stat()
        res.json({"table name" :  req.params.id, "table stats": stats})
    } catch(err) {
        console.log("Error getting collection: ", err.message)
    }
})

this.server.delete('/collections/:id', async (req, res) => {
    try {
        await this.db.remove(req.params.id)
        res.json({"removed": true, "table name" :  req.params.id})
    } catch(err) {
        console.log("Error deleting collection: ", err.message)
    }
})

//collection document 
this.server.get('/collections/:id/documents/:docId', async (req, res) => {
    try {
        const table = await this.db.get(req.params.id)
        let key = parseKey(req.params.key.toString());
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
            const table = await this.db.get(req.params.id)
            let key = parseKey(req.params.key.toString());
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
            const table = await this.db.get(req.params.id)
            let reqBody = req.body //JSON.parse(req.body)
            let key = parseKey(reqBody.key.toString());
            let prove = reqBody.prove || false;
            let value = parseValue(reqBody.value.toString());
            let response = await table.put(key, value, prove);
            let reply = {
                value: value,
                confirmation: true,
                root: parseRoot(response.root),
                proof: parseProof(response.proof)
            };
            res.json(reply)
        } catch(err) {
            console.log("Error inserting document: ", err.message)
        }
    })

    //update 
    this.server.put('/collections/:id/documents/:docId', async (req, res) => {
        try {
            const table = await this.db.get(req.params.id)
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



    //query
    this.server.post('/collections/:id/query', async (req, res) => {
        try {
            const table = await this.db.get(req.params.id)
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
            const table = await this.db.get(req.params.id)
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
            const table = await this.db.get(req.params.id)
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
            const table = await this.db.get(req.params.id)
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
            const table = await this.db.get(req.params.id)
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

    this.server.get('/collections/:id/streams/:streamId/commits/:commitId', async (req, res) => {
        try {
            const table = await this.db.get(req.params.id)
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
            const table = await this.db.get(req.params.id)
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
            const table = await this.db.get(req.params.id)
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
            const table = await this.db.get(req.params.id)
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
            const table = await this.db.get(req.params.id)
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
            const table = await this.db.get(req.params.id)
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
            const table = await this.db.get(req.params.id)
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







//collection/snapshot
    //meta 
    //new 
    //remove 
    //query

//collection/operations/
}

}

module.exports = {ProximaDBHttpServer}

