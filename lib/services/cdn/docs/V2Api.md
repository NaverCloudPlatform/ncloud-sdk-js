# Cdn.V2Api

All URIs are relative to *https://ncloud.apigw.ntruss.com/cdn/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCdnPlusInstanceList**](V2Api.md#getCdnPlusInstanceList) | **POST** /getCdnPlusInstanceList | 
[**getCdnPlusPurgeHistoryList**](V2Api.md#getCdnPlusPurgeHistoryList) | **POST** /getCdnPlusPurgeHistoryList | 
[**getGlobalCdnInstanceList**](V2Api.md#getGlobalCdnInstanceList) | **POST** /getGlobalCdnInstanceList | 
[**getGlobalCdnPurgeHistoryList**](V2Api.md#getGlobalCdnPurgeHistoryList) | **POST** /getGlobalCdnPurgeHistoryList | 
[**requestCdnPlusPurge**](V2Api.md#requestCdnPlusPurge) | **POST** /requestCdnPlusPurge | 
[**requestGlobalCdnPurge**](V2Api.md#requestGlobalCdnPurge) | **POST** /requestGlobalCdnPurge | 


<a name="getCdnPlusInstanceList"></a>
# **getCdnPlusInstanceList**
> GetCdnPlusInstanceListResponse getCdnPlusInstanceList(getCdnPlusInstanceListRequest)



CDN+인스턴스리스트조회

### Example
```javascript
var Cdn = require('ncloud-cdn');
var client = new Cdn.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Cdn.V2Api();

var getCdnPlusInstanceListRequest = new Cdn.GetCdnPlusInstanceListRequest(); // GetCdnPlusInstanceListRequest | getCdnPlusInstanceListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCdnPlusInstanceList(getCdnPlusInstanceListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getCdnPlusInstanceListRequest** | [**GetCdnPlusInstanceListRequest**](GetCdnPlusInstanceListRequest.md)| getCdnPlusInstanceListRequest | 

### Return type

[**GetCdnPlusInstanceListResponse**](GetCdnPlusInstanceListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getCdnPlusPurgeHistoryList"></a>
# **getCdnPlusPurgeHistoryList**
> GetCdnPlusPurgeHistoryListResponse getCdnPlusPurgeHistoryList(getCdnPlusPurgeHistoryListRequest)



CDN+퍼지기록조회

### Example
```javascript
var Cdn = require('ncloud-cdn');
var client = new Cdn.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Cdn.V2Api();

var getCdnPlusPurgeHistoryListRequest = new Cdn.GetCdnPlusPurgeHistoryListRequest(); // GetCdnPlusPurgeHistoryListRequest | getCdnPlusPurgeHistoryListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCdnPlusPurgeHistoryList(getCdnPlusPurgeHistoryListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getCdnPlusPurgeHistoryListRequest** | [**GetCdnPlusPurgeHistoryListRequest**](GetCdnPlusPurgeHistoryListRequest.md)| getCdnPlusPurgeHistoryListRequest | 

### Return type

[**GetCdnPlusPurgeHistoryListResponse**](GetCdnPlusPurgeHistoryListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getGlobalCdnInstanceList"></a>
# **getGlobalCdnInstanceList**
> GetGlobalCdnInstanceListResponse getGlobalCdnInstanceList(getGlobalCdnInstanceListRequest)



Global CDN 인스턴스리스트조회

### Example
```javascript
var Cdn = require('ncloud-cdn');
var client = new Cdn.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Cdn.V2Api();

var getGlobalCdnInstanceListRequest = new Cdn.GetGlobalCdnInstanceListRequest(); // GetGlobalCdnInstanceListRequest | getGlobalCdnInstanceListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGlobalCdnInstanceList(getGlobalCdnInstanceListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getGlobalCdnInstanceListRequest** | [**GetGlobalCdnInstanceListRequest**](GetGlobalCdnInstanceListRequest.md)| getGlobalCdnInstanceListRequest | 

### Return type

[**GetGlobalCdnInstanceListResponse**](GetGlobalCdnInstanceListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getGlobalCdnPurgeHistoryList"></a>
# **getGlobalCdnPurgeHistoryList**
> GetGlobalCdnPurgeHistoryListResponse getGlobalCdnPurgeHistoryList(getGlobalCdnPurgeHistoryListRequest)



Global CDN퍼지기록조회

### Example
```javascript
var Cdn = require('ncloud-cdn');
var client = new Cdn.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Cdn.V2Api();

var getGlobalCdnPurgeHistoryListRequest = new Cdn.GetGlobalCdnPurgeHistoryListRequest(); // GetGlobalCdnPurgeHistoryListRequest | getGlobalCdnPurgeHistoryListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGlobalCdnPurgeHistoryList(getGlobalCdnPurgeHistoryListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getGlobalCdnPurgeHistoryListRequest** | [**GetGlobalCdnPurgeHistoryListRequest**](GetGlobalCdnPurgeHistoryListRequest.md)| getGlobalCdnPurgeHistoryListRequest | 

### Return type

[**GetGlobalCdnPurgeHistoryListResponse**](GetGlobalCdnPurgeHistoryListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="requestCdnPlusPurge"></a>
# **requestCdnPlusPurge**
> RequestCdnPlusPurgeResponse requestCdnPlusPurge(requestCdnPlusPurgeRequest)



CDN+퍼지요청

### Example
```javascript
var Cdn = require('ncloud-cdn');
var client = new Cdn.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Cdn.V2Api();

var requestCdnPlusPurgeRequest = new Cdn.RequestCdnPlusPurgeRequest(); // RequestCdnPlusPurgeRequest | requestCdnPlusPurgeRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.requestCdnPlusPurge(requestCdnPlusPurgeRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestCdnPlusPurgeRequest** | [**RequestCdnPlusPurgeRequest**](RequestCdnPlusPurgeRequest.md)| requestCdnPlusPurgeRequest | 

### Return type

[**RequestCdnPlusPurgeResponse**](RequestCdnPlusPurgeResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="requestGlobalCdnPurge"></a>
# **requestGlobalCdnPurge**
> RequestGlobalCdnPurgeResponse requestGlobalCdnPurge(requestGlobalCdnPurgeRequest)



Global CDN퍼지요청

### Example
```javascript
var Cdn = require('ncloud-cdn');
var client = new Cdn.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Cdn.V2Api();

var requestGlobalCdnPurgeRequest = new Cdn.RequestGlobalCdnPurgeRequest(); // RequestGlobalCdnPurgeRequest | requestGlobalCdnPurgeRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.requestGlobalCdnPurge(requestGlobalCdnPurgeRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestGlobalCdnPurgeRequest** | [**RequestGlobalCdnPurgeRequest**](RequestGlobalCdnPurgeRequest.md)| requestGlobalCdnPurgeRequest | 

### Return type

[**RequestGlobalCdnPurgeResponse**](RequestGlobalCdnPurgeResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

