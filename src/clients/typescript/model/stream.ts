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
 */

import { RequestFile } from './models';
import { StreamState } from './streamState';

export class Stream {
    'id'?: string;
    'state'?: StreamState;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "StreamState"
        }    ];

    static getAttributeTypeMap() {
        return Stream.attributeTypeMap;
    }
}

