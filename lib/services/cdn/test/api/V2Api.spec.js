/*
* cdn
* <br/>https://ncloud.apigw.ntruss.com/cdn/v2
*
* OpenAPI spec version: 2018-06-21T02:27:10Z
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
    factory(root.expect, root.Cdn);
  }
}(this, function(expect, Cdn) {
  'use strict';

  var client = new Cdn.ApiClient({
    apiKey: 'your api key',
    accessKey: 'your access key',
    secretKey: 'your secret key',
  });
  var instance = new Cdn.V2Api(client);

  describe('V2Api', function() {
    describe('getCdnPlusInstanceList', function() {
      it('should call getCdnPlusInstanceList successfully', function(done) {
        //uncomment below and update the code to test getCdnPlusInstanceList
        //instance.getCdnPlusInstanceList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('getCdnPlusPurgeHistoryList', function() {
      it('should call getCdnPlusPurgeHistoryList successfully', function(done) {
        //uncomment below and update the code to test getCdnPlusPurgeHistoryList
        //instance.getCdnPlusPurgeHistoryList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('getGlobalCdnInstanceList', function() {
      it('should call getGlobalCdnInstanceList successfully', function(done) {
        //uncomment below and update the code to test getGlobalCdnInstanceList
        //instance.getGlobalCdnInstanceList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('getGlobalCdnPurgeHistoryList', function() {
      it('should call getGlobalCdnPurgeHistoryList successfully', function(done) {
        //uncomment below and update the code to test getGlobalCdnPurgeHistoryList
        //instance.getGlobalCdnPurgeHistoryList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('requestCdnPlusPurge', function() {
      it('should call requestCdnPlusPurge successfully', function(done) {
        //uncomment below and update the code to test requestCdnPlusPurge
        //instance.requestCdnPlusPurge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('requestGlobalCdnPurge', function() {
      it('should call requestGlobalCdnPurge successfully', function(done) {
        //uncomment below and update the code to test requestGlobalCdnPurge
        //instance.requestGlobalCdnPurge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
  });

}));