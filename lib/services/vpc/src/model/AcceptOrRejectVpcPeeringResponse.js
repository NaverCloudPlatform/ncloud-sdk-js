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
    define(['ApiClient', 'model/VpcPeeringInstance'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VpcPeeringInstance'));
  } else {
    // Browser globals (root is window)
    if (!root.Vpc) {
      root.Vpc = {};
    }
    root.Vpc.AcceptOrRejectVpcPeeringResponse = factory(root.Vpc.ApiClient, root.Vpc.VpcPeeringInstance);
  }
}(this, function(ApiClient, VpcPeeringInstance) {
  'use strict';




  /**
   * The AcceptOrRejectVpcPeeringResponse model module.
   * @module model/AcceptOrRejectVpcPeeringResponse
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>AcceptOrRejectVpcPeeringResponse</code>.
   * @alias module:model/AcceptOrRejectVpcPeeringResponse
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>AcceptOrRejectVpcPeeringResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AcceptOrRejectVpcPeeringResponse} obj Optional instance to populate.
   * @return {module:model/AcceptOrRejectVpcPeeringResponse} The populated <code>AcceptOrRejectVpcPeeringResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('requestId')) {
        obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
      }
      if (data.hasOwnProperty('returnCode')) {
        obj['returnCode'] = ApiClient.convertToType(data['returnCode'], 'String');
      }
      if (data.hasOwnProperty('returnMessage')) {
        obj['returnMessage'] = ApiClient.convertToType(data['returnMessage'], 'String');
      }
      if (data.hasOwnProperty('totalRows')) {
        obj['totalRows'] = ApiClient.convertToType(data['totalRows'], 'Number');
      }
      if (data.hasOwnProperty('vpcPeeringInstanceList')) {
        obj['vpcPeeringInstanceList'] = ApiClient.convertToType(data['vpcPeeringInstanceList'], [VpcPeeringInstance]);
      }
    }
    return obj;
  }

  /**
   * @member {String} requestId
   */
  exports.prototype['requestId'] = undefined;
  /**
   * @member {String} returnCode
   */
  exports.prototype['returnCode'] = undefined;
  /**
   * @member {String} returnMessage
   */
  exports.prototype['returnMessage'] = undefined;
  /**
   * @member {Number} totalRows
   */
  exports.prototype['totalRows'] = undefined;
  /**
   * @member {Array.<module:model/VpcPeeringInstance>} vpcPeeringInstanceList
   */
  exports.prototype['vpcPeeringInstanceList'] = undefined;



  return exports;
}));


