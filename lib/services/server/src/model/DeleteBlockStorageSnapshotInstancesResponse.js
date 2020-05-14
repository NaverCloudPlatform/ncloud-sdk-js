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
    define(['ApiClient', 'model/BlockStorageSnapshotInstance'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BlockStorageSnapshotInstance'));
  } else {
    // Browser globals (root is window)
    if (!root.Server) {
      root.Server = {};
    }
    root.Server.DeleteBlockStorageSnapshotInstancesResponse = factory(root.Server.ApiClient, root.Server.BlockStorageSnapshotInstance);
  }
}(this, function(ApiClient, BlockStorageSnapshotInstance) {
  'use strict';




  /**
   * The DeleteBlockStorageSnapshotInstancesResponse model module.
   * @module model/DeleteBlockStorageSnapshotInstancesResponse
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>DeleteBlockStorageSnapshotInstancesResponse</code>.
   * @alias module:model/DeleteBlockStorageSnapshotInstancesResponse
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>DeleteBlockStorageSnapshotInstancesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeleteBlockStorageSnapshotInstancesResponse} obj Optional instance to populate.
   * @return {module:model/DeleteBlockStorageSnapshotInstancesResponse} The populated <code>DeleteBlockStorageSnapshotInstancesResponse</code> instance.
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
      if (data.hasOwnProperty('blockStorageSnapshotInstanceList')) {
        obj['blockStorageSnapshotInstanceList'] = ApiClient.convertToType(data['blockStorageSnapshotInstanceList'], [BlockStorageSnapshotInstance]);
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
   * @member {Array.<module:model/BlockStorageSnapshotInstance>} blockStorageSnapshotInstanceList
   */
  exports.prototype['blockStorageSnapshotInstanceList'] = undefined;



  return exports;
}));

