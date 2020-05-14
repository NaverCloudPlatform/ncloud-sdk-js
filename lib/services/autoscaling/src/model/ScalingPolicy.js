/*
* autoscaling
* <br/>https://ncloud.apigw.ntruss.com/autoscaling/v2
*
* OpenAPI spec version: 2018-11-13T06:27:22Z
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
    if (!root.Autoscaling) {
      root.Autoscaling = {};
    }
    root.Autoscaling.ScalingPolicy = factory(root.Autoscaling.ApiClient, root.Autoscaling.CommonCode);
  }
}(this, function(ApiClient, CommonCode) {
  'use strict';




  /**
   * The ScalingPolicy model module.
   * @module model/ScalingPolicy
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ScalingPolicy</code>.
   * @alias module:model/ScalingPolicy
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ScalingPolicy</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ScalingPolicy} obj Optional instance to populate.
   * @return {module:model/ScalingPolicy} The populated <code>ScalingPolicy</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('policyName')) {
        obj['policyName'] = ApiClient.convertToType(data['policyName'], 'String');
      }
      if (data.hasOwnProperty('autoScalingGroupName')) {
        obj['autoScalingGroupName'] = ApiClient.convertToType(data['autoScalingGroupName'], 'String');
      }
      if (data.hasOwnProperty('adjustmentType')) {
        obj['adjustmentType'] = CommonCode.constructFromObject(data['adjustmentType']);
      }
      if (data.hasOwnProperty('scalingAdjustment')) {
        obj['scalingAdjustment'] = ApiClient.convertToType(data['scalingAdjustment'], 'Number');
      }
      if (data.hasOwnProperty('cooldown')) {
        obj['cooldown'] = ApiClient.convertToType(data['cooldown'], 'Number');
      }
      if (data.hasOwnProperty('minAdjustmentStep')) {
        obj['minAdjustmentStep'] = ApiClient.convertToType(data['minAdjustmentStep'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} policyName
   */
  exports.prototype['policyName'] = undefined;
  /**
   * @member {String} autoScalingGroupName
   */
  exports.prototype['autoScalingGroupName'] = undefined;
  /**
   * @member {module:model/CommonCode} adjustmentType
   */
  exports.prototype['adjustmentType'] = undefined;
  /**
   * @member {Number} scalingAdjustment
   */
  exports.prototype['scalingAdjustment'] = undefined;
  /**
   * @member {Number} cooldown
   */
  exports.prototype['cooldown'] = undefined;
  /**
   * @member {Number} minAdjustmentStep
   */
  exports.prototype['minAdjustmentStep'] = undefined;



  return exports;
}));

