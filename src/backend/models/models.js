const DocumentModelSchema = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    type: "object",
    $id: "document_schema",
    title: "Document",
    description: "A general format for required values of documents in collections",
    properties: {
        _id: {type: "string"},
    },
    additionalProperties: true,
    required: ["_id"]
}

const MessageModelSchema = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "message_schema",
    type: "object",
    title: "Message",
    description: "Generalized Model for stream messages",
    properties: {
        _id: {type: "string"},
        offset: {type: "number"}
    },
    additionalProperties: true,
    required: ["_id"]
}

const NoModelSchema = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "null_schema",
    type: "object",
    title: "No schema",
    description: "Generalized Model for no schema",
    properties: {
        _id: {type: "string"}
    },
    additionalProperties: true,
}



const CollectionModelSchema = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    type: "object",
    $id: "collection",
    title: "Collection",
    description: "The model for a database collection in Proxima DB",
    properties: {
        _id: {type: "string"},
        owner: {type: "string"},
        name: {type: "string"},
        type: {type: "string"}, 
        version: {type: "string"},
        schema: {oneOf: [
            {$ref: "document_schema"},
            {$ref : "message_schema"},
            {$ref: "null_schema"}, 
            {type: "string"}
        ]}
    },
    additionalProperties: true,
    required: ["_id", "version"]
}
const DEFAULT_COLLECTION_CONFIG = {}

const DatabaseModelSchema = {
    schema: "https://json-schema.org/draft/2020-12/schema",
    type: "object",
    //$id: "/",
    title: "Database",
    description: "This describes the model for each database, including collections, config, and id",
    properties: {
        _id: {type: "string"},
        name: {type: "string", default: "Default"},
        version: {type: "string", default: "0.0.0"},
        owner: {type: "string"},
        config: {type: "object", default: {}},
        collections: {type: "array", items: {$ref: "collection"}}
    },
    additionalProperties: true,
    definitions: {
        collection: CollectionModelSchema,
    },
    required: ["_id", "version"]
}

const DEFAULT_DB_CONFIG = {}


const TransactionModelSchema = {
    schema: "https://json-schema.org/draft/2020-12/schema",
    title: "Transaction",
    type: "object",
    description: "Generalized Model for transaction schema",
    properties: {
        type: {type: "string"},
        command: {type: "string"},
        params: { type: "object"},
    },
    additionalProperties: true,
    required: ["type", "command"]
}


module.exports = {NoModelSchema, TransactionModelSchema, MessageModelSchema, DocumentModelSchema, DatabaseModelSchema, DEFAULT_DB_CONFIG, DEFAULT_COLLECTION_CONFIG, CollectionModelSchema}