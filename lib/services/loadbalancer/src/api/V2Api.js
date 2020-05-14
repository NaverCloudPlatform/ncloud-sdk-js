/*
* loadbalancer
* <br/>https://ncloud.apigw.ntruss.com/loadbalancer/v2
*
* OpenAPI spec version: 2018-11-13T06:25:36Z
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
    define(['ApiClient', 'model/AddLoadBalancerSslCertificateRequest', 'model/AddLoadBalancerSslCertificateResponse', 'model/ChangeLoadBalancedServerInstancesRequest', 'model/ChangeLoadBalancedServerInstancesResponse', 'model/ChangeLoadBalancerInstanceConfigurationRequest', 'model/ChangeLoadBalancerInstanceConfigurationResponse', 'model/CreateLoadBalancerInstanceRequest', 'model/CreateLoadBalancerInstanceResponse', 'model/DeleteLoadBalancerInstancesRequest', 'model/DeleteLoadBalancerInstancesResponse', 'model/DeleteLoadBalancerSslCertificateRequest', 'model/DeleteLoadBalancerSslCertificateResponse', 'model/GetLoadBalancedServerInstanceListRequest', 'model/GetLoadBalancedServerInstanceListResponse', 'model/GetLoadBalancerInstanceListRequest', 'model/GetLoadBalancerInstanceListResponse', 'model/GetLoadBalancerSslCertificateListRequest', 'model/GetLoadBalancerSslCertificateListResponse', 'model/GetLoadBalancerTargetServerInstanceListRequest', 'model/GetLoadBalancerTargetServerInstanceListResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddLoadBalancerSslCertificateRequest'), require('../model/AddLoadBalancerSslCertificateResponse'), require('../model/ChangeLoadBalancedServerInstancesRequest'), require('../model/ChangeLoadBalancedServerInstancesResponse'), require('../model/ChangeLoadBalancerInstanceConfigurationRequest'), require('../model/ChangeLoadBalancerInstanceConfigurationResponse'), require('../model/CreateLoadBalancerInstanceRequest'), require('../model/CreateLoadBalancerInstanceResponse'), require('../model/DeleteLoadBalancerInstancesRequest'), require('../model/DeleteLoadBalancerInstancesResponse'), require('../model/DeleteLoadBalancerSslCertificateRequest'), require('../model/DeleteLoadBalancerSslCertificateResponse'), require('../model/GetLoadBalancedServerInstanceListRequest'), require('../model/GetLoadBalancedServerInstanceListResponse'), require('../model/GetLoadBalancerInstanceListRequest'), require('../model/GetLoadBalancerInstanceListResponse'), require('../model/GetLoadBalancerSslCertificateListRequest'), require('../model/GetLoadBalancerSslCertificateListResponse'), require('../model/GetLoadBalancerTargetServerInstanceListRequest'), require('../model/GetLoadBalancerTargetServerInstanceListResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Loadbalancer) {
      root.Loadbalancer = {};
    }
    root.Loadbalancer.V2Api = factory(root.Loadbalancer.ApiClient, root.Loadbalancer.AddLoadBalancerSslCertificateRequest, root.Loadbalancer.AddLoadBalancerSslCertificateResponse, root.Loadbalancer.ChangeLoadBalancedServerInstancesRequest, root.Loadbalancer.ChangeLoadBalancedServerInstancesResponse, root.Loadbalancer.ChangeLoadBalancerInstanceConfigurationRequest, root.Loadbalancer.ChangeLoadBalancerInstanceConfigurationResponse, root.Loadbalancer.CreateLoadBalancerInstanceRequest, root.Loadbalancer.CreateLoadBalancerInstanceResponse, root.Loadbalancer.DeleteLoadBalancerInstancesRequest, root.Loadbalancer.DeleteLoadBalancerInstancesResponse, root.Loadbalancer.DeleteLoadBalancerSslCertificateRequest, root.Loadbalancer.DeleteLoadBalancerSslCertificateResponse, root.Loadbalancer.GetLoadBalancedServerInstanceListRequest, root.Loadbalancer.GetLoadBalancedServerInstanceListResponse, root.Loadbalancer.GetLoadBalancerInstanceListRequest, root.Loadbalancer.GetLoadBalancerInstanceListResponse, root.Loadbalancer.GetLoadBalancerSslCertificateListRequest, root.Loadbalancer.GetLoadBalancerSslCertificateListResponse, root.Loadbalancer.GetLoadBalancerTargetServerInstanceListRequest, root.Loadbalancer.GetLoadBalancerTargetServerInstanceListResponse);
  }
}(this, function(ApiClient, AddLoadBalancerSslCertificateRequest, AddLoadBalancerSslCertificateResponse, ChangeLoadBalancedServerInstancesRequest, ChangeLoadBalancedServerInstancesResponse, ChangeLoadBalancerInstanceConfigurationRequest, ChangeLoadBalancerInstanceConfigurationResponse, CreateLoadBalancerInstanceRequest, CreateLoadBalancerInstanceResponse, DeleteLoadBalancerInstancesRequest, DeleteLoadBalancerInstancesResponse, DeleteLoadBalancerSslCertificateRequest, DeleteLoadBalancerSslCertificateResponse, GetLoadBalancedServerInstanceListRequest, GetLoadBalancedServerInstanceListResponse, GetLoadBalancerInstanceListRequest, GetLoadBalancerInstanceListResponse, GetLoadBalancerSslCertificateListRequest, GetLoadBalancerSslCertificateListResponse, GetLoadBalancerTargetServerInstanceListRequest, GetLoadBalancerTargetServerInstanceListResponse) {
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
     * Callback function to receive the result of the addLoadBalancerSslCertificate operation.
     * @callback module:api/V2Api~addLoadBalancerSslCertificateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddLoadBalancerSslCertificateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 로드밸런서SSL인증서추가
     * @param {module:model/AddLoadBalancerSslCertificateRequest} addLoadBalancerSslCertificateRequest addLoadBalancerSslCertificateRequest
     * @param {module:api/V2Api~addLoadBalancerSslCertificateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AddLoadBalancerSslCertificateResponse}
     */
    this.addLoadBalancerSslCertificate = function(addLoadBalancerSslCertificateRequest, callback) {
      var postBody = addLoadBalancerSslCertificateRequest;

      // verify the required parameter 'addLoadBalancerSslCertificateRequest' is set
      if (addLoadBalancerSslCertificateRequest === undefined || addLoadBalancerSslCertificateRequest === null) {
        throw new Error("Missing the required parameter 'addLoadBalancerSslCertificateRequest' when calling addLoadBalancerSslCertificate");
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
      var returnType = AddLoadBalancerSslCertificateResponse;

      return this.apiClient.callApi(
        '/addLoadBalancerSslCertificate', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the changeLoadBalancedServerInstances operation.
     * @callback module:api/V2Api~changeLoadBalancedServerInstancesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ChangeLoadBalancedServerInstancesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 로드밸런서에Bind된서버인스턴스변경
     * @param {module:model/ChangeLoadBalancedServerInstancesRequest} changeLoadBalancedServerInstancesRequest changeLoadBalancedServerInstancesRequest
     * @param {module:api/V2Api~changeLoadBalancedServerInstancesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ChangeLoadBalancedServerInstancesResponse}
     */
    this.changeLoadBalancedServerInstances = function(changeLoadBalancedServerInstancesRequest, callback) {
      var postBody = changeLoadBalancedServerInstancesRequest;

      // verify the required parameter 'changeLoadBalancedServerInstancesRequest' is set
      if (changeLoadBalancedServerInstancesRequest === undefined || changeLoadBalancedServerInstancesRequest === null) {
        throw new Error("Missing the required parameter 'changeLoadBalancedServerInstancesRequest' when calling changeLoadBalancedServerInstances");
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
      var returnType = ChangeLoadBalancedServerInstancesResponse;

      return this.apiClient.callApi(
        '/changeLoadBalancedServerInstances', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the changeLoadBalancerInstanceConfiguration operation.
     * @callback module:api/V2Api~changeLoadBalancerInstanceConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ChangeLoadBalancerInstanceConfigurationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 로드밸런서인스턴스설정변경
     * @param {module:model/ChangeLoadBalancerInstanceConfigurationRequest} changeLoadBalancerInstanceConfigurationRequest changeLoadBalancerInstanceConfigurationRequest
     * @param {module:api/V2Api~changeLoadBalancerInstanceConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ChangeLoadBalancerInstanceConfigurationResponse}
     */
    this.changeLoadBalancerInstanceConfiguration = function(changeLoadBalancerInstanceConfigurationRequest, callback) {
      var postBody = changeLoadBalancerInstanceConfigurationRequest;

      // verify the required parameter 'changeLoadBalancerInstanceConfigurationRequest' is set
      if (changeLoadBalancerInstanceConfigurationRequest === undefined || changeLoadBalancerInstanceConfigurationRequest === null) {
        throw new Error("Missing the required parameter 'changeLoadBalancerInstanceConfigurationRequest' when calling changeLoadBalancerInstanceConfiguration");
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
      var returnType = ChangeLoadBalancerInstanceConfigurationResponse;

      return this.apiClient.callApi(
        '/changeLoadBalancerInstanceConfiguration', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createLoadBalancerInstance operation.
     * @callback module:api/V2Api~createLoadBalancerInstanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateLoadBalancerInstanceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 로드밸런서인스턴스생성
     * @param {module:model/CreateLoadBalancerInstanceRequest} createLoadBalancerInstanceRequest createLoadBalancerInstanceRequest
     * @param {module:api/V2Api~createLoadBalancerInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateLoadBalancerInstanceResponse}
     */
    this.createLoadBalancerInstance = function(createLoadBalancerInstanceRequest, callback) {
      var postBody = createLoadBalancerInstanceRequest;

      // verify the required parameter 'createLoadBalancerInstanceRequest' is set
      if (createLoadBalancerInstanceRequest === undefined || createLoadBalancerInstanceRequest === null) {
        throw new Error("Missing the required parameter 'createLoadBalancerInstanceRequest' when calling createLoadBalancerInstance");
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
      var returnType = CreateLoadBalancerInstanceResponse;

      return this.apiClient.callApi(
        '/createLoadBalancerInstance', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLoadBalancerInstances operation.
     * @callback module:api/V2Api~deleteLoadBalancerInstancesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteLoadBalancerInstancesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 로드밸런서인스턴스삭제
     * @param {module:model/DeleteLoadBalancerInstancesRequest} deleteLoadBalancerInstancesRequest deleteLoadBalancerInstancesRequest
     * @param {module:api/V2Api~deleteLoadBalancerInstancesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteLoadBalancerInstancesResponse}
     */
    this.deleteLoadBalancerInstances = function(deleteLoadBalancerInstancesRequest, callback) {
      var postBody = deleteLoadBalancerInstancesRequest;

      // verify the required parameter 'deleteLoadBalancerInstancesRequest' is set
      if (deleteLoadBalancerInstancesRequest === undefined || deleteLoadBalancerInstancesRequest === null) {
        throw new Error("Missing the required parameter 'deleteLoadBalancerInstancesRequest' when calling deleteLoadBalancerInstances");
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
      var returnType = DeleteLoadBalancerInstancesResponse;

      return this.apiClient.callApi(
        '/deleteLoadBalancerInstances', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLoadBalancerSslCertificate operation.
     * @callback module:api/V2Api~deleteLoadBalancerSslCertificateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteLoadBalancerSslCertificateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 로드밸런서SSL인증서삭제
     * @param {module:model/DeleteLoadBalancerSslCertificateRequest} deleteLoadBalancerSslCertificateRequest deleteLoadBalancerSslCertificateRequest
     * @param {module:api/V2Api~deleteLoadBalancerSslCertificateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteLoadBalancerSslCertificateResponse}
     */
    this.deleteLoadBalancerSslCertificate = function(deleteLoadBalancerSslCertificateRequest, callback) {
      var postBody = deleteLoadBalancerSslCertificateRequest;

      // verify the required parameter 'deleteLoadBalancerSslCertificateRequest' is set
      if (deleteLoadBalancerSslCertificateRequest === undefined || deleteLoadBalancerSslCertificateRequest === null) {
        throw new Error("Missing the required parameter 'deleteLoadBalancerSslCertificateRequest' when calling deleteLoadBalancerSslCertificate");
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
      var returnType = DeleteLoadBalancerSslCertificateResponse;

      return this.apiClient.callApi(
        '/deleteLoadBalancerSslCertificate', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLoadBalancedServerInstanceList operation.
     * @callback module:api/V2Api~getLoadBalancedServerInstanceListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetLoadBalancedServerInstanceListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 로드밸런서Bind된서버인스턴스리스트조회
     * @param {module:model/GetLoadBalancedServerInstanceListRequest} getLoadBalancedServerInstanceListRequest getLoadBalancedServerInstanceListRequest
     * @param {module:api/V2Api~getLoadBalancedServerInstanceListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetLoadBalancedServerInstanceListResponse}
     */
    this.getLoadBalancedServerInstanceList = function(getLoadBalancedServerInstanceListRequest, callback) {
      var postBody = getLoadBalancedServerInstanceListRequest;

      // verify the required parameter 'getLoadBalancedServerInstanceListRequest' is set
      if (getLoadBalancedServerInstanceListRequest === undefined || getLoadBalancedServerInstanceListRequest === null) {
        throw new Error("Missing the required parameter 'getLoadBalancedServerInstanceListRequest' when calling getLoadBalancedServerInstanceList");
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
      var returnType = GetLoadBalancedServerInstanceListResponse;

      return this.apiClient.callApi(
        '/getLoadBalancedServerInstanceList', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLoadBalancerInstanceList operation.
     * @callback module:api/V2Api~getLoadBalancerInstanceListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetLoadBalancerInstanceListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 로드밸런서인스턴스리스트조회
     * @param {module:model/GetLoadBalancerInstanceListRequest} getLoadBalancerInstanceListRequest getLoadBalancerInstanceListRequest
     * @param {module:api/V2Api~getLoadBalancerInstanceListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetLoadBalancerInstanceListResponse}
     */
    this.getLoadBalancerInstanceList = function(getLoadBalancerInstanceListRequest, callback) {
      var postBody = getLoadBalancerInstanceListRequest;

      // verify the required parameter 'getLoadBalancerInstanceListRequest' is set
      if (getLoadBalancerInstanceListRequest === undefined || getLoadBalancerInstanceListRequest === null) {
        throw new Error("Missing the required parameter 'getLoadBalancerInstanceListRequest' when calling getLoadBalancerInstanceList");
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
      var returnType = GetLoadBalancerInstanceListResponse;

      return this.apiClient.callApi(
        '/getLoadBalancerInstanceList', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLoadBalancerSslCertificateList operation.
     * @callback module:api/V2Api~getLoadBalancerSslCertificateListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetLoadBalancerSslCertificateListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 로드밸런서SSL인증서조회
     * @param {module:model/GetLoadBalancerSslCertificateListRequest} getLoadBalancerSslCertificateListRequest getLoadBalancerSslCertificateListRequest
     * @param {module:api/V2Api~getLoadBalancerSslCertificateListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetLoadBalancerSslCertificateListResponse}
     */
    this.getLoadBalancerSslCertificateList = function(getLoadBalancerSslCertificateListRequest, callback) {
      var postBody = getLoadBalancerSslCertificateListRequest;

      // verify the required parameter 'getLoadBalancerSslCertificateListRequest' is set
      if (getLoadBalancerSslCertificateListRequest === undefined || getLoadBalancerSslCertificateListRequest === null) {
        throw new Error("Missing the required parameter 'getLoadBalancerSslCertificateListRequest' when calling getLoadBalancerSslCertificateList");
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
      var returnType = GetLoadBalancerSslCertificateListResponse;

      return this.apiClient.callApi(
        '/getLoadBalancerSslCertificateList', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLoadBalancerTargetServerInstanceList operation.
     * @callback module:api/V2Api~getLoadBalancerTargetServerInstanceListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetLoadBalancerTargetServerInstanceListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 로드밸런서Target서버인스턴스리스트
     * @param {module:model/GetLoadBalancerTargetServerInstanceListRequest} getLoadBalancerTargetServerInstanceListRequest getLoadBalancerTargetServerInstanceListRequest
     * @param {module:api/V2Api~getLoadBalancerTargetServerInstanceListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetLoadBalancerTargetServerInstanceListResponse}
     */
    this.getLoadBalancerTargetServerInstanceList = function(getLoadBalancerTargetServerInstanceListRequest, callback) {
      var postBody = getLoadBalancerTargetServerInstanceListRequest;

      // verify the required parameter 'getLoadBalancerTargetServerInstanceListRequest' is set
      if (getLoadBalancerTargetServerInstanceListRequest === undefined || getLoadBalancerTargetServerInstanceListRequest === null) {
        throw new Error("Missing the required parameter 'getLoadBalancerTargetServerInstanceListRequest' when calling getLoadBalancerTargetServerInstanceList");
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
      var returnType = GetLoadBalancerTargetServerInstanceListResponse;

      return this.apiClient.callApi(
        '/getLoadBalancerTargetServerInstanceList', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));