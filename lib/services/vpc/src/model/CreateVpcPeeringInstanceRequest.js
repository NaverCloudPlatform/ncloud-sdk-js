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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Vpc) {
      root.Vpc = {};
    }
    root.Vpc.CreateVpcPeeringInstanceRequest = factory(root.Vpc.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateVpcPeeringInstanceRequest model module.
   * @module model/CreateVpcPeeringInstanceRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateVpcPeeringInstanceRequest</code>.
   * @alias module:model/CreateVpcPeeringInstanceRequest
   * @class
   * @param sourceVpcNo {String} 요청VPC번호
   * @param targetVpcNo {String} 수락VPC번호
   */
  var exports = function(sourceVpcNo, targetVpcNo) {
    var _this = this;



    _this['sourceVpcNo'] = sourceVpcNo;


    _this['targetVpcNo'] = targetVpcNo;

  };

  /**
   * Constructs a <code>CreateVpcPeeringInstanceRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateVpcPeeringInstanceRequest} obj Optional instance to populate.
   * @return {module:model/CreateVpcPeeringInstanceRequest} The populated <code>CreateVpcPeeringInstanceRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('regionCode')) {
        obj['regionCode'] = ApiClient.convertToType(data['regionCode'], 'String');
      }
      if (data.hasOwnProperty('vpcPeeringDescription')) {
        obj['vpcPeeringDescription'] = ApiClient.convertToType(data['vpcPeeringDescription'], 'String');
      }
      if (data.hasOwnProperty('sourceVpcNo')) {
        obj['sourceVpcNo'] = ApiClient.convertToType(data['sourceVpcNo'], 'String');
      }
      if (data.hasOwnProperty('targetVpcLoginId')) {
        obj['targetVpcLoginId'] = ApiClient.convertToType(data['targetVpcLoginId'], 'String');
      }
      if (data.hasOwnProperty('targetVpcName')) {
        obj['targetVpcName'] = ApiClient.convertToType(data['targetVpcName'], 'String');
      }
      if (data.hasOwnProperty('targetVpcNo')) {
        obj['targetVpcNo'] = ApiClient.convertToType(data['targetVpcNo'], 'String');
      }
      if (data.hasOwnProperty('vpcPeeringName')) {
        obj['vpcPeeringName'] = ApiClient.convertToType(data['vpcPeeringName'], 'String');
      }
    }
    return obj;
  }

  /**
   * REGION코드
   * @member {String} regionCode
   */
  exports.prototype['regionCode'] = undefined;
  /**
   * VPCPeering설명
   * @member {String} vpcPeeringDescription
   */
  exports.prototype['vpcPeeringDescription'] = undefined;
  /**
   * 요청VPC번호
   * @member {String} sourceVpcNo
   */
  exports.prototype['sourceVpcNo'] = undefined;
  /**
   * 수락VPC소유자ID
   * @member {String} targetVpcLoginId
   */
  exports.prototype['targetVpcLoginId'] = undefined;
  /**
   * 수락VPC이름
   * @member {String} targetVpcName
   */
  exports.prototype['targetVpcName'] = undefined;
  /**
   * 수락VPC번호
   * @member {String} targetVpcNo
   */
  exports.prototype['targetVpcNo'] = undefined;
  /**
   * VPCPeering이름
   * @member {String} vpcPeeringName
   */
  exports.prototype['vpcPeeringName'] = undefined;



  return exports;
}));

