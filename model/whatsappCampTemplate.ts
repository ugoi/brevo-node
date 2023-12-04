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
import { ComponentItems } from './componentItems';
import { VariablesItems } from './variablesItems';

export class WhatsappCampTemplate {
    /**
    * name of the template
    */
    'name'?: string;
    /**
    * description of the template
    */
    'category'?: string;
    /**
    * language of the template
    */
    'language'?: string;
    'containsButton'?: boolean;
    'displayHeader'?: boolean;
    /**
    * type of header
    */
    'headerType'?: string;
    /**
    * array of component item objects
    */
    'components'?: Array<ComponentItems>;
    /**
    * array of variables item object
    */
    'headerVariables'?: Array<VariablesItems>;
    /**
    * array of variables item variables
    */
    'bodyVariables'?: Array<VariablesItems>;
    'buttonType'?: string;
    'hideFooter'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "string"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "containsButton",
            "baseName": "contains_button",
            "type": "boolean"
        },
        {
            "name": "displayHeader",
            "baseName": "display_header",
            "type": "boolean"
        },
        {
            "name": "headerType",
            "baseName": "header_type",
            "type": "string"
        },
        {
            "name": "components",
            "baseName": "components",
            "type": "Array<ComponentItems>"
        },
        {
            "name": "headerVariables",
            "baseName": "header_variables",
            "type": "Array<VariablesItems>"
        },
        {
            "name": "bodyVariables",
            "baseName": "body_variables",
            "type": "Array<VariablesItems>"
        },
        {
            "name": "buttonType",
            "baseName": "button_type",
            "type": "string"
        },
        {
            "name": "hideFooter",
            "baseName": "hide_footer",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return WhatsappCampTemplate.attributeTypeMap;
    }
}

