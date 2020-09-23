/*
* vserver
* VPC Compute 관련 API<br/>https://ncloud.apigw.ntruss.com/vserver/v2
*
* OpenAPI spec version: 2020-09-17T02:28:03Z
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
    if (!root.Vserver) {
      root.Vserver = {};
    }
    root.Vserver.GetLoginKeyListRequest = factory(root.Vserver.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetLoginKeyListRequest model module.
   * @module model/GetLoginKeyListRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GetLoginKeyListRequest</code>.
   * @alias module:model/GetLoginKeyListRequest
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>GetLoginKeyListRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetLoginKeyListRequest} obj Optional instance to populate.
   * @return {module:model/GetLoginKeyListRequest} The populated <code>GetLoginKeyListRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('keyName')) {
        obj['keyName'] = ApiClient.convertToType(data['keyName'], 'String');
      }
      if (data.hasOwnProperty('pageNo')) {
        obj['pageNo'] = ApiClient.convertToType(data['pageNo'], 'Number');
      }
      if (data.hasOwnProperty('pageSize')) {
        obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
      }
    }
    return obj;
  }

  /**
   * 키이름
   * @member {String} keyName
   */
  exports.prototype['keyName'] = undefined;
  /**
   * 페이지번호
   * @member {Number} pageNo
   */
  exports.prototype['pageNo'] = undefined;
  /**
   * 페이지사이즈
   * @member {Number} pageSize
   */
  exports.prototype['pageSize'] = undefined;



  return exports;
}));

