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
 * The CoinResultAllOf model module.
 * @module model/CoinResultAllOf
 * @version 0.0.1
 */
class CoinResultAllOf {
    /**
     * Constructs a new <code>CoinResultAllOf</code>.
     * @alias module:model/CoinResultAllOf
     */
    constructor() { 
        
        CoinResultAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CoinResultAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoinResultAllOf} obj Optional instance to populate.
     * @return {module:model/CoinResultAllOf} The populated <code>CoinResultAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CoinResultAllOf();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/CoinResultAllOf.ValueEnum>} value
 */
CoinResultAllOf.prototype['value'] = undefined;





/**
 * Allowed values for the <code>value</code> property.
 * @enum {String}
 * @readonly
 */
CoinResultAllOf['ValueEnum'] = {

    /**
     * value: "HEAD"
     * @const
     */
    "HEAD": "HEAD",

    /**
     * value: "TAIL"
     * @const
     */
    "TAIL": "TAIL"
};



export default CoinResultAllOf;

