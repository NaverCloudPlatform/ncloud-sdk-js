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
    define(['ApiClient', 'model/CommonCode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CommonCode'));
  } else {
    // Browser globals (root is window)
    if (!root.Vserver) {
      root.Vserver = {};
    }
    root.Vserver.ServerInstance = factory(root.Vserver.ApiClient, root.Vserver.CommonCode);
  }
}(this, function(ApiClient, CommonCode) {
  'use strict';




  /**
   * The ServerInstance model module.
   * @module model/ServerInstance
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>ServerInstance</code>.
   * @alias module:model/ServerInstance
   * @class
   */
  var exports = function() {
    var _this = this;




























  };

  /**
   * Constructs a <code>ServerInstance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ServerInstance} obj Optional instance to populate.
   * @return {module:model/ServerInstance} The populated <code>ServerInstance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('serverInstanceNo')) {
        obj['serverInstanceNo'] = ApiClient.convertToType(data['serverInstanceNo'], 'String');
      }
      if (data.hasOwnProperty('serverName')) {
        obj['serverName'] = ApiClient.convertToType(data['serverName'], 'String');
      }
      if (data.hasOwnProperty('serverDescription')) {
        obj['serverDescription'] = ApiClient.convertToType(data['serverDescription'], 'String');
      }
      if (data.hasOwnProperty('cpuCount')) {
        obj['cpuCount'] = ApiClient.convertToType(data['cpuCount'], 'Number');
      }
      if (data.hasOwnProperty('memorySize')) {
        obj['memorySize'] = ApiClient.convertToType(data['memorySize'], 'Number');
      }
      if (data.hasOwnProperty('platformType')) {
        obj['platformType'] = CommonCode.constructFromObject(data['platformType']);
      }
      if (data.hasOwnProperty('loginKeyName')) {
        obj['loginKeyName'] = ApiClient.convertToType(data['loginKeyName'], 'String');
      }
      if (data.hasOwnProperty('publicIpInstanceNo')) {
        obj['publicIpInstanceNo'] = ApiClient.convertToType(data['publicIpInstanceNo'], 'String');
      }
      if (data.hasOwnProperty('publicIp')) {
        obj['publicIp'] = ApiClient.convertToType(data['publicIp'], 'String');
      }
      if (data.hasOwnProperty('serverInstanceStatus')) {
        obj['serverInstanceStatus'] = CommonCode.constructFromObject(data['serverInstanceStatus']);
      }
      if (data.hasOwnProperty('serverInstanceOperation')) {
        obj['serverInstanceOperation'] = CommonCode.constructFromObject(data['serverInstanceOperation']);
      }
      if (data.hasOwnProperty('serverInstanceStatusName')) {
        obj['serverInstanceStatusName'] = ApiClient.convertToType(data['serverInstanceStatusName'], 'String');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'String');
      }
      if (data.hasOwnProperty('uptime')) {
        obj['uptime'] = ApiClient.convertToType(data['uptime'], 'String');
      }
      if (data.hasOwnProperty('serverImageProductCode')) {
        obj['serverImageProductCode'] = ApiClient.convertToType(data['serverImageProductCode'], 'String');
      }
      if (data.hasOwnProperty('serverProductCode')) {
        obj['serverProductCode'] = ApiClient.convertToType(data['serverProductCode'], 'String');
      }
      if (data.hasOwnProperty('isProtectServerTermination')) {
        obj['isProtectServerTermination'] = ApiClient.convertToType(data['isProtectServerTermination'], 'Boolean');
      }
      if (data.hasOwnProperty('zoneCode')) {
        obj['zoneCode'] = ApiClient.convertToType(data['zoneCode'], 'String');
      }
      if (data.hasOwnProperty('regionCode')) {
        obj['regionCode'] = ApiClient.convertToType(data['regionCode'], 'String');
      }
      if (data.hasOwnProperty('vpcNo')) {
        obj['vpcNo'] = ApiClient.convertToType(data['vpcNo'], 'String');
      }
      if (data.hasOwnProperty('subnetNo')) {
        obj['subnetNo'] = ApiClient.convertToType(data['subnetNo'], 'String');
      }
      if (data.hasOwnProperty('networkInterfaceNoList')) {
        obj['networkInterfaceNoList'] = ApiClient.convertToType(data['networkInterfaceNoList'], ['String']);
      }
      if (data.hasOwnProperty('initScriptNo')) {
        obj['initScriptNo'] = ApiClient.convertToType(data['initScriptNo'], 'String');
      }
      if (data.hasOwnProperty('serverInstanceType')) {
        obj['serverInstanceType'] = CommonCode.constructFromObject(data['serverInstanceType']);
      }
      if (data.hasOwnProperty('baseBlockStorageDiskType')) {
        obj['baseBlockStorageDiskType'] = CommonCode.constructFromObject(data['baseBlockStorageDiskType']);
      }
      if (data.hasOwnProperty('baseBlockStorageDiskDetailType')) {
        obj['baseBlockStorageDiskDetailType'] = CommonCode.constructFromObject(data['baseBlockStorageDiskDetailType']);
      }
      if (data.hasOwnProperty('placementGroupNo')) {
        obj['placementGroupNo'] = ApiClient.convertToType(data['placementGroupNo'], 'String');
      }
    }
    return obj;
  }

  /**
   * 서버인스턴스번호
   * @member {String} serverInstanceNo
   */
  exports.prototype['serverInstanceNo'] = undefined;
  /**
   * 서버이름
   * @member {String} serverName
   */
  exports.prototype['serverName'] = undefined;
  /**
   * 서버설명
   * @member {String} serverDescription
   */
  exports.prototype['serverDescription'] = undefined;
  /**
   * CPU개수
   * @member {Number} cpuCount
   */
  exports.prototype['cpuCount'] = undefined;
  /**
   * 메모리사이즈
   * @member {Number} memorySize
   */
  exports.prototype['memorySize'] = undefined;
  /**
   * 플랫폼유형
   * @member {module:model/CommonCode} platformType
   */
  exports.prototype['platformType'] = undefined;
  /**
   * 로그인키이름
   * @member {String} loginKeyName
   */
  exports.prototype['loginKeyName'] = undefined;
  /**
   * 공인IP인스턴스번호
   * @member {String} publicIpInstanceNo
   */
  exports.prototype['publicIpInstanceNo'] = undefined;
  /**
   * 공인IP주소
   * @member {String} publicIp
   */
  exports.prototype['publicIp'] = undefined;
  /**
   * 서버인스턴스상태
   * @member {module:model/CommonCode} serverInstanceStatus
   */
  exports.prototype['serverInstanceStatus'] = undefined;
  /**
   * 서버인스턴스OP
   * @member {module:model/CommonCode} serverInstanceOperation
   */
  exports.prototype['serverInstanceOperation'] = undefined;
  /**
   * 서버인스턴스상태이름
   * @member {String} serverInstanceStatusName
   */
  exports.prototype['serverInstanceStatusName'] = undefined;
  /**
   * 생성일시
   * @member {String} createDate
   */
  exports.prototype['createDate'] = undefined;
  /**
   * 업시간
   * @member {String} uptime
   */
  exports.prototype['uptime'] = undefined;
  /**
   * 서버이미지상품코드
   * @member {String} serverImageProductCode
   */
  exports.prototype['serverImageProductCode'] = undefined;
  /**
   * 서버상품코드
   * @member {String} serverProductCode
   */
  exports.prototype['serverProductCode'] = undefined;
  /**
   * 서버반납보호설정여부
   * @member {Boolean} isProtectServerTermination
   */
  exports.prototype['isProtectServerTermination'] = undefined;
  /**
   * ZONE코드
   * @member {String} zoneCode
   */
  exports.prototype['zoneCode'] = undefined;
  /**
   * REGION코드
   * @member {String} regionCode
   */
  exports.prototype['regionCode'] = undefined;
  /**
   * VPC번호
   * @member {String} vpcNo
   */
  exports.prototype['vpcNo'] = undefined;
  /**
   * 서브넷번호
   * @member {String} subnetNo
   */
  exports.prototype['subnetNo'] = undefined;
  /**
   * 네트워크인터페이스번호리스트
   * @member {Array.<String>} networkInterfaceNoList
   */
  exports.prototype['networkInterfaceNoList'] = undefined;
  /**
   * 초기화스크립트번호
   * @member {String} initScriptNo
   */
  exports.prototype['initScriptNo'] = undefined;
  /**
   * 서버인스턴스유형
   * @member {module:model/CommonCode} serverInstanceType
   */
  exports.prototype['serverInstanceType'] = undefined;
  /**
   * 기본블록스토리지디스크유형
   * @member {module:model/CommonCode} baseBlockStorageDiskType
   */
  exports.prototype['baseBlockStorageDiskType'] = undefined;
  /**
   * 기본블록스토리지디스크상세유형
   * @member {module:model/CommonCode} baseBlockStorageDiskDetailType
   */
  exports.prototype['baseBlockStorageDiskDetailType'] = undefined;
  /**
   * 물리배치그룹번호
   * @member {String} placementGroupNo
   */
  exports.prototype['placementGroupNo'] = undefined;



  return exports;
}));


