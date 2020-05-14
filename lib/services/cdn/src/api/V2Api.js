/*
* cdn
* <br/>https://ncloud.apigw.ntruss.com/cdn/v2
*
* OpenAPI spec version: 2018-11-13T06:29:10Z
*
* NBP corp.
*
* NOTE: This class is auto generated by the swagger code generator program.
* https://github.com/swagger-api/swagger-codegen.git
* Do not edit the class manually.
*/

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GetCdnPlusInstanceListRequest', 'model/GetCdnPlusInstanceListResponse', 'model/GetCdnPlusPurgeHistoryListRequest', 'model/GetCdnPlusPurgeHistoryListResponse', 'model/GetGlobalCdnInstanceListRequest', 'model/GetGlobalCdnInstanceListResponse', 'model/GetGlobalCdnPurgeHistoryListRequest', 'model/GetGlobalCdnPurgeHistoryListResponse', 'model/RequestCdnPlusPurgeRequest', 'model/RequestCdnPlusPurgeResponse', 'model/RequestGlobalCdnPurgeRequest', 'model/RequestGlobalCdnPurgeResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetCdnPlusInstanceListRequest'), require('../model/GetCdnPlusInstanceListResponse'), require('../model/GetCdnPlusPurgeHistoryListRequest'), require('../model/GetCdnPlusPurgeHistoryListResponse'), require('../model/GetGlobalCdnInstanceListRequest'), require('../model/GetGlobalCdnInstanceListResponse'), require('../model/GetGlobalCdnPurgeHistoryListRequest'), require('../model/GetGlobalCdnPurgeHistoryListResponse'), require('../model/RequestCdnPlusPurgeRequest'), require('../model/RequestCdnPlusPurgeResponse'), require('../model/RequestGlobalCdnPurgeRequest'), require('../model/RequestGlobalCdnPurgeResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Cdn) {
      root.Cdn = {};
    }
    root.Cdn.V2Api = factory(root.Cdn.ApiClient, root.Cdn.GetCdnPlusInstanceListRequest, root.Cdn.GetCdnPlusInstanceListResponse, root.Cdn.GetCdnPlusPurgeHistoryListRequest, root.Cdn.GetCdnPlusPurgeHistoryListResponse, root.Cdn.GetGlobalCdnInstanceListRequest, root.Cdn.GetGlobalCdnInstanceListResponse, root.Cdn.GetGlobalCdnPurgeHistoryListRequest, root.Cdn.GetGlobalCdnPurgeHistoryListResponse, root.Cdn.RequestCdnPlusPurgeRequest, root.Cdn.RequestCdnPlusPurgeResponse, root.Cdn.RequestGlobalCdnPurgeRequest, root.Cdn.RequestGlobalCdnPurgeResponse);
  }
}(this, function(ApiClient, GetCdnPlusInstanceListRequest, GetCdnPlusInstanceListResponse, GetCdnPlusPurgeHistoryListRequest, GetCdnPlusPurgeHistoryListResponse, GetGlobalCdnInstanceListRequest, GetGlobalCdnInstanceListResponse, GetGlobalCdnPurgeHistoryListRequest, GetGlobalCdnPurgeHistoryListResponse, RequestCdnPlusPurgeRequest, RequestCdnPlusPurgeResponse, RequestGlobalCdnPurgeRequest, RequestGlobalCdnPurgeResponse) {
  'use strict';

  /**
   * V2 service.
   * @module api/V2Api
   * @version 1.0.0
   */

  /**
   * Constructs a new V2Api. 
   * @alias module:api/V2Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCdnPlusInstanceList operation.
     * @callback module:api/V2Api~getCdnPlusInstanceListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCdnPlusInstanceListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * CDN+인스턴스리스트조회
     * @param {module:model/GetCdnPlusInstanceListRequest} getCdnPlusInstanceListRequest getCdnPlusInstanceListRequest
     * @param {module:api/V2Api~getCdnPlusInstanceListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCdnPlusInstanceListResponse}
     */
    this.getCdnPlusInstanceList = function(getCdnPlusInstanceListRequest, callback) {
      var postBody = getCdnPlusInstanceListRequest;

      // verify the required parameter 'getCdnPlusInstanceListRequest' is set
      if (getCdnPlusInstanceListRequest === undefined || getCdnPlusInstanceListRequest === null) {
        throw new Error("Missing the required parameter 'getCdnPlusInstanceListRequest' when calling getCdnPlusInstanceList");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['x-ncp-iam'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = GetCdnPlusInstanceListResponse;

      return this.apiClient.callApi(
        '/getCdnPlusInstanceList', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCdnPlusPurgeHistoryList operation.
     * @callback module:api/V2Api~getCdnPlusPurgeHistoryListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCdnPlusPurgeHistoryListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * CDN+퍼지기록조회
     * @param {module:model/GetCdnPlusPurgeHistoryListRequest} getCdnPlusPurgeHistoryListRequest getCdnPlusPurgeHistoryListRequest
     * @param {module:api/V2Api~getCdnPlusPurgeHistoryListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCdnPlusPurgeHistoryListResponse}
     */
    this.getCdnPlusPurgeHistoryList = function(getCdnPlusPurgeHistoryListRequest, callback) {
      var postBody = getCdnPlusPurgeHistoryListRequest;

      // verify the required parameter 'getCdnPlusPurgeHistoryListRequest' is set
      if (getCdnPlusPurgeHistoryListRequest === undefined || getCdnPlusPurgeHistoryListRequest === null) {
        throw new Error("Missing the required parameter 'getCdnPlusPurgeHistoryListRequest' when calling getCdnPlusPurgeHistoryList");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['x-ncp-iam'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = GetCdnPlusPurgeHistoryListResponse;

      return this.apiClient.callApi(
        '/getCdnPlusPurgeHistoryList', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGlobalCdnInstanceList operation.
     * @callback module:api/V2Api~getGlobalCdnInstanceListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGlobalCdnInstanceListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Global CDN 인스턴스리스트조회
     * @param {module:model/GetGlobalCdnInstanceListRequest} getGlobalCdnInstanceListRequest getGlobalCdnInstanceListRequest
     * @param {module:api/V2Api~getGlobalCdnInstanceListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGlobalCdnInstanceListResponse}
     */
    this.getGlobalCdnInstanceList = function(getGlobalCdnInstanceListRequest, callback) {
      var postBody = getGlobalCdnInstanceListRequest;

      // verify the required parameter 'getGlobalCdnInstanceListRequest' is set
      if (getGlobalCdnInstanceListRequest === undefined || getGlobalCdnInstanceListRequest === null) {
        throw new Error("Missing the required parameter 'getGlobalCdnInstanceListRequest' when calling getGlobalCdnInstanceList");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['x-ncp-iam'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = GetGlobalCdnInstanceListResponse;

      return this.apiClient.callApi(
        '/getGlobalCdnInstanceList', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGlobalCdnPurgeHistoryList operation.
     * @callback module:api/V2Api~getGlobalCdnPurgeHistoryListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGlobalCdnPurgeHistoryListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Global CDN퍼지기록조회
     * @param {module:model/GetGlobalCdnPurgeHistoryListRequest} getGlobalCdnPurgeHistoryListRequest getGlobalCdnPurgeHistoryListRequest
     * @param {module:api/V2Api~getGlobalCdnPurgeHistoryListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGlobalCdnPurgeHistoryListResponse}
     */
    this.getGlobalCdnPurgeHistoryList = function(getGlobalCdnPurgeHistoryListRequest, callback) {
      var postBody = getGlobalCdnPurgeHistoryListRequest;

      // verify the required parameter 'getGlobalCdnPurgeHistoryListRequest' is set
      if (getGlobalCdnPurgeHistoryListRequest === undefined || getGlobalCdnPurgeHistoryListRequest === null) {
        throw new Error("Missing the required parameter 'getGlobalCdnPurgeHistoryListRequest' when calling getGlobalCdnPurgeHistoryList");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['x-ncp-iam'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = GetGlobalCdnPurgeHistoryListResponse;

      return this.apiClient.callApi(
        '/getGlobalCdnPurgeHistoryList', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the requestCdnPlusPurge operation.
     * @callback module:api/V2Api~requestCdnPlusPurgeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RequestCdnPlusPurgeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * CDN+퍼지요청
     * @param {module:model/RequestCdnPlusPurgeRequest} requestCdnPlusPurgeRequest requestCdnPlusPurgeRequest
     * @param {module:api/V2Api~requestCdnPlusPurgeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RequestCdnPlusPurgeResponse}
     */
    this.requestCdnPlusPurge = function(requestCdnPlusPurgeRequest, callback) {
      var postBody = requestCdnPlusPurgeRequest;

      // verify the required parameter 'requestCdnPlusPurgeRequest' is set
      if (requestCdnPlusPurgeRequest === undefined || requestCdnPlusPurgeRequest === null) {
        throw new Error("Missing the required parameter 'requestCdnPlusPurgeRequest' when calling requestCdnPlusPurge");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['x-ncp-iam'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = RequestCdnPlusPurgeResponse;

      return this.apiClient.callApi(
        '/requestCdnPlusPurge', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the requestGlobalCdnPurge operation.
     * @callback module:api/V2Api~requestGlobalCdnPurgeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RequestGlobalCdnPurgeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Global CDN퍼지요청
     * @param {module:model/RequestGlobalCdnPurgeRequest} requestGlobalCdnPurgeRequest requestGlobalCdnPurgeRequest
     * @param {module:api/V2Api~requestGlobalCdnPurgeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RequestGlobalCdnPurgeResponse}
     */
    this.requestGlobalCdnPurge = function(requestGlobalCdnPurgeRequest, callback) {
      var postBody = requestGlobalCdnPurgeRequest;

      // verify the required parameter 'requestGlobalCdnPurgeRequest' is set
      if (requestGlobalCdnPurgeRequest === undefined || requestGlobalCdnPurgeRequest === null) {
        throw new Error("Missing the required parameter 'requestGlobalCdnPurgeRequest' when calling requestGlobalCdnPurge");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['x-ncp-iam'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = RequestGlobalCdnPurgeResponse;

      return this.apiClient.callApi(
        '/requestGlobalCdnPurge', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));