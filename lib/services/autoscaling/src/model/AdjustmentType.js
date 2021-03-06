/*
* autoscaling
* <br/>https://ncloud.apigw.ntruss.com/autoscaling/v2
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
    root.Autoscaling.AdjustmentType = factory(root.Autoscaling.ApiClient, root.Autoscaling.CommonCode);
  }
}(this, function(ApiClient, CommonCode) {
  'use strict';




  /**
   * The AdjustmentType model module.
   * @module model/AdjustmentType
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>AdjustmentType</code>.
   * @alias module:model/AdjustmentType
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AdjustmentType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdjustmentType} obj Optional instance to populate.
   * @return {module:model/AdjustmentType} The populated <code>AdjustmentType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('adjustmentType')) {
        obj['adjustmentType'] = CommonCode.constructFromObject(data['adjustmentType']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CommonCode} adjustmentType
   */
  exports.prototype['adjustmentType'] = undefined;



  return exports;
}));


