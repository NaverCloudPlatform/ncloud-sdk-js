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
    root.Vpc.SetNetworkAclDescriptionRequest = factory(root.Vpc.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SetNetworkAclDescriptionRequest model module.
   * @module model/SetNetworkAclDescriptionRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SetNetworkAclDescriptionRequest</code>.
   * @alias module:model/SetNetworkAclDescriptionRequest
   * @class
   * @param networkAclNo {String} 네트워크ACL번호
   */
  var exports = function(networkAclNo) {
    var _this = this;


    _this['networkAclNo'] = networkAclNo;

  };

  /**
   * Constructs a <code>SetNetworkAclDescriptionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SetNetworkAclDescriptionRequest} obj Optional instance to populate.
   * @return {module:model/SetNetworkAclDescriptionRequest} The populated <code>SetNetworkAclDescriptionRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('regionCode')) {
        obj['regionCode'] = ApiClient.convertToType(data['regionCode'], 'String');
      }
      if (data.hasOwnProperty('networkAclNo')) {
        obj['networkAclNo'] = ApiClient.convertToType(data['networkAclNo'], 'String');
      }
      if (data.hasOwnProperty('networkAclDescription')) {
        obj['networkAclDescription'] = ApiClient.convertToType(data['networkAclDescription'], 'String');
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
   * 네트워크ACL번호
   * @member {String} networkAclNo
   */
  exports.prototype['networkAclNo'] = undefined;
  /**
   * 네트워크ACL설명
   * @member {String} networkAclDescription
   */
  exports.prototype['networkAclDescription'] = undefined;



  return exports;
}));

