// package: 
// file: v3/transactions.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as v3_transactions_pb from "../v3/transactions_pb";

interface ITransactionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: ITransactionServiceService_IGet;
    put: ITransactionServiceService_IPut;
    query: ITransactionServiceService_IQuery;
    remove: ITransactionServiceService_IRemove;
    batch: ITransactionServiceService_IBatch;
}

interface ITransactionServiceService_IGet extends grpc.MethodDefinition<v3_transactions_pb.GetRequest, v3_transactions_pb.GetResponse> {
    path: "/TransactionService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v3_transactions_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<v3_transactions_pb.GetRequest>;
    responseSerialize: grpc.serialize<v3_transactions_pb.GetResponse>;
    responseDeserialize: grpc.deserialize<v3_transactions_pb.GetResponse>;
}
interface ITransactionServiceService_IPut extends grpc.MethodDefinition<v3_transactions_pb.PutRequest, v3_transactions_pb.PutResponse> {
    path: "/TransactionService/Put";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v3_transactions_pb.PutRequest>;
    requestDeserialize: grpc.deserialize<v3_transactions_pb.PutRequest>;
    responseSerialize: grpc.serialize<v3_transactions_pb.PutResponse>;
    responseDeserialize: grpc.deserialize<v3_transactions_pb.PutResponse>;
}
interface ITransactionServiceService_IQuery extends grpc.MethodDefinition<v3_transactions_pb.QueryRequest, v3_transactions_pb.QueryResponse> {
    path: "/TransactionService/Query";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v3_transactions_pb.QueryRequest>;
    requestDeserialize: grpc.deserialize<v3_transactions_pb.QueryRequest>;
    responseSerialize: grpc.serialize<v3_transactions_pb.QueryResponse>;
    responseDeserialize: grpc.deserialize<v3_transactions_pb.QueryResponse>;
}
interface ITransactionServiceService_IRemove extends grpc.MethodDefinition<v3_transactions_pb.RemoveRequest, v3_transactions_pb.RemoveResponse> {
    path: "/TransactionService/Remove";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v3_transactions_pb.RemoveRequest>;
    requestDeserialize: grpc.deserialize<v3_transactions_pb.RemoveRequest>;
    responseSerialize: grpc.serialize<v3_transactions_pb.RemoveResponse>;
    responseDeserialize: grpc.deserialize<v3_transactions_pb.RemoveResponse>;
}
interface ITransactionServiceService_IBatch extends grpc.MethodDefinition<v3_transactions_pb.BatchRequest, v3_transactions_pb.BatchResponse> {
    path: "/TransactionService/Batch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v3_transactions_pb.BatchRequest>;
    requestDeserialize: grpc.deserialize<v3_transactions_pb.BatchRequest>;
    responseSerialize: grpc.serialize<v3_transactions_pb.BatchResponse>;
    responseDeserialize: grpc.deserialize<v3_transactions_pb.BatchResponse>;
}

export const TransactionServiceService: ITransactionServiceService;

export interface ITransactionServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<v3_transactions_pb.GetRequest, v3_transactions_pb.GetResponse>;
    put: grpc.handleUnaryCall<v3_transactions_pb.PutRequest, v3_transactions_pb.PutResponse>;
    query: grpc.handleUnaryCall<v3_transactions_pb.QueryRequest, v3_transactions_pb.QueryResponse>;
    remove: grpc.handleUnaryCall<v3_transactions_pb.RemoveRequest, v3_transactions_pb.RemoveResponse>;
    batch: grpc.handleUnaryCall<v3_transactions_pb.BatchRequest, v3_transactions_pb.BatchResponse>;
}

export interface ITransactionServiceClient {
    get(request: v3_transactions_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: v3_transactions_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: v3_transactions_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.GetResponse) => void): grpc.ClientUnaryCall;
    put(request: v3_transactions_pb.PutRequest, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.PutResponse) => void): grpc.ClientUnaryCall;
    put(request: v3_transactions_pb.PutRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.PutResponse) => void): grpc.ClientUnaryCall;
    put(request: v3_transactions_pb.PutRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.PutResponse) => void): grpc.ClientUnaryCall;
    query(request: v3_transactions_pb.QueryRequest, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    query(request: v3_transactions_pb.QueryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    query(request: v3_transactions_pb.QueryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    remove(request: v3_transactions_pb.RemoveRequest, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    remove(request: v3_transactions_pb.RemoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    remove(request: v3_transactions_pb.RemoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    batch(request: v3_transactions_pb.BatchRequest, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.BatchResponse) => void): grpc.ClientUnaryCall;
    batch(request: v3_transactions_pb.BatchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.BatchResponse) => void): grpc.ClientUnaryCall;
    batch(request: v3_transactions_pb.BatchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.BatchResponse) => void): grpc.ClientUnaryCall;
}

export class TransactionServiceClient extends grpc.Client implements ITransactionServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: v3_transactions_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: v3_transactions_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: v3_transactions_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public put(request: v3_transactions_pb.PutRequest, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.PutResponse) => void): grpc.ClientUnaryCall;
    public put(request: v3_transactions_pb.PutRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.PutResponse) => void): grpc.ClientUnaryCall;
    public put(request: v3_transactions_pb.PutRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.PutResponse) => void): grpc.ClientUnaryCall;
    public query(request: v3_transactions_pb.QueryRequest, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    public query(request: v3_transactions_pb.QueryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    public query(request: v3_transactions_pb.QueryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    public remove(request: v3_transactions_pb.RemoveRequest, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    public remove(request: v3_transactions_pb.RemoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    public remove(request: v3_transactions_pb.RemoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    public batch(request: v3_transactions_pb.BatchRequest, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.BatchResponse) => void): grpc.ClientUnaryCall;
    public batch(request: v3_transactions_pb.BatchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.BatchResponse) => void): grpc.ClientUnaryCall;
    public batch(request: v3_transactions_pb.BatchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.BatchResponse) => void): grpc.ClientUnaryCall;
}
