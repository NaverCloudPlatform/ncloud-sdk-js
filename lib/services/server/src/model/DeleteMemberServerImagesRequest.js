/*
* server
* <br/>https://ncloud.apigw.ntruss.com/server/v2
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
    root.Server.DeleteMemberServerImagesRequest = factory(root.Server.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeleteMemberServerImagesRequest model module.
   * @module model/DeleteMemberServerImagesRequest
   * @version 1.4.8
   */

  /**
   * Constructs a new <code>DeleteMemberServerImagesRequest</code>.
   * @alias module:model/DeleteMemberServerImagesRequest
   * @class
   * @param memberServerImageNoList {Array.<String>} 회원서버이미지번호리스트
   */
  var exports = function(memberServerImageNoList) {
    var _this = this;

    _this['memberServerImageNoList'] = memberServerImageNoList;
  };

  /**
   * Constructs a <code>DeleteMemberServerImagesRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeleteMemberServerImagesRequest} obj Optional instance to populate.
   * @return {module:model/DeleteMemberServerImagesRequest} The populated <code>DeleteMemberServerImagesRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('memberServerImageNoList')) {
        obj['memberServerImageNoList'] = ApiClient.convertToType(data['memberServerImageNoList'], ['String']);
      }
    }
    return obj;
  }

  /**
   * 회원서버이미지번호리스트
   * @member {Array.<String>} memberServerImageNoList
   */
  exports.prototype['memberServerImageNoList'] = undefined;



  return exports;
}));


