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
    root.Vpc.GetNatGatewayInstanceDetailRequest = factory(root.Vpc.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetNatGatewayInstanceDetailRequest model module.
   * @module model/GetNatGatewayInstanceDetailRequest
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>GetNatGatewayInstanceDetailRequest</code>.
   * @alias module:model/GetNatGatewayInstanceDetailRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>GetNatGatewayInstanceDetailRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetNatGatewayInstanceDetailRequest} obj Optional instance to populate.
   * @return {module:model/GetNatGatewayInstanceDetailRequest} The populated <code>GetNatGatewayInstanceDetailRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('regionCode')) {
        obj['regionCode'] = ApiClient.convertToType(data['regionCode'], 'String');
      }
      if (data.hasOwnProperty('natGatewayInstanceNo')) {
        obj['natGatewayInstanceNo'] = ApiClient.convertToType(data['natGatewayInstanceNo'], 'String');
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
   * NATGatway인스턴스번호
   * @member {String} natGatewayInstanceNo
   */
  exports.prototype['natGatewayInstanceNo'] = undefined;



  return exports;
}));


