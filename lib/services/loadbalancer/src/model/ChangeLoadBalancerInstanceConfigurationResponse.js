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
    define(['ApiClient', 'model/LoadBalancerInstance'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LoadBalancerInstance'));
  } else {
    // Browser globals (root is window)
    if (!root.Loadbalancer) {
      root.Loadbalancer = {};
    }
    root.Loadbalancer.ChangeLoadBalancerInstanceConfigurationResponse = factory(root.Loadbalancer.ApiClient, root.Loadbalancer.LoadBalancerInstance);
  }
}(this, function(ApiClient, LoadBalancerInstance) {
  'use strict';




  /**
   * The ChangeLoadBalancerInstanceConfigurationResponse model module.
   * @module model/ChangeLoadBalancerInstanceConfigurationResponse
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>ChangeLoadBalancerInstanceConfigurationResponse</code>.
   * @alias module:model/ChangeLoadBalancerInstanceConfigurationResponse
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ChangeLoadBalancerInstanceConfigurationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangeLoadBalancerInstanceConfigurationResponse} obj Optional instance to populate.
   * @return {module:model/ChangeLoadBalancerInstanceConfigurationResponse} The populated <code>ChangeLoadBalancerInstanceConfigurationResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('requestId')) {
        obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
      }
      if (data.hasOwnProperty('returnCode')) {
        obj['returnCode'] = ApiClient.convertToType(data['returnCode'], 'String');
      }
      if (data.hasOwnProperty('returnMessage')) {
        obj['returnMessage'] = ApiClient.convertToType(data['returnMessage'], 'String');
      }
      if (data.hasOwnProperty('totalRows')) {
        obj['totalRows'] = ApiClient.convertToType(data['totalRows'], 'Number');
      }
      if (data.hasOwnProperty('loadBalancerInstanceList')) {
        obj['loadBalancerInstanceList'] = ApiClient.convertToType(data['loadBalancerInstanceList'], [LoadBalancerInstance]);
      }
    }
    return obj;
  }

  /**
   * @member {String} requestId
   */
  exports.prototype['requestId'] = undefined;
  /**
   * @member {String} returnCode
   */
  exports.prototype['returnCode'] = undefined;
  /**
   * @member {String} returnMessage
   */
  exports.prototype['returnMessage'] = undefined;
  /**
   * @member {Number} totalRows
   */
  exports.prototype['totalRows'] = undefined;
  /**
   * @member {Array.<module:model/LoadBalancerInstance>} loadBalancerInstanceList
   */
  exports.prototype['loadBalancerInstanceList'] = undefined;



  return exports;
}));


