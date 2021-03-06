/*
* loadbalancer
* <br/>https://ncloud.apigw.ntruss.com/loadbalancer/v2
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
    define(['ApiClient', 'model/LoadBalancerRuleParameter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LoadBalancerRuleParameter'));
  } else {
    // Browser globals (root is window)
    if (!root.Loadbalancer) {
      root.Loadbalancer = {};
    }
    root.Loadbalancer.ChangeLoadBalancerInstanceConfigurationRequest = factory(root.Loadbalancer.ApiClient, root.Loadbalancer.LoadBalancerRuleParameter);
  }
}(this, function(ApiClient, LoadBalancerRuleParameter) {
  'use strict';




  /**
   * The ChangeLoadBalancerInstanceConfigurationRequest model module.
   * @module model/ChangeLoadBalancerInstanceConfigurationRequest
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>ChangeLoadBalancerInstanceConfigurationRequest</code>.
   * @alias module:model/ChangeLoadBalancerInstanceConfigurationRequest
   * @class
   * @param loadBalancerInstanceNo {String} 로드밸런서인스턴스번호
   * @param loadBalancerAlgorithmTypeCode {String} 로드밸런서알고리즘구분코드
   * @param loadBalancerRuleList {Array.<module:model/LoadBalancerRuleParameter>} 로드밸런RULE리스트
   */
  var exports = function(loadBalancerInstanceNo, loadBalancerAlgorithmTypeCode, loadBalancerRuleList) {
    var _this = this;

    _this['loadBalancerInstanceNo'] = loadBalancerInstanceNo;
    _this['loadBalancerAlgorithmTypeCode'] = loadBalancerAlgorithmTypeCode;

    _this['loadBalancerRuleList'] = loadBalancerRuleList;
  };

  /**
   * Constructs a <code>ChangeLoadBalancerInstanceConfigurationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangeLoadBalancerInstanceConfigurationRequest} obj Optional instance to populate.
   * @return {module:model/ChangeLoadBalancerInstanceConfigurationRequest} The populated <code>ChangeLoadBalancerInstanceConfigurationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('loadBalancerInstanceNo')) {
        obj['loadBalancerInstanceNo'] = ApiClient.convertToType(data['loadBalancerInstanceNo'], 'String');
      }
      if (data.hasOwnProperty('loadBalancerAlgorithmTypeCode')) {
        obj['loadBalancerAlgorithmTypeCode'] = ApiClient.convertToType(data['loadBalancerAlgorithmTypeCode'], 'String');
      }
      if (data.hasOwnProperty('loadBalancerDescription')) {
        obj['loadBalancerDescription'] = ApiClient.convertToType(data['loadBalancerDescription'], 'String');
      }
      if (data.hasOwnProperty('loadBalancerRuleList')) {
        obj['loadBalancerRuleList'] = ApiClient.convertToType(data['loadBalancerRuleList'], [LoadBalancerRuleParameter]);
      }
    }
    return obj;
  }

  /**
   * 로드밸런서인스턴스번호
   * @member {String} loadBalancerInstanceNo
   */
  exports.prototype['loadBalancerInstanceNo'] = undefined;
  /**
   * 로드밸런서알고리즘구분코드
   * @member {String} loadBalancerAlgorithmTypeCode
   */
  exports.prototype['loadBalancerAlgorithmTypeCode'] = undefined;
  /**
   * 로드밸런서설명
   * @member {String} loadBalancerDescription
   */
  exports.prototype['loadBalancerDescription'] = undefined;
  /**
   * 로드밸런RULE리스트
   * @member {Array.<module:model/LoadBalancerRuleParameter>} loadBalancerRuleList
   */
  exports.prototype['loadBalancerRuleList'] = undefined;



  return exports;
}));


