/*
* server
* <br/>https://ncloud.apigw.ntruss.com/server/v2
*
* OpenAPI spec version: 2019-10-17T10:28:43Z
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
    root.Server.AttachNetworkInterfaceRequest = factory(root.Server.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AttachNetworkInterfaceRequest model module.
   * @module model/AttachNetworkInterfaceRequest
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>AttachNetworkInterfaceRequest</code>.
   * @alias module:model/AttachNetworkInterfaceRequest
   * @class
   * @param networkInterfaceNo {String} Network Interface번호
   * @param serverInstanceNo {String} 서버인스턴스번호
   */
  var exports = function(networkInterfaceNo, serverInstanceNo) {
    var _this = this;

    _this['networkInterfaceNo'] = networkInterfaceNo;
    _this['serverInstanceNo'] = serverInstanceNo;
  };

  /**
   * Constructs a <code>AttachNetworkInterfaceRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AttachNetworkInterfaceRequest} obj Optional instance to populate.
   * @return {module:model/AttachNetworkInterfaceRequest} The populated <code>AttachNetworkInterfaceRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('networkInterfaceNo')) {
        obj['networkInterfaceNo'] = ApiClient.convertToType(data['networkInterfaceNo'], 'String');
      }
      if (data.hasOwnProperty('serverInstanceNo')) {
        obj['serverInstanceNo'] = ApiClient.convertToType(data['serverInstanceNo'], 'String');
      }
    }
    return obj;
  }

  /**
   * Network Interface번호
   * @member {String} networkInterfaceNo
   */
  exports.prototype['networkInterfaceNo'] = undefined;
  /**
   * 서버인스턴스번호
   * @member {String} serverInstanceNo
   */
  exports.prototype['serverInstanceNo'] = undefined;



  return exports;
}));

