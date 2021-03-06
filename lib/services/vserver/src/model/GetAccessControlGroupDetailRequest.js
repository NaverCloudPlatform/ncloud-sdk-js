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
    root.Vserver.GetAccessControlGroupDetailRequest = factory(root.Vserver.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetAccessControlGroupDetailRequest model module.
   * @module model/GetAccessControlGroupDetailRequest
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>GetAccessControlGroupDetailRequest</code>.
   * @alias module:model/GetAccessControlGroupDetailRequest
   * @class
   * @param accessControlGroupNo {String} ACG번호
   */
  var exports = function(accessControlGroupNo) {
    var _this = this;


    _this['accessControlGroupNo'] = accessControlGroupNo;
  };

  /**
   * Constructs a <code>GetAccessControlGroupDetailRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAccessControlGroupDetailRequest} obj Optional instance to populate.
   * @return {module:model/GetAccessControlGroupDetailRequest} The populated <code>GetAccessControlGroupDetailRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('regionCode')) {
        obj['regionCode'] = ApiClient.convertToType(data['regionCode'], 'String');
      }
      if (data.hasOwnProperty('accessControlGroupNo')) {
        obj['accessControlGroupNo'] = ApiClient.convertToType(data['accessControlGroupNo'], 'String');
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
   * ACG번호
   * @member {String} accessControlGroupNo
   */
  exports.prototype['accessControlGroupNo'] = undefined;



  return exports;
}));


