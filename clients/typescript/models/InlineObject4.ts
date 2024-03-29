/**
 * Proxima DB API
 * Documentation for the http/https server for Proxima Database
 *
 * OpenAPI spec version: 1.0.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class InlineObject4 {
    'entries'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "entries",
            "baseName": "entries",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineObject4.attributeTypeMap;
    }

    public constructor() {
    }
}

