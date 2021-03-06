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
    root.Server.MemberServerImage = factory(root.Server.ApiClient, root.Server.CommonCode, root.Server.Region, root.Server.Zone);
  }
}(this, function(ApiClient, CommonCode, Region, Zone) {
  'use strict';




  /**
   * The MemberServerImage model module.
   * @module model/MemberServerImage
   * @version 1.4.8
   */

  /**
   * Constructs a new <code>MemberServerImage</code>.
   * @alias module:model/MemberServerImage
   * @class
   */
  var exports = function() {
    var _this = this;




















  };

  /**
   * Constructs a <code>MemberServerImage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MemberServerImage} obj Optional instance to populate.
   * @return {module:model/MemberServerImage} The populated <code>MemberServerImage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('memberServerImageNo')) {
        obj['memberServerImageNo'] = ApiClient.convertToType(data['memberServerImageNo'], 'String');
      }
      if (data.hasOwnProperty('memberServerImageName')) {
        obj['memberServerImageName'] = ApiClient.convertToType(data['memberServerImageName'], 'String');
      }
      if (data.hasOwnProperty('memberServerImageDescription')) {
        obj['memberServerImageDescription'] = ApiClient.convertToType(data['memberServerImageDescription'], 'String');
      }
      if (data.hasOwnProperty('originalServerInstanceNo')) {
        obj['originalServerInstanceNo'] = ApiClient.convertToType(data['originalServerInstanceNo'], 'String');
      }
      if (data.hasOwnProperty('originalServerProductCode')) {
        obj['originalServerProductCode'] = ApiClient.convertToType(data['originalServerProductCode'], 'String');
      }
      if (data.hasOwnProperty('originalServerName')) {
        obj['originalServerName'] = ApiClient.convertToType(data['originalServerName'], 'String');
      }
      if (data.hasOwnProperty('originalBaseBlockStorageDiskType')) {
        obj['originalBaseBlockStorageDiskType'] = CommonCode.constructFromObject(data['originalBaseBlockStorageDiskType']);
      }
      if (data.hasOwnProperty('originalServerImageProductCode')) {
        obj['originalServerImageProductCode'] = ApiClient.convertToType(data['originalServerImageProductCode'], 'String');
      }
      if (data.hasOwnProperty('originalOsInformation')) {
        obj['originalOsInformation'] = ApiClient.convertToType(data['originalOsInformation'], 'String');
      }
      if (data.hasOwnProperty('originalServerImageName')) {
        obj['originalServerImageName'] = ApiClient.convertToType(data['originalServerImageName'], 'String');
      }
      if (data.hasOwnProperty('memberServerImageStatusName')) {
        obj['memberServerImageStatusName'] = ApiClient.convertToType(data['memberServerImageStatusName'], 'String');
      }
      if (data.hasOwnProperty('memberServerImageStatus')) {
        obj['memberServerImageStatus'] = CommonCode.constructFromObject(data['memberServerImageStatus']);
      }
      if (data.hasOwnProperty('memberServerImageOperation')) {
        obj['memberServerImageOperation'] = CommonCode.constructFromObject(data['memberServerImageOperation']);
      }
      if (data.hasOwnProperty('memberServerImagePlatformType')) {
        obj['memberServerImagePlatformType'] = CommonCode.constructFromObject(data['memberServerImagePlatformType']);
      }
      if (data.hasOwnProperty('region')) {
        obj['region'] = Region.constructFromObject(data['region']);
      }
      if (data.hasOwnProperty('zone')) {
        obj['zone'] = Zone.constructFromObject(data['zone']);
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'String');
      }
      if (data.hasOwnProperty('memberServerImageBlockStorageTotalRows')) {
        obj['memberServerImageBlockStorageTotalRows'] = ApiClient.convertToType(data['memberServerImageBlockStorageTotalRows'], 'Number');
      }
      if (data.hasOwnProperty('memberServerImageBlockStorageTotalSize')) {
        obj['memberServerImageBlockStorageTotalSize'] = ApiClient.convertToType(data['memberServerImageBlockStorageTotalSize'], 'Number');
      }
    }
    return obj;
  }

  /**
   * 회원서버이미지번호
   * @member {String} memberServerImageNo
   */
  exports.prototype['memberServerImageNo'] = undefined;
  /**
   * 회원서버이미지명
   * @member {String} memberServerImageName
   */
  exports.prototype['memberServerImageName'] = undefined;
  /**
   * 회원서버이미지설명
   * @member {String} memberServerImageDescription
   */
  exports.prototype['memberServerImageDescription'] = undefined;
  /**
   * 원본서버인스턴스번호
   * @member {String} originalServerInstanceNo
   */
  exports.prototype['originalServerInstanceNo'] = undefined;
  /**
   * 원본서버상품코드
   * @member {String} originalServerProductCode
   */
  exports.prototype['originalServerProductCode'] = undefined;
  /**
   * 원본서버명
   * @member {String} originalServerName
   */
  exports.prototype['originalServerName'] = undefined;
  /**
   * 원본서버기본블록스토리지디스크유형
   * @member {module:model/CommonCode} originalBaseBlockStorageDiskType
   */
  exports.prototype['originalBaseBlockStorageDiskType'] = undefined;
  /**
   * 원본서버이미지상품코드
   * @member {String} originalServerImageProductCode
   */
  exports.prototype['originalServerImageProductCode'] = undefined;
  /**
   * 원본OS정보
   * @member {String} originalOsInformation
   */
  exports.prototype['originalOsInformation'] = undefined;
  /**
   * 원본서버이미지명
   * @member {String} originalServerImageName
   */
  exports.prototype['originalServerImageName'] = undefined;
  /**
   * 원본서버이미지상태명
   * @member {String} memberServerImageStatusName
   */
  exports.prototype['memberServerImageStatusName'] = undefined;
  /**
   * 원본서버이미지상태
   * @member {module:model/CommonCode} memberServerImageStatus
   */
  exports.prototype['memberServerImageStatus'] = undefined;
  /**
   * 원본서버이미지OP
   * @member {module:model/CommonCode} memberServerImageOperation
   */
  exports.prototype['memberServerImageOperation'] = undefined;
  /**
   * 회원서버이미지플랫폼구분
   * @member {module:model/CommonCode} memberServerImagePlatformType
   */
  exports.prototype['memberServerImagePlatformType'] = undefined;
  /**
   * 리전
   * @member {module:model/Region} region
   */
  exports.prototype['region'] = undefined;
  /**
   * ZONE
   * @member {module:model/Zone} zone
   */
  exports.prototype['zone'] = undefined;
  /**
   * 생성일시
   * @member {String} createDate
   */
  exports.prototype['createDate'] = undefined;
  /**
   * 회원서버이미지블록스토리지인스턴스총 개수
   * @member {Number} memberServerImageBlockStorageTotalRows
   */
  exports.prototype['memberServerImageBlockStorageTotalRows'] = undefined;
  /**
   * 회원서버이미지총사이즈
   * @member {Number} memberServerImageBlockStorageTotalSize
   */
  exports.prototype['memberServerImageBlockStorageTotalSize'] = undefined;



  return exports;
}));


