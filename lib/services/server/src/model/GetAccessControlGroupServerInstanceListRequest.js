/*
* server
* <br/>https://ncloud.apigw.ntruss.com/server/v2
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
    root.Server.GetAccessControlGroupServerInstanceListRequest = factory(root.Server.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetAccessControlGroupServerInstanceListRequest model module.
   * @module model/GetAccessControlGroupServerInstanceListRequest
   * @version 1.4.8
   */

  /**
   * Constructs a new <code>GetAccessControlGroupServerInstanceListRequest</code>.
   * @alias module:model/GetAccessControlGroupServerInstanceListRequest
   * @class
   * @param accessControlGroupConfigurationNo {String} 접근제어그룹설정번호
   */
  var exports = function(accessControlGroupConfigurationNo) {
    var _this = this;

    _this['accessControlGroupConfigurationNo'] = accessControlGroupConfigurationNo;
  };

  /**
   * Constructs a <code>GetAccessControlGroupServerInstanceListRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAccessControlGroupServerInstanceListRequest} obj Optional instance to populate.
   * @return {module:model/GetAccessControlGroupServerInstanceListRequest} The populated <code>GetAccessControlGroupServerInstanceListRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accessControlGroupConfigurationNo')) {
        obj['accessControlGroupConfigurationNo'] = ApiClient.convertToType(data['accessControlGroupConfigurationNo'], 'String');
      }
    }
    return obj;
  }

  /**
   * 접근제어그룹설정번호
   * @member {String} accessControlGroupConfigurationNo
   */
  exports.prototype['accessControlGroupConfigurationNo'] = undefined;



  return exports;
}));


