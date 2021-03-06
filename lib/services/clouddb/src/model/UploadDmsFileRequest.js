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
    root.Clouddb.UploadDmsFileRequest = factory(root.Clouddb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UploadDmsFileRequest model module.
   * @module model/UploadDmsFileRequest
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>UploadDmsFileRequest</code>.
   * @alias module:model/UploadDmsFileRequest
   * @class
   * @param cloudDBInstanceNo {String} 클라우드DB인스턴스번호
   * @param fileName {String} 파일이름
   */
  var exports = function(cloudDBInstanceNo, fileName) {
    var _this = this;

    _this['cloudDBInstanceNo'] = cloudDBInstanceNo;
    _this['fileName'] = fileName;
  };

  /**
   * Constructs a <code>UploadDmsFileRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UploadDmsFileRequest} obj Optional instance to populate.
   * @return {module:model/UploadDmsFileRequest} The populated <code>UploadDmsFileRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cloudDBInstanceNo')) {
        obj['cloudDBInstanceNo'] = ApiClient.convertToType(data['cloudDBInstanceNo'], 'String');
      }
      if (data.hasOwnProperty('fileName')) {
        obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
      }
    }
    return obj;
  }

  /**
   * 클라우드DB인스턴스번호
   * @member {String} cloudDBInstanceNo
   */
  exports.prototype['cloudDBInstanceNo'] = undefined;
  /**
   * 파일이름
   * @member {String} fileName
   */
  exports.prototype['fileName'] = undefined;



  return exports;
}));


