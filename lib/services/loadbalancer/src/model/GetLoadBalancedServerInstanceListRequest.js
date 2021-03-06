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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Loadbalancer) {
      root.Loadbalancer = {};
    }
    root.Loadbalancer.GetLoadBalancedServerInstanceListRequest = factory(root.Loadbalancer.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetLoadBalancedServerInstanceListRequest model module.
   * @module model/GetLoadBalancedServerInstanceListRequest
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>GetLoadBalancedServerInstanceListRequest</code>.
   * @alias module:model/GetLoadBalancedServerInstanceListRequest
   * @class
   * @param loadBalancerInstanceNo {String} 로드밸런서인스턴스번호
   */
  var exports = function(loadBalancerInstanceNo) {
    var _this = this;

    _this['loadBalancerInstanceNo'] = loadBalancerInstanceNo;
  };

  /**
   * Constructs a <code>GetLoadBalancedServerInstanceListRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetLoadBalancedServerInstanceListRequest} obj Optional instance to populate.
   * @return {module:model/GetLoadBalancedServerInstanceListRequest} The populated <code>GetLoadBalancedServerInstanceListRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('loadBalancerInstanceNo')) {
        obj['loadBalancerInstanceNo'] = ApiClient.convertToType(data['loadBalancerInstanceNo'], 'String');
      }
    }
    return obj;
  }

  /**
   * 로드밸런서인스턴스번호
   * @member {String} loadBalancerInstanceNo
   */
  exports.prototype['loadBalancerInstanceNo'] = undefined;



  return exports;
}));


