# Loadbalancer.V2Api

All URIs are relative to *https://ncloud.apigw.ntruss.com/loadbalancer/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLoadBalancerSslCertificate**](V2Api.md#addLoadBalancerSslCertificate) | **POST** /addLoadBalancerSslCertificate | 
[**changeLoadBalancedServerInstances**](V2Api.md#changeLoadBalancedServerInstances) | **POST** /changeLoadBalancedServerInstances | 
[**changeLoadBalancerInstanceConfiguration**](V2Api.md#changeLoadBalancerInstanceConfiguration) | **POST** /changeLoadBalancerInstanceConfiguration | 
[**createLoadBalancerInstance**](V2Api.md#createLoadBalancerInstance) | **POST** /createLoadBalancerInstance | 
[**deleteLoadBalancerInstances**](V2Api.md#deleteLoadBalancerInstances) | **POST** /deleteLoadBalancerInstances | 
[**deleteLoadBalancerSslCertificate**](V2Api.md#deleteLoadBalancerSslCertificate) | **POST** /deleteLoadBalancerSslCertificate | 
[**getLoadBalancedServerInstanceList**](V2Api.md#getLoadBalancedServerInstanceList) | **POST** /getLoadBalancedServerInstanceList | 
[**getLoadBalancerInstanceList**](V2Api.md#getLoadBalancerInstanceList) | **POST** /getLoadBalancerInstanceList | 
[**getLoadBalancerSslCertificateList**](V2Api.md#getLoadBalancerSslCertificateList) | **POST** /getLoadBalancerSslCertificateList | 
[**getLoadBalancerTargetServerInstanceList**](V2Api.md#getLoadBalancerTargetServerInstanceList) | **POST** /getLoadBalancerTargetServerInstanceList | 


<a name="addLoadBalancerSslCertificate"></a>
# **addLoadBalancerSslCertificate**
> AddLoadBalancerSslCertificateResponse addLoadBalancerSslCertificate(addLoadBalancerSslCertificateRequest)



로드밸런서SSL인증서추가

### Example
```javascript
var Loadbalancer = require('loadbalancer');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Loadbalancer.V2Api();

var addLoadBalancerSslCertificateRequest = new Loadbalancer.AddLoadBalancerSslCertificateRequest(); // AddLoadBalancerSslCertificateRequest | addLoadBalancerSslCertificateRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addLoadBalancerSslCertificate(addLoadBalancerSslCertificateRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addLoadBalancerSslCertificateRequest** | [**AddLoadBalancerSslCertificateRequest**](AddLoadBalancerSslCertificateRequest.md)| addLoadBalancerSslCertificateRequest | 

### Return type

[**AddLoadBalancerSslCertificateResponse**](AddLoadBalancerSslCertificateResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="changeLoadBalancedServerInstances"></a>
# **changeLoadBalancedServerInstances**
> ChangeLoadBalancedServerInstancesResponse changeLoadBalancedServerInstances(changeLoadBalancedServerInstancesRequest)



로드밸런서에Bind된서버인스턴스변경

### Example
```javascript
var Loadbalancer = require('loadbalancer');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Loadbalancer.V2Api();

var changeLoadBalancedServerInstancesRequest = new Loadbalancer.ChangeLoadBalancedServerInstancesRequest(); // ChangeLoadBalancedServerInstancesRequest | changeLoadBalancedServerInstancesRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.changeLoadBalancedServerInstances(changeLoadBalancedServerInstancesRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **changeLoadBalancedServerInstancesRequest** | [**ChangeLoadBalancedServerInstancesRequest**](ChangeLoadBalancedServerInstancesRequest.md)| changeLoadBalancedServerInstancesRequest | 

### Return type

[**ChangeLoadBalancedServerInstancesResponse**](ChangeLoadBalancedServerInstancesResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="changeLoadBalancerInstanceConfiguration"></a>
# **changeLoadBalancerInstanceConfiguration**
> ChangeLoadBalancerInstanceConfigurationResponse changeLoadBalancerInstanceConfiguration(changeLoadBalancerInstanceConfigurationRequest)



로드밸런서인스턴스설정변경

### Example
```javascript
var Loadbalancer = require('loadbalancer');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Loadbalancer.V2Api();

var changeLoadBalancerInstanceConfigurationRequest = new Loadbalancer.ChangeLoadBalancerInstanceConfigurationRequest(); // ChangeLoadBalancerInstanceConfigurationRequest | changeLoadBalancerInstanceConfigurationRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.changeLoadBalancerInstanceConfiguration(changeLoadBalancerInstanceConfigurationRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **changeLoadBalancerInstanceConfigurationRequest** | [**ChangeLoadBalancerInstanceConfigurationRequest**](ChangeLoadBalancerInstanceConfigurationRequest.md)| changeLoadBalancerInstanceConfigurationRequest | 

### Return type

[**ChangeLoadBalancerInstanceConfigurationResponse**](ChangeLoadBalancerInstanceConfigurationResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="createLoadBalancerInstance"></a>
# **createLoadBalancerInstance**
> CreateLoadBalancerInstanceResponse createLoadBalancerInstance(createLoadBalancerInstanceRequest)



로드밸런서인스턴스생성

### Example
```javascript
var Loadbalancer = require('loadbalancer');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Loadbalancer.V2Api();

var createLoadBalancerInstanceRequest = new Loadbalancer.CreateLoadBalancerInstanceRequest(); // CreateLoadBalancerInstanceRequest | createLoadBalancerInstanceRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createLoadBalancerInstance(createLoadBalancerInstanceRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createLoadBalancerInstanceRequest** | [**CreateLoadBalancerInstanceRequest**](CreateLoadBalancerInstanceRequest.md)| createLoadBalancerInstanceRequest | 

### Return type

[**CreateLoadBalancerInstanceResponse**](CreateLoadBalancerInstanceResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="deleteLoadBalancerInstances"></a>
# **deleteLoadBalancerInstances**
> DeleteLoadBalancerInstancesResponse deleteLoadBalancerInstances(deleteLoadBalancerInstancesRequest)



로드밸런서인스턴스삭제

### Example
```javascript
var Loadbalancer = require('loadbalancer');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Loadbalancer.V2Api();

var deleteLoadBalancerInstancesRequest = new Loadbalancer.DeleteLoadBalancerInstancesRequest(); // DeleteLoadBalancerInstancesRequest | deleteLoadBalancerInstancesRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteLoadBalancerInstances(deleteLoadBalancerInstancesRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteLoadBalancerInstancesRequest** | [**DeleteLoadBalancerInstancesRequest**](DeleteLoadBalancerInstancesRequest.md)| deleteLoadBalancerInstancesRequest | 

### Return type

[**DeleteLoadBalancerInstancesResponse**](DeleteLoadBalancerInstancesResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="deleteLoadBalancerSslCertificate"></a>
# **deleteLoadBalancerSslCertificate**
> DeleteLoadBalancerSslCertificateResponse deleteLoadBalancerSslCertificate(deleteLoadBalancerSslCertificateRequest)



로드밸런서SSL인증서삭제

### Example
```javascript
var Loadbalancer = require('loadbalancer');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Loadbalancer.V2Api();

var deleteLoadBalancerSslCertificateRequest = new Loadbalancer.DeleteLoadBalancerSslCertificateRequest(); // DeleteLoadBalancerSslCertificateRequest | deleteLoadBalancerSslCertificateRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteLoadBalancerSslCertificate(deleteLoadBalancerSslCertificateRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteLoadBalancerSslCertificateRequest** | [**DeleteLoadBalancerSslCertificateRequest**](DeleteLoadBalancerSslCertificateRequest.md)| deleteLoadBalancerSslCertificateRequest | 

### Return type

[**DeleteLoadBalancerSslCertificateResponse**](DeleteLoadBalancerSslCertificateResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getLoadBalancedServerInstanceList"></a>
# **getLoadBalancedServerInstanceList**
> GetLoadBalancedServerInstanceListResponse getLoadBalancedServerInstanceList(getLoadBalancedServerInstanceListRequest)



로드밸런서Bind된서버인스턴스리스트조회

### Example
```javascript
var Loadbalancer = require('loadbalancer');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Loadbalancer.V2Api();

var getLoadBalancedServerInstanceListRequest = new Loadbalancer.GetLoadBalancedServerInstanceListRequest(); // GetLoadBalancedServerInstanceListRequest | getLoadBalancedServerInstanceListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLoadBalancedServerInstanceList(getLoadBalancedServerInstanceListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getLoadBalancedServerInstanceListRequest** | [**GetLoadBalancedServerInstanceListRequest**](GetLoadBalancedServerInstanceListRequest.md)| getLoadBalancedServerInstanceListRequest | 

### Return type

[**GetLoadBalancedServerInstanceListResponse**](GetLoadBalancedServerInstanceListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getLoadBalancerInstanceList"></a>
# **getLoadBalancerInstanceList**
> GetLoadBalancerInstanceListResponse getLoadBalancerInstanceList(getLoadBalancerInstanceListRequest)



로드밸런서인스턴스리스트조회

### Example
```javascript
var Loadbalancer = require('loadbalancer');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Loadbalancer.V2Api();

var getLoadBalancerInstanceListRequest = new Loadbalancer.GetLoadBalancerInstanceListRequest(); // GetLoadBalancerInstanceListRequest | getLoadBalancerInstanceListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLoadBalancerInstanceList(getLoadBalancerInstanceListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getLoadBalancerInstanceListRequest** | [**GetLoadBalancerInstanceListRequest**](GetLoadBalancerInstanceListRequest.md)| getLoadBalancerInstanceListRequest | 

### Return type

[**GetLoadBalancerInstanceListResponse**](GetLoadBalancerInstanceListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getLoadBalancerSslCertificateList"></a>
# **getLoadBalancerSslCertificateList**
> GetLoadBalancerSslCertificateListResponse getLoadBalancerSslCertificateList(getLoadBalancerSslCertificateListRequest)



로드밸런서SSL인증서조회

### Example
```javascript
var Loadbalancer = require('loadbalancer');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Loadbalancer.V2Api();

var getLoadBalancerSslCertificateListRequest = new Loadbalancer.GetLoadBalancerSslCertificateListRequest(); // GetLoadBalancerSslCertificateListRequest | getLoadBalancerSslCertificateListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLoadBalancerSslCertificateList(getLoadBalancerSslCertificateListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getLoadBalancerSslCertificateListRequest** | [**GetLoadBalancerSslCertificateListRequest**](GetLoadBalancerSslCertificateListRequest.md)| getLoadBalancerSslCertificateListRequest | 

### Return type

[**GetLoadBalancerSslCertificateListResponse**](GetLoadBalancerSslCertificateListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getLoadBalancerTargetServerInstanceList"></a>
# **getLoadBalancerTargetServerInstanceList**
> GetLoadBalancerTargetServerInstanceListResponse getLoadBalancerTargetServerInstanceList(getLoadBalancerTargetServerInstanceListRequest)



로드밸런서Target서버인스턴스리스트

### Example
```javascript
var Loadbalancer = require('loadbalancer');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Loadbalancer.V2Api();

var getLoadBalancerTargetServerInstanceListRequest = new Loadbalancer.GetLoadBalancerTargetServerInstanceListRequest(); // GetLoadBalancerTargetServerInstanceListRequest | getLoadBalancerTargetServerInstanceListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLoadBalancerTargetServerInstanceList(getLoadBalancerTargetServerInstanceListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getLoadBalancerTargetServerInstanceListRequest** | [**GetLoadBalancerTargetServerInstanceListRequest**](GetLoadBalancerTargetServerInstanceListRequest.md)| getLoadBalancerTargetServerInstanceListRequest | 

### Return type

[**GetLoadBalancerTargetServerInstanceListResponse**](GetLoadBalancerTargetServerInstanceListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

