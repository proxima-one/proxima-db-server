// package: proxima
// file: v3/proxima.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as v3_proxima_pb from "../v3/proxima_pb";
import * as v3_collections_pb from "../v3/collections_pb";
import * as v3_transactions_pb from "../v3/transactions_pb";

interface IProximaServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    checkout: IProximaServiceService_ICheckout;
    commit: IProximaServiceService_ICommit;
    compact: IProximaServiceService_ICompact;
    scan: IProximaServiceService_IScan;
    stat: IProximaServiceService_IStat;
    create: IProximaServiceService_ICreate;
    open: IProximaServiceService_IOpen;
    close: IProximaServiceService_IClose;
    tableRemove: IProximaServiceService_ITableRemove;
    collectionGet: IProximaServiceService_ICollectionGet;
    collectionCreate: IProximaServiceService_ICollectionCreate;
    collectionBatch: IProximaServiceService_ICollectionBatch;
    collectionUpdate: IProximaServiceService_ICollectionUpdate;
    collectionRemove: IProximaServiceService_ICollectionRemove;
    get: IProximaServiceService_IGet;
    put: IProximaServiceService_IPut;
    query: IProximaServiceService_IQuery;
    update: IProximaServiceService_IUpdate;
    remove: IProximaServiceService_IRemove;
    batch: IProximaServiceService_IBatch;
}

