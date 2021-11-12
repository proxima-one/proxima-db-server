const axios = require('axios');

const { TransactionModelSchema } = require("../backend/models/models");
const prod = "https://proxima-db.cluster.stage.proxima.one"
const local = "http://0.0.0.0:80"

const traderOrder = {"TraderAccount":{
    "pk":{
    "gr":[240,7,194,15,208,93,108,101,114,122,7,63,117,4,203,217,41,61,53,156,192,142,26,156,54,8,0,120,135,234,214,20],
    "grsk":[34,139,75,191,160,224,131,130,168,20,76,33,68,132,153,154,25,2,35,141,34,1,11,243,133,36,159,113,79,96,47,24]
    },
    "comm":{
    "c":[14,100,100,207,95,101,64,223,102,228,200,93,25,147,219,30,95,176,42,121,196,172,117,104,152,178,183,175,254,9,54,21],"d":[130,103,223,74,98,10,116,111,34,174,123,71,8,83,235,245,104,70,223,107,82,170,129,144,16,53,179,134,44,208,30,87]}
    },
    "BalancePedersen":[66,206,209,188,181,21,69,209,148,100,43,38,26,159,248,136,226,93,53,21,149,58,150,173,129,23,158,108,214,34,67,106],
    "InitialMargin":20000,
    "Leverage":3.0,
    "IMBlinding":[146,255,85,242,202,66,122,189,64,135,226,84,1,246,51,191,86,99,124,91,205,136,46,253,235,138,128,119,177,42,245,0],
    "ExecutionPrice":4806476,
    "OrderProgramBytes":[0,32,0,0,0,66,206,209,188,181,21,69,209,148,100,43,38,26,159,248,136,226,93,53,21,149,58,150,173,129,23,158,108,214,34,67,106,6,10,0,32,0,0,0,36,216,6,210,21,2,181,253,124,47,89,93,184,88,55,107,174,143,137,238,242,170,106,178,217,116,99,202,66,230,8,106,6,10,11,12,15,2],
    "ProgramProof":[0,38,30,36,149,68,91,243,192,118,248,8,246,23,16,87,26,237,244,113,229,131,220,80,230,234,67,51,191,74,237,223,82,184,221,58,33,225,201,183,233,13,237,137,133,77,94,141,8,221,56,128,160,180,142,67,15,162,86,49,152,138,200,253,119,44,9,252,67,50,56,201,10,117,117,183,160,169,103,85,154,146,169,243,174,121,194,106,94,46,82,105,194,133,113,108,46,50,152,213,139,59,139,182,243,78,163,181,95,215,49,87,179,234,104,45,41,200,76,93,104,204,154,143,52,135,177,64,67,80,172,217,208,81,114,5,237,38,201,64,111,80,107,83,57,73,163,232,247,211,235,83,136,188,26,65,90,154,237,44,22,14,32,46,131,245,79,57,225,251,184,16,200,4,130,222,128,54,230,228,103,175,22,247,121,52,241,181,206,118,6,37,52,108,59,199,159,250,199,1,49,104,154,53,1,13,215,194,251,60,209,1,125,99,148,149,139,215,60,105,223,37,182,98,50,202,187,210,220,231,181,43,92,188,57,239,224,95,208,148,97,190,27,19,160,11,162,224,99,184,176,121,154,242,138,138,25,4,158,169,152,186,224,219,69,132,93,161,2,60,144,26,245,116,120,89,4,123,212,121,37,25,105,136,35,185,46,169,10,179,242,248,41,222,123,174,112,217,53,182,29,102,172,248,113,115,16,76,204,107,120,88,53,13,222,137,239,173,73,170,3,184,54,216,80,218,22,250,200,22,217,246,20,3,118,165,182,38,189,91,131,166,243,76,177,170,151,242,93,88,7,121,10,22,200,51,211,146,188,101,232,2,40,156,49,27,98,211,229,234,173,53,116,94,109,231,113,96,99,247,243,50,115,213,53,32,3,134,148,101,56,164,225,136,1,165,169,232,231,231,245,199,47,211,75,162,46,104,158,120,176,104,34,242,60,46,28,0,58,140,69,160,31,100,112,184,2,113,69,242,59,61,211,252,134,179,56,180,47,138,247,217,155,37,98,89,175,223,86,148,16,122,224,189,175,30,216,197,252,47,27,117,89,125,182,229,147,95,31,233,12,130,210,34,68,202,149,193,198,63,12,232,17,189,136,191,155,226,161,64,183,241,31,31,37,209,167,136,237,8,34,44,174,24,107,208,52,82,16,128,15,161,31,194,250,247,128,41,97,8,148,1,163,137,161,65,111,58,176,219,226,148,93,4,152,255,149,89,212,27,228,47,89,25,31,162,61,130,59,65,103,94,128,184,8,32,193,14,89,120,3,205,170,200,207,1,89,29,55,168,198,254,215,219,140,181,55,100,26,235,161,119,29,217,41,0,137,153,213,198,22,70,24,97,193,207,180,23,31,150,129,230,172,36,163,212,237,108,35,90,105,61,239,186,253,129,232,69,156,54,66,22,151,140,206,76,137,21,72,237,180,15,138,86,46,17,250,73,46,190,83,4,134,225,181,5,26,144,173,65,139,190,58,173,155,249,224,85,177,57,163,208,70,72,254,230,159,51,19,102,94,178,122,92,203,196,107,229,54,52,73,135,1,20,227,246,35,194,159,69,29,190,10,204,42,244,114,178,9,162,85,85,118,83,92,166,8,28,231,134,2,224,139,73,225,24,116,66,107,115,114,141,32,67,14,136,200,8,30,216,157,42,114,66,143,245,45,214,132,14,16,22,57,105,182,11,9,54,0,35,158,138,205,164,216,242,250,18,46,97,10,118,88,104,247,206,255,120,1,192,235,22,213,189,156,174,77,58,239,185,237,170,177,206,146,48,4,218,44,113,173,187,252,197,200,126,240,18,221,71,9],
    "TraderSign":{
    "e1":[166,187,171,254,129,158,240,118,202,238,98,200,52,25,209,245,69,44,18,156,51,109,4,255,248,114,196,187,204,188,33,57],
    "f1":[122,80,139,246,172,141,107,199,118,8,12,172,135,118,133,171,26,228,191,184,142,59,17,227,213,128,91,106,243,152,51,28],
    "f2":[102,138,107,216,226,229,186,135,115,205,214,51,187,87,129,75,247,36,117,91,167,91,131,120,98,115,183,208,0,167,173,68],
    "XBytes":[105,169,99,244,225,80,38,108,120,32,67,12,215,122,23,23,213,145,137,182,220,117,243,178,113,209,243,170,131,117,191,14],
    "PHashBytes":[180,107,34,29,150,241,63,212,92,119,73,174,182,28,37,75,52,178,160,243,13,58,60,140,38,243,85,214,2,237,117,14,113,231,106,110,101,161,53,197,134,233,51,85,180,83,40,163,169,68,62,189,161,106,248,103,166,16,232,79,221,115,21,203],
    "zV":[244,50,231,69,43,173,249,240,236,177,54,150,168,34,5,152,200,63,28,56,4,110,234,117,128,12,78,7,56,67,208,2],
    "zSK":[8,135,189,223,171,42,32,110,225,149,27,89,236,17,127,246,146,70,146,43,65,221,207,216,30,159,144,119,126,105,13,4],
    "zR":[96,132,4,136,228,58,76,132,183,207,5,247,187,169,167,128,149,141,32,71,36,161,213,76,3,110,59,81,65,227,206,13]
    },
    "OrderType":false,
    "PositionSide":-1}


