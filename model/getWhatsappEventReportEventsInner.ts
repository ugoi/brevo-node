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

export class GetWhatsappEventReportEventsInner {
    /**
    * WhatsApp Number with country code. Example, 85264318721
    */
    'contactNumber': string;
    /**
    * UTC date-time on which the event has been generated
    */
    'date': string;
    /**
    * Message ID which generated the event
    */
    'messageId': string;
    /**
    * Event which occurred
    */
    'event': GetWhatsappEventReportEventsInner.EventEnum;
    /**
    * Reason for the event (will be there in case of `error` and `soft-bounce` events)
    */
    'reason'?: string;
    /**
    * Text of the reply (will be there only in case of `reply` event with text)
    */
    'body'?: string;
    /**
    * Url of the media reply (will be there only in case of `reply` event with media)
    */
    'mediaUrl'?: string;
    /**
    * WhatsApp Number with country code. Example, 85264318721
    */
    'senderNumber': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "contactNumber",
            "baseName": "contactNumber",
            "type": "string"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "string"
        },
        {
            "name": "messageId",
            "baseName": "messageId",
            "type": "string"
        },
        {
            "name": "event",
            "baseName": "event",
            "type": "GetWhatsappEventReportEventsInner.EventEnum"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "mediaUrl",
            "baseName": "mediaUrl",
            "type": "string"
        },
        {
            "name": "senderNumber",
            "baseName": "senderNumber",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetWhatsappEventReportEventsInner.attributeTypeMap;
    }
}

export namespace GetWhatsappEventReportEventsInner {
    export enum EventEnum {
        Sent = <any> 'sent',
        Delivered = <any> 'delivered',
        Read = <any> 'read',
        Error = <any> 'error',
        Unsubscribe = <any> 'unsubscribe',
        Reply = <any> 'reply',
        SoftBounce = <any> 'soft-bounce'
    }
}
