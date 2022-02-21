// package: 
// file: v3/collections.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Collection extends jspb.Message { 
    getDbid(): string;
    setDbid(value: string): Collection;
    getId(): string;
    setId(value: string): Collection;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Collection.AsObject;
    static toObject(includeInstance: boolean, msg: Collection): Collection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Collection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Collection;
    static deserializeBinaryFromReader(message: Collection, reader: jspb.BinaryReader): Collection;
}

export namespace Collection {
    export type AsObject = {
        dbid: string,
        id: string,
    }
}

export class GetCollectionRequest extends jspb.Message { 
    getDbid(): string;
    setDbid(value: string): GetCollectionRequest;
    getId(): string;
    setId(value: string): GetCollectionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCollectionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCollectionRequest): GetCollectionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCollectionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCollectionRequest;
    static deserializeBinaryFromReader(message: GetCollectionRequest, reader: jspb.BinaryReader): GetCollectionRequest;
}

export namespace GetCollectionRequest {
    export type AsObject = {
        dbid: string,
        id: string,
    }
}

export class GetCollectionResponse extends jspb.Message { 

    hasCollection(): boolean;
    clearCollection(): void;
    getCollection(): Collection | undefined;
    setCollection(value?: Collection): GetCollectionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCollectionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetCollectionResponse): GetCollectionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCollectionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCollectionResponse;
    static deserializeBinaryFromReader(message: GetCollectionResponse, reader: jspb.BinaryReader): GetCollectionResponse;
}

export namespace GetCollectionResponse {
    export type AsObject = {
        collection?: Collection.AsObject,
    }
}

export class RemoveCollectionRequest extends jspb.Message { 
    getDbid(): string;
    setDbid(value: string): RemoveCollectionRequest;
    getId(): string;
    setId(value: string): RemoveCollectionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveCollectionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveCollectionRequest): RemoveCollectionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveCollectionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveCollectionRequest;
    static deserializeBinaryFromReader(message: RemoveCollectionRequest, reader: jspb.BinaryReader): RemoveCollectionRequest;
}

export namespace RemoveCollectionRequest {
    export type AsObject = {
        dbid: string,
        id: string,
    }
}

export class RemoveCollectionResponse extends jspb.Message { 
    getSuccessful(): boolean;
    setSuccessful(value: boolean): RemoveCollectionResponse;

    hasCollection(): boolean;
    clearCollection(): void;
    getCollection(): Collection | undefined;
    setCollection(value?: Collection): RemoveCollectionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveCollectionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveCollectionResponse): RemoveCollectionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveCollectionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveCollectionResponse;
    static deserializeBinaryFromReader(message: RemoveCollectionResponse, reader: jspb.BinaryReader): RemoveCollectionResponse;
}

export namespace RemoveCollectionResponse {
    export type AsObject = {
        successful: boolean,
        collection?: Collection.AsObject,
    }
}

export class CreateCollectionRequest extends jspb.Message { 
    getDbid(): string;
    setDbid(value: string): CreateCollectionRequest;

    hasCollection(): boolean;
    clearCollection(): void;
    getCollection(): Collection | undefined;
    setCollection(value?: Collection): CreateCollectionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCollectionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCollectionRequest): CreateCollectionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCollectionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCollectionRequest;
    static deserializeBinaryFromReader(message: CreateCollectionRequest, reader: jspb.BinaryReader): CreateCollectionRequest;
}

export namespace CreateCollectionRequest {
    export type AsObject = {
        dbid: string,
        collection?: Collection.AsObject,
    }
}

export class CreateCollectionResponse extends jspb.Message { 

    hasCollection(): boolean;
    clearCollection(): void;
    getCollection(): Collection | undefined;
    setCollection(value?: Collection): CreateCollectionResponse;
    getCreated(): boolean;
    setCreated(value: boolean): CreateCollectionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCollectionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCollectionResponse): CreateCollectionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCollectionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCollectionResponse;
    static deserializeBinaryFromReader(message: CreateCollectionResponse, reader: jspb.BinaryReader): CreateCollectionResponse;
}

export namespace CreateCollectionResponse {
    export type AsObject = {
        collection?: Collection.AsObject,
        created: boolean,
    }
}

