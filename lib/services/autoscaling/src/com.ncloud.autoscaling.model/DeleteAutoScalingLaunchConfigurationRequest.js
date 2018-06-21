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
    root.Autoscaling.DeleteAutoScalingLaunchConfigurationRequest = factory(root.Autoscaling.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeleteAutoScalingLaunchConfigurationRequest model module.
   * @module com.ncloud.autoscaling.model/DeleteAutoScalingLaunchConfigurationRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DeleteAutoScalingLaunchConfigurationRequest</code>.
   * @alias module:com.ncloud.autoscaling.model/DeleteAutoScalingLaunchConfigurationRequest
   * @class
   * @param launchConfigurationName {String} 론치설정명
   */
  var exports = function(launchConfigurationName) {
    var _this = this;

    _this['launchConfigurationName'] = launchConfigurationName;

  };

  /**
   * Constructs a <code>DeleteAutoScalingLaunchConfigurationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ncloud.autoscaling.model/DeleteAutoScalingLaunchConfigurationRequest} obj Optional instance to populate.
   * @return {module:com.ncloud.autoscaling.model/DeleteAutoScalingLaunchConfigurationRequest} The populated <code>DeleteAutoScalingLaunchConfigurationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('launchConfigurationName')) {
        obj['launchConfigurationName'] = ApiClient.convertToType(data['launchConfigurationName'], 'String');
      }
      if (data.hasOwnProperty('responseFormatType')) {
        obj['responseFormatType'] = ApiClient.convertToType(data['responseFormatType'], 'String');
      }
    }
    return obj;
  }

  /**
   * 론치설정명
   * @member {String} launchConfigurationName
   */
  exports.prototype['launchConfigurationName'] = undefined;
  /**
   * responseFormatType {json, xml}
   * @member {String} responseFormatType
   */
  exports.prototype['responseFormatType'] = undefined;



  return exports;
}));

