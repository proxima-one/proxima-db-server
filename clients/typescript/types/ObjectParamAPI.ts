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

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiCollectionsIdDeleteRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicollectionsIdDelete
     */
    id: string
}

export interface DefaultApiCollectionsIdDocumentsBulkInsertPostRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicollectionsIdDocumentsBulkInsertPost
     */
    id: string
    /**
     * 
     * @type InlineObject4
     * @memberof DefaultApicollectionsIdDocumentsBulkInsertPost
     */
    obj?: InlineObject4
}

export interface DefaultApiCollectionsIdDocumentsDocIdDeleteRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicollectionsIdDocumentsDocIdDelete
     */
    id: string
    /**
     * 
     * @type string
     * @memberof DefaultApicollectionsIdDocumentsDocIdDelete
     */
    docId: string
}

export interface DefaultApiCollectionsIdDocumentsDocIdGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicollectionsIdDocumentsDocIdGet
     */
    id: string
    /**
     * 
     * @type string
     * @memberof DefaultApicollectionsIdDocumentsDocIdGet
     */
    docId: string
}

export interface DefaultApiCollectionsIdDocumentsDocIdPutRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicollectionsIdDocumentsDocIdPut
     */
    id: string
    /**
     * 
     * @type string
     * @memberof DefaultApicollectionsIdDocumentsDocIdPut
     */
    docId: string
    /**
     * 
     * @type InlineObject2
     * @memberof DefaultApicollectionsIdDocumentsDocIdPut
     */
    obj?: InlineObject2
}

export interface DefaultApiCollectionsIdDocumentsPostRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicollectionsIdDocumentsPost
     */
    id: string
    /**
     * 
     * @type InlineObject3
     * @memberof DefaultApicollectionsIdDocumentsPost
     */
    obj?: InlineObject3
}

export interface DefaultApiCollectionsIdGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicollectionsIdGet
     */
    id: string
    /**
     * 
     * @type InlineObject
     * @memberof DefaultApicollectionsIdGet
     */
    obj?: InlineObject
}

export interface DefaultApiCollectionsIdPutRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicollectionsIdPut
     */
    id: string
}

export interface DefaultApiCollectionsIdQueryPostRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicollectionsIdQueryPost
     */
    id: string
    /**
     * 
     * @type InlineObject5
     * @memberof DefaultApicollectionsIdQueryPost
     */
    obj?: InlineObject5
}

export interface DefaultApiCollectionsIdStreamsMessageIdGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicollectionsIdStreamsMessageIdGet
     */
    id: string
    /**
     * 
     * @type string
     * @memberof DefaultApicollectionsIdStreamsMessageIdGet
     */
    messageId: string
}

export interface DefaultApiCollectionsIdStreamsMessageIdPostRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicollectionsIdStreamsMessageIdPost
     */
    id: string
    /**
     * 
     * @type string
     * @memberof DefaultApicollectionsIdStreamsMessageIdPost
     */
    messageId: string
}

export interface DefaultApiCollectionsIdStreamsStreamIdCommitsCommitIdGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicollectionsIdStreamsStreamIdCommitsCommitIdGet
     */
    id: string
    /**
     * 
     * @type string
     * @memberof DefaultApicollectionsIdStreamsStreamIdCommitsCommitIdGet
     */
    streamId: string
    /**
     * 
     * @type string
     * @memberof DefaultApicollectionsIdStreamsStreamIdCommitsCommitIdGet
     */
    commitId: string
}

export interface DefaultApiCollectionsIdStreamsStreamIdCommitsPostRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicollectionsIdStreamsStreamIdCommitsPost
     */
    id: string
    /**
     * 
     * @type string
     * @memberof DefaultApicollectionsIdStreamsStreamIdCommitsPost
     */
    streamId: string
}

export interface DefaultApiCollectionsIdStreamsStreamIdPutRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicollectionsIdStreamsStreamIdPut
     */
    id: string
    /**
     * 
     * @type string
     * @memberof DefaultApicollectionsIdStreamsStreamIdPut
     */
    streamId: string
}

