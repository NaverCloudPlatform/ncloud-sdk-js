/*
* clouddb
* Cloud DB<br/>https://ncloud.apigw.ntruss.com/clouddb/v2
*
* OpenAPI spec version: 2018-11-13T06:30:03Z
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
    if (!root.Clouddb) {
      root.Clouddb = {};
    }
    root.Clouddb.GetDmsOperationRequest = factory(root.Clouddb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetDmsOperationRequest model module.
   * @module model/GetDmsOperationRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GetDmsOperationRequest</code>.
   * @alias module:model/GetDmsOperationRequest
   * @class
   * @param requestNo {String} 요청번호
   */
  var exports = function(requestNo) {
    var _this = this;

    _this['requestNo'] = requestNo;
  };

  /**
   * Constructs a <code>GetDmsOperationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDmsOperationRequest} obj Optional instance to populate.
   * @return {module:model/GetDmsOperationRequest} The populated <code>GetDmsOperationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('requestNo')) {
        obj['requestNo'] = ApiClient.convertToType(data['requestNo'], 'String');
      }
    }
    return obj;
  }

  /**
   * 요청번호
   * @member {String} requestNo
   */
  exports.prototype['requestNo'] = undefined;



  return exports;
}));

