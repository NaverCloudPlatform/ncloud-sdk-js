(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['superagent', 'querystring',], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('superagent'), require('querystring'));
  } else {
    if (!root.ServerRoleCredentials) {
      root.ServerRoleCredentials = {};
    }
    root.ServerRoleCredentials = factory(require('superagent'), require('querystring'));
  }
}(this, function (superagent, querystring) {
  'use strict';
  var exports = function () {
    this.loaded = false;
    this.providerName = 'ServerRoleCredentials';
    this.credentials = null;

    var metadataEndpoint = 'http://169.254.169.254'
    const credentialsUrl = '/latest/meta-data/iam/security-credentials/';
    const metadataTimeout = 3000;

    if (process && process.env && process.env['NCLOUD_METADATA_ENDPOINT']) {
      metadataEndpoint = process.env['NCLOUD_METADATA_ENDPOINT'];
    }
    this.loadCredentials = function (cb) {
      if (!this.needsToLoadCredentials()) {
        return this.credentials;
      }
      const _this = this;
      this.fetchCredentials(function(err, creds) {
        if (err) {
          cb(err);
          return;
        }
        _this.loaded = true;
        _this.credentials = creds;
        cb(null, creds);
      });

    }

    this.needsToLoadCredentials = function () {
      return !this.loaded || !this.valid() || this.expired();
    }

    this.valid = function () {
      return this.credentials['AccessKeyId'] && this.credentials['SecretAccessKey'] && this.credentials['Expiration'];
    }

    this.expired = function () {
      const currentTime = new Date().getTime();
      const expireTime = new Date(this.credentials['Expiration']);
      return expireTime < currentTime;
    }

    this.fetchCredentials = function (cb) {
      superagent.get(metadataEndpoint + credentialsUrl).timeout({ 'response': metadataTimeout })
        .catch(e => {
          cb(new Error('failed to read server role from metadata api'));
        })
        .then(res => {
          if (!res || !res.text) {
            cb(new Error('failed to read server role from metadata api'));
            return;
          }
          const roleId = res.text;
          superagent.get(metadataEndpoint + credentialsUrl + roleId)
            .set('Accept', 'application/json')
            .timeout({ 'response': metadataTimeout })
            .then(credsRes => {
              if (!credsRes) {
                cb(new Error(`failed to get ${roleId} server role credentials`));
                return;
              }
              var data = credsRes.body;
              if (data == null || (typeof data === 'object' && typeof data.length === 'undefined' && !Object.keys(data).length)) {
                data = JSON.parse(credsRes.text);
              }
              if (!data) {
                cb(new Error(`failed to get ${roleId} server role credentials`));
                return;
              }
              const creds = data;
              if (!creds['AccessKeyId'] || !creds['SecretAccessKey'] || !creds['Expiration']) {
                throw new Error(`failed to decode ${roleId} server role credentials`)
              }
              cb(null, {
                'accessKey': creds['AccessKeyId'],
                'secretKey': creds['SecretAccessKey'],
                'expiration': creds['Expiration'],
                'provider': this,
              })
            })
            .catch(e => {
              cb(e);
            });
        });

    }

  };


  return exports;
}));

