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
* Granular feature permissions given to the user.
*/
export class GetCorporateUserPermissionFeatureAccess {
    /**
    * Permission on api keys
    */
    'apiKeys'?: Array<string>;
    /**
    * Permission on my plan
    */
    'myPlan'?: Array<string>;
    /**
    * Permission on user management
    */
    'userManagement'?: Array<string>;
    /**
    * Permission on apps management
    */
    'appsManagement'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiKeys",
            "baseName": "api_keys",
            "type": "Array<string>"
        },
        {
            "name": "myPlan",
            "baseName": "my_plan",
            "type": "Array<string>"
        },
        {
            "name": "userManagement",
            "baseName": "user_management",
            "type": "Array<string>"
        },
        {
            "name": "appsManagement",
            "baseName": "apps_management",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return GetCorporateUserPermissionFeatureAccess.attributeTypeMap;
    }
}

