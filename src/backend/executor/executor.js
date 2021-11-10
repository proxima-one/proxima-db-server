const {parseKey, parseValue, parseProof, parseRoot} = require("../../helpers")

class Executor {
    constructor(db) {
        this.db = db
    }

    _validate(tx) {
        return true 
    }

    parseRawTx(rawTx) {
        //ensure json 
        //ensure params 
        let tx = rawTx
        Object.keys(rawTx.params).map((name) => {
            tx.params[name] = this._parseTxParam(name, rawTx.params[name])
         })
        return tx
    }

    _parseTxParam(name, value, txType = "Document") {
        var returnValue;
        switch(name) {
            case "key": 
                returnValue = parseKey(value.toString())
                break
            case "value":
                returnValue = parseValue(JSON.stringify(value))
                break
            case "limit": 
                returnValue = value || 100 
                break
            case "prove":
                returnValue = value || false 
                break
            case "query": 
                returnValue = value
                break 
            case "collection":
                returnValue =  value
                break
            default: 
                returnValue =  value
                break
        }
        return returnValue
    }

    async process(rawTx) {
        let tx = this.parseRawTx(rawTx)
        var response;
        var rawResponse;
        switch (tx.type) {
            case "READ":
                rawResponse = await this._query(tx)
                break;
            case "WRITE":
                rawResponse = await this._update(tx)
                break;
            default:
                throw new Error("Not implemented: ", tx.type)
        
        }
        response = this.parseRawResponse(rawResponse)
        return response 
    }

    async _update(tx) {
        var reply;
        if (tx.params.collection) {
            const table = await this.db.getCollection(tx.params.collection)
            reply = await table.update(tx)
        } else {
            reply = await this.db.update(tx)
        }
        return reply
    }

    async _query(tx) {
        var reply;
        if (tx.params.collection) {
            const table = await this.db.getCollection(tx.params.collection)
            reply = await table.query(tx)
        } else {
            reply = await this.db.queryCollection(tx)
        }
        return reply
    }

    parseRawResponse(rawResponse) {
        let response = rawResponse
        Object.keys(rawResponse).map((name) => {
            response[name] = this._parseResponseParam(name, rawResponse[name])
         })
        return response
    }

    _parseResponseParam(name, value, collectionType= "Document") {
        var returnValue;
        switch(name) {
            case "key":
                returnValue = value.toString()
                break;
            case "root":
                returnValue = parseRoot(value)
                break
            case "value":
                returnValue = value.toString()
                break
            case "query":
                returnValue = value
                break
            case "error":
                returnValue = value
                break
            default:
                returnValue = value
        }
        return returnValue
    }



    // execute(tx) {
    //     //collection 

    //     //read request

    //     //write request
    // }

    // journal(tx) {
    //     //collection 
    //     //journal
    // }

    // update(tx) {
    //     this.db.update(tx)
    // }

    // query(request) {
    //     this.db.query(tx)
    // }
}

module.exports = {Executor}