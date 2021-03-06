/*
* server
* <br/>https://ncloud.apigw.ntruss.com/server/v2
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
    if (!root.Server) {
      root.Server = {};
    }
    root.Server.GetServerInstanceListRequest = factory(root.Server.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetServerInstanceListRequest model module.
   * @module model/GetServerInstanceListRequest
   * @version 1.4.8
   */

  /**
   * Constructs a new <code>GetServerInstanceListRequest</code>.
   * @alias module:model/GetServerInstanceListRequest
   * @class
   */
  var exports = function() {
    var _this = this;

















  };

  /**
   * Constructs a <code>GetServerInstanceListRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetServerInstanceListRequest} obj Optional instance to populate.
   * @return {module:model/GetServerInstanceListRequest} The populated <code>GetServerInstanceListRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('serverInstanceNoList')) {
        obj['serverInstanceNoList'] = ApiClient.convertToType(data['serverInstanceNoList'], ['String']);
      }
      if (data.hasOwnProperty('searchFilterName')) {
        obj['searchFilterName'] = ApiClient.convertToType(data['searchFilterName'], 'String');
      }
      if (data.hasOwnProperty('searchFilterValue')) {
        obj['searchFilterValue'] = ApiClient.convertToType(data['searchFilterValue'], 'String');
      }
      if (data.hasOwnProperty('pageNo')) {
        obj['pageNo'] = ApiClient.convertToType(data['pageNo'], 'Number');
      }
      if (data.hasOwnProperty('pageSize')) {
        obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
      }
      if (data.hasOwnProperty('serverInstanceStatusCode')) {
        obj['serverInstanceStatusCode'] = ApiClient.convertToType(data['serverInstanceStatusCode'], 'String');
      }
      if (data.hasOwnProperty('internetLineTypeCode')) {
        obj['internetLineTypeCode'] = ApiClient.convertToType(data['internetLineTypeCode'], 'String');
      }
      if (data.hasOwnProperty('regionNo')) {
        obj['regionNo'] = ApiClient.convertToType(data['regionNo'], 'String');
      }
      if (data.hasOwnProperty('zoneNo')) {
        obj['zoneNo'] = ApiClient.convertToType(data['zoneNo'], 'String');
      }
      if (data.hasOwnProperty('baseBlockStorageDiskTypeCode')) {
        obj['baseBlockStorageDiskTypeCode'] = ApiClient.convertToType(data['baseBlockStorageDiskTypeCode'], 'String');
      }
      if (data.hasOwnProperty('baseBlockStorageDiskDetailTypeCode')) {
        obj['baseBlockStorageDiskDetailTypeCode'] = ApiClient.convertToType(data['baseBlockStorageDiskDetailTypeCode'], 'String');
      }
      if (data.hasOwnProperty('sortedBy')) {
        obj['sortedBy'] = ApiClient.convertToType(data['sortedBy'], 'String');
      }
      if (data.hasOwnProperty('sortingOrder')) {
        obj['sortingOrder'] = ApiClient.convertToType(data['sortingOrder'], 'String');
      }
      if (data.hasOwnProperty('serverInstanceTypeCodeList')) {
        obj['serverInstanceTypeCodeList'] = ApiClient.convertToType(data['serverInstanceTypeCodeList'], ['String']);
      }
      if (data.hasOwnProperty('tagKeyList')) {
        obj['tagKeyList'] = ApiClient.convertToType(data['tagKeyList'], ['String']);
      }
      if (data.hasOwnProperty('tagValueList')) {
        obj['tagValueList'] = ApiClient.convertToType(data['tagValueList'], ['String']);
      }
    }
    return obj;
  }

  /**
   * 서버인스턴스번호리스트
   * @member {Array.<String>} serverInstanceNoList
   */
  exports.prototype['serverInstanceNoList'] = undefined;
  /**
   * 검색필터명
   * @member {String} searchFilterName
   */
  exports.prototype['searchFilterName'] = undefined;
  /**
   * 검색필터값
   * @member {String} searchFilterValue
   */
  exports.prototype['searchFilterValue'] = undefined;
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
   * 서버인스턴스상태코드
   * @member {String} serverInstanceStatusCode
   */
  exports.prototype['serverInstanceStatusCode'] = undefined;
  /**
   * 인터넷라인구분코드
   * @member {String} internetLineTypeCode
   */
  exports.prototype['internetLineTypeCode'] = undefined;
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
  /**
   * 서버디스크유형코드
   * @member {String} baseBlockStorageDiskTypeCode
   */
  exports.prototype['baseBlockStorageDiskTypeCode'] = undefined;
  /**
   * 서버디스크상세유형코드
   * @member {String} baseBlockStorageDiskDetailTypeCode
   */
  exports.prototype['baseBlockStorageDiskDetailTypeCode'] = undefined;
  /**
   * 소팅대상
   * @member {String} sortedBy
   */
  exports.prototype['sortedBy'] = undefined;
  /**
   * 소팅순서
   * @member {String} sortingOrder
   */
  exports.prototype['sortingOrder'] = undefined;
  /**
   * 서비인스턴스구분코드리스트
   * @member {Array.<String>} serverInstanceTypeCodeList
   */
  exports.prototype['serverInstanceTypeCodeList'] = undefined;
  /**
   * 태그키리스트
   * @member {Array.<String>} tagKeyList
   */
  exports.prototype['tagKeyList'] = undefined;
  /**
   * 태그값리스트
   * @member {Array.<String>} tagValueList
   */
  exports.prototype['tagValueList'] = undefined;



  return exports;
}));