export interface DefaultApiCollectionsPostRequest {
    /**
     * 
     * @type InlineObject1
     * @memberof DefaultApicollectionsPost
     */
    obj?: InlineObject1
}

export interface DefaultApiRootGetRequest {
}

export interface DefaultApiRootPostRequest {
}

export interface DefaultApiRootPutRequest {
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public collectionsIdDelete(param: DefaultApiCollectionsIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.collectionsIdDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public collectionsIdDocumentsBulkInsertPost(param: DefaultApiCollectionsIdDocumentsBulkInsertPostRequest, options?: Configuration): Promise<void> {
        return this.api.collectionsIdDocumentsBulkInsertPost(param.id, param.obj,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public collectionsIdDocumentsDocIdDelete(param: DefaultApiCollectionsIdDocumentsDocIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.collectionsIdDocumentsDocIdDelete(param.id, param.docId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public collectionsIdDocumentsDocIdGet(param: DefaultApiCollectionsIdDocumentsDocIdGetRequest, options?: Configuration): Promise<void> {
        return this.api.collectionsIdDocumentsDocIdGet(param.id, param.docId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public collectionsIdDocumentsDocIdPut(param: DefaultApiCollectionsIdDocumentsDocIdPutRequest, options?: Configuration): Promise<void> {
        return this.api.collectionsIdDocumentsDocIdPut(param.id, param.docId, param.obj,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public collectionsIdDocumentsPost(param: DefaultApiCollectionsIdDocumentsPostRequest, options?: Configuration): Promise<void> {
        return this.api.collectionsIdDocumentsPost(param.id, param.obj,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public collectionsIdGet(param: DefaultApiCollectionsIdGetRequest, options?: Configuration): Promise<Collection> {
        return this.api.collectionsIdGet(param.id, param.obj,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public collectionsIdPut(param: DefaultApiCollectionsIdPutRequest, options?: Configuration): Promise<void> {
        return this.api.collectionsIdPut(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public collectionsIdQueryPost(param: DefaultApiCollectionsIdQueryPostRequest, options?: Configuration): Promise<void> {
        return this.api.collectionsIdQueryPost(param.id, param.obj,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public collectionsIdStreamsMessageIdGet(param: DefaultApiCollectionsIdStreamsMessageIdGetRequest, options?: Configuration): Promise<void> {
        return this.api.collectionsIdStreamsMessageIdGet(param.id, param.messageId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public collectionsIdStreamsMessageIdPost(param: DefaultApiCollectionsIdStreamsMessageIdPostRequest, options?: Configuration): Promise<void> {
        return this.api.collectionsIdStreamsMessageIdPost(param.id, param.messageId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public collectionsIdStreamsStreamIdCommitsCommitIdGet(param: DefaultApiCollectionsIdStreamsStreamIdCommitsCommitIdGetRequest, options?: Configuration): Promise<void> {
        return this.api.collectionsIdStreamsStreamIdCommitsCommitIdGet(param.id, param.streamId, param.commitId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public collectionsIdStreamsStreamIdCommitsPost(param: DefaultApiCollectionsIdStreamsStreamIdCommitsPostRequest, options?: Configuration): Promise<void> {
        return this.api.collectionsIdStreamsStreamIdCommitsPost(param.id, param.streamId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public collectionsIdStreamsStreamIdPut(param: DefaultApiCollectionsIdStreamsStreamIdPutRequest, options?: Configuration): Promise<void> {
        return this.api.collectionsIdStreamsStreamIdPut(param.id, param.streamId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public collectionsPost(param: DefaultApiCollectionsPostRequest, options?: Configuration): Promise<void> {
        return this.api.collectionsPost(param.obj,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public rootGet(param: DefaultApiRootGetRequest, options?: Configuration): Promise<Database> {
        return this.api.rootGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public rootPost(param: DefaultApiRootPostRequest, options?: Configuration): Promise<Database> {
        return this.api.rootPost( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public rootPut(param: DefaultApiRootPutRequest, options?: Configuration): Promise<void> {
        return this.api.rootPut( options).toPromise();
    }

}
