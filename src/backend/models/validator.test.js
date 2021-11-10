/**
 * @jest-environment node
 */

const {SchemaValidator} = require("./validator.js") 
const assert = require("bsert")

describe("Model Schema Initialization and Validation", () => {

    it("should be able to create and validate a model from a single json-schema", () => {
          const testSchema = {
            type: "object",
            description: "Test schema for validation",
            properties: {
              foo: {type: "number"},
              bar: {type: "string"}
            },
            required: ["foo"]
          }
        
        const testSchemaGoodValue = {foo: 1, bar: "abc"}
        const testSchemaBadJSONValue = {}
        let schemaValidator = new SchemaValidator()
        assert(schemaValidator.validate(testSchema, testSchemaGoodValue))
        assert(schemaValidator.validate(testSchema, testSchemaBadJSONValue) == false) 
    });

    it("should be able to validate schema with multiple objects within it", () => {
        const testMultiObjectSchema = {

        }
        const testMultiObjectSchemaBad = {}
        const testMultiObjectSchemaGood = {}
        let schemaValidator = new SchemaValidator()
        //assert(schemaValidator.validate(testMultiObjectSchema, testMultiObjectSchemaGood))
       // assert(schemaValidator.validate(testMultiObjectSchema, testMultiObjectSchemaBad) == false)
    });
  });