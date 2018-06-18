// @ts-check
const os = require('os');
const fs = require('fs');
const path = require('path');
const ini = require('ini');

function ncloud(arg) {
  const options = arg || {};
  const { apiKey, accessKey, secretKey } = options;
  this.apiKey = apiKey || '';
  this.accessKey = accessKey || '';
  this.secretKey = secretKey || '';
}

ncloud.prototype = {
  getConfigureFilePath: function getConfigureFilePath() {
    return path.join(
      os.homedir(),
      '.ncloud',
      'configure',
    );
  },

  readConfigureFile: function readConfigureFile() {
    const configureFile = this.getConfigureFilePath();

    if (!fs.existsSync(configureFile)) {
      console.error('Please check configure file (*inx : $HOME/.ncloud/configure , Windows : %HOME%₩.ncloud₩configure)');
      return {};
    }

    return ini.parse(fs.readFileSync(this.getConfigureFilePath(), 'utf-8'));
  },

  keys: function keys() {
    if (this.apiKey !== '' && this.accessKey !== '' && this.secretKey !== '') {
      return {
        apiKey: this.apiKey,
        accessKey: this.accessKey,
        secretKey: this.secretKey,
      };
    }

    const config = this.readConfigureFile();

    return {
      apiKey: config.ncloud_api_key,
      accessKey: config.ncloud_access_key_id,
      secretKey: config.ncloud_secret_access_key,
    };
  },

};

module.exports = ncloud;
