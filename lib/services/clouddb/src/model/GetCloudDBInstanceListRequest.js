/*
* clouddb
* Cloud DB<br/>https://ncloud.apigw.ntruss.com/clouddb/v2
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
    if (!root.Clouddb) {
      root.Clouddb = {};
    }
    root.Clouddb.GetCloudDBInstanceListRequest = factory(root.Clouddb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCloudDBInstanceListRequest model module.
   * @module model/GetCloudDBInstanceListRequest
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>GetCloudDBInstanceListRequest</code>.
   * @alias module:model/GetCloudDBInstanceListRequest
   * @class
   * @param dbKindCode {String} DB유형코드
   */
  var exports = function(dbKindCode) {
    var _this = this;




    _this['dbKindCode'] = dbKindCode;




  };

  /**
   * Constructs a <code>GetCloudDBInstanceListRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCloudDBInstanceListRequest} obj Optional instance to populate.
   * @return {module:model/GetCloudDBInstanceListRequest} The populated <code>GetCloudDBInstanceListRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cloudDBInstanceNoList')) {
        obj['cloudDBInstanceNoList'] = ApiClient.convertToType(data['cloudDBInstanceNoList'], ['String']);
      }
      if (data.hasOwnProperty('pageNo')) {
        obj['pageNo'] = ApiClient.convertToType(data['pageNo'], 'Number');
      }
      if (data.hasOwnProperty('pageSize')) {
        obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
      }
      if (data.hasOwnProperty('dbKindCode')) {
        obj['dbKindCode'] = ApiClient.convertToType(data['dbKindCode'], 'String');
      }
      if (data.hasOwnProperty('searchFilterName')) {
        obj['searchFilterName'] = ApiClient.convertToType(data['searchFilterName'], 'String');
      }
      if (data.hasOwnProperty('searchFilterValue')) {
        obj['searchFilterValue'] = ApiClient.convertToType(data['searchFilterValue'], 'String');
      }
      if (data.hasOwnProperty('regionNo')) {
        obj['regionNo'] = ApiClient.convertToType(data['regionNo'], 'String');
      }
      if (data.hasOwnProperty('zoneNo')) {
        obj['zoneNo'] = ApiClient.convertToType(data['zoneNo'], 'String');
      }
    }
    return obj;
  }

  /**
   * CloudDB인스턴스번호리스트
   * @member {Array.<String>} cloudDBInstanceNoList
   */
  exports.prototype['cloudDBInstanceNoList'] = undefined;
  /**
   * 페이지번호
   * @member {Number} pageNo
   */
  exports.prototype['pageNo'] = undefined;
  /**
   * 페이지사이즈
   * @member {Number} pageSize
   */
  exports.prototype['pageSize'] = undefined;
  /**
   * DB유형코드
   * @member {String} dbKindCode
   */
  exports.prototype['dbKindCode'] = undefined;
  /**
   * 검색필터이름
   * @member {String} searchFilterName
   */
  exports.prototype['searchFilterName'] = undefined;
  /**
   * 검색필터값
   * @member {String} searchFilterValue
   */
  exports.prototype['searchFilterValue'] = undefined;
  /**
   * 리전번호
   * @member {String} regionNo
   */
  exports.prototype['regionNo'] = undefined;
  /**
   * zone번호
   * @member {String} zoneNo
   */
  exports.prototype['zoneNo'] = undefined;



  return exports;
}));


