// @ts-check
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['os', 'fs', 'path', 'ini', 'credentials/CredentialProviderChain'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('os'), require('fs'), require('path'), require('ini'), require('./credentials/CredentialProviderChain'));
  } else {
    if (!root.ncloud) {
      root.ncloud = {};
    }
    root.ncloud = factory(require('os'), require('fs'), require('path'), require('ini'), require('./credentials/CredentialProviderChain'));
  }
}(this, function (os, fs, path, ini, CredentialProviderChain) {
  this.apiKey = null;
  this.credentials = null;
  var exports = function (arg) {
    const options = arg || {};
    const { accessKey, secretKey } = options;
    if (accessKey && secretKey) {
      this.apiKey = {
        "accessKey": accessKey,
        "secretKey": secretKey,
      }
    }

    this.init = function(cb) {
      new CredentialProviderChain().retrieveCredentials(function (err, creds) {
        if (err) {
          cb(err);
          return;
        }
        cb(null, creds);
      });
    }

  };

  exports.prototype.getConfigureFilePath = function() {
    return path.join(
      os.homedir(),
      '.ncloud',
      'configure'
    );
  }

  exports.prototype.readConfigureFile= function() {
    const configureFile = this.getConfigureFilePath();

    if (!fs.existsSync(configureFile)) {
      console.error('Please check configure file (*inx : $HOME/.ncloud/configure , Windows : %HOME%₩.ncloud₩configure)');
      return {};
    }
    return ini.parse(fs.readFileSync(this.getConfigureFilePath(), 'utf-8'));
  }

  exports.prototype.keys = function () {
    if (this.apiKey) {
      return this.apiKey;
    }
    const config = this.readConfigureFile();
    return {
      accessKey: config.ncloud_access_key_id,
      secretKey: config.ncloud_secret_access_key,
    };
  }

  return exports;
}));