interface IProximaServiceService_ICheckout extends grpc.MethodDefinition<v3_proxima_pb.CheckoutRequest, v3_proxima_pb.CheckoutResponse> {
    path: "/proxima.ProximaService/Checkout";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v3_proxima_pb.CheckoutRequest>;
    requestDeserialize: grpc.deserialize<v3_proxima_pb.CheckoutRequest>;
    responseSerialize: grpc.serialize<v3_proxima_pb.CheckoutResponse>;
    responseDeserialize: grpc.deserialize<v3_proxima_pb.CheckoutResponse>;
}
interface IProximaServiceService_ICommit extends grpc.MethodDefinition<v3_proxima_pb.CommitRequest, v3_proxima_pb.CommitResponse> {
    path: "/proxima.ProximaService/Commit";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v3_proxima_pb.CommitRequest>;
    requestDeserialize: grpc.deserialize<v3_proxima_pb.CommitRequest>;
    responseSerialize: grpc.serialize<v3_proxima_pb.CommitResponse>;
    responseDeserialize: grpc.deserialize<v3_proxima_pb.CommitResponse>;
}
interface IProximaServiceService_ICompact extends grpc.MethodDefinition<v3_proxima_pb.CompactRequest, v3_proxima_pb.CompactResponse> {
    path: "/proxima.ProximaService/Compact";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v3_proxima_pb.CompactRequest>;
    requestDeserialize: grpc.deserialize<v3_proxima_pb.CompactRequest>;
    responseSerialize: grpc.serialize<v3_proxima_pb.CompactResponse>;
    responseDeserialize: grpc.deserialize<v3_proxima_pb.CompactResponse>;
}
interface IProximaServiceService_IScan extends grpc.MethodDefinition<v3_proxima_pb.ScanRequest, v3_proxima_pb.ScanResponse> {
    path: "/proxima.ProximaService/Scan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v3_proxima_pb.ScanRequest>;
    requestDeserialize: grpc.deserialize<v3_proxima_pb.ScanRequest>;
    responseSerialize: grpc.serialize<v3_proxima_pb.ScanResponse>;
    responseDeserialize: grpc.deserialize<v3_proxima_pb.ScanResponse>;
}
interface IProximaServiceService_IStat extends grpc.MethodDefinition<v3_proxima_pb.StatRequest, v3_proxima_pb.StatResponse> {
    path: "/proxima.ProximaService/Stat";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v3_proxima_pb.StatRequest>;
    requestDeserialize: grpc.deserialize<v3_proxima_pb.StatRequest>;
    responseSerialize: grpc.serialize<v3_proxima_pb.StatResponse>;
    responseDeserialize: grpc.deserialize<v3_proxima_pb.StatResponse>;
}
interface IProximaServiceService_ICreate extends grpc.MethodDefinition<v3_proxima_pb.CreateRequest, v3_proxima_pb.CreateResponse> {
    path: "/proxima.ProximaService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v3_proxima_pb.CreateRequest>;
    requestDeserialize: grpc.deserialize<v3_proxima_pb.CreateRequest>;
    responseSerialize: grpc.serialize<v3_proxima_pb.CreateResponse>;
    responseDeserialize: grpc.deserialize<v3_proxima_pb.CreateResponse>;
}
interface IProximaServiceService_IOpen extends grpc.MethodDefinition<v3_proxima_pb.OpenRequest, v3_proxima_pb.OpenResponse> {
    path: "/proxima.ProximaService/Open";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v3_proxima_pb.OpenRequest>;
    requestDeserialize: grpc.deserialize<v3_proxima_pb.OpenRequest>;
    responseSerialize: grpc.serialize<v3_proxima_pb.OpenResponse>;
    responseDeserialize: grpc.deserialize<v3_proxima_pb.OpenResponse>;
}
interface IProximaServiceService_IClose extends grpc.MethodDefinition<v3_proxima_pb.CloseRequest, v3_proxima_pb.CloseResponse> {
    path: "/proxima.ProximaService/Close";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v3_proxima_pb.CloseRequest>;
    requestDeserialize: grpc.deserialize<v3_proxima_pb.CloseRequest>;
    responseSerialize: grpc.serialize<v3_proxima_pb.CloseResponse>;
    responseDeserialize: grpc.deserialize<v3_proxima_pb.CloseResponse>;
}
interface IProximaServiceService_ITableRemove extends grpc.MethodDefinition<v3_proxima_pb.TableRemoveRequest, v3_proxima_pb.TableRemoveResponse> {
    path: "/proxima.ProximaService/TableRemove";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v3_proxima_pb.TableRemoveRequest>;
    requestDeserialize: grpc.deserialize<v3_proxima_pb.TableRemoveRequest>;
    responseSerialize: grpc.serialize<v3_proxima_pb.TableRemoveResponse>;
    responseDeserialize: grpc.deserialize<v3_proxima_pb.TableRemoveResponse>;
}
interface IProximaServiceService_ICollectionGet extends grpc.MethodDefinition<v3_collections_pb.GetCollectionRequest, v3_collections_pb.GetCollectionResponse> {
    path: "/proxima.ProximaService/CollectionGet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v3_collections_pb.GetCollectionRequest>;
    requestDeserialize: grpc.deserialize<v3_collections_pb.GetCollectionRequest>;
    responseSerialize: grpc.serialize<v3_collections_pb.GetCollectionResponse>;
    responseDeserialize: grpc.deserialize<v3_collections_pb.GetCollectionResponse>;
}
interface IProximaServiceService_ICollectionCreate extends grpc.MethodDefinition<v3_collections_pb.CreateCollectionRequest, v3_collections_pb.CreateCollectionResponse> {
    path: "/proxima.ProximaService/CollectionCreate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v3_collections_pb.CreateCollectionRequest>;
    requestDeserialize: grpc.deserialize<v3_collections_pb.CreateCollectionRequest>;
    responseSerialize: grpc.serialize<v3_collections_pb.CreateCollectionResponse>;
    responseDeserialize: grpc.deserialize<v3_collections_pb.CreateCollectionResponse>;
}
interface IProximaServiceService_ICollectionBatch extends grpc.MethodDefinition<v3_collections_pb.BatchCollectionRequest, v3_collections_pb.BatchCollectionResponse> {
    path: "/proxima.ProximaService/CollectionBatch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v3_collections_pb.BatchCollectionRequest>;
    requestDeserialize: grpc.deserialize<v3_collections_pb.BatchCollectionRequest>;
    responseSerialize: grpc.serialize<v3_collections_pb.BatchCollectionResponse>;
    responseDeserialize: grpc.deserialize<v3_collections_pb.BatchCollectionResponse>;
}
interface IProximaServiceService_ICollectionUpdate extends grpc.MethodDefinition<v3_collections_pb.UpdateCollectionRequest, v3_collections_pb.UpdateCollectionResponse> {
    path: "/proxima.ProximaService/CollectionUpdate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v3_collections_pb.UpdateCollectionRequest>;
    requestDeserialize: grpc.deserialize<v3_collections_pb.UpdateCollectionRequest>;
    responseSerialize: grpc.serialize<v3_collections_pb.UpdateCollectionResponse>;
    responseDeserialize: grpc.deserialize<v3_collections_pb.UpdateCollectionResponse>;
}
interface IProximaServiceService_ICollectionRemove extends grpc.MethodDefinition<v3_collections_pb.RemoveCollectionRequest, v3_collections_pb.RemoveCollectionResponse> {
    path: "/proxima.ProximaService/CollectionRemove";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v3_collections_pb.RemoveCollectionRequest>;
    requestDeserialize: grpc.deserialize<v3_collections_pb.RemoveCollectionRequest>;
    responseSerialize: grpc.serialize<v3_collections_pb.RemoveCollectionResponse>;
    responseDeserialize: grpc.deserialize<v3_collections_pb.RemoveCollectionResponse>;
}
interface IProximaServiceService_IGet extends grpc.MethodDefinition<v3_transactions_pb.GetRequest, v3_transactions_pb.GetResponse> {
    path: "/proxima.ProximaService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v3_transactions_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<v3_transactions_pb.GetRequest>;
    responseSerialize: grpc.serialize<v3_transactions_pb.GetResponse>;
    responseDeserialize: grpc.deserialize<v3_transactions_pb.GetResponse>;
}
interface IProximaServiceService_IPut extends grpc.MethodDefinition<v3_transactions_pb.PutRequest, v3_transactions_pb.PutResponse> {
    path: "/proxima.ProximaService/Put";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v3_transactions_pb.PutRequest>;
    requestDeserialize: grpc.deserialize<v3_transactions_pb.PutRequest>;
    responseSerialize: grpc.serialize<v3_transactions_pb.PutResponse>;
    responseDeserialize: grpc.deserialize<v3_transactions_pb.PutResponse>;
}
interface IProximaServiceService_IQuery extends grpc.MethodDefinition<v3_transactions_pb.QueryRequest, v3_transactions_pb.QueryResponse> {
    path: "/proxima.ProximaService/Query";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v3_transactions_pb.QueryRequest>;
    requestDeserialize: grpc.deserialize<v3_transactions_pb.QueryRequest>;
    responseSerialize: grpc.serialize<v3_transactions_pb.QueryResponse>;
    responseDeserialize: grpc.deserialize<v3_transactions_pb.QueryResponse>;
}
interface IProximaServiceService_IUpdate extends grpc.MethodDefinition<v3_transactions_pb.UpdateRequest, v3_transactions_pb.UpdateResponse> {
    path: "/proxima.ProximaService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v3_transactions_pb.UpdateRequest>;
    requestDeserialize: grpc.deserialize<v3_transactions_pb.UpdateRequest>;
    responseSerialize: grpc.serialize<v3_transactions_pb.UpdateResponse>;
    responseDeserialize: grpc.deserialize<v3_transactions_pb.UpdateResponse>;
}
interface IProximaServiceService_IRemove extends grpc.MethodDefinition<v3_transactions_pb.RemoveRequest, v3_transactions_pb.RemoveResponse> {
    path: "/proxima.ProximaService/Remove";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v3_transactions_pb.RemoveRequest>;
    requestDeserialize: grpc.deserialize<v3_transactions_pb.RemoveRequest>;
    responseSerialize: grpc.serialize<v3_transactions_pb.RemoveResponse>;
    responseDeserialize: grpc.deserialize<v3_transactions_pb.RemoveResponse>;
}
interface IProximaServiceService_IBatch extends grpc.MethodDefinition<v3_transactions_pb.BatchRequest, v3_transactions_pb.BatchResponse> {
    path: "/proxima.ProximaService/Batch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v3_transactions_pb.BatchRequest>;
    requestDeserialize: grpc.deserialize<v3_transactions_pb.BatchRequest>;
    responseSerialize: grpc.serialize<v3_transactions_pb.BatchResponse>;
    responseDeserialize: grpc.deserialize<v3_transactions_pb.BatchResponse>;
}

