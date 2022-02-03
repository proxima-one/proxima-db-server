// package: 
// file: proxima.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as proxima_pb from "./proxima_pb";

interface IProximaServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IProximaServiceService_IGet;
    put: IProximaServiceService_IPut;
    query: IProximaServiceService_IQuery;
    remove: IProximaServiceService_IRemove;
    batch: IProximaServiceService_IBatch;
    checkout: IProximaServiceService_ICheckout;
    commit: IProximaServiceService_ICommit;
    compact: IProximaServiceService_ICompact;
    scan: IProximaServiceService_IScan;
    stat: IProximaServiceService_IStat;
    create: IProximaServiceService_ICreate;
    open: IProximaServiceService_IOpen;
    close: IProximaServiceService_IClose;
    tableRemove: IProximaServiceService_ITableRemove;
}

interface IProximaServiceService_IGet extends grpc.MethodDefinition<proxima_pb.GetRequest, proxima_pb.GetResponse> {
    path: "/ProximaService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proxima_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<proxima_pb.GetRequest>;
    responseSerialize: grpc.serialize<proxima_pb.GetResponse>;
    responseDeserialize: grpc.deserialize<proxima_pb.GetResponse>;
}
interface IProximaServiceService_IPut extends grpc.MethodDefinition<proxima_pb.PutRequest, proxima_pb.PutResponse> {
    path: "/ProximaService/Put";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proxima_pb.PutRequest>;
    requestDeserialize: grpc.deserialize<proxima_pb.PutRequest>;
    responseSerialize: grpc.serialize<proxima_pb.PutResponse>;
    responseDeserialize: grpc.deserialize<proxima_pb.PutResponse>;
}
interface IProximaServiceService_IQuery extends grpc.MethodDefinition<proxima_pb.QueryRequest, proxima_pb.QueryResponse> {
    path: "/ProximaService/Query";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proxima_pb.QueryRequest>;
    requestDeserialize: grpc.deserialize<proxima_pb.QueryRequest>;
    responseSerialize: grpc.serialize<proxima_pb.QueryResponse>;
    responseDeserialize: grpc.deserialize<proxima_pb.QueryResponse>;
}
interface IProximaServiceService_IRemove extends grpc.MethodDefinition<proxima_pb.RemoveRequest, proxima_pb.RemoveResponse> {
    path: "/ProximaService/Remove";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proxima_pb.RemoveRequest>;
    requestDeserialize: grpc.deserialize<proxima_pb.RemoveRequest>;
    responseSerialize: grpc.serialize<proxima_pb.RemoveResponse>;
    responseDeserialize: grpc.deserialize<proxima_pb.RemoveResponse>;
}
interface IProximaServiceService_IBatch extends grpc.MethodDefinition<proxima_pb.BatchRequest, proxima_pb.BatchResponse> {
    path: "/ProximaService/Batch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proxima_pb.BatchRequest>;
    requestDeserialize: grpc.deserialize<proxima_pb.BatchRequest>;
    responseSerialize: grpc.serialize<proxima_pb.BatchResponse>;
    responseDeserialize: grpc.deserialize<proxima_pb.BatchResponse>;
}
interface IProximaServiceService_ICheckout extends grpc.MethodDefinition<proxima_pb.CheckoutRequest, proxima_pb.CheckoutResponse> {
    path: "/ProximaService/Checkout";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proxima_pb.CheckoutRequest>;
    requestDeserialize: grpc.deserialize<proxima_pb.CheckoutRequest>;
    responseSerialize: grpc.serialize<proxima_pb.CheckoutResponse>;
    responseDeserialize: grpc.deserialize<proxima_pb.CheckoutResponse>;
}
interface IProximaServiceService_ICommit extends grpc.MethodDefinition<proxima_pb.CommitRequest, proxima_pb.CommitResponse> {
    path: "/ProximaService/Commit";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proxima_pb.CommitRequest>;
    requestDeserialize: grpc.deserialize<proxima_pb.CommitRequest>;
    responseSerialize: grpc.serialize<proxima_pb.CommitResponse>;
    responseDeserialize: grpc.deserialize<proxima_pb.CommitResponse>;
}
interface IProximaServiceService_ICompact extends grpc.MethodDefinition<proxima_pb.CompactRequest, proxima_pb.CompactResponse> {
    path: "/ProximaService/Compact";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proxima_pb.CompactRequest>;
    requestDeserialize: grpc.deserialize<proxima_pb.CompactRequest>;
    responseSerialize: grpc.serialize<proxima_pb.CompactResponse>;
    responseDeserialize: grpc.deserialize<proxima_pb.CompactResponse>;
}
interface IProximaServiceService_IScan extends grpc.MethodDefinition<proxima_pb.ScanRequest, proxima_pb.ScanResponse> {
    path: "/ProximaService/Scan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proxima_pb.ScanRequest>;
    requestDeserialize: grpc.deserialize<proxima_pb.ScanRequest>;
    responseSerialize: grpc.serialize<proxima_pb.ScanResponse>;
    responseDeserialize: grpc.deserialize<proxima_pb.ScanResponse>;
}
interface IProximaServiceService_IStat extends grpc.MethodDefinition<proxima_pb.StatRequest, proxima_pb.StatResponse> {
    path: "/ProximaService/Stat";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proxima_pb.StatRequest>;
    requestDeserialize: grpc.deserialize<proxima_pb.StatRequest>;
    responseSerialize: grpc.serialize<proxima_pb.StatResponse>;
    responseDeserialize: grpc.deserialize<proxima_pb.StatResponse>;
}
interface IProximaServiceService_ICreate extends grpc.MethodDefinition<proxima_pb.CreateRequest, proxima_pb.CreateResponse> {
    path: "/ProximaService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proxima_pb.CreateRequest>;
    requestDeserialize: grpc.deserialize<proxima_pb.CreateRequest>;
    responseSerialize: grpc.serialize<proxima_pb.CreateResponse>;
    responseDeserialize: grpc.deserialize<proxima_pb.CreateResponse>;
}
interface IProximaServiceService_IOpen extends grpc.MethodDefinition<proxima_pb.OpenRequest, proxima_pb.OpenResponse> {
    path: "/ProximaService/Open";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proxima_pb.OpenRequest>;
    requestDeserialize: grpc.deserialize<proxima_pb.OpenRequest>;
    responseSerialize: grpc.serialize<proxima_pb.OpenResponse>;
    responseDeserialize: grpc.deserialize<proxima_pb.OpenResponse>;
}
interface IProximaServiceService_IClose extends grpc.MethodDefinition<proxima_pb.CloseRequest, proxima_pb.CloseResponse> {
    path: "/ProximaService/Close";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proxima_pb.CloseRequest>;
    requestDeserialize: grpc.deserialize<proxima_pb.CloseRequest>;
    responseSerialize: grpc.serialize<proxima_pb.CloseResponse>;
    responseDeserialize: grpc.deserialize<proxima_pb.CloseResponse>;
}
interface IProximaServiceService_ITableRemove extends grpc.MethodDefinition<proxima_pb.TableRemoveRequest, proxima_pb.TableRemoveResponse> {
    path: "/ProximaService/TableRemove";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proxima_pb.TableRemoveRequest>;
    requestDeserialize: grpc.deserialize<proxima_pb.TableRemoveRequest>;
    responseSerialize: grpc.serialize<proxima_pb.TableRemoveResponse>;
    responseDeserialize: grpc.deserialize<proxima_pb.TableRemoveResponse>;
}

