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
import BaseDraw from './BaseDraw';
import DrawMetadata from './DrawMetadata';
import LotteryAllOf from './LotteryAllOf';
import LotteryResult from './LotteryResult';
import Participant from './Participant';

/**
 * The Lottery model module.
 * @module model/Lottery
 * @version 0.0.1
 */
class Lottery {
    /**
     * Constructs a new <code>Lottery</code>.
     * @alias module:model/Lottery
     * @implements module:model/BaseDraw
     * @implements module:model/LotteryAllOf
     * @param participants {Array.<module:model/Participant>} 
     */
    constructor(participants) { 
        BaseDraw.initialize(this);LotteryAllOf.initialize(this, participants);
        Lottery.initialize(this, participants);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, participants) { 
        obj['participants'] = participants;
    }

    /**
     * Constructs a <code>Lottery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Lottery} obj Optional instance to populate.
     * @return {module:model/Lottery} The populated <code>Lottery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Lottery();
            BaseDraw.constructFromObject(data, obj);
            LotteryAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('private_id')) {
                obj['private_id'] = ApiClient.convertToType(data['private_id'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [DrawMetadata]);
            }
            if (data.hasOwnProperty('number_of_results')) {
                obj['number_of_results'] = ApiClient.convertToType(data['number_of_results'], 'Number');
            }
            if (data.hasOwnProperty('participants')) {
                obj['participants'] = ApiClient.convertToType(data['participants'], [Participant]);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [LotteryResult]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Lottery.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
Lottery.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Lottery.prototype['updated_at'] = undefined;

/**
 * @member {String} title
 */
Lottery.prototype['title'] = undefined;

/**
 * @member {String} description
 */
Lottery.prototype['description'] = undefined;

/**
 * @member {String} private_id
 */
Lottery.prototype['private_id'] = undefined;

/**
 * @member {Array.<module:model/DrawMetadata>} metadata
 */
Lottery.prototype['metadata'] = undefined;

/**
 * @member {Number} number_of_results
 * @default 1
 */
Lottery.prototype['number_of_results'] = 1;

/**
 * @member {Array.<module:model/Participant>} participants
 */
Lottery.prototype['participants'] = undefined;

/**
 * @member {Array.<module:model/LotteryResult>} results
 */
Lottery.prototype['results'] = undefined;


// Implement BaseDraw interface:
/**
 * @member {String} id
 */
BaseDraw.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */
BaseDraw.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */
BaseDraw.prototype['updated_at'] = undefined;
/**
 * @member {String} title
 */
BaseDraw.prototype['title'] = undefined;
/**
 * @member {String} description
 */
BaseDraw.prototype['description'] = undefined;
/**
 * @member {String} private_id
 */
BaseDraw.prototype['private_id'] = undefined;
/**
 * @member {Array.<module:model/DrawMetadata>} metadata
 */
BaseDraw.prototype['metadata'] = undefined;
// Implement LotteryAllOf interface:
/**
 * @member {Number} number_of_results
 * @default 1
 */
LotteryAllOf.prototype['number_of_results'] = 1;
/**
 * @member {Array.<module:model/Participant>} participants
 */
LotteryAllOf.prototype['participants'] = undefined;
/**
 * @member {Array.<module:model/LotteryResult>} results
 */
LotteryAllOf.prototype['results'] = undefined;




export default Lottery;

