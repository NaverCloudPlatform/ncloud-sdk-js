/*
* vnas
* VPC NAS 관련 API<br/>https://ncloud.apigw.ntruss.com/vnas/v2
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
    define(['ApiClient', 'model/AddNasVolumeAccessControlRequest', 'model/AddNasVolumeAccessControlResponse', 'model/ChangeNasVolumeSizeRequest', 'model/ChangeNasVolumeSizeResponse', 'model/CreateNasVolumeInstanceRequest', 'model/CreateNasVolumeInstanceResponse', 'model/DeleteNasVolumeInstancesRequest', 'model/DeleteNasVolumeInstancesResponse', 'model/GetNasVolumeInstanceDetailRequest', 'model/GetNasVolumeInstanceDetailResponse', 'model/GetNasVolumeInstanceListRequest', 'model/GetNasVolumeInstanceListResponse', 'model/RemoveNasVolumeAccessControlRequest', 'model/RemoveNasVolumeAccessControlResponse', 'model/SetNasVolumeAccessControlRequest', 'model/SetNasVolumeAccessControlResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddNasVolumeAccessControlRequest'), require('../model/AddNasVolumeAccessControlResponse'), require('../model/ChangeNasVolumeSizeRequest'), require('../model/ChangeNasVolumeSizeResponse'), require('../model/CreateNasVolumeInstanceRequest'), require('../model/CreateNasVolumeInstanceResponse'), require('../model/DeleteNasVolumeInstancesRequest'), require('../model/DeleteNasVolumeInstancesResponse'), require('../model/GetNasVolumeInstanceDetailRequest'), require('../model/GetNasVolumeInstanceDetailResponse'), require('../model/GetNasVolumeInstanceListRequest'), require('../model/GetNasVolumeInstanceListResponse'), require('../model/RemoveNasVolumeAccessControlRequest'), require('../model/RemoveNasVolumeAccessControlResponse'), require('../model/SetNasVolumeAccessControlRequest'), require('../model/SetNasVolumeAccessControlResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Vnas) {
      root.Vnas = {};
    }
    root.Vnas.V2Api = factory(root.Vnas.ApiClient, root.Vnas.AddNasVolumeAccessControlRequest, root.Vnas.AddNasVolumeAccessControlResponse, root.Vnas.ChangeNasVolumeSizeRequest, root.Vnas.ChangeNasVolumeSizeResponse, root.Vnas.CreateNasVolumeInstanceRequest, root.Vnas.CreateNasVolumeInstanceResponse, root.Vnas.DeleteNasVolumeInstancesRequest, root.Vnas.DeleteNasVolumeInstancesResponse, root.Vnas.GetNasVolumeInstanceDetailRequest, root.Vnas.GetNasVolumeInstanceDetailResponse, root.Vnas.GetNasVolumeInstanceListRequest, root.Vnas.GetNasVolumeInstanceListResponse, root.Vnas.RemoveNasVolumeAccessControlRequest, root.Vnas.RemoveNasVolumeAccessControlResponse, root.Vnas.SetNasVolumeAccessControlRequest, root.Vnas.SetNasVolumeAccessControlResponse);
  }
}(this, function(ApiClient, AddNasVolumeAccessControlRequest, AddNasVolumeAccessControlResponse, ChangeNasVolumeSizeRequest, ChangeNasVolumeSizeResponse, CreateNasVolumeInstanceRequest, CreateNasVolumeInstanceResponse, DeleteNasVolumeInstancesRequest, DeleteNasVolumeInstancesResponse, GetNasVolumeInstanceDetailRequest, GetNasVolumeInstanceDetailResponse, GetNasVolumeInstanceListRequest, GetNasVolumeInstanceListResponse, RemoveNasVolumeAccessControlRequest, RemoveNasVolumeAccessControlResponse, SetNasVolumeAccessControlRequest, SetNasVolumeAccessControlResponse) {
  'use strict';

  /**
   * V2 service.
   * @module api/V2Api
   * @version 1.0.1
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
     * Callback function to receive the result of the addNasVolumeAccessControl operation.
     * @callback module:api/V2Api~addNasVolumeAccessControlCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddNasVolumeAccessControlResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NAS볼륨접근제어추가
     * @param {module:model/AddNasVolumeAccessControlRequest} addNasVolumeAccessControlRequest addNasVolumeAccessControlRequest
     * @param {module:api/V2Api~addNasVolumeAccessControlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AddNasVolumeAccessControlResponse}
     */
    this.addNasVolumeAccessControl = function(addNasVolumeAccessControlRequest, callback) {
      var postBody = addNasVolumeAccessControlRequest;

      // verify the required parameter 'addNasVolumeAccessControlRequest' is set
      if (addNasVolumeAccessControlRequest === undefined || addNasVolumeAccessControlRequest === null) {
        throw new Error("Missing the required parameter 'addNasVolumeAccessControlRequest' when calling addNasVolumeAccessControl");
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
      var returnType = AddNasVolumeAccessControlResponse;

      return this.apiClient.callApi(
        '/addNasVolumeAccessControl', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the changeNasVolumeSize operation.
     * @callback module:api/V2Api~changeNasVolumeSizeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ChangeNasVolumeSizeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NAS볼륨사이즈변경
     * @param {module:model/ChangeNasVolumeSizeRequest} changeNasVolumeSizeRequest changeNasVolumeSizeRequest
     * @param {module:api/V2Api~changeNasVolumeSizeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ChangeNasVolumeSizeResponse}
     */
    this.changeNasVolumeSize = function(changeNasVolumeSizeRequest, callback) {
      var postBody = changeNasVolumeSizeRequest;

      // verify the required parameter 'changeNasVolumeSizeRequest' is set
      if (changeNasVolumeSizeRequest === undefined || changeNasVolumeSizeRequest === null) {
        throw new Error("Missing the required parameter 'changeNasVolumeSizeRequest' when calling changeNasVolumeSize");
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
      var returnType = ChangeNasVolumeSizeResponse;

      return this.apiClient.callApi(
        '/changeNasVolumeSize', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createNasVolumeInstance operation.
     * @callback module:api/V2Api~createNasVolumeInstanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateNasVolumeInstanceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NAS볼륨인스턴스생성
     * @param {module:model/CreateNasVolumeInstanceRequest} createNasVolumeInstanceRequest createNasVolumeInstanceRequest
     * @param {module:api/V2Api~createNasVolumeInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateNasVolumeInstanceResponse}
     */
    this.createNasVolumeInstance = function(createNasVolumeInstanceRequest, callback) {
      var postBody = createNasVolumeInstanceRequest;

      // verify the required parameter 'createNasVolumeInstanceRequest' is set
      if (createNasVolumeInstanceRequest === undefined || createNasVolumeInstanceRequest === null) {
        throw new Error("Missing the required parameter 'createNasVolumeInstanceRequest' when calling createNasVolumeInstance");
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
      var returnType = CreateNasVolumeInstanceResponse;

      return this.apiClient.callApi(
        '/createNasVolumeInstance', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteNasVolumeInstances operation.
     * @callback module:api/V2Api~deleteNasVolumeInstancesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteNasVolumeInstancesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NAS볼륨인스턴스제거
     * @param {module:model/DeleteNasVolumeInstancesRequest} deleteNasVolumeInstancesRequest deleteNasVolumeInstancesRequest
     * @param {module:api/V2Api~deleteNasVolumeInstancesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteNasVolumeInstancesResponse}
     */
    this.deleteNasVolumeInstances = function(deleteNasVolumeInstancesRequest, callback) {
      var postBody = deleteNasVolumeInstancesRequest;

      // verify the required parameter 'deleteNasVolumeInstancesRequest' is set
      if (deleteNasVolumeInstancesRequest === undefined || deleteNasVolumeInstancesRequest === null) {
        throw new Error("Missing the required parameter 'deleteNasVolumeInstancesRequest' when calling deleteNasVolumeInstances");
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
      var returnType = DeleteNasVolumeInstancesResponse;

      return this.apiClient.callApi(
        '/deleteNasVolumeInstances', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNasVolumeInstanceDetail operation.
     * @callback module:api/V2Api~getNasVolumeInstanceDetailCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetNasVolumeInstanceDetailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NAS볼륨인스턴스상세조회
     * @param {module:model/GetNasVolumeInstanceDetailRequest} getNasVolumeInstanceDetailRequest getNasVolumeInstanceDetailRequest
     * @param {module:api/V2Api~getNasVolumeInstanceDetailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetNasVolumeInstanceDetailResponse}
     */
    this.getNasVolumeInstanceDetail = function(getNasVolumeInstanceDetailRequest, callback) {
      var postBody = getNasVolumeInstanceDetailRequest;

      // verify the required parameter 'getNasVolumeInstanceDetailRequest' is set
      if (getNasVolumeInstanceDetailRequest === undefined || getNasVolumeInstanceDetailRequest === null) {
        throw new Error("Missing the required parameter 'getNasVolumeInstanceDetailRequest' when calling getNasVolumeInstanceDetail");
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
      var returnType = GetNasVolumeInstanceDetailResponse;

      return this.apiClient.callApi(
        '/getNasVolumeInstanceDetail', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNasVolumeInstanceList operation.
     * @callback module:api/V2Api~getNasVolumeInstanceListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetNasVolumeInstanceListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NAS볼륨인스턴스리스트조회
     * @param {module:model/GetNasVolumeInstanceListRequest} getNasVolumeInstanceListRequest getNasVolumeInstanceListRequest
     * @param {module:api/V2Api~getNasVolumeInstanceListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetNasVolumeInstanceListResponse}
     */
    this.getNasVolumeInstanceList = function(getNasVolumeInstanceListRequest, callback) {
      var postBody = getNasVolumeInstanceListRequest;

      // verify the required parameter 'getNasVolumeInstanceListRequest' is set
      if (getNasVolumeInstanceListRequest === undefined || getNasVolumeInstanceListRequest === null) {
        throw new Error("Missing the required parameter 'getNasVolumeInstanceListRequest' when calling getNasVolumeInstanceList");
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
      var returnType = GetNasVolumeInstanceListResponse;

      return this.apiClient.callApi(
        '/getNasVolumeInstanceList', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeNasVolumeAccessControl operation.
     * @callback module:api/V2Api~removeNasVolumeAccessControlCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemoveNasVolumeAccessControlResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NAS볼륨접근제어삭제
     * @param {module:model/RemoveNasVolumeAccessControlRequest} removeNasVolumeAccessControlRequest removeNasVolumeAccessControlRequest
     * @param {module:api/V2Api~removeNasVolumeAccessControlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemoveNasVolumeAccessControlResponse}
     */
    this.removeNasVolumeAccessControl = function(removeNasVolumeAccessControlRequest, callback) {
      var postBody = removeNasVolumeAccessControlRequest;

      // verify the required parameter 'removeNasVolumeAccessControlRequest' is set
      if (removeNasVolumeAccessControlRequest === undefined || removeNasVolumeAccessControlRequest === null) {
        throw new Error("Missing the required parameter 'removeNasVolumeAccessControlRequest' when calling removeNasVolumeAccessControl");
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
      var returnType = RemoveNasVolumeAccessControlResponse;

      return this.apiClient.callApi(
        '/removeNasVolumeAccessControl', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setNasVolumeAccessControl operation.
     * @callback module:api/V2Api~setNasVolumeAccessControlCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SetNasVolumeAccessControlResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NAS볼륨접근제어설정
     * @param {module:model/SetNasVolumeAccessControlRequest} setNasVolumeAccessControlRequest setNasVolumeAccessControlRequest
     * @param {module:api/V2Api~setNasVolumeAccessControlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SetNasVolumeAccessControlResponse}
     */
    this.setNasVolumeAccessControl = function(setNasVolumeAccessControlRequest, callback) {
      var postBody = setNasVolumeAccessControlRequest;

      // verify the required parameter 'setNasVolumeAccessControlRequest' is set
      if (setNasVolumeAccessControlRequest === undefined || setNasVolumeAccessControlRequest === null) {
        throw new Error("Missing the required parameter 'setNasVolumeAccessControlRequest' when calling setNasVolumeAccessControl");
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
      var returnType = SetNasVolumeAccessControlResponse;

      return this.apiClient.callApi(
        '/setNasVolumeAccessControl', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
