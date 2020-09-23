# Vnas.V2Api

All URIs are relative to *https://ncloud.apigw.ntruss.com/vnas/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNasVolumeAccessControl**](V2Api.md#addNasVolumeAccessControl) | **POST** /addNasVolumeAccessControl | 
[**changeNasVolumeSize**](V2Api.md#changeNasVolumeSize) | **POST** /changeNasVolumeSize | 
[**createNasVolumeInstance**](V2Api.md#createNasVolumeInstance) | **POST** /createNasVolumeInstance | 
[**deleteNasVolumeInstances**](V2Api.md#deleteNasVolumeInstances) | **POST** /deleteNasVolumeInstances | 
[**getNasVolumeInstanceDetail**](V2Api.md#getNasVolumeInstanceDetail) | **POST** /getNasVolumeInstanceDetail | 
[**getNasVolumeInstanceList**](V2Api.md#getNasVolumeInstanceList) | **POST** /getNasVolumeInstanceList | 
[**removeNasVolumeAccessControl**](V2Api.md#removeNasVolumeAccessControl) | **POST** /removeNasVolumeAccessControl | 
[**setNasVolumeAccessControl**](V2Api.md#setNasVolumeAccessControl) | **POST** /setNasVolumeAccessControl | 


<a name="addNasVolumeAccessControl"></a>
# **addNasVolumeAccessControl**
> AddNasVolumeAccessControlResponse addNasVolumeAccessControl(addNasVolumeAccessControlRequest)



NAS볼륨접근제어추가

### Example
```javascript
var Vnas = require('ncloud-vnas');
var client = new Vnas.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vnas.V2Api();

var addNasVolumeAccessControlRequest = new Vnas.AddNasVolumeAccessControlRequest(); // AddNasVolumeAccessControlRequest | addNasVolumeAccessControlRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addNasVolumeAccessControl(addNasVolumeAccessControlRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addNasVolumeAccessControlRequest** | [**AddNasVolumeAccessControlRequest**](AddNasVolumeAccessControlRequest.md)| addNasVolumeAccessControlRequest | 

### Return type

[**AddNasVolumeAccessControlResponse**](AddNasVolumeAccessControlResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="changeNasVolumeSize"></a>
# **changeNasVolumeSize**
> ChangeNasVolumeSizeResponse changeNasVolumeSize(changeNasVolumeSizeRequest)



NAS볼륨사이즈변경

### Example
```javascript
var Vnas = require('ncloud-vnas');
var client = new Vnas.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vnas.V2Api();

var changeNasVolumeSizeRequest = new Vnas.ChangeNasVolumeSizeRequest(); // ChangeNasVolumeSizeRequest | changeNasVolumeSizeRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.changeNasVolumeSize(changeNasVolumeSizeRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **changeNasVolumeSizeRequest** | [**ChangeNasVolumeSizeRequest**](ChangeNasVolumeSizeRequest.md)| changeNasVolumeSizeRequest | 

### Return type

[**ChangeNasVolumeSizeResponse**](ChangeNasVolumeSizeResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="createNasVolumeInstance"></a>
# **createNasVolumeInstance**
> CreateNasVolumeInstanceResponse createNasVolumeInstance(createNasVolumeInstanceRequest)



NAS볼륨인스턴스생성

### Example
```javascript
var Vnas = require('ncloud-vnas');
var client = new Vnas.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vnas.V2Api();

var createNasVolumeInstanceRequest = new Vnas.CreateNasVolumeInstanceRequest(); // CreateNasVolumeInstanceRequest | createNasVolumeInstanceRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNasVolumeInstance(createNasVolumeInstanceRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createNasVolumeInstanceRequest** | [**CreateNasVolumeInstanceRequest**](CreateNasVolumeInstanceRequest.md)| createNasVolumeInstanceRequest | 

### Return type

[**CreateNasVolumeInstanceResponse**](CreateNasVolumeInstanceResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="deleteNasVolumeInstances"></a>
# **deleteNasVolumeInstances**
> DeleteNasVolumeInstancesResponse deleteNasVolumeInstances(deleteNasVolumeInstancesRequest)



NAS볼륨인스턴스제거

### Example
```javascript
var Vnas = require('ncloud-vnas');
var client = new Vnas.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vnas.V2Api();

var deleteNasVolumeInstancesRequest = new Vnas.DeleteNasVolumeInstancesRequest(); // DeleteNasVolumeInstancesRequest | deleteNasVolumeInstancesRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteNasVolumeInstances(deleteNasVolumeInstancesRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteNasVolumeInstancesRequest** | [**DeleteNasVolumeInstancesRequest**](DeleteNasVolumeInstancesRequest.md)| deleteNasVolumeInstancesRequest | 

### Return type

[**DeleteNasVolumeInstancesResponse**](DeleteNasVolumeInstancesResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getNasVolumeInstanceDetail"></a>
# **getNasVolumeInstanceDetail**
> GetNasVolumeInstanceDetailResponse getNasVolumeInstanceDetail(getNasVolumeInstanceDetailRequest)



NAS볼륨인스턴스상세조회

### Example
```javascript
var Vnas = require('ncloud-vnas');
var client = new Vnas.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vnas.V2Api();

var getNasVolumeInstanceDetailRequest = new Vnas.GetNasVolumeInstanceDetailRequest(); // GetNasVolumeInstanceDetailRequest | getNasVolumeInstanceDetailRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNasVolumeInstanceDetail(getNasVolumeInstanceDetailRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getNasVolumeInstanceDetailRequest** | [**GetNasVolumeInstanceDetailRequest**](GetNasVolumeInstanceDetailRequest.md)| getNasVolumeInstanceDetailRequest | 

### Return type

[**GetNasVolumeInstanceDetailResponse**](GetNasVolumeInstanceDetailResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getNasVolumeInstanceList"></a>
# **getNasVolumeInstanceList**
> GetNasVolumeInstanceListResponse getNasVolumeInstanceList(getNasVolumeInstanceListRequest)



NAS볼륨인스턴스리스트조회

### Example
```javascript
var Vnas = require('ncloud-vnas');
var client = new Vnas.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vnas.V2Api();

var getNasVolumeInstanceListRequest = new Vnas.GetNasVolumeInstanceListRequest(); // GetNasVolumeInstanceListRequest | getNasVolumeInstanceListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNasVolumeInstanceList(getNasVolumeInstanceListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getNasVolumeInstanceListRequest** | [**GetNasVolumeInstanceListRequest**](GetNasVolumeInstanceListRequest.md)| getNasVolumeInstanceListRequest | 

### Return type

[**GetNasVolumeInstanceListResponse**](GetNasVolumeInstanceListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="removeNasVolumeAccessControl"></a>
# **removeNasVolumeAccessControl**
> RemoveNasVolumeAccessControlResponse removeNasVolumeAccessControl(removeNasVolumeAccessControlRequest)



NAS볼륨접근제어삭제

### Example
```javascript
var Vnas = require('ncloud-vnas');
var client = new Vnas.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vnas.V2Api();

var removeNasVolumeAccessControlRequest = new Vnas.RemoveNasVolumeAccessControlRequest(); // RemoveNasVolumeAccessControlRequest | removeNasVolumeAccessControlRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeNasVolumeAccessControl(removeNasVolumeAccessControlRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **removeNasVolumeAccessControlRequest** | [**RemoveNasVolumeAccessControlRequest**](RemoveNasVolumeAccessControlRequest.md)| removeNasVolumeAccessControlRequest | 

### Return type

[**RemoveNasVolumeAccessControlResponse**](RemoveNasVolumeAccessControlResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="setNasVolumeAccessControl"></a>
# **setNasVolumeAccessControl**
> SetNasVolumeAccessControlResponse setNasVolumeAccessControl(setNasVolumeAccessControlRequest)



NAS볼륨접근제어설정

### Example
```javascript
var Vnas = require('ncloud-vnas');
var client = new Vnas.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vnas.V2Api();

var setNasVolumeAccessControlRequest = new Vnas.SetNasVolumeAccessControlRequest(); // SetNasVolumeAccessControlRequest | setNasVolumeAccessControlRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setNasVolumeAccessControl(setNasVolumeAccessControlRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setNasVolumeAccessControlRequest** | [**SetNasVolumeAccessControlRequest**](SetNasVolumeAccessControlRequest.md)| setNasVolumeAccessControlRequest | 

### Return type

[**SetNasVolumeAccessControlResponse**](SetNasVolumeAccessControlResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

