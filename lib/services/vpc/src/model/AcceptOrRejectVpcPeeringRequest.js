/*
* vpc
* VPC Network 관련 API<br/>https://ncloud.apigw.ntruss.com/vpc/v2
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
    root.Vpc.AcceptOrRejectVpcPeeringRequest = factory(root.Vpc.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AcceptOrRejectVpcPeeringRequest model module.
   * @module model/AcceptOrRejectVpcPeeringRequest
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>AcceptOrRejectVpcPeeringRequest</code>.
   * @alias module:model/AcceptOrRejectVpcPeeringRequest
   * @class
   * @param vpcPeeringInstanceNo {String} VPCPeering인스턴스번호
   * @param isAccept {Boolean} 수락여부
   */
  var exports = function(vpcPeeringInstanceNo, isAccept) {
    var _this = this;


    _this['vpcPeeringInstanceNo'] = vpcPeeringInstanceNo;
    _this['isAccept'] = isAccept;
  };

  /**
   * Constructs a <code>AcceptOrRejectVpcPeeringRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AcceptOrRejectVpcPeeringRequest} obj Optional instance to populate.
   * @return {module:model/AcceptOrRejectVpcPeeringRequest} The populated <code>AcceptOrRejectVpcPeeringRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('regionCode')) {
        obj['regionCode'] = ApiClient.convertToType(data['regionCode'], 'String');
      }
      if (data.hasOwnProperty('vpcPeeringInstanceNo')) {
        obj['vpcPeeringInstanceNo'] = ApiClient.convertToType(data['vpcPeeringInstanceNo'], 'String');
      }
      if (data.hasOwnProperty('isAccept')) {
        obj['isAccept'] = ApiClient.convertToType(data['isAccept'], 'Boolean');
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
   * VPCPeering인스턴스번호
   * @member {String} vpcPeeringInstanceNo
   */
  exports.prototype['vpcPeeringInstanceNo'] = undefined;
  /**
   * 수락여부
   * @member {Boolean} isAccept
   */
  exports.prototype['isAccept'] = undefined;



  return exports;
}));


