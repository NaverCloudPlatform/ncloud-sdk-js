/*
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AddNasVolumeAccessControlRequest', 'model/AddNasVolumeAccessControlResponse', 'model/ChangeNasVolumeSizeRequest', 'model/ChangeNasVolumeSizeResponse', 'model/CommonCode', 'model/CreateNasVolumeInstanceRequest', 'model/CreateNasVolumeInstanceResponse', 'model/DeleteNasVolumeInstancesRequest', 'model/DeleteNasVolumeInstancesResponse', 'model/GetNasVolumeInstanceDetailRequest', 'model/GetNasVolumeInstanceDetailResponse', 'model/GetNasVolumeInstanceListRequest', 'model/GetNasVolumeInstanceListResponse', 'model/NasVolumeInstance', 'model/RemoveNasVolumeAccessControlRequest', 'model/RemoveNasVolumeAccessControlResponse', 'model/SetNasVolumeAccessControlRequest', 'model/SetNasVolumeAccessControlResponse', 'api/V2Api'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AddNasVolumeAccessControlRequest'), require('./model/AddNasVolumeAccessControlResponse'), require('./model/ChangeNasVolumeSizeRequest'), require('./model/ChangeNasVolumeSizeResponse'), require('./model/CommonCode'), require('./model/CreateNasVolumeInstanceRequest'), require('./model/CreateNasVolumeInstanceResponse'), require('./model/DeleteNasVolumeInstancesRequest'), require('./model/DeleteNasVolumeInstancesResponse'), require('./model/GetNasVolumeInstanceDetailRequest'), require('./model/GetNasVolumeInstanceDetailResponse'), require('./model/GetNasVolumeInstanceListRequest'), require('./model/GetNasVolumeInstanceListResponse'), require('./model/NasVolumeInstance'), require('./model/RemoveNasVolumeAccessControlRequest'), require('./model/RemoveNasVolumeAccessControlResponse'), require('./model/SetNasVolumeAccessControlRequest'), require('./model/SetNasVolumeAccessControlResponse'), require('./api/V2Api'));
  }
}(function(ApiClient, AddNasVolumeAccessControlRequest, AddNasVolumeAccessControlResponse, ChangeNasVolumeSizeRequest, ChangeNasVolumeSizeResponse, CommonCode, CreateNasVolumeInstanceRequest, CreateNasVolumeInstanceResponse, DeleteNasVolumeInstancesRequest, DeleteNasVolumeInstancesResponse, GetNasVolumeInstanceDetailRequest, GetNasVolumeInstanceDetailResponse, GetNasVolumeInstanceListRequest, GetNasVolumeInstanceListResponse, NasVolumeInstance, RemoveNasVolumeAccessControlRequest, RemoveNasVolumeAccessControlResponse, SetNasVolumeAccessControlRequest, SetNasVolumeAccessControlResponse, V2Api) {
  'use strict';

  /**
   * VPC NAS 관련 API&lt;br/&gt;https://ncloud.apigw.ntruss.com/vnas/v2.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Vnas = require('index'); // See note below*.
   * var xxxSvc = new Vnas.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Vnas.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Vnas.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Vnas.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AddNasVolumeAccessControlRequest model constructor.
     * @property {module:model/AddNasVolumeAccessControlRequest}
     */
    AddNasVolumeAccessControlRequest: AddNasVolumeAccessControlRequest,
    /**
     * The AddNasVolumeAccessControlResponse model constructor.
     * @property {module:model/AddNasVolumeAccessControlResponse}
     */
    AddNasVolumeAccessControlResponse: AddNasVolumeAccessControlResponse,
    /**
     * The ChangeNasVolumeSizeRequest model constructor.
     * @property {module:model/ChangeNasVolumeSizeRequest}
     */
    ChangeNasVolumeSizeRequest: ChangeNasVolumeSizeRequest,
    /**
     * The ChangeNasVolumeSizeResponse model constructor.
     * @property {module:model/ChangeNasVolumeSizeResponse}
     */
    ChangeNasVolumeSizeResponse: ChangeNasVolumeSizeResponse,
    /**
     * The CommonCode model constructor.
     * @property {module:model/CommonCode}
     */
    CommonCode: CommonCode,
    /**
     * The CreateNasVolumeInstanceRequest model constructor.
     * @property {module:model/CreateNasVolumeInstanceRequest}
     */
    CreateNasVolumeInstanceRequest: CreateNasVolumeInstanceRequest,
    /**
     * The CreateNasVolumeInstanceResponse model constructor.
     * @property {module:model/CreateNasVolumeInstanceResponse}
     */
    CreateNasVolumeInstanceResponse: CreateNasVolumeInstanceResponse,
    /**
     * The DeleteNasVolumeInstancesRequest model constructor.
     * @property {module:model/DeleteNasVolumeInstancesRequest}
     */
    DeleteNasVolumeInstancesRequest: DeleteNasVolumeInstancesRequest,
    /**
     * The DeleteNasVolumeInstancesResponse model constructor.
     * @property {module:model/DeleteNasVolumeInstancesResponse}
     */
    DeleteNasVolumeInstancesResponse: DeleteNasVolumeInstancesResponse,
    /**
     * The GetNasVolumeInstanceDetailRequest model constructor.
     * @property {module:model/GetNasVolumeInstanceDetailRequest}
     */
    GetNasVolumeInstanceDetailRequest: GetNasVolumeInstanceDetailRequest,
    /**
     * The GetNasVolumeInstanceDetailResponse model constructor.
     * @property {module:model/GetNasVolumeInstanceDetailResponse}
     */
    GetNasVolumeInstanceDetailResponse: GetNasVolumeInstanceDetailResponse,
    /**
     * The GetNasVolumeInstanceListRequest model constructor.
     * @property {module:model/GetNasVolumeInstanceListRequest}
     */
    GetNasVolumeInstanceListRequest: GetNasVolumeInstanceListRequest,
    /**
     * The GetNasVolumeInstanceListResponse model constructor.
     * @property {module:model/GetNasVolumeInstanceListResponse}
     */
    GetNasVolumeInstanceListResponse: GetNasVolumeInstanceListResponse,
    /**
     * The NasVolumeInstance model constructor.
     * @property {module:model/NasVolumeInstance}
     */
    NasVolumeInstance: NasVolumeInstance,
    /**
     * The RemoveNasVolumeAccessControlRequest model constructor.
     * @property {module:model/RemoveNasVolumeAccessControlRequest}
     */
    RemoveNasVolumeAccessControlRequest: RemoveNasVolumeAccessControlRequest,
    /**
     * The RemoveNasVolumeAccessControlResponse model constructor.
     * @property {module:model/RemoveNasVolumeAccessControlResponse}
     */
    RemoveNasVolumeAccessControlResponse: RemoveNasVolumeAccessControlResponse,
    /**
     * The SetNasVolumeAccessControlRequest model constructor.
     * @property {module:model/SetNasVolumeAccessControlRequest}
     */
    SetNasVolumeAccessControlRequest: SetNasVolumeAccessControlRequest,
    /**
     * The SetNasVolumeAccessControlResponse model constructor.
     * @property {module:model/SetNasVolumeAccessControlResponse}
     */
    SetNasVolumeAccessControlResponse: SetNasVolumeAccessControlResponse,
    /**
     * The V2Api service constructor.
     * @property {module:api/V2Api}
     */
    V2Api: V2Api
  };

  return exports;
}));