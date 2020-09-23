/*
* vpc
* VPC Network 관련 API<br/>https://ncloud.apigw.ntruss.com/vpc/v2
*
* OpenAPI spec version: 2020-09-17T02:27:03Z
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
    if (!root.Vpc) {
      root.Vpc = {};
    }
    root.Vpc.NatGatewayInstance = factory(root.Vpc.ApiClient, root.Vpc.CommonCode);
  }
}(this, function(ApiClient, CommonCode) {
  'use strict';




  /**
   * The NatGatewayInstance model module.
   * @module model/NatGatewayInstance
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>NatGatewayInstance</code>.
   * @alias module:model/NatGatewayInstance
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>NatGatewayInstance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NatGatewayInstance} obj Optional instance to populate.
   * @return {module:model/NatGatewayInstance} The populated <code>NatGatewayInstance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('vpcNo')) {
        obj['vpcNo'] = ApiClient.convertToType(data['vpcNo'], 'String');
      }
      if (data.hasOwnProperty('vpcName')) {
        obj['vpcName'] = ApiClient.convertToType(data['vpcName'], 'String');
      }
      if (data.hasOwnProperty('natGatewayInstanceNo')) {
        obj['natGatewayInstanceNo'] = ApiClient.convertToType(data['natGatewayInstanceNo'], 'String');
      }
      if (data.hasOwnProperty('natGatewayName')) {
        obj['natGatewayName'] = ApiClient.convertToType(data['natGatewayName'], 'String');
      }
      if (data.hasOwnProperty('publicIp')) {
        obj['publicIp'] = ApiClient.convertToType(data['publicIp'], 'String');
      }
      if (data.hasOwnProperty('natGatewayInstanceStatus')) {
        obj['natGatewayInstanceStatus'] = CommonCode.constructFromObject(data['natGatewayInstanceStatus']);
      }
      if (data.hasOwnProperty('natGatewayInstanceStatusName')) {
        obj['natGatewayInstanceStatusName'] = ApiClient.convertToType(data['natGatewayInstanceStatusName'], 'String');
      }
      if (data.hasOwnProperty('natGatewayInstanceOperation')) {
        obj['natGatewayInstanceOperation'] = CommonCode.constructFromObject(data['natGatewayInstanceOperation']);
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'String');
      }
      if (data.hasOwnProperty('natGatewayDescription')) {
        obj['natGatewayDescription'] = ApiClient.convertToType(data['natGatewayDescription'], 'String');
      }
      if (data.hasOwnProperty('zoneCode')) {
        obj['zoneCode'] = ApiClient.convertToType(data['zoneCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * VPC번호
   * @member {String} vpcNo
   */
  exports.prototype['vpcNo'] = undefined;
  /**
   * VPC이름
   * @member {String} vpcName
   */
  exports.prototype['vpcName'] = undefined;
  /**
   * NATGateway인스턴스번호
   * @member {String} natGatewayInstanceNo
   */
  exports.prototype['natGatewayInstanceNo'] = undefined;
  /**
   * NATGateway이름
   * @member {String} natGatewayName
   */
  exports.prototype['natGatewayName'] = undefined;
  /**
   * 공인IP주소
   * @member {String} publicIp
   */
  exports.prototype['publicIp'] = undefined;
  /**
   * NATGateway인스턴스상태
   * @member {module:model/CommonCode} natGatewayInstanceStatus
   */
  exports.prototype['natGatewayInstanceStatus'] = undefined;
  /**
   * NATGateway인스턴스상태이름
   * @member {String} natGatewayInstanceStatusName
   */
  exports.prototype['natGatewayInstanceStatusName'] = undefined;
  /**
   * NATGateway인스턴스OP
   * @member {module:model/CommonCode} natGatewayInstanceOperation
   */
  exports.prototype['natGatewayInstanceOperation'] = undefined;
  /**
   * 생성일시
   * @member {String} createDate
   */
  exports.prototype['createDate'] = undefined;
  /**
   * NATGateway설명
   * @member {String} natGatewayDescription
   */
  exports.prototype['natGatewayDescription'] = undefined;
  /**
   * ZONE코드
   * @member {String} zoneCode
   */
  exports.prototype['zoneCode'] = undefined;



  return exports;
}));

