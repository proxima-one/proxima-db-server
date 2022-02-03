// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proxima_pb = require('./proxima_pb.js');

function serialize_BatchRequest(arg) {
  if (!(arg instanceof proxima_pb.BatchRequest)) {
    throw new Error('Expected argument of type BatchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BatchRequest(buffer_arg) {
  return proxima_pb.BatchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_BatchResponse(arg) {
  if (!(arg instanceof proxima_pb.BatchResponse)) {
    throw new Error('Expected argument of type BatchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BatchResponse(buffer_arg) {
  return proxima_pb.BatchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CheckoutRequest(arg) {
  if (!(arg instanceof proxima_pb.CheckoutRequest)) {
    throw new Error('Expected argument of type CheckoutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CheckoutRequest(buffer_arg) {
  return proxima_pb.CheckoutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CheckoutResponse(arg) {
  if (!(arg instanceof proxima_pb.CheckoutResponse)) {
    throw new Error('Expected argument of type CheckoutResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CheckoutResponse(buffer_arg) {
  return proxima_pb.CheckoutResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CloseRequest(arg) {
  if (!(arg instanceof proxima_pb.CloseRequest)) {
    throw new Error('Expected argument of type CloseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CloseRequest(buffer_arg) {
  return proxima_pb.CloseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CloseResponse(arg) {
  if (!(arg instanceof proxima_pb.CloseResponse)) {
    throw new Error('Expected argument of type CloseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CloseResponse(buffer_arg) {
  return proxima_pb.CloseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CommitRequest(arg) {
  if (!(arg instanceof proxima_pb.CommitRequest)) {
    throw new Error('Expected argument of type CommitRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CommitRequest(buffer_arg) {
  return proxima_pb.CommitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CommitResponse(arg) {
  if (!(arg instanceof proxima_pb.CommitResponse)) {
    throw new Error('Expected argument of type CommitResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CommitResponse(buffer_arg) {
  return proxima_pb.CommitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CompactRequest(arg) {
  if (!(arg instanceof proxima_pb.CompactRequest)) {
    throw new Error('Expected argument of type CompactRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CompactRequest(buffer_arg) {
  return proxima_pb.CompactRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CompactResponse(arg) {
  if (!(arg instanceof proxima_pb.CompactResponse)) {
    throw new Error('Expected argument of type CompactResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CompactResponse(buffer_arg) {
  return proxima_pb.CompactResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateRequest(arg) {
  if (!(arg instanceof proxima_pb.CreateRequest)) {
    throw new Error('Expected argument of type CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateRequest(buffer_arg) {
  return proxima_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateResponse(arg) {
  if (!(arg instanceof proxima_pb.CreateResponse)) {
    throw new Error('Expected argument of type CreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateResponse(buffer_arg) {
  return proxima_pb.CreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetRequest(arg) {
  if (!(arg instanceof proxima_pb.GetRequest)) {
    throw new Error('Expected argument of type GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetRequest(buffer_arg) {
  return proxima_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetResponse(arg) {
  if (!(arg instanceof proxima_pb.GetResponse)) {
    throw new Error('Expected argument of type GetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetResponse(buffer_arg) {
  return proxima_pb.GetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_OpenRequest(arg) {
  if (!(arg instanceof proxima_pb.OpenRequest)) {
    throw new Error('Expected argument of type OpenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_OpenRequest(buffer_arg) {
  return proxima_pb.OpenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_OpenResponse(arg) {
  if (!(arg instanceof proxima_pb.OpenResponse)) {
    throw new Error('Expected argument of type OpenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_OpenResponse(buffer_arg) {
  return proxima_pb.OpenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PutRequest(arg) {
  if (!(arg instanceof proxima_pb.PutRequest)) {
    throw new Error('Expected argument of type PutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PutRequest(buffer_arg) {
  return proxima_pb.PutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PutResponse(arg) {
  if (!(arg instanceof proxima_pb.PutResponse)) {
    throw new Error('Expected argument of type PutResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PutResponse(buffer_arg) {
  return proxima_pb.PutResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_QueryRequest(arg) {
  if (!(arg instanceof proxima_pb.QueryRequest)) {
    throw new Error('Expected argument of type QueryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_QueryRequest(buffer_arg) {
  return proxima_pb.QueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_QueryResponse(arg) {
  if (!(arg instanceof proxima_pb.QueryResponse)) {
    throw new Error('Expected argument of type QueryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_QueryResponse(buffer_arg) {
  return proxima_pb.QueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RemoveRequest(arg) {
  if (!(arg instanceof proxima_pb.RemoveRequest)) {
    throw new Error('Expected argument of type RemoveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RemoveRequest(buffer_arg) {
  return proxima_pb.RemoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RemoveResponse(arg) {
  if (!(arg instanceof proxima_pb.RemoveResponse)) {
    throw new Error('Expected argument of type RemoveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RemoveResponse(buffer_arg) {
  return proxima_pb.RemoveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ScanRequest(arg) {
  if (!(arg instanceof proxima_pb.ScanRequest)) {
    throw new Error('Expected argument of type ScanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ScanRequest(buffer_arg) {
  return proxima_pb.ScanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ScanResponse(arg) {
  if (!(arg instanceof proxima_pb.ScanResponse)) {
    throw new Error('Expected argument of type ScanResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ScanResponse(buffer_arg) {
  return proxima_pb.ScanResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_StatRequest(arg) {
  if (!(arg instanceof proxima_pb.StatRequest)) {
    throw new Error('Expected argument of type StatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_StatRequest(buffer_arg) {
  return proxima_pb.StatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_StatResponse(arg) {
  if (!(arg instanceof proxima_pb.StatResponse)) {
    throw new Error('Expected argument of type StatResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_StatResponse(buffer_arg) {
  return proxima_pb.StatResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TableRemoveRequest(arg) {
  if (!(arg instanceof proxima_pb.TableRemoveRequest)) {
    throw new Error('Expected argument of type TableRemoveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TableRemoveRequest(buffer_arg) {
  return proxima_pb.TableRemoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TableRemoveResponse(arg) {
  if (!(arg instanceof proxima_pb.TableRemoveResponse)) {
    throw new Error('Expected argument of type TableRemoveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TableRemoveResponse(buffer_arg) {
  return proxima_pb.TableRemoveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProximaServiceService = exports.ProximaServiceService = {
  get: {
    path: '/ProximaService/Get',
    requestStream: false,
    responseStream: false,
    requestType: proxima_pb.GetRequest,
    responseType: proxima_pb.GetResponse,
    requestSerialize: serialize_GetRequest,
    requestDeserialize: deserialize_GetRequest,
    responseSerialize: serialize_GetResponse,
    responseDeserialize: deserialize_GetResponse,
  },
  put: {
    path: '/ProximaService/Put',
    requestStream: false,
    responseStream: false,
    requestType: proxima_pb.PutRequest,
    responseType: proxima_pb.PutResponse,
    requestSerialize: serialize_PutRequest,
    requestDeserialize: deserialize_PutRequest,
    responseSerialize: serialize_PutResponse,
    responseDeserialize: deserialize_PutResponse,
  },
  query: {
    path: '/ProximaService/Query',
    requestStream: false,
    responseStream: false,
    requestType: proxima_pb.QueryRequest,
    responseType: proxima_pb.QueryResponse,
    requestSerialize: serialize_QueryRequest,
    requestDeserialize: deserialize_QueryRequest,
    responseSerialize: serialize_QueryResponse,
    responseDeserialize: deserialize_QueryResponse,
  },
  remove: {
    path: '/ProximaService/Remove',
    requestStream: false,
    responseStream: false,
    requestType: proxima_pb.RemoveRequest,
    responseType: proxima_pb.RemoveResponse,
    requestSerialize: serialize_RemoveRequest,
    requestDeserialize: deserialize_RemoveRequest,
    responseSerialize: serialize_RemoveResponse,
    responseDeserialize: deserialize_RemoveResponse,
  },
  batch: {
    path: '/ProximaService/Batch',
    requestStream: false,
    responseStream: false,
    requestType: proxima_pb.BatchRequest,
    responseType: proxima_pb.BatchResponse,
    requestSerialize: serialize_BatchRequest,
    requestDeserialize: deserialize_BatchRequest,
    responseSerialize: serialize_BatchResponse,
    responseDeserialize: deserialize_BatchResponse,
  },
  checkout: {
    path: '/ProximaService/Checkout',
    requestStream: false,
    responseStream: false,
    requestType: proxima_pb.CheckoutRequest,
    responseType: proxima_pb.CheckoutResponse,
    requestSerialize: serialize_CheckoutRequest,
    requestDeserialize: deserialize_CheckoutRequest,
    responseSerialize: serialize_CheckoutResponse,
    responseDeserialize: deserialize_CheckoutResponse,
  },
  commit: {
    path: '/ProximaService/Commit',
    requestStream: false,
    responseStream: false,
    requestType: proxima_pb.CommitRequest,
    responseType: proxima_pb.CommitResponse,
    requestSerialize: serialize_CommitRequest,
    requestDeserialize: deserialize_CommitRequest,
    responseSerialize: serialize_CommitResponse,
    responseDeserialize: deserialize_CommitResponse,
  },
  compact: {
    path: '/ProximaService/Compact',
    requestStream: false,
    responseStream: false,
    requestType: proxima_pb.CompactRequest,
    responseType: proxima_pb.CompactResponse,
    requestSerialize: serialize_CompactRequest,
    requestDeserialize: deserialize_CompactRequest,
    responseSerialize: serialize_CompactResponse,
    responseDeserialize: deserialize_CompactResponse,
  },
  scan: {
    path: '/ProximaService/Scan',
    requestStream: false,
    responseStream: false,
    requestType: proxima_pb.ScanRequest,
    responseType: proxima_pb.ScanResponse,
    requestSerialize: serialize_ScanRequest,
    requestDeserialize: deserialize_ScanRequest,
    responseSerialize: serialize_ScanResponse,
    responseDeserialize: deserialize_ScanResponse,
  },
  stat: {
    path: '/ProximaService/Stat',
    requestStream: false,
    responseStream: false,
    requestType: proxima_pb.StatRequest,
    responseType: proxima_pb.StatResponse,
    requestSerialize: serialize_StatRequest,
    requestDeserialize: deserialize_StatRequest,
    responseSerialize: serialize_StatResponse,
    responseDeserialize: deserialize_StatResponse,
  },
  create: {
    path: '/ProximaService/Create',
    requestStream: false,
    responseStream: false,
    requestType: proxima_pb.CreateRequest,
    responseType: proxima_pb.CreateResponse,
    requestSerialize: serialize_CreateRequest,
    requestDeserialize: deserialize_CreateRequest,
    responseSerialize: serialize_CreateResponse,
    responseDeserialize: deserialize_CreateResponse,
  },
  open: {
    path: '/ProximaService/Open',
    requestStream: false,
    responseStream: false,
    requestType: proxima_pb.OpenRequest,
    responseType: proxima_pb.OpenResponse,
    requestSerialize: serialize_OpenRequest,
    requestDeserialize: deserialize_OpenRequest,
    responseSerialize: serialize_OpenResponse,
    responseDeserialize: deserialize_OpenResponse,
  },
  close: {
    path: '/ProximaService/Close',
    requestStream: false,
    responseStream: false,
    requestType: proxima_pb.CloseRequest,
    responseType: proxima_pb.CloseResponse,
    requestSerialize: serialize_CloseRequest,
    requestDeserialize: deserialize_CloseRequest,
    responseSerialize: serialize_CloseResponse,
    responseDeserialize: deserialize_CloseResponse,
  },
  tableRemove: {
    path: '/ProximaService/TableRemove',
    requestStream: false,
    responseStream: false,
    requestType: proxima_pb.TableRemoveRequest,
    responseType: proxima_pb.TableRemoveResponse,
    requestSerialize: serialize_TableRemoveRequest,
    requestDeserialize: deserialize_TableRemoveRequest,
    responseSerialize: serialize_TableRemoveResponse,
    responseDeserialize: deserialize_TableRemoveResponse,
  },
};

exports.ProximaServiceClient = grpc.makeGenericClientConstructor(ProximaServiceService);