export class BatchCollectionRequest extends jspb.Message { 
    clearRequestsList(): void;
    getRequestsList(): Array<CreateCollectionRequest>;
    setRequestsList(value: Array<CreateCollectionRequest>): BatchCollectionRequest;
    addRequests(value?: CreateCollectionRequest, index?: number): CreateCollectionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchCollectionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BatchCollectionRequest): BatchCollectionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchCollectionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchCollectionRequest;
    static deserializeBinaryFromReader(message: BatchCollectionRequest, reader: jspb.BinaryReader): BatchCollectionRequest;
}

export namespace BatchCollectionRequest {
    export type AsObject = {
        requestsList: Array<CreateCollectionRequest.AsObject>,
    }
}

export class BatchCollectionResponse extends jspb.Message { 
    clearResponsesList(): void;
    getResponsesList(): Array<CreateCollectionResponse>;
    setResponsesList(value: Array<CreateCollectionResponse>): BatchCollectionResponse;
    addResponses(value?: CreateCollectionResponse, index?: number): CreateCollectionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchCollectionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BatchCollectionResponse): BatchCollectionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchCollectionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchCollectionResponse;
    static deserializeBinaryFromReader(message: BatchCollectionResponse, reader: jspb.BinaryReader): BatchCollectionResponse;
}

export namespace BatchCollectionResponse {
    export type AsObject = {
        responsesList: Array<CreateCollectionResponse.AsObject>,
    }
}

export class UpdateCollectionRequest extends jspb.Message { 
    getDbid(): string;
    setDbid(value: string): UpdateCollectionRequest;
    getId(): string;
    setId(value: string): UpdateCollectionRequest;

    hasCollectionUpdate(): boolean;
    clearCollectionUpdate(): void;
    getCollectionUpdate(): Collection | undefined;
    setCollectionUpdate(value?: Collection): UpdateCollectionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateCollectionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateCollectionRequest): UpdateCollectionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateCollectionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateCollectionRequest;
    static deserializeBinaryFromReader(message: UpdateCollectionRequest, reader: jspb.BinaryReader): UpdateCollectionRequest;
}

export namespace UpdateCollectionRequest {
    export type AsObject = {
        dbid: string,
        id: string,
        collectionUpdate?: Collection.AsObject,
    }
}

export class UpdateCollectionResponse extends jspb.Message { 
    getSuccessful(): boolean;
    setSuccessful(value: boolean): UpdateCollectionResponse;

    hasUpdatedCollection(): boolean;
    clearUpdatedCollection(): void;
    getUpdatedCollection(): Collection | undefined;
    setUpdatedCollection(value?: Collection): UpdateCollectionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateCollectionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateCollectionResponse): UpdateCollectionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateCollectionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateCollectionResponse;
    static deserializeBinaryFromReader(message: UpdateCollectionResponse, reader: jspb.BinaryReader): UpdateCollectionResponse;
}

export namespace UpdateCollectionResponse {
    export type AsObject = {
        successful: boolean,
        updatedCollection?: Collection.AsObject,
    }
}

export class PutCollectionRequest extends jspb.Message { 
    getDbid(): string;
    setDbid(value: string): PutCollectionRequest;
    getId(): string;
    setId(value: string): PutCollectionRequest;

    hasCollectionUpdate(): boolean;
    clearCollectionUpdate(): void;
    getCollectionUpdate(): Collection | undefined;
    setCollectionUpdate(value?: Collection): PutCollectionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PutCollectionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PutCollectionRequest): PutCollectionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PutCollectionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PutCollectionRequest;
    static deserializeBinaryFromReader(message: PutCollectionRequest, reader: jspb.BinaryReader): PutCollectionRequest;
}

export namespace PutCollectionRequest {
    export type AsObject = {
        dbid: string,
        id: string,
        collectionUpdate?: Collection.AsObject,
    }
}

export class PutCollectionResponse extends jspb.Message { 
    getSuccessful(): boolean;
    setSuccessful(value: boolean): PutCollectionResponse;

    hasUpdatedCollection(): boolean;
    clearUpdatedCollection(): void;
    getUpdatedCollection(): Collection | undefined;
    setUpdatedCollection(value?: Collection): PutCollectionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PutCollectionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PutCollectionResponse): PutCollectionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PutCollectionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PutCollectionResponse;
    static deserializeBinaryFromReader(message: PutCollectionResponse, reader: jspb.BinaryReader): PutCollectionResponse;
}

export namespace PutCollectionResponse {
    export type AsObject = {
        successful: boolean,
        updatedCollection?: Collection.AsObject,
    }
}
