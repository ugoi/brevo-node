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
import { TaskReminder } from './taskReminder';

export class CrmTasksPostRequest {
    /**
    * Name of task
    */
    'name': string;
    /**
    * Duration of task in milliseconds [1 minute = 60000 ms]
    */
    'duration'?: number;
    /**
    * Id for type of task e.g Call / Email / Meeting etc.
    */
    'taskTypeId': string;
    /**
    * Task due date and time
    */
    'date': Date;
    /**
    * Notes added to a task
    */
    'notes'?: string;
    /**
    * Task marked as done
    */
    'done'?: boolean;
    /**
    * User id to whom task is assigned
    */
    'assignToId'?: string;
    /**
    * Contact ids for contacts linked to this task
    */
    'contactsIds'?: Array<number>;
    /**
    * Deal ids for deals a task is linked to
    */
    'dealsIds'?: Array<string>;
    /**
    * Companies ids for companies a task is linked to
    */
    'companiesIds'?: Array<string>;
    'reminder'?: TaskReminder;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "number"
        },
        {
            "name": "taskTypeId",
            "baseName": "taskTypeId",
            "type": "string"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "Date"
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string"
        },
        {
            "name": "done",
            "baseName": "done",
            "type": "boolean"
        },
        {
            "name": "assignToId",
            "baseName": "assignToId",
            "type": "string"
        },
        {
            "name": "contactsIds",
            "baseName": "contactsIds",
            "type": "Array<number>"
        },
        {
            "name": "dealsIds",
            "baseName": "dealsIds",
            "type": "Array<string>"
        },
        {
            "name": "companiesIds",
            "baseName": "companiesIds",
            "type": "Array<string>"
        },
        {
            "name": "reminder",
            "baseName": "reminder",
            "type": "TaskReminder"
        }    ];

    static getAttributeTypeMap() {
        return CrmTasksPostRequest.attributeTypeMap;
    }
}