export const ProximaServiceService: IProximaServiceService;

export interface IProximaServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<proxima_pb.GetRequest, proxima_pb.GetResponse>;
    put: grpc.handleUnaryCall<proxima_pb.PutRequest, proxima_pb.PutResponse>;
    query: grpc.handleUnaryCall<proxima_pb.QueryRequest, proxima_pb.QueryResponse>;
    remove: grpc.handleUnaryCall<proxima_pb.RemoveRequest, proxima_pb.RemoveResponse>;
    batch: grpc.handleUnaryCall<proxima_pb.BatchRequest, proxima_pb.BatchResponse>;
    checkout: grpc.handleUnaryCall<proxima_pb.CheckoutRequest, proxima_pb.CheckoutResponse>;
    commit: grpc.handleUnaryCall<proxima_pb.CommitRequest, proxima_pb.CommitResponse>;
    compact: grpc.handleUnaryCall<proxima_pb.CompactRequest, proxima_pb.CompactResponse>;
    scan: grpc.handleUnaryCall<proxima_pb.ScanRequest, proxima_pb.ScanResponse>;
    stat: grpc.handleUnaryCall<proxima_pb.StatRequest, proxima_pb.StatResponse>;
    create: grpc.handleUnaryCall<proxima_pb.CreateRequest, proxima_pb.CreateResponse>;
    open: grpc.handleUnaryCall<proxima_pb.OpenRequest, proxima_pb.OpenResponse>;
    close: grpc.handleUnaryCall<proxima_pb.CloseRequest, proxima_pb.CloseResponse>;
    tableRemove: grpc.handleUnaryCall<proxima_pb.TableRemoveRequest, proxima_pb.TableRemoveResponse>;
}

