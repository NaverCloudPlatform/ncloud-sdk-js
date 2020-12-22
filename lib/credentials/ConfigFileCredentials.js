(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['os', 'fs', 'path', 'ini'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('os'), require('fs'), require('path'), require('ini'));
  } else {
    if (!root.ConfigFileCredentials) {
      root.ConfigFileCredentials = {};
    }
    root.ConfigFileCredentials = factory(require('os'), require('fs'), require('path'), require('ini'));
  }
}(this, function (os, fs, path, ini) {
  'use strict';
  var exports = function () {
    this.loaded = false;
    this.providerName = 'ConfigFileCredentials';
    this.credentials = null;
    this.configureFilePath = path.join(
      os.homedir(),
      '.ncloud',
      'configure'
    );
    this.loadCredentials = function (cb) {
      if (!fs.existsSync(this.configureFilePath)) {
        cb(new Error('Please check configure file (*inx : $HOME/.ncloud/configure , Windows : %HOME%₩.ncloud₩configure)'));
        return;
      }
      const config = ini.parse(fs.readFileSync(this.configureFilePath, 'utf-8'));
      if (!config['ncloud_access_key_id'] || !config['ncloud_secret_access_key']) {
        cb(new Error(`Failed to load credentials from the ${this.configureFilePath} file`));
        return;
      }
      this.loaded = true;
      this.credentials = {
        accessKey: config.ncloud_access_key_id,
        secretKey: config.ncloud_secret_access_key,
        'provider': this,
      };

      cb(null, this.credentials);
    }

    this.needsToLoadCredentials = function () {
      return !this.loaded || !this.credentials;
    }
  };

  return exports;
}));
