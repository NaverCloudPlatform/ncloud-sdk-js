# Monitoring.V2Api

All URIs are relative to *https://ncloud.apigw.ntruss.com/monitoring/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getListMetrics**](V2Api.md#getListMetrics) | **POST** /getListMetrics | 
[**getMetricStatistics**](V2Api.md#getMetricStatistics) | **POST** /getMetricStatistics | 


<a name="getListMetrics"></a>
# **getListMetrics**
> GetListMetricsResponse getListMetrics(getListMetricsRequest)



B.메트릭 리스트 조회

### Example
```javascript
var Monitoring = require('monitoring');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
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

<a name="getMetricStatistics"></a>
# **getMetricStatistics**
> GetMetricStatisticsResponse getMetricStatistics(getMetricStatisticsRequest)



A.메트릭 통계 조회

### Example
```javascript
var Monitoring = require('monitoring');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Monitoring.V2Api();

var getMetricStatisticsRequest = new Monitoring.GetMetricStatisticsRequest(); // GetMetricStatisticsRequest | getMetricStatisticsRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMetricStatistics(getMetricStatisticsRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getMetricStatisticsRequest** | [**GetMetricStatisticsRequest**](GetMetricStatisticsRequest.md)| getMetricStatisticsRequest | 

### Return type

[**GetMetricStatisticsResponse**](GetMetricStatisticsResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

