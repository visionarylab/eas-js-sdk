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


import ApiClient from "../ApiClient";
import DrawTossPayload from '../model/DrawTossPayload';
import Lottery from '../model/Lottery';
import LotteryResult from '../model/LotteryResult';
import Participant from '../model/Participant';

/**
* Lottery service.
* @module api/LotteryApi
* @version 0.0.1
*/
export default class LotteryApi {

    /**
    * Constructs a new LotteryApi. 
    * @alias module:api/LotteryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * @param {module:model/Lottery} lottery 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Lottery} and HTTP response
     */
    lotteryCreateWithHttpInfo(lottery) {
      let postBody = lottery;
      // verify the required parameter 'lottery' is set
      if (lottery === undefined || lottery === null) {
        throw new Error("Missing the required parameter 'lottery' when calling lotteryCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Lottery;
      return this.apiClient.callApi(
        '/lottery/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {module:model/Lottery} lottery 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Lottery}
     */
    lotteryCreate(lottery) {
      return this.lotteryCreateWithHttpInfo(lottery)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @param {module:model/Participant} participant 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    lotteryParticipantsAddWithHttpInfo(id, participant) {
      let postBody = participant;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lotteryParticipantsAdd");
      }
      // verify the required parameter 'participant' is set
      if (participant === undefined || participant === null) {
        throw new Error("Missing the required parameter 'participant' when calling lotteryParticipantsAdd");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/lottery/{id}/participants/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} id 
     * @param {module:model/Participant} participant 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    lotteryParticipantsAdd(id, participant) {
      return this.lotteryParticipantsAddWithHttpInfo(id, participant)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Lottery} and HTTP response
     */
    lotteryReadWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lotteryRead");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Lottery;
      return this.apiClient.callApi(
        '/lottery/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Lottery}
     */
    lotteryRead(id) {
      return this.lotteryReadWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @param {module:model/DrawTossPayload} drawTossPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LotteryResult} and HTTP response
     */
    lotteryTossWithHttpInfo(id, drawTossPayload) {
      let postBody = drawTossPayload;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lotteryToss");
      }
      // verify the required parameter 'drawTossPayload' is set
      if (drawTossPayload === undefined || drawTossPayload === null) {
        throw new Error("Missing the required parameter 'drawTossPayload' when calling lotteryToss");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LotteryResult;
      return this.apiClient.callApi(
        '/lottery/{id}/toss/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} id 
     * @param {module:model/DrawTossPayload} drawTossPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LotteryResult}
     */
    lotteryToss(id, drawTossPayload) {
      return this.lotteryTossWithHttpInfo(id, drawTossPayload)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
