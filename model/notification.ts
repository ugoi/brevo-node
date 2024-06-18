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

/**
* Optional. Use this object if you want to let Brevo send an email to the contact, with the payment request URL. If empty, no notifications (message and reminders) will be sent. 
*/
export class Notification {
    /**
    * Channel used to send the notifications. 
    */
    'channel': Notification.ChannelEnum;
    /**
    * Use this field if you want to give more context to your contact about the payment request. 
    */
    'text': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "channel",
            "baseName": "channel",
            "type": "Notification.ChannelEnum"
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Notification.attributeTypeMap;
    }
}

export namespace Notification {
    export enum ChannelEnum {
        Email = <any> 'email'
    }
}
