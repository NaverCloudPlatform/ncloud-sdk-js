/*
* cdn
* <br/>https://ncloud.apigw.ntruss.com/cdn/v2
*
* OpenAPI spec version: 2018-11-13T06:29:10Z
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
    if (!root.Cdn) {
      root.Cdn = {};
    }
    root.Cdn.GetCdnPlusPurgeHistoryListRequest = factory(root.Cdn.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCdnPlusPurgeHistoryListRequest model module.
   * @module model/GetCdnPlusPurgeHistoryListRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GetCdnPlusPurgeHistoryListRequest</code>.
   * @alias module:model/GetCdnPlusPurgeHistoryListRequest
   * @class
   * @param cdnInstanceNo {String} CDN인스턴스번호
   */
  var exports = function(cdnInstanceNo) {
    var _this = this;

    _this['cdnInstanceNo'] = cdnInstanceNo;

  };

  /**
   * Constructs a <code>GetCdnPlusPurgeHistoryListRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCdnPlusPurgeHistoryListRequest} obj Optional instance to populate.
   * @return {module:model/GetCdnPlusPurgeHistoryListRequest} The populated <code>GetCdnPlusPurgeHistoryListRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cdnInstanceNo')) {
        obj['cdnInstanceNo'] = ApiClient.convertToType(data['cdnInstanceNo'], 'String');
      }
      if (data.hasOwnProperty('purgeIdList')) {
        obj['purgeIdList'] = ApiClient.convertToType(data['purgeIdList'], ['String']);
      }
    }
    return obj;
  }

  /**
   * CDN인스턴스번호
   * @member {String} cdnInstanceNo
   */
  exports.prototype['cdnInstanceNo'] = undefined;
  /**
   * 퍼지ID리스트
   * @member {Array.<String>} purgeIdList
   */
  exports.prototype['purgeIdList'] = undefined;



  return exports;
}));

