

const Ajv = require("ajv/dist/2020")
const {DatabaseModelSchema, NoModelSchema, DocumentModelSchema, TransactionModelSchema, CollectionModelSchema, MessageModelSchema} = require("./models")

const SchemaValidator = Ajv

class ModelValidator {
    constructor(schema, schemas = []) {
        this.schema = schema 
        this.ajv = new Ajv({meta: true, strict: false, strictSchema: false, allErrors: true})
        for (var model of schemas) {
            this.ajv.addSchema(model)
        }
    }

    validate(obj) {
        return this.ajv.validate(this.schema, obj)
    }
}


const DocumentValidator = new ModelValidator(DocumentModelSchema)
const MessageValidator = new ModelValidator(MessageModelSchema)
const CollectionValidator = new ModelValidator(CollectionModelSchema, [NoModelSchema, DocumentModelSchema, MessageModelSchema])
const DatabaseValidator = new ModelValidator(DatabaseModelSchema, [CollectionModelSchema, DocumentModelSchema, MessageModelSchema, NoModelSchema])
const TransactionModelValidator = new ModelValidator(TransactionModelSchema)

const RequestValidator = new ModelValidator()


module.exports = {TransactionModelValidator, DatabaseValidator, SchemaValidator, ModelValidator, DocumentValidator, MessageValidator, CollectionValidator}