export interface IProximaServiceClient {
    get(request: proxima_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: proxima_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: proxima_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.GetResponse) => void): grpc.ClientUnaryCall;
    put(request: proxima_pb.PutRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.PutResponse) => void): grpc.ClientUnaryCall;
    put(request: proxima_pb.PutRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.PutResponse) => void): grpc.ClientUnaryCall;
    put(request: proxima_pb.PutRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.PutResponse) => void): grpc.ClientUnaryCall;
    query(request: proxima_pb.QueryRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    query(request: proxima_pb.QueryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    query(request: proxima_pb.QueryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    remove(request: proxima_pb.RemoveRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    remove(request: proxima_pb.RemoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    remove(request: proxima_pb.RemoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    batch(request: proxima_pb.BatchRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.BatchResponse) => void): grpc.ClientUnaryCall;
    batch(request: proxima_pb.BatchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.BatchResponse) => void): grpc.ClientUnaryCall;
    batch(request: proxima_pb.BatchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.BatchResponse) => void): grpc.ClientUnaryCall;
    checkout(request: proxima_pb.CheckoutRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.CheckoutResponse) => void): grpc.ClientUnaryCall;
    checkout(request: proxima_pb.CheckoutRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.CheckoutResponse) => void): grpc.ClientUnaryCall;
    checkout(request: proxima_pb.CheckoutRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.CheckoutResponse) => void): grpc.ClientUnaryCall;
    commit(request: proxima_pb.CommitRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.CommitResponse) => void): grpc.ClientUnaryCall;
    commit(request: proxima_pb.CommitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.CommitResponse) => void): grpc.ClientUnaryCall;
    commit(request: proxima_pb.CommitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.CommitResponse) => void): grpc.ClientUnaryCall;
    compact(request: proxima_pb.CompactRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.CompactResponse) => void): grpc.ClientUnaryCall;
    compact(request: proxima_pb.CompactRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.CompactResponse) => void): grpc.ClientUnaryCall;
    compact(request: proxima_pb.CompactRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.CompactResponse) => void): grpc.ClientUnaryCall;
    scan(request: proxima_pb.ScanRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.ScanResponse) => void): grpc.ClientUnaryCall;
    scan(request: proxima_pb.ScanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.ScanResponse) => void): grpc.ClientUnaryCall;
    scan(request: proxima_pb.ScanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.ScanResponse) => void): grpc.ClientUnaryCall;
    stat(request: proxima_pb.StatRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.StatResponse) => void): grpc.ClientUnaryCall;
    stat(request: proxima_pb.StatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.StatResponse) => void): grpc.ClientUnaryCall;
    stat(request: proxima_pb.StatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.StatResponse) => void): grpc.ClientUnaryCall;
    create(request: proxima_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: proxima_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: proxima_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    open(request: proxima_pb.OpenRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.OpenResponse) => void): grpc.ClientUnaryCall;
    open(request: proxima_pb.OpenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.OpenResponse) => void): grpc.ClientUnaryCall;
    open(request: proxima_pb.OpenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.OpenResponse) => void): grpc.ClientUnaryCall;
    close(request: proxima_pb.CloseRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.CloseResponse) => void): grpc.ClientUnaryCall;
    close(request: proxima_pb.CloseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.CloseResponse) => void): grpc.ClientUnaryCall;
    close(request: proxima_pb.CloseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.CloseResponse) => void): grpc.ClientUnaryCall;
    tableRemove(request: proxima_pb.TableRemoveRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.TableRemoveResponse) => void): grpc.ClientUnaryCall;
    tableRemove(request: proxima_pb.TableRemoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.TableRemoveResponse) => void): grpc.ClientUnaryCall;
    tableRemove(request: proxima_pb.TableRemoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.TableRemoveResponse) => void): grpc.ClientUnaryCall;
}

