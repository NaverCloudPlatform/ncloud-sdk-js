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
    root.Server.GetRootPasswordRequest = factory(root.Server.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetRootPasswordRequest model module.
   * @module model/GetRootPasswordRequest
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>GetRootPasswordRequest</code>.
   * @alias module:model/GetRootPasswordRequest
   * @class
   * @param serverInstanceNo {String} 서버인스턴스번호
   */
  var exports = function(serverInstanceNo) {
    var _this = this;


    _this['serverInstanceNo'] = serverInstanceNo;
  };

  /**
   * Constructs a <code>GetRootPasswordRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetRootPasswordRequest} obj Optional instance to populate.
   * @return {module:model/GetRootPasswordRequest} The populated <code>GetRootPasswordRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('privateKey')) {
        obj['privateKey'] = ApiClient.convertToType(data['privateKey'], 'String');
      }
      if (data.hasOwnProperty('serverInstanceNo')) {
        obj['serverInstanceNo'] = ApiClient.convertToType(data['serverInstanceNo'], 'String');
      }
    }
    return obj;
  }

  /**
   * 개인키
   * @member {String} privateKey
   */
  exports.prototype['privateKey'] = undefined;
  /**
   * 서버인스턴스번호
   * @member {String} serverInstanceNo
   */
  exports.prototype['serverInstanceNo'] = undefined;



  return exports;
}));

