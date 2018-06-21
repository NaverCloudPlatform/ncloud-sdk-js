/*
* autoscaling
* <br/>https://ncloud.apigw.ntruss.com/autoscaling/v2
*
* OpenAPI spec version: 2018-06-21T02:22:22Z
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
    if (!root.Autoscaling) {
      root.Autoscaling = {};
    }
    root.Autoscaling.DeleteScheduledActionRequest = factory(root.Autoscaling.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeleteScheduledActionRequest model module.
   * @module com.ncloud.autoscaling.model/DeleteScheduledActionRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DeleteScheduledActionRequest</code>.
   * @alias module:com.ncloud.autoscaling.model/DeleteScheduledActionRequest
   * @class
   * @param scheduledActionName {String} 스케쥴액션명
   */
  var exports = function(scheduledActionName) {
    var _this = this;


    _this['scheduledActionName'] = scheduledActionName;

  };

  /**
   * Constructs a <code>DeleteScheduledActionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ncloud.autoscaling.model/DeleteScheduledActionRequest} obj Optional instance to populate.
   * @return {module:com.ncloud.autoscaling.model/DeleteScheduledActionRequest} The populated <code>DeleteScheduledActionRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('autoScalingGroupName')) {
        obj['autoScalingGroupName'] = ApiClient.convertToType(data['autoScalingGroupName'], 'String');
      }
      if (data.hasOwnProperty('scheduledActionName')) {
        obj['scheduledActionName'] = ApiClient.convertToType(data['scheduledActionName'], 'String');
      }
      if (data.hasOwnProperty('responseFormatType')) {
        obj['responseFormatType'] = ApiClient.convertToType(data['responseFormatType'], 'String');
      }
    }
    return obj;
  }

  /**
   * 오토스케일링그룹명
   * @member {String} autoScalingGroupName
   */
  exports.prototype['autoScalingGroupName'] = undefined;
  /**
   * 스케쥴액션명
   * @member {String} scheduledActionName
   */
  exports.prototype['scheduledActionName'] = undefined;
  /**
   * responseFormatType {json, xml}
   * @member {String} responseFormatType
   */
  exports.prototype['responseFormatType'] = undefined;



  return exports;
}));

