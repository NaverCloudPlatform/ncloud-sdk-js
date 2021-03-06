/*
* vpc
* VPC Network 관련 API<br/>https://ncloud.apigw.ntruss.com/vpc/v2
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
    if (!root.Vpc) {
      root.Vpc = {};
    }
    root.Vpc.RemoveRouteTableSubnetRequest = factory(root.Vpc.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RemoveRouteTableSubnetRequest model module.
   * @module model/RemoveRouteTableSubnetRequest
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>RemoveRouteTableSubnetRequest</code>.
   * @alias module:model/RemoveRouteTableSubnetRequest
   * @class
   * @param routeTableNo {String} 라우트테이블번호
   * @param subnetNoList {Array.<String>} 서브넷번호리스트
   * @param vpcNo {String} VPC번호
   */
  var exports = function(routeTableNo, subnetNoList, vpcNo) {
    var _this = this;


    _this['routeTableNo'] = routeTableNo;
    _this['subnetNoList'] = subnetNoList;
    _this['vpcNo'] = vpcNo;
  };

  /**
   * Constructs a <code>RemoveRouteTableSubnetRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RemoveRouteTableSubnetRequest} obj Optional instance to populate.
   * @return {module:model/RemoveRouteTableSubnetRequest} The populated <code>RemoveRouteTableSubnetRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('regionCode')) {
        obj['regionCode'] = ApiClient.convertToType(data['regionCode'], 'String');
      }
      if (data.hasOwnProperty('routeTableNo')) {
        obj['routeTableNo'] = ApiClient.convertToType(data['routeTableNo'], 'String');
      }
      if (data.hasOwnProperty('subnetNoList')) {
        obj['subnetNoList'] = ApiClient.convertToType(data['subnetNoList'], ['String']);
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
   * 라우트테이블번호
   * @member {String} routeTableNo
   */
  exports.prototype['routeTableNo'] = undefined;
  /**
   * 서브넷번호리스트
   * @member {Array.<String>} subnetNoList
   */
  exports.prototype['subnetNoList'] = undefined;
  /**
   * VPC번호
   * @member {String} vpcNo
   */
  exports.prototype['vpcNo'] = undefined;



  return exports;
}));


