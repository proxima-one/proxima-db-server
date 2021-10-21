const { supportsEsModules } = require("mocha/lib/utils")
const {TransactionModelValidator} = require("../models/validator.js")






const TransactionTypes = ["PUT", "UPDATE", "DELETE", "BULK_UPDATE"]

class TransactionValidator {
    transactionModelValidator = TransactionModelValidator

    constructor(lastTransaction = {}) {
        this.lastTransaction = lastTransaction
    }

    validate(transaction) {
        if (!this.transactionModelValidator.validate(transaction)) {
            return false
        }

        return false 
    }
}

module.exports = {TransactionValidator}