export const ProximaServiceService: IProximaServiceService;

export interface IProximaServiceServer extends grpc.UntypedServiceImplementation {
    checkout: grpc.handleUnaryCall<v3_proxima_pb.CheckoutRequest, v3_proxima_pb.CheckoutResponse>;
    commit: grpc.handleUnaryCall<v3_proxima_pb.CommitRequest, v3_proxima_pb.CommitResponse>;
    compact: grpc.handleUnaryCall<v3_proxima_pb.CompactRequest, v3_proxima_pb.CompactResponse>;
    scan: grpc.handleUnaryCall<v3_proxima_pb.ScanRequest, v3_proxima_pb.ScanResponse>;
    stat: grpc.handleUnaryCall<v3_proxima_pb.StatRequest, v3_proxima_pb.StatResponse>;
    create: grpc.handleUnaryCall<v3_proxima_pb.CreateRequest, v3_proxima_pb.CreateResponse>;
    open: grpc.handleUnaryCall<v3_proxima_pb.OpenRequest, v3_proxima_pb.OpenResponse>;
    close: grpc.handleUnaryCall<v3_proxima_pb.CloseRequest, v3_proxima_pb.CloseResponse>;
    tableRemove: grpc.handleUnaryCall<v3_proxima_pb.TableRemoveRequest, v3_proxima_pb.TableRemoveResponse>;
    collectionGet: grpc.handleUnaryCall<v3_collections_pb.GetCollectionRequest, v3_collections_pb.GetCollectionResponse>;
    collectionCreate: grpc.handleUnaryCall<v3_collections_pb.CreateCollectionRequest, v3_collections_pb.CreateCollectionResponse>;
    collectionBatch: grpc.handleUnaryCall<v3_collections_pb.BatchCollectionRequest, v3_collections_pb.BatchCollectionResponse>;
    collectionUpdate: grpc.handleUnaryCall<v3_collections_pb.UpdateCollectionRequest, v3_collections_pb.UpdateCollectionResponse>;
    collectionRemove: grpc.handleUnaryCall<v3_collections_pb.RemoveCollectionRequest, v3_collections_pb.RemoveCollectionResponse>;
    get: grpc.handleUnaryCall<v3_transactions_pb.GetRequest, v3_transactions_pb.GetResponse>;
    put: grpc.handleUnaryCall<v3_transactions_pb.PutRequest, v3_transactions_pb.PutResponse>;
    query: grpc.handleUnaryCall<v3_transactions_pb.QueryRequest, v3_transactions_pb.QueryResponse>;
    update: grpc.handleUnaryCall<v3_transactions_pb.UpdateRequest, v3_transactions_pb.UpdateResponse>;
    remove: grpc.handleUnaryCall<v3_transactions_pb.RemoveRequest, v3_transactions_pb.RemoveResponse>;
    batch: grpc.handleUnaryCall<v3_transactions_pb.BatchRequest, v3_transactions_pb.BatchResponse>;
}

