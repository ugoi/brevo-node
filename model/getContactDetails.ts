/**
 * Brevo API
 * Brevo provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/brevo  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  |   | 422  | Error. Unprocessable Entity | 
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: contact@brevo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class GetContactDetails {
    /**
    * Email address of the contact for which you requested the details
    */
    'email'?: string;
    /**
    * ID of the contact for which you requested the details
    */
    'id': number;
    /**
    * Blacklist status for email campaigns (true=blacklisted, false=not blacklisted)
    */
    'emailBlacklisted': boolean;
    /**
    * Blacklist status for SMS campaigns (true=blacklisted, false=not blacklisted)
    */
    'smsBlacklisted': boolean;
    /**
    * Creation UTC date-time of the contact (YYYY-MM-DDTHH:mm:ss.SSSZ)
    */
    'createdAt': string;
    /**
    * Last modification UTC date-time of the contact (YYYY-MM-DDTHH:mm:ss.SSSZ)
    */
    'modifiedAt': string;
    'listIds': Array<number>;
    'listUnsubscribed'?: Array<number>;
    /**
    * Set of attributes of the contact
    */
    'attributes': object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "emailBlacklisted",
            "baseName": "emailBlacklisted",
            "type": "boolean"
        },
        {
            "name": "smsBlacklisted",
            "baseName": "smsBlacklisted",
            "type": "boolean"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string"
        },
        {
            "name": "modifiedAt",
            "baseName": "modifiedAt",
            "type": "string"
        },
        {
            "name": "listIds",
            "baseName": "listIds",
            "type": "Array<number>"
        },
        {
            "name": "listUnsubscribed",
            "baseName": "listUnsubscribed",
            "type": "Array<number>"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return GetContactDetails.attributeTypeMap;
    }
}

