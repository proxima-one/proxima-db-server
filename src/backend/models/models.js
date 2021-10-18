const DatabaseModelSchema = {
    properties: {
        name: {type: "string"},
        version: {type: "string"}
    }
}

const DEFAULT_DB_CONFIG = {}



const CollectionModelSchema = {
    properties: {
        name: {type: "string"},
        type: {type: "string"}, 
        version: {type: "string"},
        schema: {type: "string"} 
    }
}

const DEFAULT_COLLECTION_CONFIG = {}

const DocumentModelSchema = {
    properties: {
        name: {type: "string"}
    }
}

const MessageModelSchema = {
    properties: {
        name: {type: "string"}
    }
}

const TransactionModelSchema = {
    properties: {
        command: {type: "string"},
        params: { type: "object"},
    }
}


module.exports = {TransactionModelSchema, MessageModelSchema, DocumentModelSchema, DatabaseModelSchema, DEFAULT_DB_CONFIG, DEFAULT_COLLECTION_CONFIG, CollectionModelSchema}