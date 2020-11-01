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
import Groups from '../model/Groups';
import GroupsResult from '../model/GroupsResult';
import Participant from '../model/Participant';

/**
* Groups service.
* @module api/GroupsApi
* @version 0.0.1
*/
export default class GroupsApi {

    /**
    * Constructs a new GroupsApi. 
    * @alias module:api/GroupsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * @param {module:model/Groups} groups 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Groups} and HTTP response
     */
    groupsCreateWithHttpInfo(groups) {
      let postBody = groups;
      // verify the required parameter 'groups' is set
      if (groups === undefined || groups === null) {
        throw new Error("Missing the required parameter 'groups' when calling groupsCreate");
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
      let returnType = Groups;
      return this.apiClient.callApi(
        '/groups/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {module:model/Groups} groups 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Groups}
     */
    groupsCreate(groups) {
      return this.groupsCreateWithHttpInfo(groups)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @param {module:model/Participant} participant 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    groupsParticipantsAddWithHttpInfo(id, participant) {
      let postBody = participant;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling groupsParticipantsAdd");
      }
      // verify the required parameter 'participant' is set
      if (participant === undefined || participant === null) {
        throw new Error("Missing the required parameter 'participant' when calling groupsParticipantsAdd");
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
        '/groups/{id}/participants/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} id 
     * @param {module:model/Participant} participant 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    groupsParticipantsAdd(id, participant) {
      return this.groupsParticipantsAddWithHttpInfo(id, participant)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Groups} and HTTP response
     */
    groupsReadWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling groupsRead");
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
      let returnType = Groups;
      return this.apiClient.callApi(
        '/groups/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Groups}
     */
    groupsRead(id) {
      return this.groupsReadWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @param {module:model/DrawTossPayload} drawTossPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GroupsResult} and HTTP response
     */
    groupsTossWithHttpInfo(id, drawTossPayload) {
      let postBody = drawTossPayload;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling groupsToss");
      }
      // verify the required parameter 'drawTossPayload' is set
      if (drawTossPayload === undefined || drawTossPayload === null) {
        throw new Error("Missing the required parameter 'drawTossPayload' when calling groupsToss");
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
      let returnType = GroupsResult;
      return this.apiClient.callApi(
        '/groups/{id}/toss/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} id 
     * @param {module:model/DrawTossPayload} drawTossPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GroupsResult}
     */
    groupsToss(id, drawTossPayload) {
      return this.groupsTossWithHttpInfo(id, drawTossPayload)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
