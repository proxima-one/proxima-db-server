// package: proxima
// file: v3/proxima.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as v3_collections_pb from "../v3/collections_pb";
import * as v3_transactions_pb from "../v3/transactions_pb";

export class ScanRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): ScanRequest;
    getFirst(): number;
    setFirst(value: number): ScanRequest;
    getLast(): number;
    setLast(value: number): ScanRequest;
    getLimit(): number;
    setLimit(value: number): ScanRequest;
    getProve(): boolean;
    setProve(value: boolean): ScanRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScanRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ScanRequest): ScanRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScanRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScanRequest;
    static deserializeBinaryFromReader(message: ScanRequest, reader: jspb.BinaryReader): ScanRequest;
}

export namespace ScanRequest {
    export type AsObject = {
        name: string,
        first: number,
        last: number,
        limit: number,
        prove: boolean,
    }
}

export class ScanResponse extends jspb.Message { 
    clearResponsesList(): void;
    getResponsesList(): Array<v3_transactions_pb.GetResponse>;
    setResponsesList(value: Array<v3_transactions_pb.GetResponse>): ScanResponse;
    addResponses(value?: v3_transactions_pb.GetResponse, index?: number): v3_transactions_pb.GetResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScanResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ScanResponse): ScanResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScanResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScanResponse;
    static deserializeBinaryFromReader(message: ScanResponse, reader: jspb.BinaryReader): ScanResponse;
}

export namespace ScanResponse {
    export type AsObject = {
        responsesList: Array<v3_transactions_pb.GetResponse.AsObject>,
    }
}

export class CheckoutRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CheckoutRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckoutRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CheckoutRequest): CheckoutRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckoutRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckoutRequest;
    static deserializeBinaryFromReader(message: CheckoutRequest, reader: jspb.BinaryReader): CheckoutRequest;
}

export namespace CheckoutRequest {
    export type AsObject = {
        name: string,
    }
}

export class CheckoutResponse extends jspb.Message { 
    getConfirmation(): boolean;
    setConfirmation(value: boolean): CheckoutResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckoutResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CheckoutResponse): CheckoutResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckoutResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckoutResponse;
    static deserializeBinaryFromReader(message: CheckoutResponse, reader: jspb.BinaryReader): CheckoutResponse;
}

export namespace CheckoutResponse {
    export type AsObject = {
        confirmation: boolean,
    }
}

export class CommitRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CommitRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommitRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CommitRequest): CommitRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommitRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommitRequest;
    static deserializeBinaryFromReader(message: CommitRequest, reader: jspb.BinaryReader): CommitRequest;
}

export namespace CommitRequest {
    export type AsObject = {
        name: string,
    }
}

export class CommitResponse extends jspb.Message { 
    getConfirmation(): boolean;
    setConfirmation(value: boolean): CommitResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommitResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CommitResponse): CommitResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommitResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommitResponse;
    static deserializeBinaryFromReader(message: CommitResponse, reader: jspb.BinaryReader): CommitResponse;
}

export namespace CommitResponse {
    export type AsObject = {
        confirmation: boolean,
    }
}

export class CompactRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CompactRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompactRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CompactRequest): CompactRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompactRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompactRequest;
    static deserializeBinaryFromReader(message: CompactRequest, reader: jspb.BinaryReader): CompactRequest;
}

export namespace CompactRequest {
    export type AsObject = {
        name: string,
    }
}

export class CompactResponse extends jspb.Message { 
    getConfirmation(): boolean;
    setConfirmation(value: boolean): CompactResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompactResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CompactResponse): CompactResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompactResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompactResponse;
    static deserializeBinaryFromReader(message: CompactResponse, reader: jspb.BinaryReader): CompactResponse;
}

export namespace CompactResponse {
    export type AsObject = {
        confirmation: boolean,
    }
}

