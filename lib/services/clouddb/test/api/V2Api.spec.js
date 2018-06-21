/*
* clouddb
* Cloud DB<br/>https://ncloud.apigw.ntruss.com/clouddb/v2
*
* OpenAPI spec version: 2018-06-21T02:28:05Z
*
* NBP corp.
*
* NOTE: This class is auto generated by the swagger code generator program.
* https://github.com/swagger-api/swagger-codegen.git
* Do not edit the class manually.
*/

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    factory(require('expect.js'), require('../../src/index'));
  } else {
    factory(root.expect, root.Clouddb);
  }
}(this, function(expect, Clouddb) {
  'use strict';

  var client = new Clouddb.ApiClient({
    apiKey: 'your api key',
    accessKey: 'your access key',
    secretKey: 'your secret key',
  });
  var instance = new Clouddb.V2Api(client);

  describe('V2Api', function() {
    describe('createCloudDBInstance', function() {
      it('should call createCloudDBInstance successfully', function(done) {
        //uncomment below and update the code to test createCloudDBInstance
        //instance.createCloudDBInstance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('deleteCloudDBServerInstance', function() {
      it('should call deleteCloudDBServerInstance successfully', function(done) {
        //uncomment below and update the code to test deleteCloudDBServerInstance
        //instance.deleteCloudDBServerInstance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('getCloudDBConfigGroupList', function() {
      it('should call getCloudDBConfigGroupList successfully', function(done) {
        //uncomment below and update the code to test getCloudDBConfigGroupList
        //instance.getCloudDBConfigGroupList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('getCloudDBImageProductList', function() {
      it('should call getCloudDBImageProductList successfully', function(done) {
        //uncomment below and update the code to test getCloudDBImageProductList
        //instance.getCloudDBImageProductList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('getCloudDBInstanceList', function() {
      it('should call getCloudDBInstanceList successfully', function(done) {
        //uncomment below and update the code to test getCloudDBInstanceList
        //instance.getCloudDBInstanceList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('getCloudDBProductList', function() {
      it('should call getCloudDBProductList successfully', function(done) {
        //uncomment below and update the code to test getCloudDBProductList
        //instance.getCloudDBProductList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('rebootCloudDBServerInstance', function() {
      it('should call rebootCloudDBServerInstance successfully', function(done) {
        //uncomment below and update the code to test rebootCloudDBServerInstance
        //instance.rebootCloudDBServerInstance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
  });

}));