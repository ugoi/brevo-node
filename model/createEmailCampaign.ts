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
import { CreateEmailCampaignRecipients } from './createEmailCampaignRecipients';
import { CreateEmailCampaignSender } from './createEmailCampaignSender';

export class CreateEmailCampaign {
    /**
    * Tag of the campaign
    */
    'tag'?: string;
    'sender': CreateEmailCampaignSender;
    /**
    * Name of the campaign
    */
    'name': string;
    /**
    * Mandatory if htmlUrl and templateId are empty. Body of the message (HTML)
    */
    'htmlContent'?: string;
    /**
    * Mandatory if htmlContent and templateId are empty. Url to the message (HTML)
    */
    'htmlUrl'?: string;
    /**
    * Mandatory if htmlContent and htmlUrl are empty. Id of the transactional email template with status \'active\'. Used to copy only its content fetched from htmlContent/htmlUrl to an email campaign for RSS feature.
    */
    'templateId'?: number;
    /**
    * Sending UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result. If sendAtBestTime is set to true, your campaign will be sent according to the date passed (ignoring the time part).
    */
    'scheduledAt'?: string;
    /**
    * Subject of the campaign. Mandatory if abTesting is false. Ignored if abTesting is true.
    */
    'subject'?: string;
    /**
    * Preview text or preheader of the email campaign
    */
    'previewText'?: string;
    /**
    * Email on which the campaign recipients will be able to reply to
    */
    'replyTo'?: string;
    /**
    * To personalize the «To» Field. If you want to include the first name and last name of your recipient, add {FNAME} {LNAME}. These contact attributes must already exist in your Brevo account. If input parameter \'params\' used please use {{contact.FNAME}} {{contact.LNAME}} for personalization
    */
    'toField'?: string;
    'recipients'?: CreateEmailCampaignRecipients;
    /**
    * Absolute url of the attachment (no local file). Extension allowed: xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub and eps
    */
    'attachmentUrl'?: string;
    /**
    * Use true to embedded the images in your email. Final size of the email should be less than 4MB. Campaigns with embedded images can not be sent to more than 5000 contacts
    */
    'inlineImageActivation'?: boolean = false;
    /**
    * Use true to enable the mirror link
    */
    'mirrorActive'?: boolean;
    /**
    * Footer of the email campaign
    */
    'footer'?: string;
    /**
    * Header of the email campaign
    */
    'header'?: string;
    /**
    * Customize the utm_campaign value. If this field is empty, the campaign name will be used. Only alphanumeric characters and spaces are allowed
    */
    'utmCampaign'?: string;
    /**
    * Pass the set of attributes to customize the type classic campaign. For example, {\"FNAME\":\"Joe\", \"LNAME\":\"Doe\"}. Only available if \'type\' is \'classic\'. It\'s considered only if campaign is in New Template Language format. The New Template Language is dependent on the values of \'subject\', \'htmlContent/htmlUrl\', \'sender.name\' & \'toField\'
    */
    'params'?: object;
    /**
    * Set this to true if you want to send your campaign at best time.
    */
    'sendAtBestTime'?: boolean = false;
    /**
    * Status of A/B Test. abTesting = false means it is disabled, & abTesting = true means it is enabled. \'subjectA\', \'subjectB\', \'splitRule\', \'winnerCriteria\' & \'winnerDelay\' will be considered when abTesting is set to true. \'subjectA\' & \'subjectB\' are mandatory together & \'subject\' if passed is ignored. Can be set to true only if \'sendAtBestTime\' is \'false\'. You will be able to set up two subject lines for your campaign and send them to a random sample of your total recipients. Half of the test group will receive version A, and the other half will receive version B
    */
    'abTesting'?: boolean = false;
    /**
    * Subject A of the campaign. Mandatory if abTesting = true. subjectA & subjectB should have unique value
    */
    'subjectA'?: string;
    /**
    * Subject B of the campaign. Mandatory if abTesting = true. subjectA & subjectB should have unique value
    */
    'subjectB'?: string;
    /**
    * Add the size of your test groups. Mandatory if abTesting = true & \'recipients\' is passed. We\'ll send version A and B to a random sample of recipients, and then the winning version to everyone else
    */
    'splitRule'?: number;
    /**
    * Choose the metrics that will determinate the winning version. Mandatory if \'splitRule\' >= 1 and < 50. If splitRule = 50, \'winnerCriteria\' is ignored if passed
    */
    'winnerCriteria'?: CreateEmailCampaign.WinnerCriteriaEnum;
    /**
    * Choose the duration of the test in hours. Maximum is 7 days, pass 24*7 = 168 hours. The winning version will be sent at the end of the test. Mandatory if \'splitRule\' >= 1 and < 50. If splitRule = 50, \'winnerDelay\' is ignored if passed
    */
    'winnerDelay'?: number;
    /**
    * Available for dedicated ip clients. Set this to true if you wish to warm up your ip.
    */
    'ipWarmupEnable'?: boolean = false;
    /**
    * Mandatory if ipWarmupEnable is set to true. Set an initial quota greater than 1 for warming up your ip. We recommend you set a value of 3000.
    */
    'initialQuota'?: number;
    /**
    * Mandatory if ipWarmupEnable is set to true. Set a percentage increase rate for warming up your ip. We recommend you set the increase rate to 30% per day. If you want to send the same number of emails every day, set the daily increase value to 0%.
    */
    'increaseRate'?: number;
    /**
    * Enter an unsubscription page id. The page id is a 24 digit alphanumeric id that can be found in the URL when editing the page. If not entered, then the default unsubscription page will be used.
    */
    'unsubscriptionPageId'?: string;
    /**
    * Mandatory if templateId is used containing the {{ update_profile }} tag. Enter an update profile form id. The form id is a 24 digit alphanumeric id that can be found in the URL when editing the form. If not entered, then the default update profile form will be used.
    */
    'updateFormId'?: string;

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
            "type": "CreateEmailCampaignSender"
        },
        {
            "name": "name",
            "baseName": "name",
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
            "name": "templateId",
            "baseName": "templateId",
            "type": "number"
        },
        {
            "name": "scheduledAt",
            "baseName": "scheduledAt",
            "type": "string"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "previewText",
            "baseName": "previewText",
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
            "name": "recipients",
            "baseName": "recipients",
            "type": "CreateEmailCampaignRecipients"
        },
        {
            "name": "attachmentUrl",
            "baseName": "attachmentUrl",
            "type": "string"
        },
        {
            "name": "inlineImageActivation",
            "baseName": "inlineImageActivation",
            "type": "boolean"
        },
        {
            "name": "mirrorActive",
            "baseName": "mirrorActive",
            "type": "boolean"
        },
        {
            "name": "footer",
            "baseName": "footer",
            "type": "string"
        },
        {
            "name": "header",
            "baseName": "header",
            "type": "string"
        },
        {
            "name": "utmCampaign",
            "baseName": "utmCampaign",
            "type": "string"
        },
        {
            "name": "params",
            "baseName": "params",
            "type": "object"
        },
        {
            "name": "sendAtBestTime",
            "baseName": "sendAtBestTime",
            "type": "boolean"
        },
        {
            "name": "abTesting",
            "baseName": "abTesting",
            "type": "boolean"
        },
        {
            "name": "subjectA",
            "baseName": "subjectA",
            "type": "string"
        },
        {
            "name": "subjectB",
            "baseName": "subjectB",
            "type": "string"
        },
        {
            "name": "splitRule",
            "baseName": "splitRule",
            "type": "number"
        },
        {
            "name": "winnerCriteria",
            "baseName": "winnerCriteria",
            "type": "CreateEmailCampaign.WinnerCriteriaEnum"
        },
        {
            "name": "winnerDelay",
            "baseName": "winnerDelay",
            "type": "number"
        },
        {
            "name": "ipWarmupEnable",
            "baseName": "ipWarmupEnable",
            "type": "boolean"
        },
        {
            "name": "initialQuota",
            "baseName": "initialQuota",
            "type": "number"
        },
        {
            "name": "increaseRate",
            "baseName": "increaseRate",
            "type": "number"
        },
        {
            "name": "unsubscriptionPageId",
            "baseName": "unsubscriptionPageId",
            "type": "string"
        },
        {
            "name": "updateFormId",
            "baseName": "updateFormId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateEmailCampaign.attributeTypeMap;
    }
}

export namespace CreateEmailCampaign {
    export enum WinnerCriteriaEnum {
        Open = <any> 'open',
        Click = <any> 'click'
    }
}