const relayerOrder = {
    "trader_acc": "{\n\t\"Pk\": {\n\t\t\"Gr\": \"8AfCD9BdbGVyegc/dQTL2Sk9NZzAjhqcNggAeIfq1hQ=\",\n\t\t\"Grsk\": \"IotLv6Dgg4KoFEwhRISZmhkCI40iAQvzhSSfcU9gLxg=\"\n\t},\n\t\"Comm\": {\n\t\t\"C\": \"DmRkz19lQN9m5MhdGZPbHl+wKnnErHVomLK3r/4JNhU=\",\n\t\t\"D\": \"gmffSmIKdG8irntHCFPr9WhG32tSqoGQEDWzhizQHlc=\"\n\t}\n}",
    "prover_sign": "{\n\t\"E1\": \"prur/oGe8HbK7mLINBnR9UUsEpwzbQT/+HLEu8y8ITk=\",\n\t\"F1\": \"elCL9qyNa8d2CAysh3aFqxrkv7iOOxHj1YBbavOYMxw=\",\n\t\"F2\": \"Zopr2OLluodzzdYzu1eBS/ckdVunW4N4YnO30ACnrUQ=\",\n\t\"XBytes\": \"aalj9OFQJmx4IEMM13oXF9WRibbcdfOycdHzqoN1vw4=\",\n\t\"PHashBytes\": \"tGsiHZbxP9Rcd0muthwlSzSyoPMNOjyMJvNV1gLtdQ5x52puZaE1xYbpM1W0UyijqUQ+vaFq+GemEOhP3XMVyw==\",\n\t\"Zv\": \"9DLnRSut+fDssTaWqCIFmMg/HDgEbup1gAxOBzhD0AI=\",\n\t\"Zsk\": \"CIe936sqIG7hlRtZ7BF/9pJGkitB3c/YHp+Qd35pDQQ=\",\n\t\"Zr\": \"YIQEiOQ6TIS3zwX3u6mngJWNIEckodVMA247UUHjzg0=\"\n}",
    "order_program_bytes": "\"ACAAAABCztG8tRVF0ZRkKyYan/iI4l01FZU6lq2BF55s1iJDagYKACAAAAAk2AbSFQK1/XwvWV24WDdrro+J7vKqarLZdGPKQuYIagYKCwwPAg==\"",
    "program_proof": "\"ACYeJJVEW/PAdvgI9hcQVxrt9HHlg9xQ5upDM79K7d9SuN06IeHJt+kN7YmFTV6NCN04gKC0jkMPolYxmIrI/XcsCfxDMjjJCnV1t6CpZ1WakqnzrnnCal4uUmnChXFsLjKY1Ys7i7bzTqO1X9cxV7PqaC0pyExdaMyajzSHsUBDUKzZ0FFyBe0myUBvUGtTOUmj6PfT61OIvBpBWprtLBYOIC6D9U854fu4EMgEgt6ANubkZ68W93k08bXOdgYlNGw7x5/6xwExaJo1AQ3Xwvs80QF9Y5SVi9c8ad8ltmIyyrvS3Oe1K1y8Oe/gX9CUYb4bE6ALouBjuLB5mvKKihkEnqmYuuDbRYRdoQI8kBr1dHhZBHvUeSUZaYgjuS6pCrPy+Cnee65w2TW2HWas+HFzEEzMa3hYNQ3eie+tSaoDuDbYUNoW+sgW2fYUA3altia9W4Om80yxqpfyXVgHeQoWyDPTkrxl6AIonDEbYtPl6q01dF5t53FgY/fzMnPVNSADhpRlOKThiAGlqejn5/XHL9NLoi5onniwaCLyPC4cADqMRaAfZHC4AnFF8js90/yGszi0L4r32ZslYlmv31aUEHrgva8e2MX8Lxt1WX225ZNfH+kMgtIiRMqVwcY/DOgRvYi/m+KhQLfxHx8l0aeI7QgiLK4Ya9A0UhCAD6Efwvr3gClhCJQBo4mhQW86sNvilF0EmP+VWdQb5C9ZGR+iPYI7QWdegLgIIMEOWXgDzarIzwFZHTeoxv7X24y1N2Qa66F3HdkpAImZ1cYWRhhhwc+0Fx+WgeasJKPU7WwjWmk977r9gehFnDZCFpeMzkyJFUjttA+KVi4R+kkuvlMEhuG1BRqQrUGLvjqtm/ngVbE5o9BGSP7mnzMTZl6yelzLxGvlNjRJhwEU4/Yjwp9FHb4KzCr0crIJolVVdlNcpggc54YC4ItJ4Rh0Qmtzco0gQw6IyAge2J0qckKP9S3WhA4QFjlptgsJNgAjnorNpNjy+hIuYQp2WGj3zv94AcDrFtW9nK5NOu+57aqxzpIwBNosca27/MXIfvAS3UcJ\"",
    "relayer_lock": "{\n\t\"R\": \"OuUOaG8oy8KntNYpjyZ94DRdielpFjL0I/XbnkDd5SE=\",\n\t\"X\": \"CXAb1/ehSLSilGljQbecql9G44hf0V17v4u5u9/Y5gY=\",\n\t\"Zp\": \"d5CXyHnuaCcqU6SrifEUNppJD8F+d5XWa8wZaEu1EAk=\"\n}",
    "position_size": "288408",
    "position_side": "-1"
}

