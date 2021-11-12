const { isString } = require("mocha/lib/utils")
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
        for (const [name, value] of Object.entries(rawTx.params)) {
            tx.params[name] = this._parseTxParam(name, value)
          }
        return tx
    }

    _parseTxParam(name, value, txType = "Document") {
        var returnValue;
        switch(name) {
            case "key": 
                returnValue = parseKey(toString(value))
                break
            case "value":
                returnValue = parseValue(toString(value))
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
        var response = {}
        for (const key of Object.keys(rawResponse)) {
            response[key] = this._parseResponseParam(key, rawResponse[key])
          }

        return response
    }

    _parseResponseParam(name, value, collectionType= "Document") {
        var returnValue;
        switch(name) {
            case "key":
                returnValue = toString(value)
                break;
            case "root":
                returnValue = parseRoot(value)
                break
            case "value":
                returnValue = toJSON(value)
                break
            case "proof": 
                returnValue = toString(value)
                break
            case "query":
                returnValue = value
                break
            case "error":
                returnValue = "None" || value 
                break
            default:
                returnValue = value
                break
        }
        return returnValue
    }
}

function toJSON(rawValue) {
    if (Buffer.isBuffer(rawValue)){
        value = JSON.parse(toString(rawValue))
        return value
    }

    if (typeof rawValue == "string") {
        return JSON.parse(rawValue)
    } 

    if (typeof rawValue == "buffer") {
        return JSON.parse(toString(rawValue))
    } 

    if (typeof rawValue == "object") {
        return rawValue
    }
    return JSON.parse(toString(rawValue))
}

function stringClean(rawString) {
    return rawString.split("\x00").join("").replace(/^[\s\uFEFF\xA0\0]+|[\s\uFEFF\xA0\0]+$/g, "")
}

function toString(rawValue) {
    var value;
    if (Buffer.isBuffer(rawValue)){
        
        value = rawValue.toString("utf8")
        return stringClean(value)
    }
    switch (typeof rawValue) {
        case "string":
            value = rawValue.toString()
            break
        case "object":
            value = JSON.stringify(rawValue)
            break
        case "buffer":
            value = rawValue.toString()
            break
        default:
            value = rawValue.toString()
            break
    }
    return stringClean(value)
}

module.exports = {Executor}