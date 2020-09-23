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
    define(['ApiClient', 'model/ServerInstance'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ServerInstance'));
  } else {
    // Browser globals (root is window)
    if (!root.Vserver) {
      root.Vserver = {};
    }
    root.Vserver.GetServerInstanceListResponse = factory(root.Vserver.ApiClient, root.Vserver.ServerInstance);
  }
}(this, function(ApiClient, ServerInstance) {
  'use strict';




  /**
   * The GetServerInstanceListResponse model module.
   * @module model/GetServerInstanceListResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GetServerInstanceListResponse</code>.
   * @alias module:model/GetServerInstanceListResponse
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>GetServerInstanceListResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetServerInstanceListResponse} obj Optional instance to populate.
   * @return {module:model/GetServerInstanceListResponse} The populated <code>GetServerInstanceListResponse</code> instance.
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
      if (data.hasOwnProperty('serverInstanceList')) {
        obj['serverInstanceList'] = ApiClient.convertToType(data['serverInstanceList'], [ServerInstance]);
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
   * @member {Array.<module:model/ServerInstance>} serverInstanceList
   */
  exports.prototype['serverInstanceList'] = undefined;



  return exports;
}));

