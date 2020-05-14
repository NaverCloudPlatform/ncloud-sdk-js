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
    root.Cdn.CdnPlusServiceDomain = factory(root.Cdn.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CdnPlusServiceDomain model module.
   * @module model/CdnPlusServiceDomain
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CdnPlusServiceDomain</code>.
   * @alias module:model/CdnPlusServiceDomain
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>CdnPlusServiceDomain</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CdnPlusServiceDomain} obj Optional instance to populate.
   * @return {module:model/CdnPlusServiceDomain} The populated <code>CdnPlusServiceDomain</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('domainId')) {
        obj['domainId'] = ApiClient.convertToType(data['domainId'], 'String');
      }
      if (data.hasOwnProperty('serviceDomainTypeCode')) {
        obj['serviceDomainTypeCode'] = ApiClient.convertToType(data['serviceDomainTypeCode'], 'String');
      }
      if (data.hasOwnProperty('protocolTypeCode')) {
        obj['protocolTypeCode'] = ApiClient.convertToType(data['protocolTypeCode'], 'String');
      }
      if (data.hasOwnProperty('defaultDomainName')) {
        obj['defaultDomainName'] = ApiClient.convertToType(data['defaultDomainName'], 'String');
      }
      if (data.hasOwnProperty('userDomainName')) {
        obj['userDomainName'] = ApiClient.convertToType(data['userDomainName'], 'String');
      }
    }
    return obj;
  }

  /**
   * 도메인ID
   * @member {String} domainId
   */
  exports.prototype['domainId'] = undefined;
  /**
   * 서비스도메인구분코드
   * @member {String} serviceDomainTypeCode
   */
  exports.prototype['serviceDomainTypeCode'] = undefined;
  /**
   * 프로토콜구분코드
   * @member {String} protocolTypeCode
   */
  exports.prototype['protocolTypeCode'] = undefined;
  /**
   * 디폴트도메인이름
   * @member {String} defaultDomainName
   */
  exports.prototype['defaultDomainName'] = undefined;
  /**
   * 유저도메인이름
   * @member {String} userDomainName
   */
  exports.prototype['userDomainName'] = undefined;



  return exports;
}));

