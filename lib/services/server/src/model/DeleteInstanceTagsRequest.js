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
    define(['ApiClient', 'model/InstanceTagParameter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InstanceTagParameter'));
  } else {
    // Browser globals (root is window)
    if (!root.Server) {
      root.Server = {};
    }
    root.Server.DeleteInstanceTagsRequest = factory(root.Server.ApiClient, root.Server.InstanceTagParameter);
  }
}(this, function(ApiClient, InstanceTagParameter) {
  'use strict';




  /**
   * The DeleteInstanceTagsRequest model module.
   * @module model/DeleteInstanceTagsRequest
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>DeleteInstanceTagsRequest</code>.
   * @alias module:model/DeleteInstanceTagsRequest
   * @class
   * @param instanceNoList {Array.<String>} 인스턴스번호리스트
   */
  var exports = function(instanceNoList) {
    var _this = this;

    _this['instanceNoList'] = instanceNoList;

  };

  /**
   * Constructs a <code>DeleteInstanceTagsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeleteInstanceTagsRequest} obj Optional instance to populate.
   * @return {module:model/DeleteInstanceTagsRequest} The populated <code>DeleteInstanceTagsRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('instanceNoList')) {
        obj['instanceNoList'] = ApiClient.convertToType(data['instanceNoList'], ['String']);
      }
      if (data.hasOwnProperty('instanceTagList')) {
        obj['instanceTagList'] = ApiClient.convertToType(data['instanceTagList'], [InstanceTagParameter]);
      }
    }
    return obj;
  }

  /**
   * 인스턴스번호리스트
   * @member {Array.<String>} instanceNoList
   */
  exports.prototype['instanceNoList'] = undefined;
  /**
   * 인스턴스태그리스트
   * @member {Array.<module:model/InstanceTagParameter>} instanceTagList
   */
  exports.prototype['instanceTagList'] = undefined;



  return exports;
}));

