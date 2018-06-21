/*
* server
* <br/>https://ncloud.apigw.ntruss.com/server/v2
*
* OpenAPI spec version: 2018-06-21T02:18:25Z
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
    if (!root.Server) {
      root.Server = {};
    }
    root.Server.PortForwardingRuleParameter = factory(root.Server.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PortForwardingRuleParameter model module.
   * @module com.ncloud.server.model/PortForwardingRuleParameter
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PortForwardingRuleParameter</code>.
   * @alias module:com.ncloud.server.model/PortForwardingRuleParameter
   * @class
   * @param portForwardingExternalPort {Number} 포트포워딩외부포트
   * @param portForwardingInternalPort {Number} 포트포워딩내부포트
   * @param serverInstanceNo {String} 서버인스턴스번호
   */
  var exports = function(portForwardingExternalPort, portForwardingInternalPort, serverInstanceNo) {
    var _this = this;

    _this['portForwardingExternalPort'] = portForwardingExternalPort;
    _this['portForwardingInternalPort'] = portForwardingInternalPort;
    _this['serverInstanceNo'] = serverInstanceNo;
  };

  /**
   * Constructs a <code>PortForwardingRuleParameter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ncloud.server.model/PortForwardingRuleParameter} obj Optional instance to populate.
   * @return {module:com.ncloud.server.model/PortForwardingRuleParameter} The populated <code>PortForwardingRuleParameter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('portForwardingExternalPort')) {
        obj['portForwardingExternalPort'] = ApiClient.convertToType(data['portForwardingExternalPort'], 'Number');
      }
      if (data.hasOwnProperty('portForwardingInternalPort')) {
        obj['portForwardingInternalPort'] = ApiClient.convertToType(data['portForwardingInternalPort'], 'Number');
      }
      if (data.hasOwnProperty('serverInstanceNo')) {
        obj['serverInstanceNo'] = ApiClient.convertToType(data['serverInstanceNo'], 'String');
      }
    }
    return obj;
  }

  /**
   * 포트포워딩외부포트
   * @member {Number} portForwardingExternalPort
   */
  exports.prototype['portForwardingExternalPort'] = undefined;
  /**
   * 포트포워딩내부포트
   * @member {Number} portForwardingInternalPort
   */
  exports.prototype['portForwardingInternalPort'] = undefined;
  /**
   * 서버인스턴스번호
   * @member {String} serverInstanceNo
   */
  exports.prototype['serverInstanceNo'] = undefined;



  return exports;
}));

