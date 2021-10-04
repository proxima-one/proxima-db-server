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
        version: {type: "string"}
    }
}


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

module.exports = {MessageModelSchema, DocumentModelSchema, DatabaseModelSchema, DEFAULT_DB_CONFIG, CollectionModelSchema}