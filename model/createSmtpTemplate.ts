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
import { CreateSmtpTemplateSender } from './createSmtpTemplateSender';

export class CreateSmtpTemplate {
    /**
    * Tag of the template
    */
    'tag'?: string;
    'sender': CreateSmtpTemplateSender;
    /**
    * Name of the template
    */
    'templateName': string;
    /**
    * Body of the message (HTML version). The field must have more than 10 characters. REQUIRED if htmlUrl is empty
    */
    'htmlContent'?: string;
    /**
    * Url which contents the body of the email message. REQUIRED if htmlContent is empty
    */
    'htmlUrl'?: string;
    /**
    * Subject of the template
    */
    'subject': string;
    /**
    * Email on which campaign recipients will be able to reply to
    */
    'replyTo'?: string;
    /**
    * To personalize the «To» Field. If you want to include the first name and last name of your recipient, add {FNAME} {LNAME}. These contact attributes must already exist in your Brevo account. If input parameter \'params\' used please use {{contact.FNAME}} {{contact.LNAME}} for personalization
    */
    'toField'?: string;
    /**
    * Absolute url of the attachment (no local file). Extension allowed: xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub and eps
    */
    'attachmentUrl'?: string;
    /**
    * Status of template. isActive = true means template is active and isActive = false means template is inactive
    */
    'isActive'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tag",
            "baseName": "tag",
            "type": "string"
        },
        {
            "name": "sender",
            "baseName": "sender",
            "type": "CreateSmtpTemplateSender"
        },
        {
            "name": "templateName",
            "baseName": "templateName",
            "type": "string"
        },
        {
            "name": "htmlContent",
            "baseName": "htmlContent",
            "type": "string"
        },
        {
            "name": "htmlUrl",
            "baseName": "htmlUrl",
            "type": "string"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "replyTo",
            "baseName": "replyTo",
            "type": "string"
        },
        {
            "name": "toField",
            "baseName": "toField",
            "type": "string"
        },
        {
            "name": "attachmentUrl",
            "baseName": "attachmentUrl",
            "type": "string"
        },
        {
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CreateSmtpTemplate.attributeTypeMap;
    }
}

