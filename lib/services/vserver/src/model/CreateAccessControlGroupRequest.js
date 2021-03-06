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
    root.Vserver.CreateAccessControlGroupRequest = factory(root.Vserver.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateAccessControlGroupRequest model module.
   * @module model/CreateAccessControlGroupRequest
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>CreateAccessControlGroupRequest</code>.
   * @alias module:model/CreateAccessControlGroupRequest
   * @class
   * @param vpcNo {String} VPC번호
   */
  var exports = function(vpcNo) {
    var _this = this;




    _this['vpcNo'] = vpcNo;
  };

  /**
   * Constructs a <code>CreateAccessControlGroupRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateAccessControlGroupRequest} obj Optional instance to populate.
   * @return {module:model/CreateAccessControlGroupRequest} The populated <code>CreateAccessControlGroupRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('regionCode')) {
        obj['regionCode'] = ApiClient.convertToType(data['regionCode'], 'String');
      }
      if (data.hasOwnProperty('accessControlGroupName')) {
        obj['accessControlGroupName'] = ApiClient.convertToType(data['accessControlGroupName'], 'String');
      }
      if (data.hasOwnProperty('accessControlGroupDescription')) {
        obj['accessControlGroupDescription'] = ApiClient.convertToType(data['accessControlGroupDescription'], 'String');
      }
      if (data.hasOwnProperty('vpcNo')) {
        obj['vpcNo'] = ApiClient.convertToType(data['vpcNo'], 'String');
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
   * ACG이름
   * @member {String} accessControlGroupName
   */
  exports.prototype['accessControlGroupName'] = undefined;
  /**
   * ACG설명
   * @member {String} accessControlGroupDescription
   */
  exports.prototype['accessControlGroupDescription'] = undefined;
  /**
   * VPC번호
   * @member {String} vpcNo
   */
  exports.prototype['vpcNo'] = undefined;



  return exports;
}));