export interface IProximaServiceClient {
    checkout(request: v3_proxima_pb.CheckoutRequest, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CheckoutResponse) => void): grpc.ClientUnaryCall;
    checkout(request: v3_proxima_pb.CheckoutRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CheckoutResponse) => void): grpc.ClientUnaryCall;
    checkout(request: v3_proxima_pb.CheckoutRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CheckoutResponse) => void): grpc.ClientUnaryCall;
    commit(request: v3_proxima_pb.CommitRequest, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CommitResponse) => void): grpc.ClientUnaryCall;
    commit(request: v3_proxima_pb.CommitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CommitResponse) => void): grpc.ClientUnaryCall;
    commit(request: v3_proxima_pb.CommitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CommitResponse) => void): grpc.ClientUnaryCall;
    compact(request: v3_proxima_pb.CompactRequest, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CompactResponse) => void): grpc.ClientUnaryCall;
    compact(request: v3_proxima_pb.CompactRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CompactResponse) => void): grpc.ClientUnaryCall;
    compact(request: v3_proxima_pb.CompactRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CompactResponse) => void): grpc.ClientUnaryCall;
    scan(request: v3_proxima_pb.ScanRequest, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.ScanResponse) => void): grpc.ClientUnaryCall;
    scan(request: v3_proxima_pb.ScanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.ScanResponse) => void): grpc.ClientUnaryCall;
    scan(request: v3_proxima_pb.ScanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.ScanResponse) => void): grpc.ClientUnaryCall;
    stat(request: v3_proxima_pb.StatRequest, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.StatResponse) => void): grpc.ClientUnaryCall;
    stat(request: v3_proxima_pb.StatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.StatResponse) => void): grpc.ClientUnaryCall;
    stat(request: v3_proxima_pb.StatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.StatResponse) => void): grpc.ClientUnaryCall;
    create(request: v3_proxima_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: v3_proxima_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: v3_proxima_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    open(request: v3_proxima_pb.OpenRequest, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.OpenResponse) => void): grpc.ClientUnaryCall;
    open(request: v3_proxima_pb.OpenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.OpenResponse) => void): grpc.ClientUnaryCall;
    open(request: v3_proxima_pb.OpenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.OpenResponse) => void): grpc.ClientUnaryCall;
    close(request: v3_proxima_pb.CloseRequest, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CloseResponse) => void): grpc.ClientUnaryCall;
    close(request: v3_proxima_pb.CloseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CloseResponse) => void): grpc.ClientUnaryCall;
    close(request: v3_proxima_pb.CloseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CloseResponse) => void): grpc.ClientUnaryCall;
    tableRemove(request: v3_proxima_pb.TableRemoveRequest, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.TableRemoveResponse) => void): grpc.ClientUnaryCall;
    tableRemove(request: v3_proxima_pb.TableRemoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.TableRemoveResponse) => void): grpc.ClientUnaryCall;
    tableRemove(request: v3_proxima_pb.TableRemoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.TableRemoveResponse) => void): grpc.ClientUnaryCall;
    collectionGet(request: v3_collections_pb.GetCollectionRequest, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.GetCollectionResponse) => void): grpc.ClientUnaryCall;
    collectionGet(request: v3_collections_pb.GetCollectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.GetCollectionResponse) => void): grpc.ClientUnaryCall;
    collectionGet(request: v3_collections_pb.GetCollectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.GetCollectionResponse) => void): grpc.ClientUnaryCall;
    collectionCreate(request: v3_collections_pb.CreateCollectionRequest, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.CreateCollectionResponse) => void): grpc.ClientUnaryCall;
    collectionCreate(request: v3_collections_pb.CreateCollectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.CreateCollectionResponse) => void): grpc.ClientUnaryCall;
    collectionCreate(request: v3_collections_pb.CreateCollectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.CreateCollectionResponse) => void): grpc.ClientUnaryCall;
    collectionBatch(request: v3_collections_pb.BatchCollectionRequest, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.BatchCollectionResponse) => void): grpc.ClientUnaryCall;
    collectionBatch(request: v3_collections_pb.BatchCollectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.BatchCollectionResponse) => void): grpc.ClientUnaryCall;
    collectionBatch(request: v3_collections_pb.BatchCollectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.BatchCollectionResponse) => void): grpc.ClientUnaryCall;
    collectionUpdate(request: v3_collections_pb.UpdateCollectionRequest, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.UpdateCollectionResponse) => void): grpc.ClientUnaryCall;
    collectionUpdate(request: v3_collections_pb.UpdateCollectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.UpdateCollectionResponse) => void): grpc.ClientUnaryCall;
    collectionUpdate(request: v3_collections_pb.UpdateCollectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.UpdateCollectionResponse) => void): grpc.ClientUnaryCall;
    collectionRemove(request: v3_collections_pb.RemoveCollectionRequest, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.RemoveCollectionResponse) => void): grpc.ClientUnaryCall;
    collectionRemove(request: v3_collections_pb.RemoveCollectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.RemoveCollectionResponse) => void): grpc.ClientUnaryCall;
    collectionRemove(request: v3_collections_pb.RemoveCollectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.RemoveCollectionResponse) => void): grpc.ClientUnaryCall;
    get(request: v3_transactions_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: v3_transactions_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: v3_transactions_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.GetResponse) => void): grpc.ClientUnaryCall;
    put(request: v3_transactions_pb.PutRequest, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.PutResponse) => void): grpc.ClientUnaryCall;
    put(request: v3_transactions_pb.PutRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.PutResponse) => void): grpc.ClientUnaryCall;
    put(request: v3_transactions_pb.PutRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.PutResponse) => void): grpc.ClientUnaryCall;
    query(request: v3_transactions_pb.QueryRequest, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    query(request: v3_transactions_pb.QueryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    query(request: v3_transactions_pb.QueryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    update(request: v3_transactions_pb.UpdateRequest, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    update(request: v3_transactions_pb.UpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    update(request: v3_transactions_pb.UpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    remove(request: v3_transactions_pb.RemoveRequest, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    remove(request: v3_transactions_pb.RemoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    remove(request: v3_transactions_pb.RemoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    batch(request: v3_transactions_pb.BatchRequest, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.BatchResponse) => void): grpc.ClientUnaryCall;
    batch(request: v3_transactions_pb.BatchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.BatchResponse) => void): grpc.ClientUnaryCall;
    batch(request: v3_transactions_pb.BatchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.BatchResponse) => void): grpc.ClientUnaryCall;
}

export class ProximaServiceClient extends grpc.Client implements IProximaServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public checkout(request: v3_proxima_pb.CheckoutRequest, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CheckoutResponse) => void): grpc.ClientUnaryCall;
    public checkout(request: v3_proxima_pb.CheckoutRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CheckoutResponse) => void): grpc.ClientUnaryCall;
    public checkout(request: v3_proxima_pb.CheckoutRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CheckoutResponse) => void): grpc.ClientUnaryCall;
    public commit(request: v3_proxima_pb.CommitRequest, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CommitResponse) => void): grpc.ClientUnaryCall;
    public commit(request: v3_proxima_pb.CommitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CommitResponse) => void): grpc.ClientUnaryCall;
    public commit(request: v3_proxima_pb.CommitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CommitResponse) => void): grpc.ClientUnaryCall;
    public compact(request: v3_proxima_pb.CompactRequest, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CompactResponse) => void): grpc.ClientUnaryCall;
    public compact(request: v3_proxima_pb.CompactRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CompactResponse) => void): grpc.ClientUnaryCall;
    public compact(request: v3_proxima_pb.CompactRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CompactResponse) => void): grpc.ClientUnaryCall;
    public scan(request: v3_proxima_pb.ScanRequest, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.ScanResponse) => void): grpc.ClientUnaryCall;
    public scan(request: v3_proxima_pb.ScanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.ScanResponse) => void): grpc.ClientUnaryCall;
    public scan(request: v3_proxima_pb.ScanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.ScanResponse) => void): grpc.ClientUnaryCall;
    public stat(request: v3_proxima_pb.StatRequest, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.StatResponse) => void): grpc.ClientUnaryCall;
    public stat(request: v3_proxima_pb.StatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.StatResponse) => void): grpc.ClientUnaryCall;
    public stat(request: v3_proxima_pb.StatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.StatResponse) => void): grpc.ClientUnaryCall;
    public create(request: v3_proxima_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: v3_proxima_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: v3_proxima_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public open(request: v3_proxima_pb.OpenRequest, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.OpenResponse) => void): grpc.ClientUnaryCall;
    public open(request: v3_proxima_pb.OpenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.OpenResponse) => void): grpc.ClientUnaryCall;
    public open(request: v3_proxima_pb.OpenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.OpenResponse) => void): grpc.ClientUnaryCall;
    public close(request: v3_proxima_pb.CloseRequest, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CloseResponse) => void): grpc.ClientUnaryCall;
    public close(request: v3_proxima_pb.CloseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CloseResponse) => void): grpc.ClientUnaryCall;
    public close(request: v3_proxima_pb.CloseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.CloseResponse) => void): grpc.ClientUnaryCall;
    public tableRemove(request: v3_proxima_pb.TableRemoveRequest, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.TableRemoveResponse) => void): grpc.ClientUnaryCall;
    public tableRemove(request: v3_proxima_pb.TableRemoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.TableRemoveResponse) => void): grpc.ClientUnaryCall;
    public tableRemove(request: v3_proxima_pb.TableRemoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_proxima_pb.TableRemoveResponse) => void): grpc.ClientUnaryCall;
    public collectionGet(request: v3_collections_pb.GetCollectionRequest, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.GetCollectionResponse) => void): grpc.ClientUnaryCall;
    public collectionGet(request: v3_collections_pb.GetCollectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.GetCollectionResponse) => void): grpc.ClientUnaryCall;
    public collectionGet(request: v3_collections_pb.GetCollectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.GetCollectionResponse) => void): grpc.ClientUnaryCall;
    public collectionCreate(request: v3_collections_pb.CreateCollectionRequest, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.CreateCollectionResponse) => void): grpc.ClientUnaryCall;
    public collectionCreate(request: v3_collections_pb.CreateCollectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.CreateCollectionResponse) => void): grpc.ClientUnaryCall;
    public collectionCreate(request: v3_collections_pb.CreateCollectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.CreateCollectionResponse) => void): grpc.ClientUnaryCall;
    public collectionBatch(request: v3_collections_pb.BatchCollectionRequest, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.BatchCollectionResponse) => void): grpc.ClientUnaryCall;
    public collectionBatch(request: v3_collections_pb.BatchCollectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.BatchCollectionResponse) => void): grpc.ClientUnaryCall;
    public collectionBatch(request: v3_collections_pb.BatchCollectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.BatchCollectionResponse) => void): grpc.ClientUnaryCall;
    public collectionUpdate(request: v3_collections_pb.UpdateCollectionRequest, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.UpdateCollectionResponse) => void): grpc.ClientUnaryCall;
    public collectionUpdate(request: v3_collections_pb.UpdateCollectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.UpdateCollectionResponse) => void): grpc.ClientUnaryCall;
    public collectionUpdate(request: v3_collections_pb.UpdateCollectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.UpdateCollectionResponse) => void): grpc.ClientUnaryCall;
    public collectionRemove(request: v3_collections_pb.RemoveCollectionRequest, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.RemoveCollectionResponse) => void): grpc.ClientUnaryCall;
    public collectionRemove(request: v3_collections_pb.RemoveCollectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.RemoveCollectionResponse) => void): grpc.ClientUnaryCall;
    public collectionRemove(request: v3_collections_pb.RemoveCollectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_collections_pb.RemoveCollectionResponse) => void): grpc.ClientUnaryCall;
    public get(request: v3_transactions_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: v3_transactions_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: v3_transactions_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public put(request: v3_transactions_pb.PutRequest, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.PutResponse) => void): grpc.ClientUnaryCall;
    public put(request: v3_transactions_pb.PutRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.PutResponse) => void): grpc.ClientUnaryCall;
    public put(request: v3_transactions_pb.PutRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.PutResponse) => void): grpc.ClientUnaryCall;
    public query(request: v3_transactions_pb.QueryRequest, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    public query(request: v3_transactions_pb.QueryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    public query(request: v3_transactions_pb.QueryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    public update(request: v3_transactions_pb.UpdateRequest, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    public update(request: v3_transactions_pb.UpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    public update(request: v3_transactions_pb.UpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    public remove(request: v3_transactions_pb.RemoveRequest, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    public remove(request: v3_transactions_pb.RemoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    public remove(request: v3_transactions_pb.RemoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    public batch(request: v3_transactions_pb.BatchRequest, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.BatchResponse) => void): grpc.ClientUnaryCall;
    public batch(request: v3_transactions_pb.BatchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.BatchResponse) => void): grpc.ClientUnaryCall;
    public batch(request: v3_transactions_pb.BatchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v3_transactions_pb.BatchResponse) => void): grpc.ClientUnaryCall;
}
