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
    root.Vpc.NetworkAcl = factory(root.Vpc.ApiClient, root.Vpc.CommonCode);
  }
}(this, function(ApiClient, CommonCode) {
  'use strict';




  /**
   * The NetworkAcl model module.
   * @module model/NetworkAcl
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>NetworkAcl</code>.
   * @alias module:model/NetworkAcl
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>NetworkAcl</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworkAcl} obj Optional instance to populate.
   * @return {module:model/NetworkAcl} The populated <code>NetworkAcl</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('networkAclNo')) {
        obj['networkAclNo'] = ApiClient.convertToType(data['networkAclNo'], 'String');
      }
      if (data.hasOwnProperty('networkAclName')) {
        obj['networkAclName'] = ApiClient.convertToType(data['networkAclName'], 'String');
      }
      if (data.hasOwnProperty('vpcNo')) {
        obj['vpcNo'] = ApiClient.convertToType(data['vpcNo'], 'String');
      }
      if (data.hasOwnProperty('networkAclStatus')) {
        obj['networkAclStatus'] = CommonCode.constructFromObject(data['networkAclStatus']);
      }
      if (data.hasOwnProperty('networkAclDescription')) {
        obj['networkAclDescription'] = ApiClient.convertToType(data['networkAclDescription'], 'String');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'String');
      }
      if (data.hasOwnProperty('isDefault')) {
        obj['isDefault'] = ApiClient.convertToType(data['isDefault'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * 네트워크ACL번호
   * @member {String} networkAclNo
   */
  exports.prototype['networkAclNo'] = undefined;
  /**
   * 네트워크ACL이름
   * @member {String} networkAclName
   */
  exports.prototype['networkAclName'] = undefined;
  /**
   * VPC번호
   * @member {String} vpcNo
   */
  exports.prototype['vpcNo'] = undefined;
  /**
   * 네트워크ACL상태
   * @member {module:model/CommonCode} networkAclStatus
   */
  exports.prototype['networkAclStatus'] = undefined;
  /**
   * 네트워크ACL설명
   * @member {String} networkAclDescription
   */
  exports.prototype['networkAclDescription'] = undefined;
  /**
   * 생성일시
   * @member {String} createDate
   */
  exports.prototype['createDate'] = undefined;
  /**
   * Default여부
   * @member {Boolean} isDefault
   */
  exports.prototype['isDefault'] = undefined;



  return exports;
}));

