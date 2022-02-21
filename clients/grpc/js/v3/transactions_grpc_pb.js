// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var v3_transactions_pb = require('../v3/transactions_pb.js');

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


var TransactionServiceService = exports.TransactionServiceService = {
  get: {
    path: '/TransactionService/Get',
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
    path: '/TransactionService/Put',
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
    path: '/TransactionService/Query',
    requestStream: false,
    responseStream: false,
    requestType: v3_transactions_pb.QueryRequest,
    responseType: v3_transactions_pb.QueryResponse,
    requestSerialize: serialize_QueryRequest,
    requestDeserialize: deserialize_QueryRequest,
    responseSerialize: serialize_QueryResponse,
    responseDeserialize: deserialize_QueryResponse,
  },
  remove: {
    path: '/TransactionService/Remove',
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
    path: '/TransactionService/Batch',
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

exports.TransactionServiceClient = grpc.makeGenericClientConstructor(TransactionServiceService);
