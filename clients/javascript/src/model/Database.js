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
 * The Database model module.
 * @module model/Database
 * @version 1.0.3
 */
class Database {
    /**
     * Constructs a new <code>Database</code>.
     * @alias module:model/Database
     */
    constructor() { 
        
        Database.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Database</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Database} obj Optional instance to populate.
     * @return {module:model/Database} The populated <code>Database</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Database();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('collections')) {
                obj['collections'] = ApiClient.convertToType(data['collections'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Database.prototype['id'] = undefined;

/**
 * @member {String} version
 */
Database.prototype['version'] = undefined;

/**
 * @member {String} name
 */
Database.prototype['name'] = undefined;

/**
 * @member {Array.<Object>} collections
 */
Database.prototype['collections'] = undefined;






export default Database;
