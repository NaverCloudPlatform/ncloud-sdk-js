/*
* clouddb
* Cloud DB<br/>https://ncloud.apigw.ntruss.com/clouddb/v2
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
    define(['ApiClient', 'model/CloudDBConfigGroup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CloudDBConfigGroup'));
  } else {
    // Browser globals (root is window)
    if (!root.Clouddb) {
      root.Clouddb = {};
    }
    root.Clouddb.GetCloudDBConfigGroupListResponse = factory(root.Clouddb.ApiClient, root.Clouddb.CloudDBConfigGroup);
  }
}(this, function(ApiClient, CloudDBConfigGroup) {
  'use strict';




  /**
   * The GetCloudDBConfigGroupListResponse model module.
   * @module model/GetCloudDBConfigGroupListResponse
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>GetCloudDBConfigGroupListResponse</code>.
   * @alias module:model/GetCloudDBConfigGroupListResponse
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>GetCloudDBConfigGroupListResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCloudDBConfigGroupListResponse} obj Optional instance to populate.
   * @return {module:model/GetCloudDBConfigGroupListResponse} The populated <code>GetCloudDBConfigGroupListResponse</code> instance.
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
      if (data.hasOwnProperty('cloudDBConfigGroupList')) {
        obj['cloudDBConfigGroupList'] = ApiClient.convertToType(data['cloudDBConfigGroupList'], [CloudDBConfigGroup]);
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
   * @member {Array.<module:model/CloudDBConfigGroup>} cloudDBConfigGroupList
   */
  exports.prototype['cloudDBConfigGroupList'] = undefined;



  return exports;
}));


