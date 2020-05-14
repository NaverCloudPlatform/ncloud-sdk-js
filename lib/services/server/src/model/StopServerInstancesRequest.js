/*
* server
* <br/>https://ncloud.apigw.ntruss.com/server/v2
*
* OpenAPI spec version: 2019-10-17T10:28:43Z
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Server) {
      root.Server = {};
    }
    root.Server.StopServerInstancesRequest = factory(root.Server.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StopServerInstancesRequest model module.
   * @module model/StopServerInstancesRequest
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>StopServerInstancesRequest</code>.
   * @alias module:model/StopServerInstancesRequest
   * @class
   * @param serverInstanceNoList {Array.<String>} 서버인스턴스번호리스트
   */
  var exports = function(serverInstanceNoList) {
    var _this = this;

    _this['serverInstanceNoList'] = serverInstanceNoList;
  };

  /**
   * Constructs a <code>StopServerInstancesRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StopServerInstancesRequest} obj Optional instance to populate.
   * @return {module:model/StopServerInstancesRequest} The populated <code>StopServerInstancesRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('serverInstanceNoList')) {
        obj['serverInstanceNoList'] = ApiClient.convertToType(data['serverInstanceNoList'], ['String']);
      }
    }
    return obj;
  }

  /**
   * 서버인스턴스번호리스트
   * @member {Array.<String>} serverInstanceNoList
   */
  exports.prototype['serverInstanceNoList'] = undefined;



  return exports;
}));

