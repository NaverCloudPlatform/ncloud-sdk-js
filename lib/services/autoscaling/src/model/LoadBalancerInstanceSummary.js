/*
* autoscaling
* <br/>https://ncloud.apigw.ntruss.com/autoscaling/v2
*
* OpenAPI spec version: 2018-11-13T06:27:22Z
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
    if (!root.Autoscaling) {
      root.Autoscaling = {};
    }
    root.Autoscaling.LoadBalancerInstanceSummary = factory(root.Autoscaling.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LoadBalancerInstanceSummary model module.
   * @module model/LoadBalancerInstanceSummary
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>LoadBalancerInstanceSummary</code>.
   * @alias module:model/LoadBalancerInstanceSummary
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>LoadBalancerInstanceSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoadBalancerInstanceSummary} obj Optional instance to populate.
   * @return {module:model/LoadBalancerInstanceSummary} The populated <code>LoadBalancerInstanceSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('loadBalancerInstanceNo')) {
        obj['loadBalancerInstanceNo'] = ApiClient.convertToType(data['loadBalancerInstanceNo'], 'String');
      }
      if (data.hasOwnProperty('loadBalancerName')) {
        obj['loadBalancerName'] = ApiClient.convertToType(data['loadBalancerName'], 'String');
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
   * 로드밸런서명
   * @member {String} loadBalancerName
   */
  exports.prototype['loadBalancerName'] = undefined;



  return exports;
}));

