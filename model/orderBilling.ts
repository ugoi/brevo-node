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

/**
* Billing details of an order.
*/
export class OrderBilling {
    /**
    * Full billing address.
    */
    'address'?: string;
    /**
    * Exact city of the address.
    */
    'city'?: string;
    /**
    * Billing country 2-letter ISO code.
    */
    'countryCode'?: string;
    /**
    * Phone number to contact for further details about the order, Mandatory if \"email\" field is not passed.
    */
    'phone'?: string;
    /**
    * Postcode for delivery and billing.
    */
    'postCode'?: string;
    /**
    * How the visitor will pay for the item(s), e.g. paypal, check, etc.
    */
    'paymentMethod'?: string;
    /**
    * Exact region (state/province) for delivery and billing.
    */
    'region'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        },
        {
            "name": "postCode",
            "baseName": "postCode",
            "type": "string"
        },
        {
            "name": "paymentMethod",
            "baseName": "paymentMethod",
            "type": "string"
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OrderBilling.attributeTypeMap;
    }
}

