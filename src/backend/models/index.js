//object validation from different types of collections 
//   Database
//   {
//     "_id" : "<hostname>-<timestamp>-<increment>",
//     "server" : "<hostname><:port>",
//     "clientAddr" : "127.0.0.1:63381",
//     "time" : ISODate("2012-12-11T14:09:21.039Z"),
//     "what" : "split",
//     "ns" : "<database>.<collection>",
//     "details" : {
//        "before" : {
//           "min" : {
//              "<database>" : { $minKey : 1 }
//           },
//           "max" : {
//              "<database>" : { $maxKey : 1 }
//           },
//           "lastmod" : Timestamp(1000, 0),
//           "lastmodEpoch" : ObjectId("000000000000000000000000")
//        },
//        "left" : {
//           "min" : {
//              "<database>" : { $minKey : 1 }
//           },
//           "max" : {
//              "<database>" : "<value>"
//           },
//           "lastmod" : Timestamp(1000, 1),
//           "lastmodEpoch" : ObjectId(<...>)
//        },
//        "right" : {
//           "min" : {
//              "<database>" : "<value>"
//           },
//           "max" : {
//              "<database>" : { $maxKey : 1 }
//           },
//           "lastmod" : Timestamp(1000, 2),
//           "lastmodEpoch" : ObjectId("<...>")
//        },
//        "owningShard" : "<value>"
//     }
//    }

// processManagement:
//    fork: true
// net:
//    bindIp: localhost
//    port: 27017
// storage:
//    dbPath: /var/lib/mongo
// systemLog:
//    destination: file
//    path: "/var/log/mongodb/mongod.log"
//    logAppend: true
// storage:
//    journal:
//       enabled: true


// Collection  create 
// {
//     capped: <boolean>,
//     timeseries: {                  // Added in MongoDB 5.0
//        timeField: <string>,        // required for time series collections
//        metaField: <string>,
//        granularity: <string>
//     },
//     expireAfterSeconds: <number>,
//     autoIndexId: <boolean>,
//     size: <number>,
//     max: <number>,
//     storageEngine: <document>,
//     validator: <document>,
//     validationLevel: <string>,
//     validationAction: <string>,
//     indexOptionDefaults: <document>,
//     viewOn: <string>,              // Added in MongoDB 3.4
//     pipeline: <pipeline>,          // Added in MongoDB 3.4
//     collation: <document>,         // Added in MongoDB 3.4
//     writeConcern: <document>
//   }


// Schema
// {
//     $jsonSchema: {
//        required: [ "name", "major", "gpa", "address" ],
//        properties: {
//           name: {
//              bsonType: "string",
//              description: "must be a string and is required"
//           },
//           address: {
//              bsonType: "object",
//              required: [ "zipcode" ],
//              properties: {
//                  "street": { bsonType: "string" },
//                  "zipcode": { bsonType: "string" }
//              }
//           }
//        }
//     }
//   }



//    Document 
// {
//     "_id" : "records.pets",
//     "lastmod" : ISODate("2021-07-21T15:48:15.193Z"),
//     "timestamp": Timestamp(1626882495, 1),
//     "key" : {
//           "a" : 1
//     },
//     "unique" : false,
//     "lastmodEpoch" : ObjectId("5078407bd58b175c5c225fdc"),
//     "uuid" :  UUID("f8669e52-5c1b-4ea2-bbdc-a00189b341da")
//  }
   
// Change Event 
// {
//     _id : { <BSON Object> },
//     "operationType" : "<operation>",
//     "fullDocument" : { <document> },
//     "ns" : {
//        "db" : "<database>",
//        "coll" : "<collection>"
//     },
//     "to" : {
//        "db" : "<database>",
//        "coll" : "<collection>"
//     },
//     "documentKey" : { "_id" : <value> },
//     "updateDescription" : {
//        "updatedFields" : { <document> },
//        "removedFields" : [ "<field>", ... ],
//        "truncatedArrays" : [
//           { "field" : <field>, "newSize" : <integer> },
//           ...
//        ]
//     },
//     "clusterTime" : <Timestamp>,
//     "txnNumber" : <NumberLong>,
//     "lsid" : {
//        "id" : <UUID>,
//        "uid" : <BinData>
//     }
//  }



   