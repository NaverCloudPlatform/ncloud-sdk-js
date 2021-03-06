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
    define(['ApiClient', 'model/ServerHealthCheckStatus', 'model/ServerInstance'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ServerHealthCheckStatus'), require('./ServerInstance'));
  } else {
    // Browser globals (root is window)
    if (!root.Loadbalancer) {
      root.Loadbalancer = {};
    }
    root.Loadbalancer.LoadBalancedServerInstance = factory(root.Loadbalancer.ApiClient, root.Loadbalancer.ServerHealthCheckStatus, root.Loadbalancer.ServerInstance);
  }
}(this, function(ApiClient, ServerHealthCheckStatus, ServerInstance) {
  'use strict';




  /**
   * The LoadBalancedServerInstance model module.
   * @module model/LoadBalancedServerInstance
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>LoadBalancedServerInstance</code>.
   * @alias module:model/LoadBalancedServerInstance
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>LoadBalancedServerInstance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoadBalancedServerInstance} obj Optional instance to populate.
   * @return {module:model/LoadBalancedServerInstance} The populated <code>LoadBalancedServerInstance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('serverInstance')) {
        obj['serverInstance'] = ServerInstance.constructFromObject(data['serverInstance']);
      }
      if (data.hasOwnProperty('serverHealthCheckStatusList')) {
        obj['serverHealthCheckStatusList'] = ApiClient.convertToType(data['serverHealthCheckStatusList'], [ServerHealthCheckStatus]);
      }
    }
    return obj;
  }

  /**
   * 서버인스턴스
   * @member {module:model/ServerInstance} serverInstance
   */
  exports.prototype['serverInstance'] = undefined;
  /**
   * 서버헬스체크상태리스트
   * @member {Array.<module:model/ServerHealthCheckStatus>} serverHealthCheckStatusList
   */
  exports.prototype['serverHealthCheckStatusList'] = undefined;



  return exports;
}));


