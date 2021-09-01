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
    //metadata
        //what its running on
    //stats 
    //collections
        //CRUD 
        //stats
    //collection
        //requests
        //operations 
        //snapshots
    
    //request
    //operation

    //auth
}

swaggerAutogen(outputFile, endpointsFiles, doc)