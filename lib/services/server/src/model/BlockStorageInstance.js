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
    define(['ApiClient', 'model/CommonCode', 'model/Region', 'model/Zone'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CommonCode'), require('./Region'), require('./Zone'));
  } else {
    // Browser globals (root is window)
    if (!root.Server) {
      root.Server = {};
    }
    root.Server.BlockStorageInstance = factory(root.Server.ApiClient, root.Server.CommonCode, root.Server.Region, root.Server.Zone);
  }
}(this, function(ApiClient, CommonCode, Region, Zone) {
  'use strict';




  /**
   * The BlockStorageInstance model module.
   * @module model/BlockStorageInstance
   * @version 1.4.8
   */

  /**
   * Constructs a new <code>BlockStorageInstance</code>.
   * @alias module:model/BlockStorageInstance
   * @class
   */
  var exports = function() {
    var _this = this;




















  };

  /**
   * Constructs a <code>BlockStorageInstance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BlockStorageInstance} obj Optional instance to populate.
   * @return {module:model/BlockStorageInstance} The populated <code>BlockStorageInstance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('blockStorageInstanceNo')) {
        obj['blockStorageInstanceNo'] = ApiClient.convertToType(data['blockStorageInstanceNo'], 'String');
      }
      if (data.hasOwnProperty('serverInstanceNo')) {
        obj['serverInstanceNo'] = ApiClient.convertToType(data['serverInstanceNo'], 'String');
      }
      if (data.hasOwnProperty('serverName')) {
        obj['serverName'] = ApiClient.convertToType(data['serverName'], 'String');
      }
      if (data.hasOwnProperty('blockStorageType')) {
        obj['blockStorageType'] = CommonCode.constructFromObject(data['blockStorageType']);
      }
      if (data.hasOwnProperty('blockStorageName')) {
        obj['blockStorageName'] = ApiClient.convertToType(data['blockStorageName'], 'String');
      }
      if (data.hasOwnProperty('blockStorageSize')) {
        obj['blockStorageSize'] = ApiClient.convertToType(data['blockStorageSize'], 'Number');
      }
      if (data.hasOwnProperty('deviceName')) {
        obj['deviceName'] = ApiClient.convertToType(data['deviceName'], 'String');
      }
      if (data.hasOwnProperty('memberServerImageNo')) {
        obj['memberServerImageNo'] = ApiClient.convertToType(data['memberServerImageNo'], 'String');
      }
      if (data.hasOwnProperty('blockStorageProductCode')) {
        obj['blockStorageProductCode'] = ApiClient.convertToType(data['blockStorageProductCode'], 'String');
      }
      if (data.hasOwnProperty('blockStorageInstanceStatus')) {
        obj['blockStorageInstanceStatus'] = CommonCode.constructFromObject(data['blockStorageInstanceStatus']);
      }
      if (data.hasOwnProperty('blockStorageInstanceOperation')) {
        obj['blockStorageInstanceOperation'] = CommonCode.constructFromObject(data['blockStorageInstanceOperation']);
      }
      if (data.hasOwnProperty('blockStorageInstanceStatusName')) {
        obj['blockStorageInstanceStatusName'] = ApiClient.convertToType(data['blockStorageInstanceStatusName'], 'String');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'String');
      }
      if (data.hasOwnProperty('blockStorageInstanceDescription')) {
        obj['blockStorageInstanceDescription'] = ApiClient.convertToType(data['blockStorageInstanceDescription'], 'String');
      }
      if (data.hasOwnProperty('diskType')) {
        obj['diskType'] = CommonCode.constructFromObject(data['diskType']);
      }
      if (data.hasOwnProperty('diskDetailType')) {
        obj['diskDetailType'] = CommonCode.constructFromObject(data['diskDetailType']);
      }
      if (data.hasOwnProperty('maxIopsThroughput')) {
        obj['maxIopsThroughput'] = ApiClient.convertToType(data['maxIopsThroughput'], 'Number');
      }
      if (data.hasOwnProperty('region')) {
        obj['region'] = Region.constructFromObject(data['region']);
      }
      if (data.hasOwnProperty('zone')) {
        obj['zone'] = Zone.constructFromObject(data['zone']);
      }
    }
    return obj;
  }

  /**
   * 블록스토리지인스턴스번호
   * @member {String} blockStorageInstanceNo
   */
  exports.prototype['blockStorageInstanceNo'] = undefined;
  /**
   * 서버인스턴스번호
   * @member {String} serverInstanceNo
   */
  exports.prototype['serverInstanceNo'] = undefined;
  /**
   * 서버명
   * @member {String} serverName
   */
  exports.prototype['serverName'] = undefined;
  /**
   * 블록스토리지구분
   * @member {module:model/CommonCode} blockStorageType
   */
  exports.prototype['blockStorageType'] = undefined;
  /**
   * 블록스토리지명
   * @member {String} blockStorageName
   */
  exports.prototype['blockStorageName'] = undefined;
  /**
   * 블록스토리지사이즈
   * @member {Number} blockStorageSize
   */
  exports.prototype['blockStorageSize'] = undefined;
  /**
   * 디바이스명
   * @member {String} deviceName
   */
  exports.prototype['deviceName'] = undefined;
  /**
   * 회원서버이미지번호
   * @member {String} memberServerImageNo
   */
  exports.prototype['memberServerImageNo'] = undefined;
  /**
   * 블록스토리지상품코드
   * @member {String} blockStorageProductCode
   */
  exports.prototype['blockStorageProductCode'] = undefined;
  /**
   * 블록스토리지인스턴스상태
   * @member {module:model/CommonCode} blockStorageInstanceStatus
   */
  exports.prototype['blockStorageInstanceStatus'] = undefined;
  /**
   * 블록스토리지인스턴스OP
   * @member {module:model/CommonCode} blockStorageInstanceOperation
   */
  exports.prototype['blockStorageInstanceOperation'] = undefined;
  /**
   * 블록스토리지인스턴스상태명
   * @member {String} blockStorageInstanceStatusName
   */
  exports.prototype['blockStorageInstanceStatusName'] = undefined;
  /**
   * 생성일시
   * @member {String} createDate
   */
  exports.prototype['createDate'] = undefined;
  /**
   * 블록스토리지인스턴스설명
   * @member {String} blockStorageInstanceDescription
   */
  exports.prototype['blockStorageInstanceDescription'] = undefined;
  /**
   * 디스크유형
   * @member {module:model/CommonCode} diskType
   */
  exports.prototype['diskType'] = undefined;
  /**
   * 디스크상세유형
   * @member {module:model/CommonCode} diskDetailType
   */
  exports.prototype['diskDetailType'] = undefined;
  /**
   * 최대 IOPS
   * @member {Number} maxIopsThroughput
   */
  exports.prototype['maxIopsThroughput'] = undefined;
  /**
   * @member {module:model/Region} region
   */
  exports.prototype['region'] = undefined;
  /**
   * @member {module:model/Zone} zone
   */
  exports.prototype['zone'] = undefined;



  return exports;
}));


