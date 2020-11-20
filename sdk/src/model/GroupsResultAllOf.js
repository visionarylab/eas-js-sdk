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
import Participant from './Participant';

/**
 * The GroupsResultAllOf model module.
 * @module model/GroupsResultAllOf
 * @version 0.0.1
 */
class GroupsResultAllOf {
    /**
     * Constructs a new <code>GroupsResultAllOf</code>.
     * @alias module:model/GroupsResultAllOf
     */
    constructor() { 
        
        GroupsResultAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GroupsResultAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupsResultAllOf} obj Optional instance to populate.
     * @return {module:model/GroupsResultAllOf} The populated <code>GroupsResultAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupsResultAllOf();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], [[Participant]]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Array.<module:model/Participant>>} value
 */
GroupsResultAllOf.prototype['value'] = undefined;






export default GroupsResultAllOf;
