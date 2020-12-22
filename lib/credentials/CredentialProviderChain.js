(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['lib/credentials/EnvironmentCredentials', 'lib/credentials/ConfigFileCredentials', 'lib/credentials/ServerRoleCredentials'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./EnvironmentCredentials'), require('./ConfigFileCredentials'), require('./ServerRoleCredentials'));
  } else {
    if (!root.CredentialProviderChain) {
      root.CredentialProviderChain = {};
    }
    root.CredentialProviderChain = factory(require('./EnvironmentCredentials'), require('./ConfigFileCredentials'), require('./ServerRoleCredentials'));
  }
}(this, function (EnvironmentCredentials, ConfigFileCredentials, ServerRoleCredentials) {

  var exports = function () {
    this.defaultCredentialsProvider = [
      new EnvironmentCredentials(),
      new ConfigFileCredentials(),
      new ServerRoleCredentials(),
    ];

    this.retrieveCredentials = function (cb) {
      this.retrieve(this.defaultCredentialsProvider, cb);
    }

    this.retrieve = function (providers, cb) {
      let loaded = false;
      for (let i = 0; i < providers.length; i++) {
        try {
          const idx = i;
          const provider = providers[i];
          provider.loadCredentials(function (err, creds) {
            if (!err && creds) {
              cb(null, creds);
              loaded = true;
            }
            if (err && idx + 1 === providers.length) {
              cb(err, null);
            }
          });
        } catch (e) {
        }
        if (loaded) {
          break;
        }
      }
    }
  };

  return exports;
}));