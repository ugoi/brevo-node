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

export class ConversationsMessagesPostRequest {
    /**
    * visitor’s ID received <a href=\"https://developers.brevo.com/docs/conversations-webhooks\">from a webhook</a> or generated by you to <a href=\"https://developers.brevo.com/docs/customize-the-widget#identifying-existing-users\">bind existing user account to Conversations</a>
    */
    'visitorId': string;
    /**
    * message text
    */
    'text': string;
    /**
    * agent ID. It can be found on agent’s page or received <a href=\"https://developers.brevo.com/docs/conversations-webhooks\">from a webhook</a>. Alternatively, you can use `agentEmail` + `agentName` + `receivedFrom` instead (all 3 fields required).
    */
    'agentId'?: string;
    /**
    * mark your messages to distinguish messages created by you from the others.
    */
    'receivedFrom'?: string;
    /**
    * agent email. When sending messages from a standalone system, it’s hard to maintain a 1-to-1 relationship between the users of both systems. In this case, an agent can be specified by their email address.
    */
    'agentEmail'?: string;
    /**
    * agent name
    */
    'agentName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "visitorId",
            "baseName": "visitorId",
            "type": "string"
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string"
        },
        {
            "name": "agentId",
            "baseName": "agentId",
            "type": "string"
        },
        {
            "name": "receivedFrom",
            "baseName": "receivedFrom",
            "type": "string"
        },
        {
            "name": "agentEmail",
            "baseName": "agentEmail",
            "type": "string"
        },
        {
            "name": "agentName",
            "baseName": "agentName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ConversationsMessagesPostRequest.attributeTypeMap;
    }
}

