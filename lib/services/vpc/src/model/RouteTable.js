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
    define(['ApiClient', 'model/CommonCode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CommonCode'));
  } else {
    // Browser globals (root is window)
    if (!root.Vpc) {
      root.Vpc = {};
    }
    root.Vpc.RouteTable = factory(root.Vpc.ApiClient, root.Vpc.CommonCode);
  }
}(this, function(ApiClient, CommonCode) {
  'use strict';




  /**
   * The RouteTable model module.
   * @module model/RouteTable
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>RouteTable</code>.
   * @alias module:model/RouteTable
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>RouteTable</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RouteTable} obj Optional instance to populate.
   * @return {module:model/RouteTable} The populated <code>RouteTable</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('routeTableNo')) {
        obj['routeTableNo'] = ApiClient.convertToType(data['routeTableNo'], 'String');
      }
      if (data.hasOwnProperty('routeTableName')) {
        obj['routeTableName'] = ApiClient.convertToType(data['routeTableName'], 'String');
      }
      if (data.hasOwnProperty('regionCode')) {
        obj['regionCode'] = ApiClient.convertToType(data['regionCode'], 'String');
      }
      if (data.hasOwnProperty('vpcNo')) {
        obj['vpcNo'] = ApiClient.convertToType(data['vpcNo'], 'String');
      }
      if (data.hasOwnProperty('supportedSubnetType')) {
        obj['supportedSubnetType'] = CommonCode.constructFromObject(data['supportedSubnetType']);
      }
      if (data.hasOwnProperty('isDefault')) {
        obj['isDefault'] = ApiClient.convertToType(data['isDefault'], 'Boolean');
      }
      if (data.hasOwnProperty('routeTableStatus')) {
        obj['routeTableStatus'] = CommonCode.constructFromObject(data['routeTableStatus']);
      }
      if (data.hasOwnProperty('routeTableDescription')) {
        obj['routeTableDescription'] = ApiClient.convertToType(data['routeTableDescription'], 'String');
      }
    }
    return obj;
  }

  /**
   * 라우트테이블번호
   * @member {String} routeTableNo
   */
  exports.prototype['routeTableNo'] = undefined;
  /**
   * 라우트테이블이름
   * @member {String} routeTableName
   */
  exports.prototype['routeTableName'] = undefined;
  /**
   * REGION코드
   * @member {String} regionCode
   */
  exports.prototype['regionCode'] = undefined;
  /**
   * VPC번호
   * @member {String} vpcNo
   */
  exports.prototype['vpcNo'] = undefined;
  /**
   * 지원하는서브넷유형
   * @member {module:model/CommonCode} supportedSubnetType
   */
  exports.prototype['supportedSubnetType'] = undefined;
  /**
   * Default여부
   * @member {Boolean} isDefault
   */
  exports.prototype['isDefault'] = undefined;
  /**
   * 라우트테이블상태
   * @member {module:model/CommonCode} routeTableStatus
   */
  exports.prototype['routeTableStatus'] = undefined;
  /**
   * 라우트테이블설명
   * @member {String} routeTableDescription
   */
  exports.prototype['routeTableDescription'] = undefined;



  return exports;
}));


