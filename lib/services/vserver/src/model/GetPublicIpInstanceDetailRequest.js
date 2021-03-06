/*
* vserver
* VPC Compute 관련 API<br/>https://ncloud.apigw.ntruss.com/vserver/v2
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
    if (!root.Vserver) {
      root.Vserver = {};
    }
    root.Vserver.GetPublicIpInstanceDetailRequest = factory(root.Vserver.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetPublicIpInstanceDetailRequest model module.
   * @module model/GetPublicIpInstanceDetailRequest
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>GetPublicIpInstanceDetailRequest</code>.
   * @alias module:model/GetPublicIpInstanceDetailRequest
   * @class
   * @param publicIpInstanceNo {String} 공인IP인스턴스번호
   */
  var exports = function(publicIpInstanceNo) {
    var _this = this;


    _this['publicIpInstanceNo'] = publicIpInstanceNo;
  };

  /**
   * Constructs a <code>GetPublicIpInstanceDetailRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetPublicIpInstanceDetailRequest} obj Optional instance to populate.
   * @return {module:model/GetPublicIpInstanceDetailRequest} The populated <code>GetPublicIpInstanceDetailRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('regionCode')) {
        obj['regionCode'] = ApiClient.convertToType(data['regionCode'], 'String');
      }
      if (data.hasOwnProperty('publicIpInstanceNo')) {
        obj['publicIpInstanceNo'] = ApiClient.convertToType(data['publicIpInstanceNo'], 'String');
      }
    }
    return obj;
  }

  /**
   * REGION코드
   * @member {String} regionCode
   */
  exports.prototype['regionCode'] = undefined;
  /**
   * 공인IP인스턴스번호
   * @member {String} publicIpInstanceNo
   */
  exports.prototype['publicIpInstanceNo'] = undefined;



  return exports;
}));


