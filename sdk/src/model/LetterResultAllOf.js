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
 * The LetterResultAllOf model module.
 * @module model/LetterResultAllOf
 * @version 0.0.1
 */
class LetterResultAllOf {
    /**
     * Constructs a new <code>LetterResultAllOf</code>.
     * @alias module:model/LetterResultAllOf
     */
    constructor() { 
        
        LetterResultAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LetterResultAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LetterResultAllOf} obj Optional instance to populate.
     * @return {module:model/LetterResultAllOf} The populated <code>LetterResultAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LetterResultAllOf();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} value
 */
LetterResultAllOf.prototype['value'] = undefined;






export default LetterResultAllOf;
