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
    root.Server.GetRaidListRequest = factory(root.Server.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetRaidListRequest model module.
   * @module model/GetRaidListRequest
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>GetRaidListRequest</code>.
   * @alias module:model/GetRaidListRequest
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>GetRaidListRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetRaidListRequest} obj Optional instance to populate.
   * @return {module:model/GetRaidListRequest} The populated <code>GetRaidListRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }




  return exports;
}));

