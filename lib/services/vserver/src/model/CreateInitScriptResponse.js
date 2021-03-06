/*
* vserver
* VPC Compute 관련 API<br/>https://ncloud.apigw.ntruss.com/vserver/v2
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
    define(['ApiClient', 'model/InitScript'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InitScript'));
  } else {
    // Browser globals (root is window)
    if (!root.Vserver) {
      root.Vserver = {};
    }
    root.Vserver.CreateInitScriptResponse = factory(root.Vserver.ApiClient, root.Vserver.InitScript);
  }
}(this, function(ApiClient, InitScript) {
  'use strict';




  /**
   * The CreateInitScriptResponse model module.
   * @module model/CreateInitScriptResponse
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>CreateInitScriptResponse</code>.
   * @alias module:model/CreateInitScriptResponse
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>CreateInitScriptResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateInitScriptResponse} obj Optional instance to populate.
   * @return {module:model/CreateInitScriptResponse} The populated <code>CreateInitScriptResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('requestId')) {
        obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
      }
      if (data.hasOwnProperty('returnCode')) {
        obj['returnCode'] = ApiClient.convertToType(data['returnCode'], 'String');
      }
      if (data.hasOwnProperty('returnMessage')) {
        obj['returnMessage'] = ApiClient.convertToType(data['returnMessage'], 'String');
      }
      if (data.hasOwnProperty('totalRows')) {
        obj['totalRows'] = ApiClient.convertToType(data['totalRows'], 'Number');
      }
      if (data.hasOwnProperty('initScriptList')) {
        obj['initScriptList'] = ApiClient.convertToType(data['initScriptList'], [InitScript]);
      }
    }
    return obj;
  }

  /**
   * @member {String} requestId
   */
  exports.prototype['requestId'] = undefined;
  /**
   * @member {String} returnCode
   */
  exports.prototype['returnCode'] = undefined;
  /**
   * @member {String} returnMessage
   */
  exports.prototype['returnMessage'] = undefined;
  /**
   * @member {Number} totalRows
   */
  exports.prototype['totalRows'] = undefined;
  /**
   * @member {Array.<module:model/InitScript>} initScriptList
   */
  exports.prototype['initScriptList'] = undefined;



  return exports;
}));


