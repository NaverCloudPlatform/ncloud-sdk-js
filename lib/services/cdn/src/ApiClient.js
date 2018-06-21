/*
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['superagent', 'querystring', 'signature'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('superagent'), require('querystring'), require('./signature'));
  } else {
    if (!root.Server) {
      root.Server = {};
    }
    root.Server.ApiClient = factory(root.superagent, root.querystring);
  }
}(this, function(superagent, querystring, signature) {
  'use strict';

  var exports = function(apiKey) {
    this.basePath = 'https://ncloud.apigw.ntruss.com/cdn/v2'.replace(/\/+$/, '');

    this.authentications = {
      'x-ncp-iam': {type: 'apiKey', 'in': 'header', name: 'x-ncp-iam', apiKey},
    };
    this.defaultHeaders = {};
    this.timeout = 60000;
    this.cache = true;
    this.enableCookies = false;

    if (typeof window === 'undefined') {
      this.agent = new superagent.agent();
    }

    this.requestAgent = null;
    this.apiKey = apiKey;
  };

  exports.prototype.paramToString = function(param) {
    if (param == undefined || param == null) {
      return '';
    }
    if (param instanceof Date) {
      return param.toJSON();
    }
    return param.toString();
  };

  exports.prototype.buildUrl = function(path, pathParams) {
    if (!path.match(/^\//)) {
      path = '/' + path;
    }
    var url = this.basePath + path;
    var _this = this;
    url = url.replace(/\{([\w-]+)\}/g, function(fullMatch, key) {
      var value;
      if (pathParams.hasOwnProperty(key)) {
        value = _this.paramToString(pathParams[key]);
      } else {
        value = fullMatch;
      }
      return encodeURIComponent(value);
    });
    return url;
  };

  exports.prototype.isJsonMime = function(contentType) {
    return Boolean(contentType != null && contentType.match(/^application\/json(;.*)?$/i));
  };

  exports.prototype.jsonPreferredMime = function(contentTypes) {
    for (var i = 0; i < contentTypes.length; i++) {
      if (this.isJsonMime(contentTypes[i])) {
        return contentTypes[i];
      }
    }
    return contentTypes[0];
  };

  exports.prototype.isFileParam = function(param) {
    if (typeof require === 'function') {
      var fs;
      try {
        fs = require('fs');
      } catch (err) {}
      if (fs && fs.ReadStream && param instanceof fs.ReadStream) {
        return true;
      }
    }

    if (typeof Buffer === 'function' && param instanceof Buffer) {
      return true;
    }

    if (typeof Blob === 'function' && param instanceof Blob) {
      return true;
    }

    if (typeof File === 'function' && param instanceof File) {
      return true;
    }
    return false;
  };

  exports.prototype.normalizeParams   = function(params) {
    var newParams = {};
    for (var key in params) {
      if (params.hasOwnProperty(key) && params[key] != undefined && params[key] != null) {
        var value = params[key];

        if (this.isFileParam(value)) {
          newParams[key] = value;
        } else if (Array.isArray(value)) {
          for (var idx in value) {
            newParams[`${key}.${parseInt(idx)+1}`] = value[idx];
          }
        } else if (key === 'userData') {
          newParams[key] = Buffer.from(value).toString('base64');
        } else {
          newParams[key] = this.paramToString(value);
        }
      }
    }
    return newParams;
  };​

  exports.CollectionFormatEnum = {
    CSV: ',',
    SSV: ' ',
    TSV: '\t',
    PIPES: '|',
    MULTI: 'multi'
  };

  exports.prototype.buildCollectionParam = function buildCollectionParam(param, collectionFormat) {
    if (param == null) {
      return null;
    }
    switch (collectionFormat) {
      case 'csv':
        return param.map(this.paramToString).join(',');
      case 'ssv':
        return param.map(this.paramToString).join(' ');
      case 'tsv':
        return param.map(this.paramToString).join('\t');
      case 'pipes':
        return param.map(this.paramToString).join('|');
      case 'multi':
        return param.map(this.paramToString);
      default:
        throw new Error('Unknown collection format: ' + collectionFormat);
    }
  };

  exports.prototype.applyAuthToRequest = function(request, authNames) {
    var _this = this;
    authNames.forEach(function(authName) {
      var auth = _this.authentications[authName];
      var apiKey = _this.apiKey;

      switch (auth.type) {
        case 'basic':
          if (auth.username || auth.password) {
            request.auth(auth.username || '', auth.password || '');
          }
          break;
        case 'apiKey':
          if (auth.apiKey) {
            var timestamp = Date.now();

            var data = {
              'x-ncp-apigw-timestamp': timestamp,
              'x-ncp-apigw-api-key': apiKey.apiKey,
              'x-ncp-iam-access-key': apiKey.accessKey,
              'x-ncp-apigw-signature-v1': signature(request, timestamp, apiKey.apiKey, apiKey.accessKey, apiKey.secretKey)
            };

            if (auth['in'] === 'header') {
              request.set(data);
            } else {
              request.query(data);
            }
          }
          break;
        case 'oauth2':
          if (auth.accessToken) {
            request.set({'Authorization': 'Bearer ' + auth.accessToken});
          }
          break;
        default:
          throw new Error('Unknown authentication type: ' + auth.type);
      }
    });
  };

  exports.prototype.deserialize = function deserialize(response, returnType) {
    if (response == null || returnType == null || response.status == 204) {
      return null;
    }

    var data = response.body;
    if (data == null || (typeof data === 'object' && typeof data.length === 'undefined' && !Object.keys(data).length)) {
      data = response.text;
    }

    if (typeof data === 'object') {
      for (var key in data) {
        data = data[key]
        break;
      }
    }

    return exports.convertToType(data, returnType);
  };

  exports.prototype.callApi = function callApi(path, httpMethod, pathParams,
      queryParams, collectionQueryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts,
      returnType, callback) {

    if (httpMethod === 'POST') {
      formParams = {
        ...bodyParam,
        responseFormatType: 'json'
      };
    }
    else if (httpMethod === 'GET') {
      queryParams = {
        ...bodyParam,
        responseFormatType: 'json'
      };
    }

    var _this = this;
    var url = this.buildUrl(path, pathParams);
    var request = superagent(httpMethod, url);

    for (var key in collectionQueryParams) {
      if (collectionQueryParams.hasOwnProperty(key)) {
        var param = collectionQueryParams[key];
        if (param.collectionFormat === 'csv') {
          if (param.value != null) {
            var value = param.value.map(this.paramToString).map(encodeURIComponent).join(',');
            request.query(encodeURIComponent(key) + "=" + value);
          }
        } else {
          queryParams[key] = this.buildCollectionParam(param.value, param.collectionFormat);
        }
      }
    }

    if (httpMethod.toUpperCase() === 'GET' && this.cache === false) {
        queryParams['_'] = new Date().getTime();
    }
    request.query(this.normalizeParams(queryParams));
    this.applyAuthToRequest(request, authNames);
    request.set(this.defaultHeaders).set(this.normalizeParams(headerParams));

    if (this.requestAgent) {
      request.agent(this.requestAgent);
    }

    request.timeout(this.timeout);

    var contentType = this.jsonPreferredMime(contentTypes);
    if (contentType) {
      if(contentType != 'multipart/form-data') {
        request.type(contentType);
      }
    } else if (!request.header['Content-Type']) {
      request.type('application/json');
    }

    if (contentType === 'application/x-www-form-urlencoded') {
      request.send(querystring.stringify(this.normalizeParams(formParams)));
    } else if (contentType == 'multipart/form-data') {
      var _formParams = this.normalizeParams(formParams);
      for (var key in _formParams) {
        if (_formParams.hasOwnProperty(key)) {
          if (this.isFileParam(_formParams[key])) {
            request.attach(key, _formParams[key]);
          } else {
            request.field(key, _formParams[key]);
          }
        }
      }
    } else if (bodyParam) {
      request.send(bodyParam);
    }

    var accept = this.jsonPreferredMime(accepts);
    if (accept) {
      request.accept(accept);
    }

    if (returnType === 'Blob') {
      request.responseType('blob');
    } else if (returnType === 'String') {
      request.responseType('string');
    }

    if (this.enableCookies){
      if (typeof window === 'undefined') {
        this.agent.attachCookies(request);
      }
      else {
        request.withCredentials();
      }
    }

    request.end(function(error, response) {
      if (callback) {
        var data = null;
        if (!error) {
          try {
            data = _this.deserialize(response, returnType);
            if (_this.enableCookies && typeof window === 'undefined'){
              _this.agent.saveCookies(response);
            }
          } catch (err) {
            error = err;
          }
        }
        callback(error, data, response);
      }
    });

    return request;
  };

  exports.parseDate = function(str) {
    return new Date(str.replace(/T/i, ' '));
  };

  exports.convertToType = function(data, type) {
    if (data === null || data === undefined)
      return data

    switch (type) {
      case 'Boolean':
        return Boolean(data);
      case 'Integer':
        return parseInt(data, 10);
      case 'Number':
        return parseFloat(data);
      case 'String':
        return String(data);
      case 'Date':
        return this.parseDate(String(data));
      case 'Blob':
      	return data;
      default:
        if (type === Object) {
          return data;
        } else if (typeof type === 'function') {
          return type.constructFromObject(data);
        } else if (Array.isArray(type)) {
          var itemType = type[0];
          return data.map(function(item) {
            return exports.convertToType(item, itemType);
          });
        } else if (typeof type === 'object') {
          var keyType, valueType;
          for (var k in type) {
            if (type.hasOwnProperty(k)) {
              keyType = k;
              valueType = type[k];
              break;
            }
          }
          var result = {};
          for (var k in data) {
            if (data.hasOwnProperty(k)) {
              var key = exports.convertToType(k, keyType);
              var value = exports.convertToType(data[k], valueType);
              result[key] = value;
            }
          }
          return result;
        } else {
          return data;
        }
    }
  };

  exports.constructFromObject = function(data, obj, itemType) {
    if (Array.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        if (data.hasOwnProperty(i))
          obj[i] = exports.convertToType(data[i], itemType);
      }
    } else {
      for (var k in data) {
        if (data.hasOwnProperty(k))
          obj[k] = exports.convertToType(data[k], itemType);
      }
    }
  };

  exports.instance = new exports();

  return exports;
}));