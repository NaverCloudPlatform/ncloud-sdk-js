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
    root.Vpc.GetVpcListRequest = factory(root.Vpc.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetVpcListRequest model module.
   * @module model/GetVpcListRequest
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>GetVpcListRequest</code>.
   * @alias module:model/GetVpcListRequest
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>GetVpcListRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetVpcListRequest} obj Optional instance to populate.
   * @return {module:model/GetVpcListRequest} The populated <code>GetVpcListRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('regionCode')) {
        obj['regionCode'] = ApiClient.convertToType(data['regionCode'], 'String');
      }
      if (data.hasOwnProperty('vpcName')) {
        obj['vpcName'] = ApiClient.convertToType(data['vpcName'], 'String');
      }
      if (data.hasOwnProperty('vpcStatusCode')) {
        obj['vpcStatusCode'] = ApiClient.convertToType(data['vpcStatusCode'], 'String');
      }
      if (data.hasOwnProperty('vpcNoList')) {
        obj['vpcNoList'] = ApiClient.convertToType(data['vpcNoList'], ['String']);
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
   * VPC이름
   * @member {String} vpcName
   */
  exports.prototype['vpcName'] = undefined;
  /**
   * VPC상태코드
   * @member {String} vpcStatusCode
   */
  exports.prototype['vpcStatusCode'] = undefined;
  /**
   * VPC번호리스트
   * @member {Array.<String>} vpcNoList
   */
  exports.prototype['vpcNoList'] = undefined;



  return exports;
}));


