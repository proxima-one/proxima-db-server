// package: 
// file: v3/transactions.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetRequest;
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): GetRequest;
    getProve(): boolean;
    setProve(value: boolean): GetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRequest;
    static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
    export type AsObject = {
        name: string,
        key: Uint8Array | string,
        prove: boolean,
    }
}

export class RemoveRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): RemoveRequest;
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): RemoveRequest;
    getProve(): boolean;
    setProve(value: boolean): RemoveRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveRequest): RemoveRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveRequest;
    static deserializeBinaryFromReader(message: RemoveRequest, reader: jspb.BinaryReader): RemoveRequest;
}

export namespace RemoveRequest {
    export type AsObject = {
        name: string,
        key: Uint8Array | string,
        prove: boolean,
    }
}

export class PutRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): PutRequest;
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): PutRequest;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): PutRequest;
    getProve(): boolean;
    setProve(value: boolean): PutRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PutRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PutRequest): PutRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PutRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PutRequest;
    static deserializeBinaryFromReader(message: PutRequest, reader: jspb.BinaryReader): PutRequest;
}

export namespace PutRequest {
    export type AsObject = {
        name: string,
        key: Uint8Array | string,
        value: Uint8Array | string,
        prove: boolean,
    }
}

export class UpdateRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): UpdateRequest;
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): UpdateRequest;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): UpdateRequest;
    getProve(): boolean;
    setProve(value: boolean): UpdateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRequest;
    static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

export namespace UpdateRequest {
    export type AsObject = {
        name: string,
        key: Uint8Array | string,
        value: Uint8Array | string,
        prove: boolean,
    }
}

export class BatchRequest extends jspb.Message { 
    getProve(): boolean;
    setProve(value: boolean): BatchRequest;
    clearRequestsList(): void;
    getRequestsList(): Array<PutRequest>;
    setRequestsList(value: Array<PutRequest>): BatchRequest;
    addRequests(value?: PutRequest, index?: number): PutRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BatchRequest): BatchRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchRequest;
    static deserializeBinaryFromReader(message: BatchRequest, reader: jspb.BinaryReader): BatchRequest;
}

export namespace BatchRequest {
    export type AsObject = {
        prove: boolean,
        requestsList: Array<PutRequest.AsObject>,
    }
}

export class BatchResponse extends jspb.Message { 
    clearResponsesList(): void;
    getResponsesList(): Array<PutResponse>;
    setResponsesList(value: Array<PutResponse>): BatchResponse;
    addResponses(value?: PutResponse, index?: number): PutResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BatchResponse): BatchResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchResponse;
    static deserializeBinaryFromReader(message: BatchResponse, reader: jspb.BinaryReader): BatchResponse;
}

export namespace BatchResponse {
    export type AsObject = {
        responsesList: Array<PutResponse.AsObject>,
    }
}

export class RemoveResponse extends jspb.Message { 
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): RemoveResponse;
    getProof(): Uint8Array | string;
    getProof_asU8(): Uint8Array;
    getProof_asB64(): string;
    setProof(value: Uint8Array | string): RemoveResponse;
    getRoot(): Uint8Array | string;
    getRoot_asU8(): Uint8Array;
    getRoot_asB64(): string;
    setRoot(value: Uint8Array | string): RemoveResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveResponse): RemoveResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveResponse;
    static deserializeBinaryFromReader(message: RemoveResponse, reader: jspb.BinaryReader): RemoveResponse;
}

export namespace RemoveResponse {
    export type AsObject = {
        value: Uint8Array | string,
        proof: Uint8Array | string,
        root: Uint8Array | string,
    }
}

export class PutResponse extends jspb.Message { 
    getProof(): Uint8Array | string;
    getProof_asU8(): Uint8Array;
    getProof_asB64(): string;
    setProof(value: Uint8Array | string): PutResponse;
    getRoot(): Uint8Array | string;
    getRoot_asU8(): Uint8Array;
    getRoot_asB64(): string;
    setRoot(value: Uint8Array | string): PutResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PutResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PutResponse): PutResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PutResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PutResponse;
    static deserializeBinaryFromReader(message: PutResponse, reader: jspb.BinaryReader): PutResponse;
}

export namespace PutResponse {
    export type AsObject = {
        proof: Uint8Array | string,
        root: Uint8Array | string,
    }
}

export class UpdateResponse extends jspb.Message { 
    getProof(): Uint8Array | string;
    getProof_asU8(): Uint8Array;
    getProof_asB64(): string;
    setProof(value: Uint8Array | string): UpdateResponse;
    getRoot(): Uint8Array | string;
    getRoot_asU8(): Uint8Array;
    getRoot_asB64(): string;
    setRoot(value: Uint8Array | string): UpdateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResponse): UpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResponse;
    static deserializeBinaryFromReader(message: UpdateResponse, reader: jspb.BinaryReader): UpdateResponse;
}

export namespace UpdateResponse {
    export type AsObject = {
        proof: Uint8Array | string,
        root: Uint8Array | string,
    }
}

export class QueryRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): QueryRequest;
    getQuery(): string;
    setQuery(value: string): QueryRequest;
    getProve(): boolean;
    setProve(value: boolean): QueryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryRequest): QueryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryRequest;
    static deserializeBinaryFromReader(message: QueryRequest, reader: jspb.BinaryReader): QueryRequest;
}

export namespace QueryRequest {
    export type AsObject = {
        name: string,
        query: string,
        prove: boolean,
    }
}

export class QueryResponse extends jspb.Message { 
    clearResponsesList(): void;
    getResponsesList(): Array<GetResponse>;
    setResponsesList(value: Array<GetResponse>): QueryResponse;
    addResponses(value?: GetResponse, index?: number): GetResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryResponse): QueryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryResponse;
    static deserializeBinaryFromReader(message: QueryResponse, reader: jspb.BinaryReader): QueryResponse;
}

export namespace QueryResponse {
    export type AsObject = {
        responsesList: Array<GetResponse.AsObject>,
    }
}

export class GetResponse extends jspb.Message { 
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): GetResponse;
    getProof(): Uint8Array | string;
    getProof_asU8(): Uint8Array;
    getProof_asB64(): string;
    setProof(value: Uint8Array | string): GetResponse;
    getRoot(): Uint8Array | string;
    getRoot_asU8(): Uint8Array;
    getRoot_asB64(): string;
    setRoot(value: Uint8Array | string): GetResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetResponse;
    static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
    export type AsObject = {
        value: Uint8Array | string,
        proof: Uint8Array | string,
        root: Uint8Array | string,
    }
}

export class Root extends jspb.Message { 
    getRoot(): Uint8Array | string;
    getRoot_asU8(): Uint8Array;
    getRoot_asB64(): string;
    setRoot(value: Uint8Array | string): Root;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Root.AsObject;
    static toObject(includeInstance: boolean, msg: Root): Root.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Root, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Root;
    static deserializeBinaryFromReader(message: Root, reader: jspb.BinaryReader): Root;
}

export namespace Root {
    export type AsObject = {
        root: Uint8Array | string,
    }
}

export class Proof extends jspb.Message { 
    getProof(): Uint8Array | string;
    getProof_asU8(): Uint8Array;
    getProof_asB64(): string;
    setProof(value: Uint8Array | string): Proof;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Proof.AsObject;
    static toObject(includeInstance: boolean, msg: Proof): Proof.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Proof, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Proof;
    static deserializeBinaryFromReader(message: Proof, reader: jspb.BinaryReader): Proof;
}

export namespace Proof {
    export type AsObject = {
        proof: Uint8Array | string,
    }
}
