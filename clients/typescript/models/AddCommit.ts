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

import { AddCommitState } from './AddCommitState';
import { HttpFile } from '../http/http';

export class AddCommit {
    'id'?: string;
    'state'?: AddCommitState;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "AddCommitState",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AddCommit.attributeTypeMap;
    }

    public constructor() {
    }
}

