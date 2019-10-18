# Clouddb.V2Api

All URIs are relative to *https://ncloud.apigw.ntruss.com/clouddb/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCloudDBInstance**](V2Api.md#createCloudDBInstance) | **POST** /createCloudDBInstance | 
[**deleteCloudDBServerInstance**](V2Api.md#deleteCloudDBServerInstance) | **POST** /deleteCloudDBServerInstance | 
[**downloadDmsFile**](V2Api.md#downloadDmsFile) | **POST** /downloadDmsFile | 
[**flushCloudDBInstance**](V2Api.md#flushCloudDBInstance) | **POST** /flushCloudDBInstance | 
[**getBackupList**](V2Api.md#getBackupList) | **POST** /getBackupList | 
[**getCloudDBConfigGroupList**](V2Api.md#getCloudDBConfigGroupList) | **POST** /getCloudDBConfigGroupList | 
[**getCloudDBImageProductList**](V2Api.md#getCloudDBImageProductList) | **POST** /getCloudDBImageProductList | 
[**getCloudDBInstanceList**](V2Api.md#getCloudDBInstanceList) | **POST** /getCloudDBInstanceList | 
[**getCloudDBProductList**](V2Api.md#getCloudDBProductList) | **POST** /getCloudDBProductList | 
[**getDmsOperation**](V2Api.md#getDmsOperation) | **POST** /getDmsOperation | 
[**getObjectStorageBackupList**](V2Api.md#getObjectStorageBackupList) | **POST** /getObjectStorageBackupList | 
[**rebootCloudDBServerInstance**](V2Api.md#rebootCloudDBServerInstance) | **POST** /rebootCloudDBServerInstance | 
[**restoreDmsDatabase**](V2Api.md#restoreDmsDatabase) | **POST** /restoreDmsDatabase | 
[**restoreDmsTransactionLog**](V2Api.md#restoreDmsTransactionLog) | **POST** /restoreDmsTransactionLog | 
[**setObjectStorageInfo**](V2Api.md#setObjectStorageInfo) | **POST** /setObjectStorageInfo | 
[**uploadDmsFile**](V2Api.md#uploadDmsFile) | **POST** /uploadDmsFile | 


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

<a name="downloadDmsFile"></a>
# **downloadDmsFile**
> DownloadDmsFileResponse downloadDmsFile(downloadDmsFileRequest)



DMS파일다운로드

### Example
```javascript
var Clouddb = require('ncloud-clouddb');
var client = new Clouddb.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Clouddb.V2Api();

var downloadDmsFileRequest = new Clouddb.DownloadDmsFileRequest(); // DownloadDmsFileRequest | downloadDmsFileRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.downloadDmsFile(downloadDmsFileRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **downloadDmsFileRequest** | [**DownloadDmsFileRequest**](DownloadDmsFileRequest.md)| downloadDmsFileRequest | 

### Return type

[**DownloadDmsFileResponse**](DownloadDmsFileResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="flushCloudDBInstance"></a>
# **flushCloudDBInstance**
> FlushCloudDBInstanceResponse flushCloudDBInstance(flushCloudDBInstanceRequest)



CloudDB Flush

### Example
```javascript
var Clouddb = require('ncloud-clouddb');
var client = new Clouddb.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Clouddb.V2Api();

var flushCloudDBInstanceRequest = new Clouddb.FlushCloudDBInstanceRequest(); // FlushCloudDBInstanceRequest | flushCloudDBInstanceRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.flushCloudDBInstance(flushCloudDBInstanceRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flushCloudDBInstanceRequest** | [**FlushCloudDBInstanceRequest**](FlushCloudDBInstanceRequest.md)| flushCloudDBInstanceRequest | 

### Return type

[**FlushCloudDBInstanceResponse**](FlushCloudDBInstanceResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getBackupList"></a>
# **getBackupList**
> GetBackupListResponse getBackupList(getBackupListRequest)



백업리스트조회

### Example
```javascript
var Clouddb = require('ncloud-clouddb');
var client = new Clouddb.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Clouddb.V2Api();

var getBackupListRequest = new Clouddb.GetBackupListRequest(); // GetBackupListRequest | getBackupListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBackupList(getBackupListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getBackupListRequest** | [**GetBackupListRequest**](GetBackupListRequest.md)| getBackupListRequest | 

### Return type

[**GetBackupListResponse**](GetBackupListResponse.md)

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

<a name="getDmsOperation"></a>
# **getDmsOperation**
> GetDmsOperationResponse getDmsOperation(getDmsOperationRequest)



DMS상태조회

### Example
```javascript
var Clouddb = require('ncloud-clouddb');
var client = new Clouddb.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Clouddb.V2Api();

var getDmsOperationRequest = new Clouddb.GetDmsOperationRequest(); // GetDmsOperationRequest | getDmsOperationRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDmsOperation(getDmsOperationRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getDmsOperationRequest** | [**GetDmsOperationRequest**](GetDmsOperationRequest.md)| getDmsOperationRequest | 

### Return type

[**GetDmsOperationResponse**](GetDmsOperationResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getObjectStorageBackupList"></a>
# **getObjectStorageBackupList**
> GetObjectStorageBackupListResponse getObjectStorageBackupList(getObjectStorageBackupListRequest)



오브젝트스토리지백업리스트조회

### Example
```javascript
var Clouddb = require('ncloud-clouddb');
var client = new Clouddb.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Clouddb.V2Api();

var getObjectStorageBackupListRequest = new Clouddb.GetObjectStorageBackupListRequest(); // GetObjectStorageBackupListRequest | getObjectStorageBackupListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getObjectStorageBackupList(getObjectStorageBackupListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getObjectStorageBackupListRequest** | [**GetObjectStorageBackupListRequest**](GetObjectStorageBackupListRequest.md)| getObjectStorageBackupListRequest | 

### Return type

[**GetObjectStorageBackupListResponse**](GetObjectStorageBackupListResponse.md)

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

<a name="restoreDmsDatabase"></a>
# **restoreDmsDatabase**
> RestoreDmsDatabaseResponse restoreDmsDatabase(restoreDmsDatabaseRequest)



DMS데이터베이스복구

### Example
```javascript
var Clouddb = require('ncloud-clouddb');
var client = new Clouddb.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Clouddb.V2Api();

var restoreDmsDatabaseRequest = new Clouddb.RestoreDmsDatabaseRequest(); // RestoreDmsDatabaseRequest | restoreDmsDatabaseRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.restoreDmsDatabase(restoreDmsDatabaseRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restoreDmsDatabaseRequest** | [**RestoreDmsDatabaseRequest**](RestoreDmsDatabaseRequest.md)| restoreDmsDatabaseRequest | 

### Return type

[**RestoreDmsDatabaseResponse**](RestoreDmsDatabaseResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="restoreDmsTransactionLog"></a>
# **restoreDmsTransactionLog**
> RestoreDmsTransactionLogResponse restoreDmsTransactionLog(restoreDmsTransactionLogRequest)



DMS트랜잭션로그복구

### Example
```javascript
var Clouddb = require('ncloud-clouddb');
var client = new Clouddb.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Clouddb.V2Api();

var restoreDmsTransactionLogRequest = new Clouddb.RestoreDmsTransactionLogRequest(); // RestoreDmsTransactionLogRequest | restoreDmsTransactionLogRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.restoreDmsTransactionLog(restoreDmsTransactionLogRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restoreDmsTransactionLogRequest** | [**RestoreDmsTransactionLogRequest**](RestoreDmsTransactionLogRequest.md)| restoreDmsTransactionLogRequest | 

### Return type

[**RestoreDmsTransactionLogResponse**](RestoreDmsTransactionLogResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="setObjectStorageInfo"></a>
# **setObjectStorageInfo**
> SetObjectStorageInfoResponse setObjectStorageInfo(setObjectStorageInfoRequest)



오브젝트스토리지정보설정

### Example
```javascript
var Clouddb = require('ncloud-clouddb');
var client = new Clouddb.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Clouddb.V2Api();

var setObjectStorageInfoRequest = new Clouddb.SetObjectStorageInfoRequest(); // SetObjectStorageInfoRequest | setObjectStorageInfoRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setObjectStorageInfo(setObjectStorageInfoRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setObjectStorageInfoRequest** | [**SetObjectStorageInfoRequest**](SetObjectStorageInfoRequest.md)| setObjectStorageInfoRequest | 

### Return type

[**SetObjectStorageInfoResponse**](SetObjectStorageInfoResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="uploadDmsFile"></a>
# **uploadDmsFile**
> UploadDmsFileResponse uploadDmsFile(uploadDmsFileRequest)



DMS파일업로드

### Example
```javascript
var Clouddb = require('ncloud-clouddb');
var client = new Clouddb.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Clouddb.V2Api();

var uploadDmsFileRequest = new Clouddb.UploadDmsFileRequest(); // UploadDmsFileRequest | uploadDmsFileRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadDmsFile(uploadDmsFileRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadDmsFileRequest** | [**UploadDmsFileRequest**](UploadDmsFileRequest.md)| uploadDmsFileRequest | 

### Return type

[**UploadDmsFileResponse**](UploadDmsFileResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

