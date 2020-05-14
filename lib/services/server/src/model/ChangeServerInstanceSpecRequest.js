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
    root.Server.ChangeServerInstanceSpecRequest = factory(root.Server.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ChangeServerInstanceSpecRequest model module.
   * @module model/ChangeServerInstanceSpecRequest
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>ChangeServerInstanceSpecRequest</code>.
   * @alias module:model/ChangeServerInstanceSpecRequest
   * @class
   * @param serverInstanceNo {String} 서버인스턴스번호
   * @param serverProductCode {String} 서버상품코드
   */
  var exports = function(serverInstanceNo, serverProductCode) {
    var _this = this;

    _this['serverInstanceNo'] = serverInstanceNo;
    _this['serverProductCode'] = serverProductCode;
  };

  /**
   * Constructs a <code>ChangeServerInstanceSpecRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangeServerInstanceSpecRequest} obj Optional instance to populate.
   * @return {module:model/ChangeServerInstanceSpecRequest} The populated <code>ChangeServerInstanceSpecRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('serverInstanceNo')) {
        obj['serverInstanceNo'] = ApiClient.convertToType(data['serverInstanceNo'], 'String');
      }
      if (data.hasOwnProperty('serverProductCode')) {
        obj['serverProductCode'] = ApiClient.convertToType(data['serverProductCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * 서버인스턴스번호
   * @member {String} serverInstanceNo
   */
  exports.prototype['serverInstanceNo'] = undefined;
  /**
   * 서버상품코드
   * @member {String} serverProductCode
   */
  exports.prototype['serverProductCode'] = undefined;



  return exports;
}));

