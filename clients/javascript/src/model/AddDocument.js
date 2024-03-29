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
 * The AddDocument model module.
 * @module model/AddDocument
 * @version 1.0.3
 */
class AddDocument {
    /**
     * Constructs a new <code>AddDocument</code>.
     * @alias module:model/AddDocument
     */
    constructor() { 
        
        AddDocument.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddDocument} obj Optional instance to populate.
     * @return {module:model/AddDocument} The populated <code>AddDocument</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddDocument();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} key
 */
AddDocument.prototype['key'] = undefined;

/**
 * @member {String} value
 */
AddDocument.prototype['value'] = undefined;






export default AddDocument;

