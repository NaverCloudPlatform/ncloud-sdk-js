# Clouddb.V2Api

All URIs are relative to *https://ncloud.apigw.ntruss.com/clouddb/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCloudDBInstance**](V2Api.md#createCloudDBInstance) | **POST** /createCloudDBInstance | 
[**deleteCloudDBServerInstance**](V2Api.md#deleteCloudDBServerInstance) | **POST** /deleteCloudDBServerInstance | 
[**getCloudDBConfigGroupList**](V2Api.md#getCloudDBConfigGroupList) | **POST** /getCloudDBConfigGroupList | 
[**getCloudDBImageProductList**](V2Api.md#getCloudDBImageProductList) | **POST** /getCloudDBImageProductList | 
[**getCloudDBInstanceList**](V2Api.md#getCloudDBInstanceList) | **POST** /getCloudDBInstanceList | 
[**getCloudDBProductList**](V2Api.md#getCloudDBProductList) | **POST** /getCloudDBProductList | 
[**rebootCloudDBServerInstance**](V2Api.md#rebootCloudDBServerInstance) | **POST** /rebootCloudDBServerInstance | 


<a name="createCloudDBInstance"></a>
# **createCloudDBInstance**
> CreateCloudDBInstanceResponse createCloudDBInstance(createCloudDBInstanceRequest)



CloudDB인스턴스생성

### Example
```javascript
var Clouddb = require('ncloud-clouddb');
var client = new Clouddb.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Clouddb.V2Api();

var createCloudDBInstanceRequest = new Clouddb.CreateCloudDBInstanceRequest(); // CreateCloudDBInstanceRequest | createCloudDBInstanceRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCloudDBInstance(createCloudDBInstanceRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCloudDBInstanceRequest** | [**CreateCloudDBInstanceRequest**](CreateCloudDBInstanceRequest.md)| createCloudDBInstanceRequest | 

### Return type

[**CreateCloudDBInstanceResponse**](CreateCloudDBInstanceResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="deleteCloudDBServerInstance"></a>
# **deleteCloudDBServerInstance**
> DeleteCloudDBServerInstanceResponse deleteCloudDBServerInstance(deleteCloudDBServerInstanceRequest)



CloudDB서버인스턴스삭제

### Example
```javascript
var Clouddb = require('ncloud-clouddb');
var client = new Clouddb.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Clouddb.V2Api();

var deleteCloudDBServerInstanceRequest = new Clouddb.DeleteCloudDBServerInstanceRequest(); // DeleteCloudDBServerInstanceRequest | deleteCloudDBServerInstanceRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteCloudDBServerInstance(deleteCloudDBServerInstanceRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteCloudDBServerInstanceRequest** | [**DeleteCloudDBServerInstanceRequest**](DeleteCloudDBServerInstanceRequest.md)| deleteCloudDBServerInstanceRequest | 

### Return type

[**DeleteCloudDBServerInstanceResponse**](DeleteCloudDBServerInstanceResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getCloudDBConfigGroupList"></a>
# **getCloudDBConfigGroupList**
> GetCloudDBConfigGroupListResponse getCloudDBConfigGroupList(getCloudDBConfigGroupListRequest)



CloudDB설정그룹리스트조회

### Example
```javascript
var Clouddb = require('ncloud-clouddb');
var client = new Clouddb.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Clouddb.V2Api();

var getCloudDBConfigGroupListRequest = new Clouddb.GetCloudDBConfigGroupListRequest(); // GetCloudDBConfigGroupListRequest | getCloudDBConfigGroupListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCloudDBConfigGroupList(getCloudDBConfigGroupListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getCloudDBConfigGroupListRequest** | [**GetCloudDBConfigGroupListRequest**](GetCloudDBConfigGroupListRequest.md)| getCloudDBConfigGroupListRequest | 

### Return type

[**GetCloudDBConfigGroupListResponse**](GetCloudDBConfigGroupListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getCloudDBImageProductList"></a>
# **getCloudDBImageProductList**
> GetCloudDBImageProductListResponse getCloudDBImageProductList(getCloudDBImageProductListRequest)



CloudDB이미지상품리스트

### Example
```javascript
var Clouddb = require('ncloud-clouddb');
var client = new Clouddb.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Clouddb.V2Api();

var getCloudDBImageProductListRequest = new Clouddb.GetCloudDBImageProductListRequest(); // GetCloudDBImageProductListRequest | getCloudDBImageProductListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCloudDBImageProductList(getCloudDBImageProductListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getCloudDBImageProductListRequest** | [**GetCloudDBImageProductListRequest**](GetCloudDBImageProductListRequest.md)| getCloudDBImageProductListRequest | 

### Return type

[**GetCloudDBImageProductListResponse**](GetCloudDBImageProductListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getCloudDBInstanceList"></a>
# **getCloudDBInstanceList**
> GetCloudDBInstanceListResponse getCloudDBInstanceList(getCloudDBInstanceListRequest)



CloudDB인스턴스리스트조회

### Example
```javascript
var Clouddb = require('ncloud-clouddb');
var client = new Clouddb.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Clouddb.V2Api();

var getCloudDBInstanceListRequest = new Clouddb.GetCloudDBInstanceListRequest(); // GetCloudDBInstanceListRequest | getCloudDBInstanceListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCloudDBInstanceList(getCloudDBInstanceListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getCloudDBInstanceListRequest** | [**GetCloudDBInstanceListRequest**](GetCloudDBInstanceListRequest.md)| getCloudDBInstanceListRequest | 

### Return type

[**GetCloudDBInstanceListResponse**](GetCloudDBInstanceListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getCloudDBProductList"></a>
# **getCloudDBProductList**
> GetCloudDBProductListResponse getCloudDBProductList(getCloudDBProductListRequest)



CloudDB상품리스트조회

### Example
```javascript
var Clouddb = require('ncloud-clouddb');
var client = new Clouddb.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Clouddb.V2Api();

var getCloudDBProductListRequest = new Clouddb.GetCloudDBProductListRequest(); // GetCloudDBProductListRequest | getCloudDBProductListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCloudDBProductList(getCloudDBProductListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getCloudDBProductListRequest** | [**GetCloudDBProductListRequest**](GetCloudDBProductListRequest.md)| getCloudDBProductListRequest | 

### Return type

[**GetCloudDBProductListResponse**](GetCloudDBProductListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="rebootCloudDBServerInstance"></a>
# **rebootCloudDBServerInstance**
> RebootCloudDBServerInstanceResponse rebootCloudDBServerInstance(rebootCloudDBServerInstanceRequest)



CloudDB서버인스턴스재부팅

### Example
```javascript
var Clouddb = require('ncloud-clouddb');
var client = new Clouddb.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Clouddb.V2Api();

var rebootCloudDBServerInstanceRequest = new Clouddb.RebootCloudDBServerInstanceRequest(); // RebootCloudDBServerInstanceRequest | rebootCloudDBServerInstanceRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rebootCloudDBServerInstance(rebootCloudDBServerInstanceRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rebootCloudDBServerInstanceRequest** | [**RebootCloudDBServerInstanceRequest**](RebootCloudDBServerInstanceRequest.md)| rebootCloudDBServerInstanceRequest | 

### Return type

[**RebootCloudDBServerInstanceResponse**](RebootCloudDBServerInstanceResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

