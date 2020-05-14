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
    define(['ApiClient', 'model/CommonCode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CommonCode'));
  } else {
    // Browser globals (root is window)
    if (!root.Server) {
      root.Server = {};
    }
    root.Server.InitScript = factory(root.Server.ApiClient, root.Server.CommonCode);
  }
}(this, function(ApiClient, CommonCode) {
  'use strict';




  /**
   * The InitScript model module.
   * @module model/InitScript
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>InitScript</code>.
   * @alias module:model/InitScript
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>InitScript</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InitScript} obj Optional instance to populate.
   * @return {module:model/InitScript} The populated <code>InitScript</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('initScriptNo')) {
        obj['initScriptNo'] = ApiClient.convertToType(data['initScriptNo'], 'String');
      }
      if (data.hasOwnProperty('initScriptName')) {
        obj['initScriptName'] = ApiClient.convertToType(data['initScriptName'], 'String');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'String');
      }
      if (data.hasOwnProperty('initScriptDescription')) {
        obj['initScriptDescription'] = ApiClient.convertToType(data['initScriptDescription'], 'String');
      }
      if (data.hasOwnProperty('initScriptContent')) {
        obj['initScriptContent'] = ApiClient.convertToType(data['initScriptContent'], 'String');
      }
      if (data.hasOwnProperty('osType')) {
        obj['osType'] = CommonCode.constructFromObject(data['osType']);
      }
    }
    return obj;
  }

  /**
   * 초기화스크립트번호
   * @member {String} initScriptNo
   */
  exports.prototype['initScriptNo'] = undefined;
  /**
   * 초기화스크립트명
   * @member {String} initScriptName
   */
  exports.prototype['initScriptName'] = undefined;
  /**
   * 생성일자
   * @member {String} createDate
   */
  exports.prototype['createDate'] = undefined;
  /**
   * 초기화스크립트설명
   * @member {String} initScriptDescription
   */
  exports.prototype['initScriptDescription'] = undefined;
  /**
   * 초기화스크립트내용
   * @member {String} initScriptContent
   */
  exports.prototype['initScriptContent'] = undefined;
  /**
   * OS구분
   * @member {module:model/CommonCode} osType
   */
  exports.prototype['osType'] = undefined;



  return exports;
}));

