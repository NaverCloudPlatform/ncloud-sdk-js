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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Vserver) {
      root.Vserver = {};
    }
    root.Vserver.DeleteLoginKeysRequest = factory(root.Vserver.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeleteLoginKeysRequest model module.
   * @module model/DeleteLoginKeysRequest
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>DeleteLoginKeysRequest</code>.
   * @alias module:model/DeleteLoginKeysRequest
   * @class
   * @param keyNameList {Array.<String>} 키이름리스트
   */
  var exports = function(keyNameList) {
    var _this = this;

    _this['keyNameList'] = keyNameList;
  };

  /**
   * Constructs a <code>DeleteLoginKeysRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeleteLoginKeysRequest} obj Optional instance to populate.
   * @return {module:model/DeleteLoginKeysRequest} The populated <code>DeleteLoginKeysRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('keyNameList')) {
        obj['keyNameList'] = ApiClient.convertToType(data['keyNameList'], ['String']);
      }
    }
    return obj;
  }

  /**
   * 키이름리스트
   * @member {Array.<String>} keyNameList
   */
  exports.prototype['keyNameList'] = undefined;



  return exports;
}));


