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
    root.Server.DisassociatePublicIpFromServerInstanceRequest = factory(root.Server.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DisassociatePublicIpFromServerInstanceRequest model module.
   * @module model/DisassociatePublicIpFromServerInstanceRequest
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>DisassociatePublicIpFromServerInstanceRequest</code>.
   * @alias module:model/DisassociatePublicIpFromServerInstanceRequest
   * @class
   * @param publicIpInstanceNo {String} 공인IP인스턴스번호
   */
  var exports = function(publicIpInstanceNo) {
    var _this = this;

    _this['publicIpInstanceNo'] = publicIpInstanceNo;
  };

  /**
   * Constructs a <code>DisassociatePublicIpFromServerInstanceRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DisassociatePublicIpFromServerInstanceRequest} obj Optional instance to populate.
   * @return {module:model/DisassociatePublicIpFromServerInstanceRequest} The populated <code>DisassociatePublicIpFromServerInstanceRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('publicIpInstanceNo')) {
        obj['publicIpInstanceNo'] = ApiClient.convertToType(data['publicIpInstanceNo'], 'String');
      }
    }
    return obj;
  }

  /**
   * 공인IP인스턴스번호
   * @member {String} publicIpInstanceNo
   */
  exports.prototype['publicIpInstanceNo'] = undefined;



  return exports;
}));

