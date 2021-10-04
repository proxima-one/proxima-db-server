

const Ajv = require("ajv/dist/jtd")
const {DatabaseModelSchema, DocumentModelSchema, CollectionModelSchema, MessageModelSchema} = require("./models")

const SchemaValidator = Ajv

class ModelValidator {
    constructor(schema) {
        this.schema = schema 
        this.ajv = new Ajv()
    }

    validate(obj) {
        return this.ajv.validate(this.schema, obj)
    }
}


const DocumentValidator = new ModelValidator(DocumentModelSchema)
const MessageValidator = new ModelValidator(MessageModelSchema)
const CollectionValidator = new ModelValidator(CollectionModelSchema)
const DatabaseValidator = new ModelValidator(DatabaseModelSchema)

const RequestValidator = new ModelValidator()


module.exports = {DatabaseValidator, SchemaValidator, ModelValidator, DocumentValidator, MessageValidator, CollectionValidator}