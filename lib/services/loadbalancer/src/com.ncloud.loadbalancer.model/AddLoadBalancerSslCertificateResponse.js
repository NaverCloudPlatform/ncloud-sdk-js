/*
* loadbalancer
* <br/>https://ncloud.apigw.ntruss.com/loadbalancer/v2
*
* OpenAPI spec version: 2018-06-21T02:19:18Z
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
    define(['ApiClient', 'com.ncloud.loadbalancer.model/SslCertificate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SslCertificate'));
  } else {
    // Browser globals (root is window)
    if (!root.Loadbalancer) {
      root.Loadbalancer = {};
    }
    root.Loadbalancer.AddLoadBalancerSslCertificateResponse = factory(root.Loadbalancer.ApiClient, root.Loadbalancer.SslCertificate);
  }
}(this, function(ApiClient, SslCertificate) {
  'use strict';




  /**
   * The AddLoadBalancerSslCertificateResponse model module.
   * @module com.ncloud.loadbalancer.model/AddLoadBalancerSslCertificateResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AddLoadBalancerSslCertificateResponse</code>.
   * @alias module:com.ncloud.loadbalancer.model/AddLoadBalancerSslCertificateResponse
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>AddLoadBalancerSslCertificateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ncloud.loadbalancer.model/AddLoadBalancerSslCertificateResponse} obj Optional instance to populate.
   * @return {module:com.ncloud.loadbalancer.model/AddLoadBalancerSslCertificateResponse} The populated <code>AddLoadBalancerSslCertificateResponse</code> instance.
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
      if (data.hasOwnProperty('sslCertificateList')) {
        obj['sslCertificateList'] = ApiClient.convertToType(data['sslCertificateList'], [SslCertificate]);
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
   * @member {Array.<module:com.ncloud.loadbalancer.model/SslCertificate>} sslCertificateList
   */
  exports.prototype['sslCertificateList'] = undefined;



  return exports;
}));

