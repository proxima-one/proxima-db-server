import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AddCollection } from '../models/AddCollection';
import { AddCollectionMeta } from '../models/AddCollectionMeta';
import { AddCommit } from '../models/AddCommit';
import { AddCommitState } from '../models/AddCommitState';
import { AddDocument } from '../models/AddDocument';
import { Collection } from '../models/Collection';
import { CollectionState } from '../models/CollectionState';
import { Commit } from '../models/Commit';
import { CommitState } from '../models/CommitState';
import { DID } from '../models/DID';
import { DIDAuthentication } from '../models/DIDAuthentication';
import { Database } from '../models/Database';
import { Document } from '../models/Document';
import { InlineObject } from '../models/InlineObject';
import { InlineObject1 } from '../models/InlineObject1';
import { InlineObject2 } from '../models/InlineObject2';
import { InlineObject3 } from '../models/InlineObject3';
import { InlineObject4 } from '../models/InlineObject4';
import { InlineObject5 } from '../models/InlineObject5';
import { Schema } from '../models/Schema';
import { Stream } from '../models/Stream';
import { StreamState } from '../models/StreamState';
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id 
     */
    public collectionsIdDelete(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.collectionsIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param obj 
     */
    public collectionsIdDocumentsBulkInsertPost(id: string, obj?: InlineObject4, _options?: Configuration): Promise<void> {
        const result = this.api.collectionsIdDocumentsBulkInsertPost(id, obj, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param docId 
     */
    public collectionsIdDocumentsDocIdDelete(id: string, docId: string, _options?: Configuration): Promise<void> {
        const result = this.api.collectionsIdDocumentsDocIdDelete(id, docId, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param docId 
     */
    public collectionsIdDocumentsDocIdGet(id: string, docId: string, _options?: Configuration): Promise<void> {
        const result = this.api.collectionsIdDocumentsDocIdGet(id, docId, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param docId 
     * @param obj 
     */
    public collectionsIdDocumentsDocIdPut(id: string, docId: string, obj?: InlineObject2, _options?: Configuration): Promise<void> {
        const result = this.api.collectionsIdDocumentsDocIdPut(id, docId, obj, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param obj 
     */
    public collectionsIdDocumentsPost(id: string, obj?: InlineObject3, _options?: Configuration): Promise<void> {
        const result = this.api.collectionsIdDocumentsPost(id, obj, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param obj 
     */
    public collectionsIdGet(id: string, obj?: InlineObject, _options?: Configuration): Promise<Collection> {
        const result = this.api.collectionsIdGet(id, obj, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public collectionsIdPut(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.collectionsIdPut(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param obj 
     */
    public collectionsIdQueryPost(id: string, obj?: InlineObject5, _options?: Configuration): Promise<void> {
        const result = this.api.collectionsIdQueryPost(id, obj, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param messageId 
     */
    public collectionsIdStreamsMessageIdGet(id: string, messageId: string, _options?: Configuration): Promise<void> {
        const result = this.api.collectionsIdStreamsMessageIdGet(id, messageId, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param messageId 
     */
    public collectionsIdStreamsMessageIdPost(id: string, messageId: string, _options?: Configuration): Promise<void> {
        const result = this.api.collectionsIdStreamsMessageIdPost(id, messageId, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param streamId 
     * @param commitId 
     */
    public collectionsIdStreamsStreamIdCommitsCommitIdGet(id: string, streamId: string, commitId: string, _options?: Configuration): Promise<void> {
        const result = this.api.collectionsIdStreamsStreamIdCommitsCommitIdGet(id, streamId, commitId, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param streamId 
     */
    public collectionsIdStreamsStreamIdCommitsPost(id: string, streamId: string, _options?: Configuration): Promise<void> {
        const result = this.api.collectionsIdStreamsStreamIdCommitsPost(id, streamId, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param streamId 
     */
    public collectionsIdStreamsStreamIdPut(id: string, streamId: string, _options?: Configuration): Promise<void> {
        const result = this.api.collectionsIdStreamsStreamIdPut(id, streamId, _options);
        return result.toPromise();
    }

    /**
     * @param obj 
     */
    public collectionsPost(obj?: InlineObject1, _options?: Configuration): Promise<void> {
        const result = this.api.collectionsPost(obj, _options);
        return result.toPromise();
    }

    /**
     */
    public rootGet(_options?: Configuration): Promise<Database> {
        const result = this.api.rootGet(_options);
        return result.toPromise();
    }

    /**
     */
    public rootPost(_options?: Configuration): Promise<Database> {
        const result = this.api.rootPost(_options);
        return result.toPromise();
    }

    /**
     */
    public rootPut(_options?: Configuration): Promise<void> {
        const result = this.api.rootPut(_options);
        return result.toPromise();
    }


}



