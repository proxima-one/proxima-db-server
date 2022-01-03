/**
 * Proxima DB API
 * Documentation for the http/https server for Proxima Database
 *
 * The version of the OpenAPI document: 1.0.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CommitState model module.
 * @module model/CommitState
 * @version 1.0.3
 */
class CommitState {
    /**
     * Constructs a new <code>CommitState</code>.
     * @alias module:model/CommitState
     */
    constructor() { 
        
        CommitState.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CommitState</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitState} obj Optional instance to populate.
     * @return {module:model/CommitState} The populated <code>CommitState</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommitState();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('stream_id')) {
                obj['stream_id'] = ApiClient.convertToType(data['stream_id'], 'String');
            }
            if (data.hasOwnProperty('commit_link')) {
                obj['commit_link'] = ApiClient.convertToType(data['commit_link'], [Object]);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Object]);
            }
            if (data.hasOwnProperty('commit_prev')) {
                obj['commit_prev'] = ApiClient.convertToType(data['commit_prev'], [Object]);
            }
            if (data.hasOwnProperty('signature')) {
                obj['signature'] = ApiClient.convertToType(data['signature'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
CommitState.prototype['type'] = undefined;

/**
 * @member {String} version
 */
CommitState.prototype['version'] = undefined;

/**
 * @member {String} stream_id
 */
CommitState.prototype['stream_id'] = undefined;

/**
 * @member {Array.<Object>} commit_link
 */
CommitState.prototype['commit_link'] = undefined;

/**
 * @member {Array.<Object>} data
 */
CommitState.prototype['data'] = undefined;

/**
 * @member {Array.<Object>} commit_prev
 */
CommitState.prototype['commit_prev'] = undefined;

/**
 * @member {Object} signature
 */
CommitState.prototype['signature'] = undefined;






export default CommitState;
