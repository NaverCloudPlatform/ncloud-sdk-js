# ncloud-vnas

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

```shell
npm install ncloud-vnas --save
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
var Vnas = require('ncloud-vnas');

var client = new Vnas.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Vnas.V2Api(client)

var addNasVolumeAccessControlRequest = new Vnas.AddNasVolumeAccessControlRequest(); // {AddNasVolumeAccessControlRequest} addNasVolumeAccessControlRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addNasVolumeAccessControl(addNasVolumeAccessControlRequest, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://ncloud.apigw.ntruss.com/vnas/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Vnas.V2Api* | [**addNasVolumeAccessControl**](docs/V2Api.md#addNasVolumeAccessControl) | **POST** /addNasVolumeAccessControl | 
*Vnas.V2Api* | [**changeNasVolumeSize**](docs/V2Api.md#changeNasVolumeSize) | **POST** /changeNasVolumeSize | 
*Vnas.V2Api* | [**createNasVolumeInstance**](docs/V2Api.md#createNasVolumeInstance) | **POST** /createNasVolumeInstance | 
*Vnas.V2Api* | [**deleteNasVolumeInstances**](docs/V2Api.md#deleteNasVolumeInstances) | **POST** /deleteNasVolumeInstances | 
*Vnas.V2Api* | [**getNasVolumeInstanceDetail**](docs/V2Api.md#getNasVolumeInstanceDetail) | **POST** /getNasVolumeInstanceDetail | 
*Vnas.V2Api* | [**getNasVolumeInstanceList**](docs/V2Api.md#getNasVolumeInstanceList) | **POST** /getNasVolumeInstanceList | 
*Vnas.V2Api* | [**removeNasVolumeAccessControl**](docs/V2Api.md#removeNasVolumeAccessControl) | **POST** /removeNasVolumeAccessControl | 
*Vnas.V2Api* | [**setNasVolumeAccessControl**](docs/V2Api.md#setNasVolumeAccessControl) | **POST** /setNasVolumeAccessControl | 


## Documentation for Models

 - [Vnas.AddNasVolumeAccessControlRequest](docs/AddNasVolumeAccessControlRequest.md)
 - [Vnas.AddNasVolumeAccessControlResponse](docs/AddNasVolumeAccessControlResponse.md)
 - [Vnas.ChangeNasVolumeSizeRequest](docs/ChangeNasVolumeSizeRequest.md)
 - [Vnas.ChangeNasVolumeSizeResponse](docs/ChangeNasVolumeSizeResponse.md)
 - [Vnas.CommonCode](docs/CommonCode.md)
 - [Vnas.CreateNasVolumeInstanceRequest](docs/CreateNasVolumeInstanceRequest.md)
 - [Vnas.CreateNasVolumeInstanceResponse](docs/CreateNasVolumeInstanceResponse.md)
 - [Vnas.DeleteNasVolumeInstancesRequest](docs/DeleteNasVolumeInstancesRequest.md)
 - [Vnas.DeleteNasVolumeInstancesResponse](docs/DeleteNasVolumeInstancesResponse.md)
 - [Vnas.GetNasVolumeInstanceDetailRequest](docs/GetNasVolumeInstanceDetailRequest.md)
 - [Vnas.GetNasVolumeInstanceDetailResponse](docs/GetNasVolumeInstanceDetailResponse.md)
 - [Vnas.GetNasVolumeInstanceListRequest](docs/GetNasVolumeInstanceListRequest.md)
 - [Vnas.GetNasVolumeInstanceListResponse](docs/GetNasVolumeInstanceListResponse.md)
 - [Vnas.NasVolumeInstance](docs/NasVolumeInstance.md)
 - [Vnas.RemoveNasVolumeAccessControlRequest](docs/RemoveNasVolumeAccessControlRequest.md)
 - [Vnas.RemoveNasVolumeAccessControlResponse](docs/RemoveNasVolumeAccessControlResponse.md)
 - [Vnas.SetNasVolumeAccessControlRequest](docs/SetNasVolumeAccessControlRequest.md)
 - [Vnas.SetNasVolumeAccessControlResponse](docs/SetNasVolumeAccessControlResponse.md)


### License

```
Copyright 2018 NAVER BUSINESS PLATFORM Corp.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
