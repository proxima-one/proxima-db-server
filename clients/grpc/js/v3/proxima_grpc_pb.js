// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var v3_proxima_pb = require('../v3/proxima_pb.js');
var v3_collections_pb = require('../v3/collections_pb.js');
var v3_transactions_pb = require('../v3/transactions_pb.js');

function serialize_BatchCollectionRequest(arg) {
  if (!(arg instanceof v3_collections_pb.BatchCollectionRequest)) {
    throw new Error('Expected argument of type BatchCollectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BatchCollectionRequest(buffer_arg) {
  return v3_collections_pb.BatchCollectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_BatchCollectionResponse(arg) {
  if (!(arg instanceof v3_collections_pb.BatchCollectionResponse)) {
    throw new Error('Expected argument of type BatchCollectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BatchCollectionResponse(buffer_arg) {
  return v3_collections_pb.BatchCollectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_BatchRequest(arg) {
  if (!(arg instanceof v3_transactions_pb.BatchRequest)) {
    throw new Error('Expected argument of type BatchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BatchRequest(buffer_arg) {
  return v3_transactions_pb.BatchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_BatchResponse(arg) {
  if (!(arg instanceof v3_transactions_pb.BatchResponse)) {
    throw new Error('Expected argument of type BatchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BatchResponse(buffer_arg) {
  return v3_transactions_pb.BatchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateCollectionRequest(arg) {
  if (!(arg instanceof v3_collections_pb.CreateCollectionRequest)) {
    throw new Error('Expected argument of type CreateCollectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateCollectionRequest(buffer_arg) {
  return v3_collections_pb.CreateCollectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateCollectionResponse(arg) {
  if (!(arg instanceof v3_collections_pb.CreateCollectionResponse)) {
    throw new Error('Expected argument of type CreateCollectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateCollectionResponse(buffer_arg) {
  return v3_collections_pb.CreateCollectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetCollectionRequest(arg) {
  if (!(arg instanceof v3_collections_pb.GetCollectionRequest)) {
    throw new Error('Expected argument of type GetCollectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetCollectionRequest(buffer_arg) {
  return v3_collections_pb.GetCollectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetCollectionResponse(arg) {
  if (!(arg instanceof v3_collections_pb.GetCollectionResponse)) {
    throw new Error('Expected argument of type GetCollectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetCollectionResponse(buffer_arg) {
  return v3_collections_pb.GetCollectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetRequest(arg) {
  if (!(arg instanceof v3_transactions_pb.GetRequest)) {
    throw new Error('Expected argument of type GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetRequest(buffer_arg) {
  return v3_transactions_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetResponse(arg) {
  if (!(arg instanceof v3_transactions_pb.GetResponse)) {
    throw new Error('Expected argument of type GetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetResponse(buffer_arg) {
  return v3_transactions_pb.GetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PutRequest(arg) {
  if (!(arg instanceof v3_transactions_pb.PutRequest)) {
    throw new Error('Expected argument of type PutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PutRequest(buffer_arg) {
  return v3_transactions_pb.PutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PutResponse(arg) {
  if (!(arg instanceof v3_transactions_pb.PutResponse)) {
    throw new Error('Expected argument of type PutResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PutResponse(buffer_arg) {
  return v3_transactions_pb.PutResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_QueryRequest(arg) {
  if (!(arg instanceof v3_transactions_pb.QueryRequest)) {
    throw new Error('Expected argument of type QueryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_QueryRequest(buffer_arg) {
  return v3_transactions_pb.QueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_QueryResponse(arg) {
  if (!(arg instanceof v3_transactions_pb.QueryResponse)) {
    throw new Error('Expected argument of type QueryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_QueryResponse(buffer_arg) {
  return v3_transactions_pb.QueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RemoveCollectionRequest(arg) {
  if (!(arg instanceof v3_collections_pb.RemoveCollectionRequest)) {
    throw new Error('Expected argument of type RemoveCollectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RemoveCollectionRequest(buffer_arg) {
  return v3_collections_pb.RemoveCollectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RemoveCollectionResponse(arg) {
  if (!(arg instanceof v3_collections_pb.RemoveCollectionResponse)) {
    throw new Error('Expected argument of type RemoveCollectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RemoveCollectionResponse(buffer_arg) {
  return v3_collections_pb.RemoveCollectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RemoveRequest(arg) {
  if (!(arg instanceof v3_transactions_pb.RemoveRequest)) {
    throw new Error('Expected argument of type RemoveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RemoveRequest(buffer_arg) {
  return v3_transactions_pb.RemoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RemoveResponse(arg) {
  if (!(arg instanceof v3_transactions_pb.RemoveResponse)) {
    throw new Error('Expected argument of type RemoveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RemoveResponse(buffer_arg) {
  return v3_transactions_pb.RemoveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateCollectionRequest(arg) {
  if (!(arg instanceof v3_collections_pb.UpdateCollectionRequest)) {
    throw new Error('Expected argument of type UpdateCollectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateCollectionRequest(buffer_arg) {
  return v3_collections_pb.UpdateCollectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateCollectionResponse(arg) {
  if (!(arg instanceof v3_collections_pb.UpdateCollectionResponse)) {
    throw new Error('Expected argument of type UpdateCollectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateCollectionResponse(buffer_arg) {
  return v3_collections_pb.UpdateCollectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateRequest(arg) {
  if (!(arg instanceof v3_transactions_pb.UpdateRequest)) {
    throw new Error('Expected argument of type UpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateRequest(buffer_arg) {
  return v3_transactions_pb.UpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateResponse(arg) {
  if (!(arg instanceof v3_transactions_pb.UpdateResponse)) {
    throw new Error('Expected argument of type UpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateResponse(buffer_arg) {
  return v3_transactions_pb.UpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proxima_CheckoutRequest(arg) {
  if (!(arg instanceof v3_proxima_pb.CheckoutRequest)) {
    throw new Error('Expected argument of type proxima.CheckoutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proxima_CheckoutRequest(buffer_arg) {
  return v3_proxima_pb.CheckoutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proxima_CheckoutResponse(arg) {
  if (!(arg instanceof v3_proxima_pb.CheckoutResponse)) {
    throw new Error('Expected argument of type proxima.CheckoutResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proxima_CheckoutResponse(buffer_arg) {
  return v3_proxima_pb.CheckoutResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proxima_CloseRequest(arg) {
  if (!(arg instanceof v3_proxima_pb.CloseRequest)) {
    throw new Error('Expected argument of type proxima.CloseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proxima_CloseRequest(buffer_arg) {
  return v3_proxima_pb.CloseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proxima_CloseResponse(arg) {
  if (!(arg instanceof v3_proxima_pb.CloseResponse)) {
    throw new Error('Expected argument of type proxima.CloseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proxima_CloseResponse(buffer_arg) {
  return v3_proxima_pb.CloseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proxima_CommitRequest(arg) {
  if (!(arg instanceof v3_proxima_pb.CommitRequest)) {
    throw new Error('Expected argument of type proxima.CommitRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proxima_CommitRequest(buffer_arg) {
  return v3_proxima_pb.CommitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proxima_CommitResponse(arg) {
  if (!(arg instanceof v3_proxima_pb.CommitResponse)) {
    throw new Error('Expected argument of type proxima.CommitResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proxima_CommitResponse(buffer_arg) {
  return v3_proxima_pb.CommitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proxima_CompactRequest(arg) {
  if (!(arg instanceof v3_proxima_pb.CompactRequest)) {
    throw new Error('Expected argument of type proxima.CompactRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proxima_CompactRequest(buffer_arg) {
  return v3_proxima_pb.CompactRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proxima_CompactResponse(arg) {
  if (!(arg instanceof v3_proxima_pb.CompactResponse)) {
    throw new Error('Expected argument of type proxima.CompactResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proxima_CompactResponse(buffer_arg) {
  return v3_proxima_pb.CompactResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proxima_CreateRequest(arg) {
  if (!(arg instanceof v3_proxima_pb.CreateRequest)) {
    throw new Error('Expected argument of type proxima.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proxima_CreateRequest(buffer_arg) {
  return v3_proxima_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proxima_CreateResponse(arg) {
  if (!(arg instanceof v3_proxima_pb.CreateResponse)) {
    throw new Error('Expected argument of type proxima.CreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proxima_CreateResponse(buffer_arg) {
  return v3_proxima_pb.CreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proxima_OpenRequest(arg) {
  if (!(arg instanceof v3_proxima_pb.OpenRequest)) {
    throw new Error('Expected argument of type proxima.OpenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proxima_OpenRequest(buffer_arg) {
  return v3_proxima_pb.OpenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proxima_OpenResponse(arg) {
  if (!(arg instanceof v3_proxima_pb.OpenResponse)) {
    throw new Error('Expected argument of type proxima.OpenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proxima_OpenResponse(buffer_arg) {
  return v3_proxima_pb.OpenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proxima_ScanRequest(arg) {
  if (!(arg instanceof v3_proxima_pb.ScanRequest)) {
    throw new Error('Expected argument of type proxima.ScanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proxima_ScanRequest(buffer_arg) {
  return v3_proxima_pb.ScanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proxima_ScanResponse(arg) {
  if (!(arg instanceof v3_proxima_pb.ScanResponse)) {
    throw new Error('Expected argument of type proxima.ScanResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proxima_ScanResponse(buffer_arg) {
  return v3_proxima_pb.ScanResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proxima_StatRequest(arg) {
  if (!(arg instanceof v3_proxima_pb.StatRequest)) {
    throw new Error('Expected argument of type proxima.StatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proxima_StatRequest(buffer_arg) {
  return v3_proxima_pb.StatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proxima_StatResponse(arg) {
  if (!(arg instanceof v3_proxima_pb.StatResponse)) {
    throw new Error('Expected argument of type proxima.StatResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proxima_StatResponse(buffer_arg) {
  return v3_proxima_pb.StatResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proxima_TableRemoveRequest(arg) {
  if (!(arg instanceof v3_proxima_pb.TableRemoveRequest)) {
    throw new Error('Expected argument of type proxima.TableRemoveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proxima_TableRemoveRequest(buffer_arg) {
  return v3_proxima_pb.TableRemoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proxima_TableRemoveResponse(arg) {
  if (!(arg instanceof v3_proxima_pb.TableRemoveResponse)) {
    throw new Error('Expected argument of type proxima.TableRemoveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proxima_TableRemoveResponse(buffer_arg) {
  return v3_proxima_pb.TableRemoveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProximaServiceService = exports.ProximaServiceService = {
  checkout: {
    path: '/proxima.ProximaService/Checkout',
    requestStream: false,
    responseStream: false,
    requestType: v3_proxima_pb.CheckoutRequest,
    responseType: v3_proxima_pb.CheckoutResponse,
    requestSerialize: serialize_proxima_CheckoutRequest,
    requestDeserialize: deserialize_proxima_CheckoutRequest,
    responseSerialize: serialize_proxima_CheckoutResponse,
    responseDeserialize: deserialize_proxima_CheckoutResponse,
  },
  commit: {
    path: '/proxima.ProximaService/Commit',
    requestStream: false,
    responseStream: false,
    requestType: v3_proxima_pb.CommitRequest,
    responseType: v3_proxima_pb.CommitResponse,
    requestSerialize: serialize_proxima_CommitRequest,
    requestDeserialize: deserialize_proxima_CommitRequest,
    responseSerialize: serialize_proxima_CommitResponse,
    responseDeserialize: deserialize_proxima_CommitResponse,
  },
  compact: {
    path: '/proxima.ProximaService/Compact',
    requestStream: false,
    responseStream: false,
    requestType: v3_proxima_pb.CompactRequest,
    responseType: v3_proxima_pb.CompactResponse,
    requestSerialize: serialize_proxima_CompactRequest,
    requestDeserialize: deserialize_proxima_CompactRequest,
    responseSerialize: serialize_proxima_CompactResponse,
    responseDeserialize: deserialize_proxima_CompactResponse,
  },
  scan: {
    path: '/proxima.ProximaService/Scan',
    requestStream: false,
    responseStream: false,
    requestType: v3_proxima_pb.ScanRequest,
    responseType: v3_proxima_pb.ScanResponse,
    requestSerialize: serialize_proxima_ScanRequest,
    requestDeserialize: deserialize_proxima_ScanRequest,
    responseSerialize: serialize_proxima_ScanResponse,
    responseDeserialize: deserialize_proxima_ScanResponse,
  },
  stat: {
    path: '/proxima.ProximaService/Stat',
    requestStream: false,
    responseStream: false,
    requestType: v3_proxima_pb.StatRequest,
    responseType: v3_proxima_pb.StatResponse,
    requestSerialize: serialize_proxima_StatRequest,
    requestDeserialize: deserialize_proxima_StatRequest,
    responseSerialize: serialize_proxima_StatResponse,
    responseDeserialize: deserialize_proxima_StatResponse,
  },
  create: {
    path: '/proxima.ProximaService/Create',
    requestStream: false,
    responseStream: false,
    requestType: v3_proxima_pb.CreateRequest,
    responseType: v3_proxima_pb.CreateResponse,
    requestSerialize: serialize_proxima_CreateRequest,
    requestDeserialize: deserialize_proxima_CreateRequest,
    responseSerialize: serialize_proxima_CreateResponse,
    responseDeserialize: deserialize_proxima_CreateResponse,
  },
  open: {
    path: '/proxima.ProximaService/Open',
    requestStream: false,
    responseStream: false,
    requestType: v3_proxima_pb.OpenRequest,
    responseType: v3_proxima_pb.OpenResponse,
    requestSerialize: serialize_proxima_OpenRequest,
    requestDeserialize: deserialize_proxima_OpenRequest,
    responseSerialize: serialize_proxima_OpenResponse,
    responseDeserialize: deserialize_proxima_OpenResponse,
  },
  close: {
    path: '/proxima.ProximaService/Close',
    requestStream: false,
    responseStream: false,
    requestType: v3_proxima_pb.CloseRequest,
    responseType: v3_proxima_pb.CloseResponse,
    requestSerialize: serialize_proxima_CloseRequest,
    requestDeserialize: deserialize_proxima_CloseRequest,
    responseSerialize: serialize_proxima_CloseResponse,
    responseDeserialize: deserialize_proxima_CloseResponse,
  },
  tableRemove: {
    path: '/proxima.ProximaService/TableRemove',
    requestStream: false,
    responseStream: false,
    requestType: v3_proxima_pb.TableRemoveRequest,
    responseType: v3_proxima_pb.TableRemoveResponse,
    requestSerialize: serialize_proxima_TableRemoveRequest,
    requestDeserialize: deserialize_proxima_TableRemoveRequest,
    responseSerialize: serialize_proxima_TableRemoveResponse,
    responseDeserialize: deserialize_proxima_TableRemoveResponse,
  },
  //
// Collections operations
collectionGet: {
    path: '/proxima.ProximaService/CollectionGet',
    requestStream: false,
    responseStream: false,
    requestType: v3_collections_pb.GetCollectionRequest,
    responseType: v3_collections_pb.GetCollectionResponse,
    requestSerialize: serialize_GetCollectionRequest,
    requestDeserialize: deserialize_GetCollectionRequest,
    responseSerialize: serialize_GetCollectionResponse,
    responseDeserialize: deserialize_GetCollectionResponse,
  },
  collectionCreate: {
    path: '/proxima.ProximaService/CollectionCreate',
    requestStream: false,
    responseStream: false,
    requestType: v3_collections_pb.CreateCollectionRequest,
    responseType: v3_collections_pb.CreateCollectionResponse,
    requestSerialize: serialize_CreateCollectionRequest,
    requestDeserialize: deserialize_CreateCollectionRequest,
    responseSerialize: serialize_CreateCollectionResponse,
    responseDeserialize: deserialize_CreateCollectionResponse,
  },
  collectionBatch: {
    path: '/proxima.ProximaService/CollectionBatch',
    requestStream: false,
    responseStream: false,
    requestType: v3_collections_pb.BatchCollectionRequest,
    responseType: v3_collections_pb.BatchCollectionResponse,
    requestSerialize: serialize_BatchCollectionRequest,
    requestDeserialize: deserialize_BatchCollectionRequest,
    responseSerialize: serialize_BatchCollectionResponse,
    responseDeserialize: deserialize_BatchCollectionResponse,
  },
  collectionUpdate: {
    path: '/proxima.ProximaService/CollectionUpdate',
    requestStream: false,
    responseStream: false,
    requestType: v3_collections_pb.UpdateCollectionRequest,
    responseType: v3_collections_pb.UpdateCollectionResponse,
    requestSerialize: serialize_UpdateCollectionRequest,
    requestDeserialize: deserialize_UpdateCollectionRequest,
    responseSerialize: serialize_UpdateCollectionResponse,
    responseDeserialize: deserialize_UpdateCollectionResponse,
  },
  collectionRemove: {
    path: '/proxima.ProximaService/CollectionRemove',
    requestStream: false,
    responseStream: false,
    requestType: v3_collections_pb.RemoveCollectionRequest,
    responseType: v3_collections_pb.RemoveCollectionResponse,
    requestSerialize: serialize_RemoveCollectionRequest,
    requestDeserialize: deserialize_RemoveCollectionRequest,
    responseSerialize: serialize_RemoveCollectionResponse,
    responseDeserialize: deserialize_RemoveCollectionResponse,
  },
  //
// Transactions
get: {
    path: '/proxima.ProximaService/Get',
    requestStream: false,
    responseStream: false,
    requestType: v3_transactions_pb.GetRequest,
    responseType: v3_transactions_pb.GetResponse,
    requestSerialize: serialize_GetRequest,
    requestDeserialize: deserialize_GetRequest,
    responseSerialize: serialize_GetResponse,
    responseDeserialize: deserialize_GetResponse,
  },
  put: {
    path: '/proxima.ProximaService/Put',
    requestStream: false,
    responseStream: false,
    requestType: v3_transactions_pb.PutRequest,
    responseType: v3_transactions_pb.PutResponse,
    requestSerialize: serialize_PutRequest,
    requestDeserialize: deserialize_PutRequest,
    responseSerialize: serialize_PutResponse,
    responseDeserialize: deserialize_PutResponse,
  },
  query: {
    path: '/proxima.ProximaService/Query',
    requestStream: false,
    responseStream: false,
    requestType: v3_transactions_pb.QueryRequest,
    responseType: v3_transactions_pb.QueryResponse,
    requestSerialize: serialize_QueryRequest,
    requestDeserialize: deserialize_QueryRequest,
    responseSerialize: serialize_QueryResponse,
    responseDeserialize: deserialize_QueryResponse,
  },
  update: {
    path: '/proxima.ProximaService/Update',
    requestStream: false,
    responseStream: false,
    requestType: v3_transactions_pb.UpdateRequest,
    responseType: v3_transactions_pb.UpdateResponse,
    requestSerialize: serialize_UpdateRequest,
    requestDeserialize: deserialize_UpdateRequest,
    responseSerialize: serialize_UpdateResponse,
    responseDeserialize: deserialize_UpdateResponse,
  },
  remove: {
    path: '/proxima.ProximaService/Remove',
    requestStream: false,
    responseStream: false,
    requestType: v3_transactions_pb.RemoveRequest,
    responseType: v3_transactions_pb.RemoveResponse,
    requestSerialize: serialize_RemoveRequest,
    requestDeserialize: deserialize_RemoveRequest,
    responseSerialize: serialize_RemoveResponse,
    responseDeserialize: deserialize_RemoveResponse,
  },
  batch: {
    path: '/proxima.ProximaService/Batch',
    requestStream: false,
    responseStream: false,
    requestType: v3_transactions_pb.BatchRequest,
    responseType: v3_transactions_pb.BatchResponse,
    requestSerialize: serialize_BatchRequest,
    requestDeserialize: deserialize_BatchRequest,
    responseSerialize: serialize_BatchResponse,
    responseDeserialize: deserialize_BatchResponse,
  },
};

exports.ProximaServiceClient = grpc.makeGenericClientConstructor(ProximaServiceService);
