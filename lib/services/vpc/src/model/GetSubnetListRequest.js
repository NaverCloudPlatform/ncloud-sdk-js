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
    root.Vpc.GetSubnetListRequest = factory(root.Vpc.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetSubnetListRequest model module.
   * @module model/GetSubnetListRequest
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>GetSubnetListRequest</code>.
   * @alias module:model/GetSubnetListRequest
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>GetSubnetListRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSubnetListRequest} obj Optional instance to populate.
   * @return {module:model/GetSubnetListRequest} The populated <code>GetSubnetListRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('regionCode')) {
        obj['regionCode'] = ApiClient.convertToType(data['regionCode'], 'String');
      }
      if (data.hasOwnProperty('subnetNoList')) {
        obj['subnetNoList'] = ApiClient.convertToType(data['subnetNoList'], ['String']);
      }
      if (data.hasOwnProperty('subnet')) {
        obj['subnet'] = ApiClient.convertToType(data['subnet'], 'String');
      }
      if (data.hasOwnProperty('subnetTypeCode')) {
        obj['subnetTypeCode'] = ApiClient.convertToType(data['subnetTypeCode'], 'String');
      }
      if (data.hasOwnProperty('usageTypeCode')) {
        obj['usageTypeCode'] = ApiClient.convertToType(data['usageTypeCode'], 'String');
      }
      if (data.hasOwnProperty('networkAclNo')) {
        obj['networkAclNo'] = ApiClient.convertToType(data['networkAclNo'], 'String');
      }
      if (data.hasOwnProperty('pageNo')) {
        obj['pageNo'] = ApiClient.convertToType(data['pageNo'], 'Number');
      }
      if (data.hasOwnProperty('pageSize')) {
        obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
      }
      if (data.hasOwnProperty('subnetStatusCode')) {
        obj['subnetStatusCode'] = ApiClient.convertToType(data['subnetStatusCode'], 'String');
      }
      if (data.hasOwnProperty('vpcNo')) {
        obj['vpcNo'] = ApiClient.convertToType(data['vpcNo'], 'String');
      }
      if (data.hasOwnProperty('zoneCode')) {
        obj['zoneCode'] = ApiClient.convertToType(data['zoneCode'], 'String');
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
   * 서브넷번호리스트
   * @member {Array.<String>} subnetNoList
   */
  exports.prototype['subnetNoList'] = undefined;
  /**
   * 서브넷
   * @member {String} subnet
   */
  exports.prototype['subnet'] = undefined;
  /**
   * 서브넷유형코드
   * @member {String} subnetTypeCode
   */
  exports.prototype['subnetTypeCode'] = undefined;
  /**
   * 용도유형코드
   * @member {String} usageTypeCode
   */
  exports.prototype['usageTypeCode'] = undefined;
  /**
   * 네트워크ACL번호
   * @member {String} networkAclNo
   */
  exports.prototype['networkAclNo'] = undefined;
  /**
   * 페이지번호
   * @member {Number} pageNo
   */
  exports.prototype['pageNo'] = undefined;
  /**
   * 페이지사이즈
   * @member {Number} pageSize
   */
  exports.prototype['pageSize'] = undefined;
  /**
   * 서브넷상태코드
   * @member {String} subnetStatusCode
   */
  exports.prototype['subnetStatusCode'] = undefined;
  /**
   * VPC번호
   * @member {String} vpcNo
   */
  exports.prototype['vpcNo'] = undefined;
  /**
   * ZONE코드
   * @member {String} zoneCode
   */
  exports.prototype['zoneCode'] = undefined;



  return exports;
}));


