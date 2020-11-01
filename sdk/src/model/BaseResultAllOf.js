/**
 * EAS API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The BaseResultAllOf model module.
 * @module model/BaseResultAllOf
 * @version 0.0.1
 */
class BaseResultAllOf {
    /**
     * Constructs a new <code>BaseResultAllOf</code>.
     * @alias module:model/BaseResultAllOf
     */
    constructor() { 
        
        BaseResultAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BaseResultAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseResultAllOf} obj Optional instance to populate.
     * @return {module:model/BaseResultAllOf} The populated <code>BaseResultAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseResultAllOf();

            if (data.hasOwnProperty('schedule_date')) {
                obj['schedule_date'] = ApiClient.convertToType(data['schedule_date'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} schedule_date
 */
BaseResultAllOf.prototype['schedule_date'] = undefined;






export default BaseResultAllOf;