const relayerSchema = {
    "_id" : {type: "string"},
    "trader_acc": {type: "string"},
    "program_proof": {type: "string"},
    "position_size": {type: "number"},
    "position_side": {type: "number" }
}


let base_uri = local

async function collectionCreation() {
    //curl -H 'Content-Type: application/json' -d '{name:}
    //console.log(JSON.stringify(relayerSchema))
    let response = await axios.post(base_uri + "/collections", {_id: "relayer-orders", name: "Relayer-Orders", version: "0.0.0", type: "Document", schema: JSON.stringify(relayerSchema)})
    console.log("Insert Collection Response: ", response.data)
    //curl http://0.0.0.0:80/collections/Relayer-Orders
    let collectionGetResponse = await axios.get("http://0.0.0.0:80/collections/Relayer-Orders")
    console.log("Get Collection Response: ", response.data)
}

async function addRelayerOrders() {
    let relayer1 = {
        "_id": "first",
        "trader_acc": "Account 1",
        "program_proof": "Relayer Proof",
        "position_size": 100000,
        "position_side": -1
    }
    //insert

    //update
    //curl -H 'Content-Type: application/json' -d '{"key": "first", "value": {"_id": "first", "trader_acc": "Account 1", "program_proof": "Relayer Proof", "position_size": 100000, "position_side": -1}, "prove": true}' -XPOST http://0.0.0.0:80/collections/Relayer-Orders/documents
    let response = await axios.post(base_uri + "/collections/Relayer-Orders/documents", {_id: "first", key: "first", value: relayer1})
    console.log("Insert Document Response: ", response.data)

    //bulkInsert
    response = await axios.post(base_uri + "/collections/Relayer-Orders/documents/bulkInsert", {entries: [{_id: "first", key: "first", value: relayer1}]})
    console.log(response.data)
}

async function queries() {
    //single get 
    //curl "http://0.0.0.0:80/collections/Relayer-Orders/documents/first"
    let response = await axios.get(base_uri + "/collections/Relayer-Orders/documents/first")
    console.log(response.data)
    //query
    let queryResponse = await axios.post(base_uri + "/collections/Relayer-Orders/query", {query: [{"name": "position_size", "expression": ">", "value": 100}, {"name": "position_side", "expression": "=", "value": -1}]})
    console.log(queryResponse.data)
    //curl -H 'Content-Type: application/json' -d '{"query": [{"name": "position_side", "expression": "<", "value": 100}]}' -XPOST  http://0.0.0.0:80/collections/Relayer-Orders/query
}

async function main() {
    await collectionCreation()
    await addRelayerOrders()
    await queries()
}   


main();



