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
    root.Vpc.AddNetworkAclRuleParameter = factory(root.Vpc.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AddNetworkAclRuleParameter model module.
   * @module model/AddNetworkAclRuleParameter
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>AddNetworkAclRuleParameter</code>.
   * @alias module:model/AddNetworkAclRuleParameter
   * @class
   * @param ipBlock {String} IP블록
   * @param ruleActionCode {String} Rule액션코드
   * @param priority {Number} 우선순위
   * @param protocolTypeCode {String} 프로토콜유형코드
   */
  var exports = function(ipBlock, ruleActionCode, priority, protocolTypeCode) {
    var _this = this;


    _this['ipBlock'] = ipBlock;
    _this['ruleActionCode'] = ruleActionCode;

    _this['priority'] = priority;
    _this['protocolTypeCode'] = protocolTypeCode;
  };

  /**
   * Constructs a <code>AddNetworkAclRuleParameter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddNetworkAclRuleParameter} obj Optional instance to populate.
   * @return {module:model/AddNetworkAclRuleParameter} The populated <code>AddNetworkAclRuleParameter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('networkAclRuleDescription')) {
        obj['networkAclRuleDescription'] = ApiClient.convertToType(data['networkAclRuleDescription'], 'String');
      }
      if (data.hasOwnProperty('ipBlock')) {
        obj['ipBlock'] = ApiClient.convertToType(data['ipBlock'], 'String');
      }
      if (data.hasOwnProperty('ruleActionCode')) {
        obj['ruleActionCode'] = ApiClient.convertToType(data['ruleActionCode'], 'String');
      }
      if (data.hasOwnProperty('portRange')) {
        obj['portRange'] = ApiClient.convertToType(data['portRange'], 'String');
      }
      if (data.hasOwnProperty('priority')) {
        obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
      }
      if (data.hasOwnProperty('protocolTypeCode')) {
        obj['protocolTypeCode'] = ApiClient.convertToType(data['protocolTypeCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * 네트워크ACLRule설명
   * @member {String} networkAclRuleDescription
   */
  exports.prototype['networkAclRuleDescription'] = undefined;
  /**
   * IP블록
   * @member {String} ipBlock
   */
  exports.prototype['ipBlock'] = undefined;
  /**
   * Rule액션코드
   * @member {String} ruleActionCode
   */
  exports.prototype['ruleActionCode'] = undefined;
  /**
   * 포트범위
   * @member {String} portRange
   */
  exports.prototype['portRange'] = undefined;
  /**
   * 우선순위
   * @member {Number} priority
   */
  exports.prototype['priority'] = undefined;
  /**
   * 프로토콜유형코드
   * @member {String} protocolTypeCode
   */
  exports.prototype['protocolTypeCode'] = undefined;



  return exports;
}));