export class StatRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): StatRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StatRequest): StatRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatRequest;
    static deserializeBinaryFromReader(message: StatRequest, reader: jspb.BinaryReader): StatRequest;
}

export namespace StatRequest {
    export type AsObject = {
        name: string,
    }
}

export class StatResponse extends jspb.Message { 
    getStats(): Uint8Array | string;
    getStats_asU8(): Uint8Array;
    getStats_asB64(): string;
    setStats(value: Uint8Array | string): StatResponse;
    getProof(): Uint8Array | string;
    getProof_asU8(): Uint8Array;
    getProof_asB64(): string;
    setProof(value: Uint8Array | string): StatResponse;
    getRoot(): Uint8Array | string;
    getRoot_asU8(): Uint8Array;
    getRoot_asB64(): string;
    setRoot(value: Uint8Array | string): StatResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StatResponse): StatResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatResponse;
    static deserializeBinaryFromReader(message: StatResponse, reader: jspb.BinaryReader): StatResponse;
}

export namespace StatResponse {
    export type AsObject = {
        stats: Uint8Array | string,
        proof: Uint8Array | string,
        root: Uint8Array | string,
    }
}

export class OpenRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): OpenRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OpenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OpenRequest): OpenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OpenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OpenRequest;
    static deserializeBinaryFromReader(message: OpenRequest, reader: jspb.BinaryReader): OpenRequest;
}

export namespace OpenRequest {
    export type AsObject = {
        name: string,
    }
}

export class OpenResponse extends jspb.Message { 
    getConfirmation(): boolean;
    setConfirmation(value: boolean): OpenResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OpenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OpenResponse): OpenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OpenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OpenResponse;
    static deserializeBinaryFromReader(message: OpenResponse, reader: jspb.BinaryReader): OpenResponse;
}

export namespace OpenResponse {
    export type AsObject = {
        confirmation: boolean,
    }
}

export class TableRemoveRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): TableRemoveRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TableRemoveRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TableRemoveRequest): TableRemoveRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TableRemoveRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TableRemoveRequest;
    static deserializeBinaryFromReader(message: TableRemoveRequest, reader: jspb.BinaryReader): TableRemoveRequest;
}

export namespace TableRemoveRequest {
    export type AsObject = {
        name: string,
    }
}

export class TableRemoveResponse extends jspb.Message { 
    getConfirmation(): boolean;
    setConfirmation(value: boolean): TableRemoveResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TableRemoveResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TableRemoveResponse): TableRemoveResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TableRemoveResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TableRemoveResponse;
    static deserializeBinaryFromReader(message: TableRemoveResponse, reader: jspb.BinaryReader): TableRemoveResponse;
}

export namespace TableRemoveResponse {
    export type AsObject = {
        confirmation: boolean,
    }
}

export class CloseRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CloseRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CloseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CloseRequest): CloseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CloseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CloseRequest;
    static deserializeBinaryFromReader(message: CloseRequest, reader: jspb.BinaryReader): CloseRequest;
}

export namespace CloseRequest {
    export type AsObject = {
        name: string,
    }
}

export class CloseResponse extends jspb.Message { 
    getConfirmation(): boolean;
    setConfirmation(value: boolean): CloseResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CloseResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CloseResponse): CloseResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CloseResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CloseResponse;
    static deserializeBinaryFromReader(message: CloseResponse, reader: jspb.BinaryReader): CloseResponse;
}

export namespace CloseResponse {
    export type AsObject = {
        confirmation: boolean,
    }
}

export class CreateRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRequest;
    static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
    export type AsObject = {
        name: string,
    }
}

export class CreateResponse extends jspb.Message { 
    getConfirmation(): boolean;
    setConfirmation(value: boolean): CreateResponse;
    getName(): string;
    setName(value: string): CreateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateResponse;
    static deserializeBinaryFromReader(message: CreateResponse, reader: jspb.BinaryReader): CreateResponse;
}

export namespace CreateResponse {
    export type AsObject = {
        confirmation: boolean,
        name: string,
    }
}
