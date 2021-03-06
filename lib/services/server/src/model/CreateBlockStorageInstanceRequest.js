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
    root.Server.CreateBlockStorageInstanceRequest = factory(root.Server.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateBlockStorageInstanceRequest model module.
   * @module model/CreateBlockStorageInstanceRequest
   * @version 1.4.8
   */

  /**
   * Constructs a new <code>CreateBlockStorageInstanceRequest</code>.
   * @alias module:model/CreateBlockStorageInstanceRequest
   * @class
   * @param blockStorageSize {Number} 블럭스토리지사이즈
   * @param serverInstanceNo {String} 서버인스턴스번호
   */
  var exports = function(blockStorageSize, serverInstanceNo) {
    var _this = this;


    _this['blockStorageSize'] = blockStorageSize;

    _this['serverInstanceNo'] = serverInstanceNo;

  };

  /**
   * Constructs a <code>CreateBlockStorageInstanceRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateBlockStorageInstanceRequest} obj Optional instance to populate.
   * @return {module:model/CreateBlockStorageInstanceRequest} The populated <code>CreateBlockStorageInstanceRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('blockStorageName')) {
        obj['blockStorageName'] = ApiClient.convertToType(data['blockStorageName'], 'String');
      }
      if (data.hasOwnProperty('blockStorageSize')) {
        obj['blockStorageSize'] = ApiClient.convertToType(data['blockStorageSize'], 'Number');
      }
      if (data.hasOwnProperty('blockStorageDescription')) {
        obj['blockStorageDescription'] = ApiClient.convertToType(data['blockStorageDescription'], 'String');
      }
      if (data.hasOwnProperty('serverInstanceNo')) {
        obj['serverInstanceNo'] = ApiClient.convertToType(data['serverInstanceNo'], 'String');
      }
      if (data.hasOwnProperty('diskDetailTypeCode')) {
        obj['diskDetailTypeCode'] = ApiClient.convertToType(data['diskDetailTypeCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * 블럭스토리지명
   * @member {String} blockStorageName
   */
  exports.prototype['blockStorageName'] = undefined;
  /**
   * 블럭스토리지사이즈
   * @member {Number} blockStorageSize
   */
  exports.prototype['blockStorageSize'] = undefined;
  /**
   * 블럭스토리지설명
   * @member {String} blockStorageDescription
   */
  exports.prototype['blockStorageDescription'] = undefined;
  /**
   * 서버인스턴스번호
   * @member {String} serverInstanceNo
   */
  exports.prototype['serverInstanceNo'] = undefined;
  /**
   * 디스크상세유형코드
   * @member {String} diskDetailTypeCode
   */
  exports.prototype['diskDetailTypeCode'] = undefined;



  return exports;
}));


