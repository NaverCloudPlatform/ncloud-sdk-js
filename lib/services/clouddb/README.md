# ncloud-clouddb

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

```shell
npm install ncloud-clouddb --save
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
var Clouddb = require('ncloud-clouddb');

var client = new Clouddb.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Clouddb.V2Api(client)

var createCloudDBInstanceRequest = new Clouddb.CreateCloudDBInstanceRequest(); // {CreateCloudDBInstanceRequest} createCloudDBInstanceRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCloudDBInstance(createCloudDBInstanceRequest, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://ncloud.apigw.ntruss.com/clouddb/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Clouddb.V2Api* | [**createCloudDBInstance**](docs/V2Api.md#createCloudDBInstance) | **POST** /createCloudDBInstance | 
*Clouddb.V2Api* | [**deleteCloudDBServerInstance**](docs/V2Api.md#deleteCloudDBServerInstance) | **POST** /deleteCloudDBServerInstance | 
*Clouddb.V2Api* | [**getCloudDBConfigGroupList**](docs/V2Api.md#getCloudDBConfigGroupList) | **POST** /getCloudDBConfigGroupList | 
*Clouddb.V2Api* | [**getCloudDBImageProductList**](docs/V2Api.md#getCloudDBImageProductList) | **POST** /getCloudDBImageProductList | 
*Clouddb.V2Api* | [**getCloudDBInstanceList**](docs/V2Api.md#getCloudDBInstanceList) | **POST** /getCloudDBInstanceList | 
*Clouddb.V2Api* | [**getCloudDBProductList**](docs/V2Api.md#getCloudDBProductList) | **POST** /getCloudDBProductList | 
*Clouddb.V2Api* | [**rebootCloudDBServerInstance**](docs/V2Api.md#rebootCloudDBServerInstance) | **POST** /rebootCloudDBServerInstance | 


## Documentation for Models

 - [Clouddb.AccessControlGroup](docs/AccessControlGroup.md)
 - [Clouddb.CloudDBConfig](docs/CloudDBConfig.md)
 - [Clouddb.CloudDBConfigGroup](docs/CloudDBConfigGroup.md)
 - [Clouddb.CloudDBInstance](docs/CloudDBInstance.md)
 - [Clouddb.CloudDBServerInstance](docs/CloudDBServerInstance.md)
 - [Clouddb.CommonCode](docs/CommonCode.md)
 - [Clouddb.CreateCloudDBInstanceRequest](docs/CreateCloudDBInstanceRequest.md)
 - [Clouddb.CreateCloudDBInstanceResponse](docs/CreateCloudDBInstanceResponse.md)
 - [Clouddb.DeleteCloudDBServerInstanceRequest](docs/DeleteCloudDBServerInstanceRequest.md)
 - [Clouddb.DeleteCloudDBServerInstanceResponse](docs/DeleteCloudDBServerInstanceResponse.md)
 - [Clouddb.GetCloudDBConfigGroupListRequest](docs/GetCloudDBConfigGroupListRequest.md)
 - [Clouddb.GetCloudDBConfigGroupListResponse](docs/GetCloudDBConfigGroupListResponse.md)
 - [Clouddb.GetCloudDBImageProductListRequest](docs/GetCloudDBImageProductListRequest.md)
 - [Clouddb.GetCloudDBImageProductListResponse](docs/GetCloudDBImageProductListResponse.md)
 - [Clouddb.GetCloudDBInstanceListRequest](docs/GetCloudDBInstanceListRequest.md)
 - [Clouddb.GetCloudDBInstanceListResponse](docs/GetCloudDBInstanceListResponse.md)
 - [Clouddb.GetCloudDBProductListRequest](docs/GetCloudDBProductListRequest.md)
 - [Clouddb.GetCloudDBProductListResponse](docs/GetCloudDBProductListResponse.md)
 - [Clouddb.Product](docs/Product.md)
 - [Clouddb.RebootCloudDBServerInstanceRequest](docs/RebootCloudDBServerInstanceRequest.md)
 - [Clouddb.RebootCloudDBServerInstanceResponse](docs/RebootCloudDBServerInstanceResponse.md)
 - [Clouddb.Region](docs/Region.md)
 - [Clouddb.Zone](docs/Zone.md)


### License

```
Copyright 2018 NAVER BUSINESS PLATFORM Corp.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
