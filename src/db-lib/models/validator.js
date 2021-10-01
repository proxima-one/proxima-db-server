

const Ajv = require("ajv/dist/jtd")

const SchemaValidator = Ajv

const DatabaseSchemaModel = {
    $schema: "",

}


const DocumentSchemaModel = {
    $schema: "",
    
    properties: {
        name: {type: "string"}
    }
}

const MessageSchemaModel = {
    $schema: "",
    properties: {
        name: {type: "string"}
    }
}


const DocumentValidator = new ModelValidator()
const MessageValidator = new ModelValidator()

const CollectionValidator = new ModelValidator()
const DatabaseValidator = new ModelValidator()

const RequestValidator = new ModelValidator()


module.exports = {SchemaValidator}