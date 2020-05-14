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
    root.Server.Raid = factory(root.Server.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Raid model module.
   * @module model/Raid
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>Raid</code>.
   * @alias module:model/Raid
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Raid</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Raid} obj Optional instance to populate.
   * @return {module:model/Raid} The populated <code>Raid</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('raidTypeName')) {
        obj['raidTypeName'] = ApiClient.convertToType(data['raidTypeName'], 'String');
      }
      if (data.hasOwnProperty('raidName')) {
        obj['raidName'] = ApiClient.convertToType(data['raidName'], 'String');
      }
    }
    return obj;
  }

  /**
   * RAID구분이름
   * @member {String} raidTypeName
   */
  exports.prototype['raidTypeName'] = undefined;
  /**
   * RAID이름
   * @member {String} raidName
   */
  exports.prototype['raidName'] = undefined;



  return exports;
}));

