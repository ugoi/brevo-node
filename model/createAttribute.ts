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
import { CreateAttributeEnumerationInner } from './createAttributeEnumerationInner';

export class CreateAttribute {
    /**
    * Value of the attribute. Use only if the attribute\'s category is \'calculated\' or \'global\'
    */
    'value'?: string;
    /**
    * Type of the attribute. Use only if the attribute\'s category is \'calculated\' or \'global\'
    */
    'isRecurring'?: boolean;
    /**
    * List of values and labels that the attribute can take. Use only if the attribute\'s category is \"category\". For example, [{\"value\":1, \"label\":\"male\"}, {\"value\":2, \"label\":\"female\"}]
    */
    'enumeration'?: Array<CreateAttributeEnumerationInner>;
    /**
    * Type of the attribute. Use only if the attribute\'s category is \'normal\', \'category\' or \'transactional\' ( type \'boolean\' is only available if the category is \'normal\' attribute, type \'id\' is only available if the category is \'transactional\' attribute & type \'category\' is only available if the category is \'category\' attribute )
    */
    'type'?: CreateAttribute.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "isRecurring",
            "baseName": "isRecurring",
            "type": "boolean"
        },
        {
            "name": "enumeration",
            "baseName": "enumeration",
            "type": "Array<CreateAttributeEnumerationInner>"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CreateAttribute.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return CreateAttribute.attributeTypeMap;
    }
}

export namespace CreateAttribute {
    export enum TypeEnum {
        Text = <any> 'text',
        Date = <any> 'date',
        Float = <any> 'float',
        Boolean = <any> 'boolean',
        Id = <any> 'id',
        Category = <any> 'category'
    }
}
