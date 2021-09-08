const swaggerAutogen = require('swagger-autogen')()

const outputFile = './src/docs-ui/swagger_output.json'
const endpointsFiles = ['./src/http/index.js']


const doc = {
    info: {
        version: "1.0.0",
        title: "Proxima DB API",
        description: "Documentation for the http/https server for Proxima Database"
    },
    host: "localhost:80",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    definitions: {
        Collection: {
          id: "Collection-1-id",
          state: {
            version: "0.0.0",
            name: "Test Collection",
            controllers: ["Public Key"],
            latest_commit: "Commit id",
            schema: [],
            offset: 0
          }
        },
        AddCollection: {
          id: "Collection-1-id",
          meta: {
              schema: "schema-id",
              controllers: ["Public Key"],
              version: "0.0.0",
          }
        },
        Document: {
          id: "Document 1 id",
          value: "Document Value"
        },
        AddDocument: {
          key: "Document 1 id",
          value: "Value"
        },
        Stream: {
          id: "Stream-ud", 
          state: {
              version: "0.0.0",
              controllers: ["Public Key"],
              latest_commit: "Commit id",
              schema: "schema-id",
              offset: 0
          }
        },
        Commit: {
          id: "Commit-id",
          state: {
              type: "Genesis",
              version: "0.0.0",
              stream_id: "stream-id",
              commit_link: [],
              data: [],
              commit_prev: [],
              signature: {}
          }
        },
        AddCommit: {
            id: "Commit-id",
            state: {
                type: "Genesis",
                version: "0.0.0",
                stream_id: "stream-id",
                schema: "schema-id",
                commit_link: [],
                data: [],
                commit_prev: [],
                signature: {}
            }
          },
          Schema: {
            $schema: "https://json-schema.org/draft/2020-12/schema",
            title: "Schema",
            description: "A schema object",
            type: "object",
            properties: {},
            required: [],
            tags: []
          },
          DID: {
            id: "did:example:123456789abcdefghi",
            authentication: [{
                id:  "did:example:123456789abcdefghi#keys-1",
                type: "Ed25519VerificationKey2020",
                controller: "did:example:123456789abcdefghi",
                publicKeyMultibase: "zH3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
            }]
            //https://www.w3.org/TR/did-core/#dfn-did-methods
          }

    }    
    //request
    //operation

    //auth
}

swaggerAutogen(outputFile, endpointsFiles, doc)