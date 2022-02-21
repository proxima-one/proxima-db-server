//Collections services

function getCollection(req) {
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
  res.status(200).json(reply);
} catch(err){
  /* #swagger.responses[200] = { 
     description: "Collection retrieval issue." } */
  res.status(500).json({exists: false, name: req.params.id, collection: null, error: err.message})
}
};

function updateCollection(req) {
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
}

function createCollection(req) {
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
}


function deleteCollection(req) {
try {
  let resp = await this.db.deleteCollection(req.params.id)
  res.status(200).json({removed: true, collection: req.params.id})
} catch(err) {
  console.log("Error deleting collection: ", err.message)
  res.status(500).json({removed: false, collection: req.params.id, error: err.message})
}
}
