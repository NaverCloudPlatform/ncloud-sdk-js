(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory();
  } else {
    if (!root.EnvironmentCredentials) {
      root.EnvironmentCredentials = {};
    }
    root.EnvironmentCredentials = factory();
  }
}(this, function () {
  'use strict';
  var exports = function () {
    const envPrefix = 'NCLOUD_';
    this.loaded = false;
    this.credentials = null;
    this.providerName = 'EnvironmentCredentials';
    this.loadCredentials = function (cb) {
      if (!this.needsToLoadCredentials()) {
        cb(null, this.credentials);
        return;
      }
      if (!process || !process.env) {
        cb(new Error('No process info or environment variables available'));
        return;
      }
      var accessKey = process.env[envPrefix + 'ACCESS_KEY_ID'];
      if (!accessKey) {
        accessKey = process.env[envPrefix + 'ACCESS_KEY'];
      }
      if (!accessKey || accessKey === '') {
        cb(new Error('Variable ' + envPrefix + 'ACCESS_KEY_ID' + ' not set.'));
        return;
      }

      var secretKey = process.env[envPrefix + 'SECRET_ACCESS_KEY'];
      if (!secretKey || secretKey === '') {
        secretKey = process.env[envPrefix + 'SECRET_KEY'];
      }
      if (!secretKey) {
        cb(new Error('Variable ' + envPrefix + 'SECRET_ACCESS_KEY' + ' not set.'));
        return;
      }

      this.loaded = true;
      this.credentials = {
        'accessKey': accessKey,
        'secretKey': secretKey,
        'provider': this,
      }
      cb(null, this.credentials);
    }

    this.needsToLoadCredentials = function () {
      return !this.loaded || !this.credentials;
    }
  };

  return exports;
}));
