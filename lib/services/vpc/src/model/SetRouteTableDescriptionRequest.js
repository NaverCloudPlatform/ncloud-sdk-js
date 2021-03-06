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
    root.Vpc.SetRouteTableDescriptionRequest = factory(root.Vpc.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SetRouteTableDescriptionRequest model module.
   * @module model/SetRouteTableDescriptionRequest
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>SetRouteTableDescriptionRequest</code>.
   * @alias module:model/SetRouteTableDescriptionRequest
   * @class
   * @param routeTableNo {String} 라우트테이블번호
   */
  var exports = function(routeTableNo) {
    var _this = this;


    _this['routeTableNo'] = routeTableNo;

  };

  /**
   * Constructs a <code>SetRouteTableDescriptionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SetRouteTableDescriptionRequest} obj Optional instance to populate.
   * @return {module:model/SetRouteTableDescriptionRequest} The populated <code>SetRouteTableDescriptionRequest</code> instance.
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
      if (data.hasOwnProperty('routeTableDescription')) {
        obj['routeTableDescription'] = ApiClient.convertToType(data['routeTableDescription'], 'String');
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
   * 라우트테이블설명
   * @member {String} routeTableDescription
   */
  exports.prototype['routeTableDescription'] = undefined;



  return exports;
}));


