/**
 * @jest-environment node
 */

const {TransactionValidator} = require("./transactions")

describe("Transaction validator", () => {

    it("should be able to validate transactions for document-based collections", () => {

        let validator = new TransactionValidator()
        // validator.validate(updateDocTransactionGood)
        // validator.validate(updateDocTransactionBad) 

        // validator.validate(insertDocTransactionGood)
        // validator.validate(insertDocTransactionBad)

        // validator.validate(deleteDocTransactionGood)
        // validator.validate(deleteDocTransactionBad)

        // validator.validate(bulkDocTransactionGood)
        // validator.validate(bulkDocTransactionBad)

    });

    it("should be able to validate transactions for message-based collections", () => {
        let validator = new TransactionValidator()

//         validator.validate(updateMessagecTransactionGood)
//         validator.validate(updateMessageTransactionBad) 

//         validator.validate(insertMessageTransactionGood)
//         validator.validate(insertMessageTransactionBad)

//         //Streams are immutable and are not allowed to have deletes/removals of elements
//         validator.validate(deleteDocTransaction)

//         validator.validate(bulkMessageTransactionGood)
//         validator.validate(bulkMessageTransactionBad)
    })


})