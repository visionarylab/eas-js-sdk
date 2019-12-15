/**
 * EAS API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import DrawTossPayload from '../model/DrawTossPayload';
import RandomNumber from '../model/RandomNumber';
import RandomNumberResult from '../model/RandomNumberResult';

/**
* RandomNumber service.
* @module api/RandomNumberApi
* @version 0.0.1
*/
export default class RandomNumberApi {

    /**
    * Constructs a new RandomNumberApi. 
    * @alias module:api/RandomNumberApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * @param {module:model/RandomNumber} randomNumber 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RandomNumber} and HTTP response
     */
    randomNumberCreateWithHttpInfo(randomNumber) {
      let postBody = randomNumber;

      // verify the required parameter 'randomNumber' is set
      if (randomNumber === undefined || randomNumber === null) {
        throw new Error("Missing the required parameter 'randomNumber' when calling randomNumberCreate");
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
      let returnType = RandomNumber;

      return this.apiClient.callApi(
        '/random_number/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {module:model/RandomNumber} randomNumber 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RandomNumber}
     */
    randomNumberCreate(randomNumber) {
      return this.randomNumberCreateWithHttpInfo(randomNumber)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RandomNumber} and HTTP response
     */
    randomNumberReadWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling randomNumberRead");
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
      let returnType = RandomNumber;

      return this.apiClient.callApi(
        '/random_number/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RandomNumber}
     */
    randomNumberRead(id) {
      return this.randomNumberReadWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @param {module:model/DrawTossPayload} drawTossPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RandomNumberResult} and HTTP response
     */
    randomNumberTossWithHttpInfo(id, drawTossPayload) {
      let postBody = drawTossPayload;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling randomNumberToss");
      }

      // verify the required parameter 'drawTossPayload' is set
      if (drawTossPayload === undefined || drawTossPayload === null) {
        throw new Error("Missing the required parameter 'drawTossPayload' when calling randomNumberToss");
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
      let returnType = RandomNumberResult;

      return this.apiClient.callApi(
        '/random_number/{id}/toss/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} id 
     * @param {module:model/DrawTossPayload} drawTossPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RandomNumberResult}
     */
    randomNumberToss(id, drawTossPayload) {
      return this.randomNumberTossWithHttpInfo(id, drawTossPayload)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
