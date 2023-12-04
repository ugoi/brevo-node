/**
 * Brevo API
 * Brevo provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/brevo  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: contact@brevo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class ExportWebhooksHistory {
    /**
    * Number of days in the past including today (positive integer). _Not compatible with \'startDate\' and \'endDate\'_
    */
    'days'?: number;
    /**
    * Mandatory if endDate is used. Starting date of the history (YYYY-MM-DD). Must be lower than equal to endDate
    */
    'startDate'?: string;
    /**
    * Mandatory if startDate is used. Ending date of the report (YYYY-MM-DD). Must be greater than equal to startDate
    */
    'endDate'?: string;
    /**
    * Sorting order of records (asc or desc)
    */
    'sort'?: string;
    /**
    * Filter the history based on webhook type
    */
    'type': ExportWebhooksHistory.TypeEnum;
    /**
    * Filter the history for a specific event type
    */
    'event': ExportWebhooksHistory.EventEnum;
    /**
    * Webhook URL to receive CSV file link
    */
    'notifyURL': string;
    /**
    * Filter the history for a specific webhook id
    */
    'webhookId'?: number;
    /**
    * Filter the history for a specific email
    */
    'email'?: string;
    /**
    * Filter the history for a specific message id. Applicable only for transactional webhooks.
    */
    'messageId'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "days",
            "baseName": "days",
            "type": "number"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "string"
        },
        {
            "name": "sort",
            "baseName": "sort",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ExportWebhooksHistory.TypeEnum"
        },
        {
            "name": "event",
            "baseName": "event",
            "type": "ExportWebhooksHistory.EventEnum"
        },
        {
            "name": "notifyURL",
            "baseName": "notifyURL",
            "type": "string"
        },
        {
            "name": "webhookId",
            "baseName": "webhookId",
            "type": "number"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "messageId",
            "baseName": "messageId",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ExportWebhooksHistory.attributeTypeMap;
    }
}

export namespace ExportWebhooksHistory {
    export enum TypeEnum {
        Transactional = <any> 'transactional',
        Marketing = <any> 'marketing'
    }
    export enum EventEnum {
        InvalidParameter = <any> 'invalid_parameter',
        MissingParameter = <any> 'missing_parameter',
        HardBounce = <any> 'hardBounce',
        SoftBounce = <any> 'softBounce',
        Delivered = <any> 'delivered',
        Spam = <any> 'spam',
        Request = <any> 'request',
        Opened = <any> 'opened',
        Click = <any> 'click',
        Invalid = <any> 'invalid',
        Deferred = <any> 'deferred',
        Blocked = <any> 'blocked',
        Unsubscribed = <any> 'unsubscribed',
        Error = <any> 'error',
        UniqueOpened = <any> 'uniqueOpened',
        LoadedByProxy = <any> 'loadedByProxy',
        AllEvents = <any> 'allEvents'
    }
}
