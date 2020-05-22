# Monitoring.V2Api

All URIs are relative to *https://ncloud.apigw.ntruss.com/monitoring/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getListMetrics**](V2Api.md#getListMetrics) | **POST** /getListMetrics | 
[**getMetricStatisticList**](V2Api.md#getMetricStatisticList) | **POST** /getMetricStatisticList | 


<a name="getListMetrics"></a>
# **getListMetrics**
> GetListMetricsResponse getListMetrics(getListMetricsRequest)



A.메트릭 통계 조회

### Example
```javascript
var Monitoring = require('ncloud-monitoring');
var client = new Monitoring.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Monitoring.V2Api();

var getListMetricsRequest = new Monitoring.GetListMetricsRequest(); // GetListMetricsRequest | getListMetricsRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getListMetrics(getListMetricsRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getListMetricsRequest** | [**GetListMetricsRequest**](GetListMetricsRequest.md)| getListMetricsRequest | 

### Return type

[**GetListMetricsResponse**](GetListMetricsResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getMetricStatisticList"></a>
# **getMetricStatisticList**
> GetMetricStatisticListResponse getMetricStatisticList(getMetricStatisticListRequest)



A.메트릭 통계 조회

### Example
```javascript
var Monitoring = require('ncloud-monitoring');
var client = new Monitoring.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Monitoring.V2Api();

var getMetricStatisticListRequest = new Monitoring.GetMetricStatisticListRequest(); // GetMetricStatisticListRequest | getMetricStatisticListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMetricStatisticList(getMetricStatisticListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getMetricStatisticListRequest** | [**GetMetricStatisticListRequest**](GetMetricStatisticListRequest.md)| getMetricStatisticListRequest | 

### Return type

[**GetMetricStatisticListResponse**](GetMetricStatisticListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

