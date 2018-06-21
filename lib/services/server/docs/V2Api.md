# Server.V2Api

All URIs are relative to *https://ncloud.apigw.ntruss.com/server/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNasVolumeAccessControl**](V2Api.md#addNasVolumeAccessControl) | **POST** /addNasVolumeAccessControl | 
[**addPortForwardingRules**](V2Api.md#addPortForwardingRules) | **POST** /addPortForwardingRules | 
[**associatePublicIpWithServerInstance**](V2Api.md#associatePublicIpWithServerInstance) | **POST** /associatePublicIpWithServerInstance | 
[**changeNasVolumeSize**](V2Api.md#changeNasVolumeSize) | **POST** /changeNasVolumeSize | 
[**changeServerInstanceSpec**](V2Api.md#changeServerInstanceSpec) | **POST** /changeServerInstanceSpec | 
[**createBlockStorageInstance**](V2Api.md#createBlockStorageInstance) | **POST** /createBlockStorageInstance | 
[**createLoginKey**](V2Api.md#createLoginKey) | **POST** /createLoginKey | 
[**createMemberServerImage**](V2Api.md#createMemberServerImage) | **POST** /createMemberServerImage | 
[**createNasVolumeInstance**](V2Api.md#createNasVolumeInstance) | **POST** /createNasVolumeInstance | 
[**createPublicIpInstance**](V2Api.md#createPublicIpInstance) | **POST** /createPublicIpInstance | 
[**createServerInstances**](V2Api.md#createServerInstances) | **POST** /createServerInstances | 
[**deleteBlockStorageInstances**](V2Api.md#deleteBlockStorageInstances) | **POST** /deleteBlockStorageInstances | 
[**deleteLoginKey**](V2Api.md#deleteLoginKey) | **POST** /deleteLoginKey | 
[**deleteMemberServerImages**](V2Api.md#deleteMemberServerImages) | **POST** /deleteMemberServerImages | 
[**deleteNasVolumeInstance**](V2Api.md#deleteNasVolumeInstance) | **POST** /deleteNasVolumeInstance | 
[**deletePortForwardingRules**](V2Api.md#deletePortForwardingRules) | **POST** /deletePortForwardingRules | 
[**deletePublicIpInstances**](V2Api.md#deletePublicIpInstances) | **POST** /deletePublicIpInstances | 
[**disassociatePublicIpFromServerInstance**](V2Api.md#disassociatePublicIpFromServerInstance) | **POST** /disassociatePublicIpFromServerInstance | 
[**getAccessControlGroupList**](V2Api.md#getAccessControlGroupList) | **POST** /getAccessControlGroupList | 
[**getAccessControlGroupServerInstanceList**](V2Api.md#getAccessControlGroupServerInstanceList) | **POST** /getAccessControlGroupServerInstanceList | 
[**getAccessControlRuleList**](V2Api.md#getAccessControlRuleList) | **POST** /getAccessControlRuleList | 
[**getBlockStorageInstanceList**](V2Api.md#getBlockStorageInstanceList) | **POST** /getBlockStorageInstanceList | 
[**getBlockStorageSnapshotInstanceList**](V2Api.md#getBlockStorageSnapshotInstanceList) | **POST** /getBlockStorageSnapshotInstanceList | 
[**getLoginKeyList**](V2Api.md#getLoginKeyList) | **POST** /getLoginKeyList | 
[**getMemberServerImageList**](V2Api.md#getMemberServerImageList) | **POST** /getMemberServerImageList | 
[**getNasVolumeInstanceList**](V2Api.md#getNasVolumeInstanceList) | **POST** /getNasVolumeInstanceList | 
[**getNasVolumeInstanceRatingList**](V2Api.md#getNasVolumeInstanceRatingList) | **POST** /getNasVolumeInstanceRatingList | 
[**getPortForwardingRuleList**](V2Api.md#getPortForwardingRuleList) | **POST** /getPortForwardingRuleList | 
[**getPublicIpInstanceList**](V2Api.md#getPublicIpInstanceList) | **POST** /getPublicIpInstanceList | 
[**getPublicIpTargetServerInstanceList**](V2Api.md#getPublicIpTargetServerInstanceList) | **POST** /getPublicIpTargetServerInstanceList | 
[**getRaidList**](V2Api.md#getRaidList) | **POST** /getRaidList | 
[**getRegionList**](V2Api.md#getRegionList) | **POST** /getRegionList | 
[**getRootPassword**](V2Api.md#getRootPassword) | **POST** /getRootPassword | 
[**getServerImageProductList**](V2Api.md#getServerImageProductList) | **POST** /getServerImageProductList | 
[**getServerInstanceList**](V2Api.md#getServerInstanceList) | **POST** /getServerInstanceList | 
[**getServerProductList**](V2Api.md#getServerProductList) | **POST** /getServerProductList | 
[**getZoneList**](V2Api.md#getZoneList) | **POST** /getZoneList | 
[**rebootServerInstances**](V2Api.md#rebootServerInstances) | **POST** /rebootServerInstances | 
[**recreateServerInstance**](V2Api.md#recreateServerInstance) | **POST** /recreateServerInstance | 
[**removeNasVolumeAccessControl**](V2Api.md#removeNasVolumeAccessControl) | **POST** /removeNasVolumeAccessControl | 
[**setNasVolumeAccessControl**](V2Api.md#setNasVolumeAccessControl) | **POST** /setNasVolumeAccessControl | 
[**startServerInstances**](V2Api.md#startServerInstances) | **POST** /startServerInstances | 
[**stopServerInstances**](V2Api.md#stopServerInstances) | **POST** /stopServerInstances | 
[**terminateServerInstances**](V2Api.md#terminateServerInstances) | **POST** /terminateServerInstances | 


<a name="addNasVolumeAccessControl"></a>
# **addNasVolumeAccessControl**
> AddNasVolumeAccessControlResponse addNasVolumeAccessControl(addNasVolumeAccessControlRequest)



NAS볼륨인스턴스접근제어추가

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var addNasVolumeAccessControlRequest = new Server.AddNasVolumeAccessControlRequest(); // AddNasVolumeAccessControlRequest | addNasVolumeAccessControlRequest


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

<a name="addPortForwardingRules"></a>
# **addPortForwardingRules**
> AddPortForwardingRulesResponse addPortForwardingRules(addPortForwardingRulesRequest)



포트포워딩Rule추가

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var addPortForwardingRulesRequest = new Server.AddPortForwardingRulesRequest(); // AddPortForwardingRulesRequest | addPortForwardingRulesRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addPortForwardingRules(addPortForwardingRulesRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addPortForwardingRulesRequest** | [**AddPortForwardingRulesRequest**](AddPortForwardingRulesRequest.md)| addPortForwardingRulesRequest | 

### Return type

[**AddPortForwardingRulesResponse**](AddPortForwardingRulesResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="associatePublicIpWithServerInstance"></a>
# **associatePublicIpWithServerInstance**
> AssociatePublicIpWithServerInstanceResponse associatePublicIpWithServerInstance(associatePublicIpWithServerInstanceRequest)



공인IP를서버인스턴스에할당

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var associatePublicIpWithServerInstanceRequest = new Server.AssociatePublicIpWithServerInstanceRequest(); // AssociatePublicIpWithServerInstanceRequest | associatePublicIpWithServerInstanceRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.associatePublicIpWithServerInstance(associatePublicIpWithServerInstanceRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **associatePublicIpWithServerInstanceRequest** | [**AssociatePublicIpWithServerInstanceRequest**](AssociatePublicIpWithServerInstanceRequest.md)| associatePublicIpWithServerInstanceRequest | 

### Return type

[**AssociatePublicIpWithServerInstanceResponse**](AssociatePublicIpWithServerInstanceResponse.md)

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
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var changeNasVolumeSizeRequest = new Server.ChangeNasVolumeSizeRequest(); // ChangeNasVolumeSizeRequest | changeNasVolumeSizeRequest


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

<a name="changeServerInstanceSpec"></a>
# **changeServerInstanceSpec**
> ChangeServerInstanceSpecResponse changeServerInstanceSpec(changeServerInstanceSpecRequest)



서버인스턴스스팩변경

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var changeServerInstanceSpecRequest = new Server.ChangeServerInstanceSpecRequest(); // ChangeServerInstanceSpecRequest | changeServerInstanceSpecRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.changeServerInstanceSpec(changeServerInstanceSpecRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **changeServerInstanceSpecRequest** | [**ChangeServerInstanceSpecRequest**](ChangeServerInstanceSpecRequest.md)| changeServerInstanceSpecRequest | 

### Return type

[**ChangeServerInstanceSpecResponse**](ChangeServerInstanceSpecResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="createBlockStorageInstance"></a>
# **createBlockStorageInstance**
> CreateBlockStorageInstanceResponse createBlockStorageInstance(createBlockStorageInstanceRequest)



블록스토리지인스턴스생성

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var createBlockStorageInstanceRequest = new Server.CreateBlockStorageInstanceRequest(); // CreateBlockStorageInstanceRequest | createBlockStorageInstanceRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createBlockStorageInstance(createBlockStorageInstanceRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBlockStorageInstanceRequest** | [**CreateBlockStorageInstanceRequest**](CreateBlockStorageInstanceRequest.md)| createBlockStorageInstanceRequest | 

### Return type

[**CreateBlockStorageInstanceResponse**](CreateBlockStorageInstanceResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="createLoginKey"></a>
# **createLoginKey**
> CreateLoginKeyResponse createLoginKey(createLoginKeyRequest)



로그인키생성

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var createLoginKeyRequest = new Server.CreateLoginKeyRequest(); // CreateLoginKeyRequest | createLoginKeyRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createLoginKey(createLoginKeyRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createLoginKeyRequest** | [**CreateLoginKeyRequest**](CreateLoginKeyRequest.md)| createLoginKeyRequest | 

### Return type

[**CreateLoginKeyResponse**](CreateLoginKeyResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="createMemberServerImage"></a>
# **createMemberServerImage**
> CreateMemberServerImageResponse createMemberServerImage(createMemberServerImageRequest)



회원서버이미지생성

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var createMemberServerImageRequest = new Server.CreateMemberServerImageRequest(); // CreateMemberServerImageRequest | createMemberServerImageRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createMemberServerImage(createMemberServerImageRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createMemberServerImageRequest** | [**CreateMemberServerImageRequest**](CreateMemberServerImageRequest.md)| createMemberServerImageRequest | 

### Return type

[**CreateMemberServerImageResponse**](CreateMemberServerImageResponse.md)

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
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var createNasVolumeInstanceRequest = new Server.CreateNasVolumeInstanceRequest(); // CreateNasVolumeInstanceRequest | createNasVolumeInstanceRequest


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

<a name="createPublicIpInstance"></a>
# **createPublicIpInstance**
> CreatePublicIpInstanceResponse createPublicIpInstance(createPublicIpInstanceRequest)



공인IP인스턴스생성

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var createPublicIpInstanceRequest = new Server.CreatePublicIpInstanceRequest(); // CreatePublicIpInstanceRequest | createPublicIpInstanceRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPublicIpInstance(createPublicIpInstanceRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPublicIpInstanceRequest** | [**CreatePublicIpInstanceRequest**](CreatePublicIpInstanceRequest.md)| createPublicIpInstanceRequest | 

### Return type

[**CreatePublicIpInstanceResponse**](CreatePublicIpInstanceResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="createServerInstances"></a>
# **createServerInstances**
> CreateServerInstancesResponse createServerInstances(createServerInstancesRequest)



서버인스턴스생성

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var createServerInstancesRequest = new Server.CreateServerInstancesRequest(); // CreateServerInstancesRequest | createServerInstancesRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createServerInstances(createServerInstancesRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createServerInstancesRequest** | [**CreateServerInstancesRequest**](CreateServerInstancesRequest.md)| createServerInstancesRequest | 

### Return type

[**CreateServerInstancesResponse**](CreateServerInstancesResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="deleteBlockStorageInstances"></a>
# **deleteBlockStorageInstances**
> DeleteBlockStorageInstancesResponse deleteBlockStorageInstances(deleteBlockStorageInstancesRequest)



블록스토리지인스턴스삭제

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var deleteBlockStorageInstancesRequest = new Server.DeleteBlockStorageInstancesRequest(); // DeleteBlockStorageInstancesRequest | deleteBlockStorageInstancesRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteBlockStorageInstances(deleteBlockStorageInstancesRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteBlockStorageInstancesRequest** | [**DeleteBlockStorageInstancesRequest**](DeleteBlockStorageInstancesRequest.md)| deleteBlockStorageInstancesRequest | 

### Return type

[**DeleteBlockStorageInstancesResponse**](DeleteBlockStorageInstancesResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="deleteLoginKey"></a>
# **deleteLoginKey**
> DeleteLoginKeyResponse deleteLoginKey(deleteLoginKeyRequest)



로그인키삭제

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var deleteLoginKeyRequest = new Server.DeleteLoginKeyRequest(); // DeleteLoginKeyRequest | deleteLoginKeyRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteLoginKey(deleteLoginKeyRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteLoginKeyRequest** | [**DeleteLoginKeyRequest**](DeleteLoginKeyRequest.md)| deleteLoginKeyRequest | 

### Return type

[**DeleteLoginKeyResponse**](DeleteLoginKeyResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="deleteMemberServerImages"></a>
# **deleteMemberServerImages**
> DeleteMemberServerImagesResponse deleteMemberServerImages(deleteMemberServerImagesRequest)



회원서버이미지삭제

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var deleteMemberServerImagesRequest = new Server.DeleteMemberServerImagesRequest(); // DeleteMemberServerImagesRequest | deleteMemberServerImagesRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteMemberServerImages(deleteMemberServerImagesRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteMemberServerImagesRequest** | [**DeleteMemberServerImagesRequest**](DeleteMemberServerImagesRequest.md)| deleteMemberServerImagesRequest | 

### Return type

[**DeleteMemberServerImagesResponse**](DeleteMemberServerImagesResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="deleteNasVolumeInstance"></a>
# **deleteNasVolumeInstance**
> DeleteNasVolumeInstanceResponse deleteNasVolumeInstance(deleteNasVolumeInstanceRequest)



NAS볼륨인스턴스삭제

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var deleteNasVolumeInstanceRequest = new Server.DeleteNasVolumeInstanceRequest(); // DeleteNasVolumeInstanceRequest | deleteNasVolumeInstanceRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteNasVolumeInstance(deleteNasVolumeInstanceRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteNasVolumeInstanceRequest** | [**DeleteNasVolumeInstanceRequest**](DeleteNasVolumeInstanceRequest.md)| deleteNasVolumeInstanceRequest | 

### Return type

[**DeleteNasVolumeInstanceResponse**](DeleteNasVolumeInstanceResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="deletePortForwardingRules"></a>
# **deletePortForwardingRules**
> DeletePortForwardingRulesResponse deletePortForwardingRules(deletePortForwardingRulesRequest)



포트포워딩Rule삭제

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var deletePortForwardingRulesRequest = new Server.DeletePortForwardingRulesRequest(); // DeletePortForwardingRulesRequest | deletePortForwardingRulesRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deletePortForwardingRules(deletePortForwardingRulesRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deletePortForwardingRulesRequest** | [**DeletePortForwardingRulesRequest**](DeletePortForwardingRulesRequest.md)| deletePortForwardingRulesRequest | 

### Return type

[**DeletePortForwardingRulesResponse**](DeletePortForwardingRulesResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="deletePublicIpInstances"></a>
# **deletePublicIpInstances**
> DeletePublicIpInstancesResponse deletePublicIpInstances(deletePublicIpInstancesRequest)



공인IP인스턴스삭제

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var deletePublicIpInstancesRequest = new Server.DeletePublicIpInstancesRequest(); // DeletePublicIpInstancesRequest | deletePublicIpInstancesRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deletePublicIpInstances(deletePublicIpInstancesRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deletePublicIpInstancesRequest** | [**DeletePublicIpInstancesRequest**](DeletePublicIpInstancesRequest.md)| deletePublicIpInstancesRequest | 

### Return type

[**DeletePublicIpInstancesResponse**](DeletePublicIpInstancesResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="disassociatePublicIpFromServerInstance"></a>
# **disassociatePublicIpFromServerInstance**
> DisassociatePublicIpFromServerInstanceResponse disassociatePublicIpFromServerInstance(disassociatePublicIpFromServerInstanceRequest)



공인IP를서버인스턴스에할당해제

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var disassociatePublicIpFromServerInstanceRequest = new Server.DisassociatePublicIpFromServerInstanceRequest(); // DisassociatePublicIpFromServerInstanceRequest | disassociatePublicIpFromServerInstanceRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.disassociatePublicIpFromServerInstance(disassociatePublicIpFromServerInstanceRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **disassociatePublicIpFromServerInstanceRequest** | [**DisassociatePublicIpFromServerInstanceRequest**](DisassociatePublicIpFromServerInstanceRequest.md)| disassociatePublicIpFromServerInstanceRequest | 

### Return type

[**DisassociatePublicIpFromServerInstanceResponse**](DisassociatePublicIpFromServerInstanceResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getAccessControlGroupList"></a>
# **getAccessControlGroupList**
> GetAccessControlGroupListResponse getAccessControlGroupList(getAccessControlGroupListRequest)



접근제어그룹리스트조회

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var getAccessControlGroupListRequest = new Server.GetAccessControlGroupListRequest(); // GetAccessControlGroupListRequest | getAccessControlGroupListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccessControlGroupList(getAccessControlGroupListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getAccessControlGroupListRequest** | [**GetAccessControlGroupListRequest**](GetAccessControlGroupListRequest.md)| getAccessControlGroupListRequest | 

### Return type

[**GetAccessControlGroupListResponse**](GetAccessControlGroupListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getAccessControlGroupServerInstanceList"></a>
# **getAccessControlGroupServerInstanceList**
> GetAccessControlGroupServerInstanceListResponse getAccessControlGroupServerInstanceList(getAccessControlGroupServerInstanceListRequest)



접근제어그룹적용된서버인스턴스리스트조회

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var getAccessControlGroupServerInstanceListRequest = new Server.GetAccessControlGroupServerInstanceListRequest(); // GetAccessControlGroupServerInstanceListRequest | getAccessControlGroupServerInstanceListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccessControlGroupServerInstanceList(getAccessControlGroupServerInstanceListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getAccessControlGroupServerInstanceListRequest** | [**GetAccessControlGroupServerInstanceListRequest**](GetAccessControlGroupServerInstanceListRequest.md)| getAccessControlGroupServerInstanceListRequest | 

### Return type

[**GetAccessControlGroupServerInstanceListResponse**](GetAccessControlGroupServerInstanceListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getAccessControlRuleList"></a>
# **getAccessControlRuleList**
> GetAccessControlRuleListResponse getAccessControlRuleList(getAccessControlRuleListRequest)



접근제어규칙리스트조회

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var getAccessControlRuleListRequest = new Server.GetAccessControlRuleListRequest(); // GetAccessControlRuleListRequest | getAccessControlRuleListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccessControlRuleList(getAccessControlRuleListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getAccessControlRuleListRequest** | [**GetAccessControlRuleListRequest**](GetAccessControlRuleListRequest.md)| getAccessControlRuleListRequest | 

### Return type

[**GetAccessControlRuleListResponse**](GetAccessControlRuleListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getBlockStorageInstanceList"></a>
# **getBlockStorageInstanceList**
> GetBlockStorageInstanceListResponse getBlockStorageInstanceList(getBlockStorageInstanceListRequest)



블록스토리지인스턴스리스트조회

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var getBlockStorageInstanceListRequest = new Server.GetBlockStorageInstanceListRequest(); // GetBlockStorageInstanceListRequest | getBlockStorageInstanceListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBlockStorageInstanceList(getBlockStorageInstanceListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getBlockStorageInstanceListRequest** | [**GetBlockStorageInstanceListRequest**](GetBlockStorageInstanceListRequest.md)| getBlockStorageInstanceListRequest | 

### Return type

[**GetBlockStorageInstanceListResponse**](GetBlockStorageInstanceListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getBlockStorageSnapshotInstanceList"></a>
# **getBlockStorageSnapshotInstanceList**
> GetBlockStorageSnapshotInstanceListResponse getBlockStorageSnapshotInstanceList(getBlockStorageSnapshotInstanceListRequest)



블록스토리지스냅샷인스턴스리스트조회

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var getBlockStorageSnapshotInstanceListRequest = new Server.GetBlockStorageSnapshotInstanceListRequest(); // GetBlockStorageSnapshotInstanceListRequest | getBlockStorageSnapshotInstanceListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBlockStorageSnapshotInstanceList(getBlockStorageSnapshotInstanceListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getBlockStorageSnapshotInstanceListRequest** | [**GetBlockStorageSnapshotInstanceListRequest**](GetBlockStorageSnapshotInstanceListRequest.md)| getBlockStorageSnapshotInstanceListRequest | 

### Return type

[**GetBlockStorageSnapshotInstanceListResponse**](GetBlockStorageSnapshotInstanceListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getLoginKeyList"></a>
# **getLoginKeyList**
> GetLoginKeyListResponse getLoginKeyList(getLoginKeyListRequest)



로그인키리스트조회

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var getLoginKeyListRequest = new Server.GetLoginKeyListRequest(); // GetLoginKeyListRequest | getLoginKeyListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLoginKeyList(getLoginKeyListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getLoginKeyListRequest** | [**GetLoginKeyListRequest**](GetLoginKeyListRequest.md)| getLoginKeyListRequest | 

### Return type

[**GetLoginKeyListResponse**](GetLoginKeyListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getMemberServerImageList"></a>
# **getMemberServerImageList**
> GetMemberServerImageListResponse getMemberServerImageList(getMemberServerImageListRequest)



회원서버이미지리스트조회

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var getMemberServerImageListRequest = new Server.GetMemberServerImageListRequest(); // GetMemberServerImageListRequest | getMemberServerImageListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMemberServerImageList(getMemberServerImageListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getMemberServerImageListRequest** | [**GetMemberServerImageListRequest**](GetMemberServerImageListRequest.md)| getMemberServerImageListRequest | 

### Return type

[**GetMemberServerImageListResponse**](GetMemberServerImageListResponse.md)

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
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var getNasVolumeInstanceListRequest = new Server.GetNasVolumeInstanceListRequest(); // GetNasVolumeInstanceListRequest | getNasVolumeInstanceListRequest


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

<a name="getNasVolumeInstanceRatingList"></a>
# **getNasVolumeInstanceRatingList**
> GetNasVolumeInstanceRatingListResponse getNasVolumeInstanceRatingList(getNasVolumeInstanceRatingListRequest)



NAS볼륨인스턴스측정리스트조회

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var getNasVolumeInstanceRatingListRequest = new Server.GetNasVolumeInstanceRatingListRequest(); // GetNasVolumeInstanceRatingListRequest | getNasVolumeInstanceRatingListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNasVolumeInstanceRatingList(getNasVolumeInstanceRatingListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getNasVolumeInstanceRatingListRequest** | [**GetNasVolumeInstanceRatingListRequest**](GetNasVolumeInstanceRatingListRequest.md)| getNasVolumeInstanceRatingListRequest | 

### Return type

[**GetNasVolumeInstanceRatingListResponse**](GetNasVolumeInstanceRatingListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getPortForwardingRuleList"></a>
# **getPortForwardingRuleList**
> GetPortForwardingRuleListResponse getPortForwardingRuleList(getPortForwardingRuleListRequest)



포트포워딩Rule리스트조회

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var getPortForwardingRuleListRequest = new Server.GetPortForwardingRuleListRequest(); // GetPortForwardingRuleListRequest | getPortForwardingRuleListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPortForwardingRuleList(getPortForwardingRuleListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getPortForwardingRuleListRequest** | [**GetPortForwardingRuleListRequest**](GetPortForwardingRuleListRequest.md)| getPortForwardingRuleListRequest | 

### Return type

[**GetPortForwardingRuleListResponse**](GetPortForwardingRuleListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getPublicIpInstanceList"></a>
# **getPublicIpInstanceList**
> GetPublicIpInstanceListResponse getPublicIpInstanceList(getPublicIpInstanceListRequest)



공인IP인스턴스리스트조회

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var getPublicIpInstanceListRequest = new Server.GetPublicIpInstanceListRequest(); // GetPublicIpInstanceListRequest | getPublicIpInstanceListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPublicIpInstanceList(getPublicIpInstanceListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getPublicIpInstanceListRequest** | [**GetPublicIpInstanceListRequest**](GetPublicIpInstanceListRequest.md)| getPublicIpInstanceListRequest | 

### Return type

[**GetPublicIpInstanceListResponse**](GetPublicIpInstanceListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getPublicIpTargetServerInstanceList"></a>
# **getPublicIpTargetServerInstanceList**
> GetPublicIpTargetServerInstanceListResponse getPublicIpTargetServerInstanceList(getPublicIpTargetServerInstanceListRequest)



공인IP할당(가능)서버인스턴스리스트조회

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var getPublicIpTargetServerInstanceListRequest = new Server.GetPublicIpTargetServerInstanceListRequest(); // GetPublicIpTargetServerInstanceListRequest | getPublicIpTargetServerInstanceListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPublicIpTargetServerInstanceList(getPublicIpTargetServerInstanceListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getPublicIpTargetServerInstanceListRequest** | [**GetPublicIpTargetServerInstanceListRequest**](GetPublicIpTargetServerInstanceListRequest.md)| getPublicIpTargetServerInstanceListRequest | 

### Return type

[**GetPublicIpTargetServerInstanceListResponse**](GetPublicIpTargetServerInstanceListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getRaidList"></a>
# **getRaidList**
> GetRaidListResponse getRaidList(getRaidListRequest)



RAID리스트조회

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var getRaidListRequest = new Server.GetRaidListRequest(); // GetRaidListRequest | getRaidListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRaidList(getRaidListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getRaidListRequest** | [**GetRaidListRequest**](GetRaidListRequest.md)| getRaidListRequest | 

### Return type

[**GetRaidListResponse**](GetRaidListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getRegionList"></a>
# **getRegionList**
> GetRegionListResponse getRegionList(getRegionListRequest)



REGION리스트조회

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var getRegionListRequest = new Server.GetRegionListRequest(); // GetRegionListRequest | getRegionListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRegionList(getRegionListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getRegionListRequest** | [**GetRegionListRequest**](GetRegionListRequest.md)| getRegionListRequest | 

### Return type

[**GetRegionListResponse**](GetRegionListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getRootPassword"></a>
# **getRootPassword**
> GetRootPasswordResponse getRootPassword(getRootPasswordRequest)



루트패스워드조회

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var getRootPasswordRequest = new Server.GetRootPasswordRequest(); // GetRootPasswordRequest | getRootPasswordRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRootPassword(getRootPasswordRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getRootPasswordRequest** | [**GetRootPasswordRequest**](GetRootPasswordRequest.md)| getRootPasswordRequest | 

### Return type

[**GetRootPasswordResponse**](GetRootPasswordResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getServerImageProductList"></a>
# **getServerImageProductList**
> GetServerImageProductListResponse getServerImageProductList(getServerImageProductListRequest)



서버이미지상품리스트조회

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var getServerImageProductListRequest = new Server.GetServerImageProductListRequest(); // GetServerImageProductListRequest | getServerImageProductListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getServerImageProductList(getServerImageProductListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getServerImageProductListRequest** | [**GetServerImageProductListRequest**](GetServerImageProductListRequest.md)| getServerImageProductListRequest | 

### Return type

[**GetServerImageProductListResponse**](GetServerImageProductListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getServerInstanceList"></a>
# **getServerInstanceList**
> GetServerInstanceListResponse getServerInstanceList(getServerInstanceListRequest)



서버인스턴스리스트조회

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var getServerInstanceListRequest = new Server.GetServerInstanceListRequest(); // GetServerInstanceListRequest | getServerInstanceListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getServerInstanceList(getServerInstanceListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getServerInstanceListRequest** | [**GetServerInstanceListRequest**](GetServerInstanceListRequest.md)| getServerInstanceListRequest | 

### Return type

[**GetServerInstanceListResponse**](GetServerInstanceListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getServerProductList"></a>
# **getServerProductList**
> GetServerProductListResponse getServerProductList(getServerProductListRequest)



서버상품리스트조회

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var getServerProductListRequest = new Server.GetServerProductListRequest(); // GetServerProductListRequest | getServerProductListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getServerProductList(getServerProductListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getServerProductListRequest** | [**GetServerProductListRequest**](GetServerProductListRequest.md)| getServerProductListRequest | 

### Return type

[**GetServerProductListResponse**](GetServerProductListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getZoneList"></a>
# **getZoneList**
> GetZoneListResponse getZoneList(getZoneListRequest)



ZONE리스트조회

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var getZoneListRequest = new Server.GetZoneListRequest(); // GetZoneListRequest | getZoneListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getZoneList(getZoneListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getZoneListRequest** | [**GetZoneListRequest**](GetZoneListRequest.md)| getZoneListRequest | 

### Return type

[**GetZoneListResponse**](GetZoneListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="rebootServerInstances"></a>
# **rebootServerInstances**
> RebootServerInstancesResponse rebootServerInstances(rebootServerInstancesRequest)



서버인스턴스재시작

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var rebootServerInstancesRequest = new Server.RebootServerInstancesRequest(); // RebootServerInstancesRequest | rebootServerInstancesRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rebootServerInstances(rebootServerInstancesRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rebootServerInstancesRequest** | [**RebootServerInstancesRequest**](RebootServerInstancesRequest.md)| rebootServerInstancesRequest | 

### Return type

[**RebootServerInstancesResponse**](RebootServerInstancesResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="recreateServerInstance"></a>
# **recreateServerInstance**
> RecreateServerInstanceResponse recreateServerInstance(recreateServerInstanceRequest)



서버인스턴스재생성

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var recreateServerInstanceRequest = new Server.RecreateServerInstanceRequest(); // RecreateServerInstanceRequest | recreateServerInstanceRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recreateServerInstance(recreateServerInstanceRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recreateServerInstanceRequest** | [**RecreateServerInstanceRequest**](RecreateServerInstanceRequest.md)| recreateServerInstanceRequest | 

### Return type

[**RecreateServerInstanceResponse**](RecreateServerInstanceResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="removeNasVolumeAccessControl"></a>
# **removeNasVolumeAccessControl**
> RemoveNasVolumeAccessControlResponse removeNasVolumeAccessControl(removeNasVolumeAccessControlRequest)



NAS볼륨인스턴스접근제어제거

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var removeNasVolumeAccessControlRequest = new Server.RemoveNasVolumeAccessControlRequest(); // RemoveNasVolumeAccessControlRequest | removeNasVolumeAccessControlRequest


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



NAS볼륨인스턴스접근제어설정

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var setNasVolumeAccessControlRequest = new Server.SetNasVolumeAccessControlRequest(); // SetNasVolumeAccessControlRequest | setNasVolumeAccessControlRequest


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

<a name="startServerInstances"></a>
# **startServerInstances**
> StartServerInstancesResponse startServerInstances(startServerInstancesRequest)



서버인스턴스시작

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var startServerInstancesRequest = new Server.StartServerInstancesRequest(); // StartServerInstancesRequest | startServerInstancesRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.startServerInstances(startServerInstancesRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startServerInstancesRequest** | [**StartServerInstancesRequest**](StartServerInstancesRequest.md)| startServerInstancesRequest | 

### Return type

[**StartServerInstancesResponse**](StartServerInstancesResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="stopServerInstances"></a>
# **stopServerInstances**
> StopServerInstancesResponse stopServerInstances(stopServerInstancesRequest)



서버인스턴스종료

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var stopServerInstancesRequest = new Server.StopServerInstancesRequest(); // StopServerInstancesRequest | stopServerInstancesRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stopServerInstances(stopServerInstancesRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stopServerInstancesRequest** | [**StopServerInstancesRequest**](StopServerInstancesRequest.md)| stopServerInstancesRequest | 

### Return type

[**StopServerInstancesResponse**](StopServerInstancesResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="terminateServerInstances"></a>
# **terminateServerInstances**
> TerminateServerInstancesResponse terminateServerInstances(terminateServerInstancesRequest)



서버인스턴스반납

### Example
```javascript
var Server = require('server');
var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api();

var terminateServerInstancesRequest = new Server.TerminateServerInstancesRequest(); // TerminateServerInstancesRequest | terminateServerInstancesRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.terminateServerInstances(terminateServerInstancesRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **terminateServerInstancesRequest** | [**TerminateServerInstancesRequest**](TerminateServerInstancesRequest.md)| terminateServerInstancesRequest | 

### Return type

[**TerminateServerInstancesResponse**](TerminateServerInstancesResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