export class ProximaServiceClient extends grpc.Client implements IProximaServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: proxima_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: proxima_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: proxima_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public put(request: proxima_pb.PutRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.PutResponse) => void): grpc.ClientUnaryCall;
    public put(request: proxima_pb.PutRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.PutResponse) => void): grpc.ClientUnaryCall;
    public put(request: proxima_pb.PutRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.PutResponse) => void): grpc.ClientUnaryCall;
    public query(request: proxima_pb.QueryRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    public query(request: proxima_pb.QueryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    public query(request: proxima_pb.QueryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    public remove(request: proxima_pb.RemoveRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    public remove(request: proxima_pb.RemoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    public remove(request: proxima_pb.RemoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    public batch(request: proxima_pb.BatchRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.BatchResponse) => void): grpc.ClientUnaryCall;
    public batch(request: proxima_pb.BatchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.BatchResponse) => void): grpc.ClientUnaryCall;
    public batch(request: proxima_pb.BatchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.BatchResponse) => void): grpc.ClientUnaryCall;
    public checkout(request: proxima_pb.CheckoutRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.CheckoutResponse) => void): grpc.ClientUnaryCall;
    public checkout(request: proxima_pb.CheckoutRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.CheckoutResponse) => void): grpc.ClientUnaryCall;
    public checkout(request: proxima_pb.CheckoutRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.CheckoutResponse) => void): grpc.ClientUnaryCall;
    public commit(request: proxima_pb.CommitRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.CommitResponse) => void): grpc.ClientUnaryCall;
    public commit(request: proxima_pb.CommitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.CommitResponse) => void): grpc.ClientUnaryCall;
    public commit(request: proxima_pb.CommitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.CommitResponse) => void): grpc.ClientUnaryCall;
    public compact(request: proxima_pb.CompactRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.CompactResponse) => void): grpc.ClientUnaryCall;
    public compact(request: proxima_pb.CompactRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.CompactResponse) => void): grpc.ClientUnaryCall;
    public compact(request: proxima_pb.CompactRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.CompactResponse) => void): grpc.ClientUnaryCall;
    public scan(request: proxima_pb.ScanRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.ScanResponse) => void): grpc.ClientUnaryCall;
    public scan(request: proxima_pb.ScanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.ScanResponse) => void): grpc.ClientUnaryCall;
    public scan(request: proxima_pb.ScanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.ScanResponse) => void): grpc.ClientUnaryCall;
    public stat(request: proxima_pb.StatRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.StatResponse) => void): grpc.ClientUnaryCall;
    public stat(request: proxima_pb.StatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.StatResponse) => void): grpc.ClientUnaryCall;
    public stat(request: proxima_pb.StatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.StatResponse) => void): grpc.ClientUnaryCall;
    public create(request: proxima_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: proxima_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: proxima_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public open(request: proxima_pb.OpenRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.OpenResponse) => void): grpc.ClientUnaryCall;
    public open(request: proxima_pb.OpenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.OpenResponse) => void): grpc.ClientUnaryCall;
    public open(request: proxima_pb.OpenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.OpenResponse) => void): grpc.ClientUnaryCall;
    public close(request: proxima_pb.CloseRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.CloseResponse) => void): grpc.ClientUnaryCall;
    public close(request: proxima_pb.CloseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.CloseResponse) => void): grpc.ClientUnaryCall;
    public close(request: proxima_pb.CloseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.CloseResponse) => void): grpc.ClientUnaryCall;
    public tableRemove(request: proxima_pb.TableRemoveRequest, callback: (error: grpc.ServiceError | null, response: proxima_pb.TableRemoveResponse) => void): grpc.ClientUnaryCall;
    public tableRemove(request: proxima_pb.TableRemoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxima_pb.TableRemoveResponse) => void): grpc.ClientUnaryCall;
    public tableRemove(request: proxima_pb.TableRemoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxima_pb.TableRemoveResponse) => void): grpc.ClientUnaryCall;
}
