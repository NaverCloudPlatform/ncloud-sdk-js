# Autoscaling.V2Api

All URIs are relative to *https://ncloud.apigw.ntruss.com/autoscaling/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAutoScalingGroup**](V2Api.md#createAutoScalingGroup) | **POST** /createAutoScalingGroup | 
[**createLaunchConfiguration**](V2Api.md#createLaunchConfiguration) | **POST** /createLaunchConfiguration | 
[**deleteAutoScalingGroup**](V2Api.md#deleteAutoScalingGroup) | **POST** /deleteAutoScalingGroup | 
[**deleteAutoScalingLaunchConfiguration**](V2Api.md#deleteAutoScalingLaunchConfiguration) | **POST** /deleteAutoScalingLaunchConfiguration | 
[**deletePolicy**](V2Api.md#deletePolicy) | **POST** /deletePolicy | 
[**deleteScheduledAction**](V2Api.md#deleteScheduledAction) | **POST** /deleteScheduledAction | 
[**executePolicy**](V2Api.md#executePolicy) | **POST** /executePolicy | 
[**getAdjustmentTypeList**](V2Api.md#getAdjustmentTypeList) | **POST** /getAdjustmentTypeList | 
[**getAutoScalingActivityLogList**](V2Api.md#getAutoScalingActivityLogList) | **POST** /getAutoScalingActivityLogList | 
[**getAutoScalingConfigurationLogList**](V2Api.md#getAutoScalingConfigurationLogList) | **POST** /getAutoScalingConfigurationLogList | 
[**getAutoScalingGroupList**](V2Api.md#getAutoScalingGroupList) | **POST** /getAutoScalingGroupList | 
[**getAutoScalingPolicyList**](V2Api.md#getAutoScalingPolicyList) | **POST** /getAutoScalingPolicyList | 
[**getLaunchConfigurationList**](V2Api.md#getLaunchConfigurationList) | **POST** /getLaunchConfigurationList | 
[**getScalingProcessTypeList**](V2Api.md#getScalingProcessTypeList) | **POST** /getScalingProcessTypeList | 
[**getScheduledActionList**](V2Api.md#getScheduledActionList) | **POST** /getScheduledActionList | 
[**putScalingPolicy**](V2Api.md#putScalingPolicy) | **POST** /putScalingPolicy | 
[**putScheduledUpdateGroupAction**](V2Api.md#putScheduledUpdateGroupAction) | **POST** /putScheduledUpdateGroupAction | 
[**resumeProcesses**](V2Api.md#resumeProcesses) | **POST** /resumeProcesses | 
[**setDesiredCapacity**](V2Api.md#setDesiredCapacity) | **POST** /setDesiredCapacity | 
[**setServerInstanceHealth**](V2Api.md#setServerInstanceHealth) | **POST** /setServerInstanceHealth | 
[**suspendProcesses**](V2Api.md#suspendProcesses) | **POST** /suspendProcesses | 
[**terminateServerInstanceInAutoScalingGroup**](V2Api.md#terminateServerInstanceInAutoScalingGroup) | **POST** /terminateServerInstanceInAutoScalingGroup | 
[**updateAutoScalingGroup**](V2Api.md#updateAutoScalingGroup) | **POST** /updateAutoScalingGroup | 


<a name="createAutoScalingGroup"></a>
# **createAutoScalingGroup**
> CreateAutoScalingGroupResponse createAutoScalingGroup(createAutoScalingGroupRequest)



B.오토스케일링그룹생성

### Example
```javascript
var Autoscaling = require('ncloud-autoscaling');
var client = new Autoscaling.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Autoscaling.V2Api();

var createAutoScalingGroupRequest = new Autoscaling.CreateAutoScalingGroupRequest(); // CreateAutoScalingGroupRequest | createAutoScalingGroupRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createAutoScalingGroup(createAutoScalingGroupRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAutoScalingGroupRequest** | [**CreateAutoScalingGroupRequest**](CreateAutoScalingGroupRequest.md)| createAutoScalingGroupRequest | 

### Return type

[**CreateAutoScalingGroupResponse**](CreateAutoScalingGroupResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="createLaunchConfiguration"></a>
# **createLaunchConfiguration**
> CreateLaunchConfigurationResponse createLaunchConfiguration(createLaunchConfigurationRequest)



A.론치설정생성

### Example
```javascript
var Autoscaling = require('ncloud-autoscaling');
var client = new Autoscaling.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Autoscaling.V2Api();

var createLaunchConfigurationRequest = new Autoscaling.CreateLaunchConfigurationRequest(); // CreateLaunchConfigurationRequest | createLaunchConfigurationRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createLaunchConfiguration(createLaunchConfigurationRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createLaunchConfigurationRequest** | [**CreateLaunchConfigurationRequest**](CreateLaunchConfigurationRequest.md)| createLaunchConfigurationRequest | 

### Return type

[**CreateLaunchConfigurationResponse**](CreateLaunchConfigurationResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="deleteAutoScalingGroup"></a>
# **deleteAutoScalingGroup**
> DeleteAutoScalingGroupResponse deleteAutoScalingGroup(deleteAutoScalingGroupRequest)



B.오토스케일링그룹삭제

### Example
```javascript
var Autoscaling = require('ncloud-autoscaling');
var client = new Autoscaling.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Autoscaling.V2Api();

var deleteAutoScalingGroupRequest = new Autoscaling.DeleteAutoScalingGroupRequest(); // DeleteAutoScalingGroupRequest | deleteAutoScalingGroupRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteAutoScalingGroup(deleteAutoScalingGroupRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteAutoScalingGroupRequest** | [**DeleteAutoScalingGroupRequest**](DeleteAutoScalingGroupRequest.md)| deleteAutoScalingGroupRequest | 

### Return type

[**DeleteAutoScalingGroupResponse**](DeleteAutoScalingGroupResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="deleteAutoScalingLaunchConfiguration"></a>
# **deleteAutoScalingLaunchConfiguration**
> DeleteAutoScalingLaunchConfigurationRequest deleteAutoScalingLaunchConfiguration(deleteAutoScalingLaunchConfigurationRequest)



A.오토스케일링론치설정삭제

### Example
```javascript
var Autoscaling = require('ncloud-autoscaling');
var client = new Autoscaling.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Autoscaling.V2Api();

var deleteAutoScalingLaunchConfigurationRequest = new Autoscaling.DeleteAutoScalingLaunchConfigurationRequest(); // DeleteAutoScalingLaunchConfigurationRequest | deleteAutoScalingLaunchConfigurationRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteAutoScalingLaunchConfiguration(deleteAutoScalingLaunchConfigurationRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteAutoScalingLaunchConfigurationRequest** | [**DeleteAutoScalingLaunchConfigurationRequest**](DeleteAutoScalingLaunchConfigurationRequest.md)| deleteAutoScalingLaunchConfigurationRequest | 

### Return type

[**DeleteAutoScalingLaunchConfigurationRequest**](DeleteAutoScalingLaunchConfigurationRequest.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="deletePolicy"></a>
# **deletePolicy**
> DeletePolicyResponse deletePolicy(deletePolicyRequest)



F.스케일링정책삭제

### Example
```javascript
var Autoscaling = require('ncloud-autoscaling');
var client = new Autoscaling.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Autoscaling.V2Api();

var deletePolicyRequest = new Autoscaling.DeletePolicyRequest(); // DeletePolicyRequest | deletePolicyRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deletePolicy(deletePolicyRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deletePolicyRequest** | [**DeletePolicyRequest**](DeletePolicyRequest.md)| deletePolicyRequest | 

### Return type

[**DeletePolicyResponse**](DeletePolicyResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="deleteScheduledAction"></a>
# **deleteScheduledAction**
> DeleteScheduledActionResponse deleteScheduledAction(deleteScheduledActionRequest)



C.스케쥴액션삭제

### Example
```javascript
var Autoscaling = require('ncloud-autoscaling');
var client = new Autoscaling.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Autoscaling.V2Api();

var deleteScheduledActionRequest = new Autoscaling.DeleteScheduledActionRequest(); // DeleteScheduledActionRequest | deleteScheduledActionRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteScheduledAction(deleteScheduledActionRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteScheduledActionRequest** | [**DeleteScheduledActionRequest**](DeleteScheduledActionRequest.md)| deleteScheduledActionRequest | 

### Return type

[**DeleteScheduledActionResponse**](DeleteScheduledActionResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="executePolicy"></a>
# **executePolicy**
> ExecutePolicyResponse executePolicy(executePolicyRequest)



F.스케일링정책수행

### Example
```javascript
var Autoscaling = require('ncloud-autoscaling');
var client = new Autoscaling.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Autoscaling.V2Api();

var executePolicyRequest = new Autoscaling.ExecutePolicyRequest(); // ExecutePolicyRequest | executePolicyRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.executePolicy(executePolicyRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **executePolicyRequest** | [**ExecutePolicyRequest**](ExecutePolicyRequest.md)| executePolicyRequest | 

### Return type

[**ExecutePolicyResponse**](ExecutePolicyResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getAdjustmentTypeList"></a>
# **getAdjustmentTypeList**
> GetAdjustmentTypeListResponse getAdjustmentTypeList(getAdjustmentTypeListRequest)



F.조정유형리스트조회

### Example
```javascript
var Autoscaling = require('ncloud-autoscaling');
var client = new Autoscaling.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Autoscaling.V2Api();

var getAdjustmentTypeListRequest = new Autoscaling.GetAdjustmentTypeListRequest(); // GetAdjustmentTypeListRequest | getAdjustmentTypeListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAdjustmentTypeList(getAdjustmentTypeListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getAdjustmentTypeListRequest** | [**GetAdjustmentTypeListRequest**](GetAdjustmentTypeListRequest.md)| getAdjustmentTypeListRequest | 

### Return type

[**GetAdjustmentTypeListResponse**](GetAdjustmentTypeListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getAutoScalingActivityLogList"></a>
# **getAutoScalingActivityLogList**
> GetAutoScalingActivityLogListResponse getAutoScalingActivityLogList(getAutoScalingActivityLogListRequest)



E.액티비티로그리스트조회

### Example
```javascript
var Autoscaling = require('ncloud-autoscaling');
var client = new Autoscaling.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Autoscaling.V2Api();

var getAutoScalingActivityLogListRequest = new Autoscaling.GetAutoScalingActivityLogListRequest(); // GetAutoScalingActivityLogListRequest | getAutoScalingActivityLogListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAutoScalingActivityLogList(getAutoScalingActivityLogListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getAutoScalingActivityLogListRequest** | [**GetAutoScalingActivityLogListRequest**](GetAutoScalingActivityLogListRequest.md)| getAutoScalingActivityLogListRequest | 

### Return type

[**GetAutoScalingActivityLogListResponse**](GetAutoScalingActivityLogListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getAutoScalingConfigurationLogList"></a>
# **getAutoScalingConfigurationLogList**
> GetAutoScalingConfigurationLogListResponse getAutoScalingConfigurationLogList(getAutoScalingConfigurationLogListRequest)



E.오토스케일링설정로그리스트조회

### Example
```javascript
var Autoscaling = require('ncloud-autoscaling');
var client = new Autoscaling.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Autoscaling.V2Api();

var getAutoScalingConfigurationLogListRequest = new Autoscaling.GetAutoScalingConfigurationLogListRequest(); // GetAutoScalingConfigurationLogListRequest | getAutoScalingConfigurationLogListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAutoScalingConfigurationLogList(getAutoScalingConfigurationLogListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getAutoScalingConfigurationLogListRequest** | [**GetAutoScalingConfigurationLogListRequest**](GetAutoScalingConfigurationLogListRequest.md)| getAutoScalingConfigurationLogListRequest | 

### Return type

[**GetAutoScalingConfigurationLogListResponse**](GetAutoScalingConfigurationLogListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getAutoScalingGroupList"></a>
# **getAutoScalingGroupList**
> GetAutoScalingGroupListResponse getAutoScalingGroupList(getAutoScalingGroupListRequest)



B.오토스케일링그룹리스트조회

### Example
```javascript
var Autoscaling = require('ncloud-autoscaling');
var client = new Autoscaling.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Autoscaling.V2Api();

var getAutoScalingGroupListRequest = new Autoscaling.GetAutoScalingGroupListRequest(); // GetAutoScalingGroupListRequest | getAutoScalingGroupListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAutoScalingGroupList(getAutoScalingGroupListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getAutoScalingGroupListRequest** | [**GetAutoScalingGroupListRequest**](GetAutoScalingGroupListRequest.md)| getAutoScalingGroupListRequest | 

### Return type

[**GetAutoScalingGroupListResponse**](GetAutoScalingGroupListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getAutoScalingPolicyList"></a>
# **getAutoScalingPolicyList**
> GetAutoScalingPolicyListResponse getAutoScalingPolicyList(getAutoScalingPolicyListRequest)



F.오토스케일링정책리스트조회

### Example
```javascript
var Autoscaling = require('ncloud-autoscaling');
var client = new Autoscaling.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Autoscaling.V2Api();

var getAutoScalingPolicyListRequest = new Autoscaling.GetAutoScalingPolicyListRequest(); // GetAutoScalingPolicyListRequest | getAutoScalingPolicyListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAutoScalingPolicyList(getAutoScalingPolicyListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getAutoScalingPolicyListRequest** | [**GetAutoScalingPolicyListRequest**](GetAutoScalingPolicyListRequest.md)| getAutoScalingPolicyListRequest | 

### Return type

[**GetAutoScalingPolicyListResponse**](GetAutoScalingPolicyListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getLaunchConfigurationList"></a>
# **getLaunchConfigurationList**
> GetLaunchConfigurationListResponse getLaunchConfigurationList(getLaunchConfigurationListRequest)



A.론치설정리스트조회

### Example
```javascript
var Autoscaling = require('ncloud-autoscaling');
var client = new Autoscaling.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Autoscaling.V2Api();

var getLaunchConfigurationListRequest = new Autoscaling.GetLaunchConfigurationListRequest(); // GetLaunchConfigurationListRequest | getLaunchConfigurationListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLaunchConfigurationList(getLaunchConfigurationListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getLaunchConfigurationListRequest** | [**GetLaunchConfigurationListRequest**](GetLaunchConfigurationListRequest.md)| getLaunchConfigurationListRequest | 

### Return type

[**GetLaunchConfigurationListResponse**](GetLaunchConfigurationListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getScalingProcessTypeList"></a>
# **getScalingProcessTypeList**
> GetScalingProcessTypeListResponse getScalingProcessTypeList(getScalingProcessTypeListRequest)



D.프로세스구분리스트조회

### Example
```javascript
var Autoscaling = require('ncloud-autoscaling');
var client = new Autoscaling.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Autoscaling.V2Api();

var getScalingProcessTypeListRequest = new Autoscaling.GetScalingProcessTypeListRequest(); // GetScalingProcessTypeListRequest | getScalingProcessTypeListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getScalingProcessTypeList(getScalingProcessTypeListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getScalingProcessTypeListRequest** | [**GetScalingProcessTypeListRequest**](GetScalingProcessTypeListRequest.md)| getScalingProcessTypeListRequest | 

### Return type

[**GetScalingProcessTypeListResponse**](GetScalingProcessTypeListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getScheduledActionList"></a>
# **getScheduledActionList**
> GetScheduledActionListResponse getScheduledActionList(getScheduledActionListRequest)



C.스케쥴액션리스트조회

### Example
```javascript
var Autoscaling = require('ncloud-autoscaling');
var client = new Autoscaling.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Autoscaling.V2Api();

var getScheduledActionListRequest = new Autoscaling.GetScheduledActionListRequest(); // GetScheduledActionListRequest | getScheduledActionListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getScheduledActionList(getScheduledActionListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getScheduledActionListRequest** | [**GetScheduledActionListRequest**](GetScheduledActionListRequest.md)| getScheduledActionListRequest | 

### Return type

[**GetScheduledActionListResponse**](GetScheduledActionListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="putScalingPolicy"></a>
# **putScalingPolicy**
> PutScalingPolicyResponse putScalingPolicy(putScalingPolicyRequest)



F.스케일링정책생성/변경

### Example
```javascript
var Autoscaling = require('ncloud-autoscaling');
var client = new Autoscaling.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Autoscaling.V2Api();

var putScalingPolicyRequest = new Autoscaling.PutScalingPolicyRequest(); // PutScalingPolicyRequest | putScalingPolicyRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putScalingPolicy(putScalingPolicyRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **putScalingPolicyRequest** | [**PutScalingPolicyRequest**](PutScalingPolicyRequest.md)| putScalingPolicyRequest | 

### Return type

[**PutScalingPolicyResponse**](PutScalingPolicyResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="putScheduledUpdateGroupAction"></a>
# **putScheduledUpdateGroupAction**
> PutScheduledUpdateGroupActionResponse putScheduledUpdateGroupAction(putScheduledUpdateGroupActionRequest)



C.스케쥴액션생성|수정

### Example
```javascript
var Autoscaling = require('ncloud-autoscaling');
var client = new Autoscaling.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Autoscaling.V2Api();

var putScheduledUpdateGroupActionRequest = new Autoscaling.PutScheduledUpdateGroupActionRequest(); // PutScheduledUpdateGroupActionRequest | putScheduledUpdateGroupActionRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putScheduledUpdateGroupAction(putScheduledUpdateGroupActionRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **putScheduledUpdateGroupActionRequest** | [**PutScheduledUpdateGroupActionRequest**](PutScheduledUpdateGroupActionRequest.md)| putScheduledUpdateGroupActionRequest | 

### Return type

[**PutScheduledUpdateGroupActionResponse**](PutScheduledUpdateGroupActionResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="resumeProcesses"></a>
# **resumeProcesses**
> ResumeProcessesResponse resumeProcesses(resumeProcessesRequest)



D.프로세스재개

### Example
```javascript
var Autoscaling = require('ncloud-autoscaling');
var client = new Autoscaling.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Autoscaling.V2Api();

var resumeProcessesRequest = new Autoscaling.ResumeProcessesRequest(); // ResumeProcessesRequest | resumeProcessesRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.resumeProcesses(resumeProcessesRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resumeProcessesRequest** | [**ResumeProcessesRequest**](ResumeProcessesRequest.md)| resumeProcessesRequest | 

### Return type

[**ResumeProcessesResponse**](ResumeProcessesResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="setDesiredCapacity"></a>
# **setDesiredCapacity**
> SetDesiredCapacityResponse setDesiredCapacity(setDesiredCapacityRequest)



B.기대용량치갱신

### Example
```javascript
var Autoscaling = require('ncloud-autoscaling');
var client = new Autoscaling.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Autoscaling.V2Api();

var setDesiredCapacityRequest = new Autoscaling.SetDesiredCapacityRequest(); // SetDesiredCapacityRequest | setDesiredCapacityRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setDesiredCapacity(setDesiredCapacityRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setDesiredCapacityRequest** | [**SetDesiredCapacityRequest**](SetDesiredCapacityRequest.md)| setDesiredCapacityRequest | 

### Return type

[**SetDesiredCapacityResponse**](SetDesiredCapacityResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="setServerInstanceHealth"></a>
# **setServerInstanceHealth**
> SetServerInstanceHealthResponse setServerInstanceHealth(setServerInstanceHealthRequest)



B.서버인스턴스헬스상태갱신

### Example
```javascript
var Autoscaling = require('ncloud-autoscaling');
var client = new Autoscaling.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Autoscaling.V2Api();

var setServerInstanceHealthRequest = new Autoscaling.SetServerInstanceHealthRequest(); // SetServerInstanceHealthRequest | setServerInstanceHealthRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setServerInstanceHealth(setServerInstanceHealthRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setServerInstanceHealthRequest** | [**SetServerInstanceHealthRequest**](SetServerInstanceHealthRequest.md)| setServerInstanceHealthRequest | 

### Return type

[**SetServerInstanceHealthResponse**](SetServerInstanceHealthResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="suspendProcesses"></a>
# **suspendProcesses**
> SuspendProcessesResponse suspendProcesses(suspendProcessesRequest)



D.프로세스보류

### Example
```javascript
var Autoscaling = require('ncloud-autoscaling');
var client = new Autoscaling.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Autoscaling.V2Api();

var suspendProcessesRequest = new Autoscaling.SuspendProcessesRequest(); // SuspendProcessesRequest | suspendProcessesRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suspendProcesses(suspendProcessesRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **suspendProcessesRequest** | [**SuspendProcessesRequest**](SuspendProcessesRequest.md)| suspendProcessesRequest | 

### Return type

[**SuspendProcessesResponse**](SuspendProcessesResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="terminateServerInstanceInAutoScalingGroup"></a>
# **terminateServerInstanceInAutoScalingGroup**
> TerminateServerInstanceInAutoScalingGroupResponse terminateServerInstanceInAutoScalingGroup(terminateServerInstanceInAutoScalingGroupRequest)



B.오토스케일링그룹에속한서버인스턴스삭제

### Example
```javascript
var Autoscaling = require('ncloud-autoscaling');
var client = new Autoscaling.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Autoscaling.V2Api();

var terminateServerInstanceInAutoScalingGroupRequest = new Autoscaling.TerminateServerInstanceInAutoScalingGroupRequest(); // TerminateServerInstanceInAutoScalingGroupRequest | terminateServerInstanceInAutoScalingGroupRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.terminateServerInstanceInAutoScalingGroup(terminateServerInstanceInAutoScalingGroupRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **terminateServerInstanceInAutoScalingGroupRequest** | [**TerminateServerInstanceInAutoScalingGroupRequest**](TerminateServerInstanceInAutoScalingGroupRequest.md)| terminateServerInstanceInAutoScalingGroupRequest | 

### Return type

[**TerminateServerInstanceInAutoScalingGroupResponse**](TerminateServerInstanceInAutoScalingGroupResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="updateAutoScalingGroup"></a>
# **updateAutoScalingGroup**
> UpdateAutoScalingGroupResponse updateAutoScalingGroup(updateAutoScalingGroupRequest)



B.오토스케일링그룹수정

### Example
```javascript
var Autoscaling = require('ncloud-autoscaling');
var client = new Autoscaling.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Autoscaling.V2Api();

var updateAutoScalingGroupRequest = new Autoscaling.UpdateAutoScalingGroupRequest(); // UpdateAutoScalingGroupRequest | updateAutoScalingGroupRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateAutoScalingGroup(updateAutoScalingGroupRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateAutoScalingGroupRequest** | [**UpdateAutoScalingGroupRequest**](UpdateAutoScalingGroupRequest.md)| updateAutoScalingGroupRequest | 

### Return type

[**UpdateAutoScalingGroupResponse**](UpdateAutoScalingGroupResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

