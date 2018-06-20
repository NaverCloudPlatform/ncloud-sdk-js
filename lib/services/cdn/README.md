# cdn

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

```shell
npm install cdn --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Cdn = require('cdn');

var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Cdn.V2Api(client)

var getCdnPlusInstanceListRequest = new Cdn.GetCdnPlusInstanceListRequest(); // {GetCdnPlusInstanceListRequest} getCdnPlusInstanceListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCdnPlusInstanceList(getCdnPlusInstanceListRequest, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://ncloud.beta-apigw.ntruss.com/cdn/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Cdn.V2Api* | [**getCdnPlusInstanceList**](docs/V2Api.md#getCdnPlusInstanceList) | **POST** /getCdnPlusInstanceList | 
*Cdn.V2Api* | [**getCdnPlusPurgeHistoryList**](docs/V2Api.md#getCdnPlusPurgeHistoryList) | **POST** /getCdnPlusPurgeHistoryList | 
*Cdn.V2Api* | [**getGlobalCdnInstanceList**](docs/V2Api.md#getGlobalCdnInstanceList) | **POST** /getGlobalCdnInstanceList | 
*Cdn.V2Api* | [**getGlobalCdnPurgeHistoryList**](docs/V2Api.md#getGlobalCdnPurgeHistoryList) | **POST** /getGlobalCdnPurgeHistoryList | 
*Cdn.V2Api* | [**requestCdnPlusPurge**](docs/V2Api.md#requestCdnPlusPurge) | **POST** /requestCdnPlusPurge | 
*Cdn.V2Api* | [**requestGlobalCdnPurge**](docs/V2Api.md#requestGlobalCdnPurge) | **POST** /requestGlobalCdnPurge | 


## Documentation for Models

 - [Cdn.CdnPlusInstance](docs/CdnPlusInstance.md)
 - [Cdn.CdnPlusPurgeHistory](docs/CdnPlusPurgeHistory.md)
 - [Cdn.CdnPlusRule](docs/CdnPlusRule.md)
 - [Cdn.CdnPlusServiceDomain](docs/CdnPlusServiceDomain.md)
 - [Cdn.CommonCode](docs/CommonCode.md)
 - [Cdn.GetCdnPlusInstanceListRequest](docs/GetCdnPlusInstanceListRequest.md)
 - [Cdn.GetCdnPlusInstanceListResponse](docs/GetCdnPlusInstanceListResponse.md)
 - [Cdn.GetCdnPlusPurgeHistoryListRequest](docs/GetCdnPlusPurgeHistoryListRequest.md)
 - [Cdn.GetCdnPlusPurgeHistoryListResponse](docs/GetCdnPlusPurgeHistoryListResponse.md)
 - [Cdn.GetGlobalCdnInstanceListRequest](docs/GetGlobalCdnInstanceListRequest.md)
 - [Cdn.GetGlobalCdnInstanceListResponse](docs/GetGlobalCdnInstanceListResponse.md)
 - [Cdn.GetGlobalCdnPurgeHistoryListResponse](docs/GetGlobalCdnPurgeHistoryListResponse.md)
 - [Cdn.GlobalCdnInstance](docs/GlobalCdnInstance.md)
 - [Cdn.GlobalCdnPurgeHistory](docs/GlobalCdnPurgeHistory.md)
 - [Cdn.GlobalCdnRule](docs/GlobalCdnRule.md)
 - [Cdn.GlobalCdnServiceDomain](docs/GlobalCdnServiceDomain.md)
 - [Cdn.RequestCdnPlusPurgeRequest](docs/RequestCdnPlusPurgeRequest.md)
 - [Cdn.RequestCdnPlusPurgeResponse](docs/RequestCdnPlusPurgeResponse.md)
 - [Cdn.RequestGlobalCdnPurgeRequest](docs/RequestGlobalCdnPurgeRequest.md)
 - [Cdn.RequestGlobalCdnPurgeResponse](docs/RequestGlobalCdnPurgeResponse.md)

