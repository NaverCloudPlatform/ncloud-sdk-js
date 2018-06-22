# ncloud-loadbalancer

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

```shell
npm install ncloud-loadbalancer --save
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
var Loadbalancer = require('ncloud-loadbalancer');

var client = new Loadbalancer.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Loadbalancer.V2Api(client)

var addLoadBalancerSslCertificateRequest = new Loadbalancer.AddLoadBalancerSslCertificateRequest(); // {AddLoadBalancerSslCertificateRequest} addLoadBalancerSslCertificateRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addLoadBalancerSslCertificate(addLoadBalancerSslCertificateRequest, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://ncloud.apigw.ntruss.com/loadbalancer/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Loadbalancer.V2Api* | [**addLoadBalancerSslCertificate**](docs/V2Api.md#addLoadBalancerSslCertificate) | **POST** /addLoadBalancerSslCertificate | 
*Loadbalancer.V2Api* | [**changeLoadBalancedServerInstances**](docs/V2Api.md#changeLoadBalancedServerInstances) | **POST** /changeLoadBalancedServerInstances | 
*Loadbalancer.V2Api* | [**changeLoadBalancerInstanceConfiguration**](docs/V2Api.md#changeLoadBalancerInstanceConfiguration) | **POST** /changeLoadBalancerInstanceConfiguration | 
*Loadbalancer.V2Api* | [**createLoadBalancerInstance**](docs/V2Api.md#createLoadBalancerInstance) | **POST** /createLoadBalancerInstance | 
*Loadbalancer.V2Api* | [**deleteLoadBalancerInstances**](docs/V2Api.md#deleteLoadBalancerInstances) | **POST** /deleteLoadBalancerInstances | 
*Loadbalancer.V2Api* | [**deleteLoadBalancerSslCertificate**](docs/V2Api.md#deleteLoadBalancerSslCertificate) | **POST** /deleteLoadBalancerSslCertificate | 
*Loadbalancer.V2Api* | [**getLoadBalancedServerInstanceList**](docs/V2Api.md#getLoadBalancedServerInstanceList) | **POST** /getLoadBalancedServerInstanceList | 
*Loadbalancer.V2Api* | [**getLoadBalancerInstanceList**](docs/V2Api.md#getLoadBalancerInstanceList) | **POST** /getLoadBalancerInstanceList | 
*Loadbalancer.V2Api* | [**getLoadBalancerSslCertificateList**](docs/V2Api.md#getLoadBalancerSslCertificateList) | **POST** /getLoadBalancerSslCertificateList | 
*Loadbalancer.V2Api* | [**getLoadBalancerTargetServerInstanceList**](docs/V2Api.md#getLoadBalancerTargetServerInstanceList) | **POST** /getLoadBalancerTargetServerInstanceList | 


## Documentation for Models

 - [Loadbalancer.AccessControlGroup](docs/AccessControlGroup.md)
 - [Loadbalancer.AddLoadBalancerSslCertificateRequest](docs/AddLoadBalancerSslCertificateRequest.md)
 - [Loadbalancer.AddLoadBalancerSslCertificateResponse](docs/AddLoadBalancerSslCertificateResponse.md)
 - [Loadbalancer.ChangeLoadBalancedServerInstancesRequest](docs/ChangeLoadBalancedServerInstancesRequest.md)
 - [Loadbalancer.ChangeLoadBalancedServerInstancesResponse](docs/ChangeLoadBalancedServerInstancesResponse.md)
 - [Loadbalancer.ChangeLoadBalancerInstanceConfigurationRequest](docs/ChangeLoadBalancerInstanceConfigurationRequest.md)
 - [Loadbalancer.ChangeLoadBalancerInstanceConfigurationResponse](docs/ChangeLoadBalancerInstanceConfigurationResponse.md)
 - [Loadbalancer.CommonCode](docs/CommonCode.md)
 - [Loadbalancer.CreateLoadBalancerInstanceRequest](docs/CreateLoadBalancerInstanceRequest.md)
 - [Loadbalancer.CreateLoadBalancerInstanceResponse](docs/CreateLoadBalancerInstanceResponse.md)
 - [Loadbalancer.DeleteLoadBalancerInstancesRequest](docs/DeleteLoadBalancerInstancesRequest.md)
 - [Loadbalancer.DeleteLoadBalancerInstancesResponse](docs/DeleteLoadBalancerInstancesResponse.md)
 - [Loadbalancer.DeleteLoadBalancerSslCertificateRequest](docs/DeleteLoadBalancerSslCertificateRequest.md)
 - [Loadbalancer.DeleteLoadBalancerSslCertificateResponse](docs/DeleteLoadBalancerSslCertificateResponse.md)
 - [Loadbalancer.GetLoadBalancedServerInstanceListRequest](docs/GetLoadBalancedServerInstanceListRequest.md)
 - [Loadbalancer.GetLoadBalancedServerInstanceListResponse](docs/GetLoadBalancedServerInstanceListResponse.md)
 - [Loadbalancer.GetLoadBalancerInstanceListRequest](docs/GetLoadBalancerInstanceListRequest.md)
 - [Loadbalancer.GetLoadBalancerInstanceListResponse](docs/GetLoadBalancerInstanceListResponse.md)
 - [Loadbalancer.GetLoadBalancerSslCertificateListRequest](docs/GetLoadBalancerSslCertificateListRequest.md)
 - [Loadbalancer.GetLoadBalancerSslCertificateListResponse](docs/GetLoadBalancerSslCertificateListResponse.md)
 - [Loadbalancer.GetLoadBalancerTargetServerInstanceListRequest](docs/GetLoadBalancerTargetServerInstanceListRequest.md)
 - [Loadbalancer.GetLoadBalancerTargetServerInstanceListResponse](docs/GetLoadBalancerTargetServerInstanceListResponse.md)
 - [Loadbalancer.LoadBalancedServerInstance](docs/LoadBalancedServerInstance.md)
 - [Loadbalancer.LoadBalancerInstance](docs/LoadBalancerInstance.md)
 - [Loadbalancer.LoadBalancerRule](docs/LoadBalancerRule.md)
 - [Loadbalancer.LoadBalancerRuleParameter](docs/LoadBalancerRuleParameter.md)
 - [Loadbalancer.Region](docs/Region.md)
 - [Loadbalancer.ServerHealthCheckStatus](docs/ServerHealthCheckStatus.md)
 - [Loadbalancer.ServerInstance](docs/ServerInstance.md)
 - [Loadbalancer.SslCertificate](docs/SslCertificate.md)
 - [Loadbalancer.Zone](docs/Zone.md)


### License

```
Copyright 2018 NAVER BUSINESS PLATFORM Corp.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
