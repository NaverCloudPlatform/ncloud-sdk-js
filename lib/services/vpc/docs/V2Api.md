# Vpc.V2Api

All URIs are relative to *https://ncloud.apigw.ntruss.com/vpc/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceptOrRejectVpcPeering**](V2Api.md#acceptOrRejectVpcPeering) | **POST** /acceptOrRejectVpcPeering | 
[**addNetworkAclInboundRule**](V2Api.md#addNetworkAclInboundRule) | **POST** /addNetworkAclInboundRule | 
[**addNetworkAclOutboundRule**](V2Api.md#addNetworkAclOutboundRule) | **POST** /addNetworkAclOutboundRule | 
[**addRoute**](V2Api.md#addRoute) | **POST** /addRoute | 
[**addRouteTableSubnet**](V2Api.md#addRouteTableSubnet) | **POST** /addRouteTableSubnet | 
[**createNatGatewayInstance**](V2Api.md#createNatGatewayInstance) | **POST** /createNatGatewayInstance | 
[**createNetworkAcl**](V2Api.md#createNetworkAcl) | **POST** /createNetworkAcl | 
[**createRouteTable**](V2Api.md#createRouteTable) | **POST** /createRouteTable | 
[**createSubnet**](V2Api.md#createSubnet) | **POST** /createSubnet | 
[**createVpc**](V2Api.md#createVpc) | **POST** /createVpc | 
[**createVpcPeeringInstance**](V2Api.md#createVpcPeeringInstance) | **POST** /createVpcPeeringInstance | 
[**deleteNatGatewayInstance**](V2Api.md#deleteNatGatewayInstance) | **POST** /deleteNatGatewayInstance | 
[**deleteNetworkAcl**](V2Api.md#deleteNetworkAcl) | **POST** /deleteNetworkAcl | 
[**deleteRouteTable**](V2Api.md#deleteRouteTable) | **POST** /deleteRouteTable | 
[**deleteSubnet**](V2Api.md#deleteSubnet) | **POST** /deleteSubnet | 
[**deleteVpc**](V2Api.md#deleteVpc) | **POST** /deleteVpc | 
[**deleteVpcPeeringInstance**](V2Api.md#deleteVpcPeeringInstance) | **POST** /deleteVpcPeeringInstance | 
[**getNatGatewayInstanceDetail**](V2Api.md#getNatGatewayInstanceDetail) | **POST** /getNatGatewayInstanceDetail | 
[**getNatGatewayInstanceList**](V2Api.md#getNatGatewayInstanceList) | **POST** /getNatGatewayInstanceList | 
[**getNetworkAclDetail**](V2Api.md#getNetworkAclDetail) | **POST** /getNetworkAclDetail | 
[**getNetworkAclList**](V2Api.md#getNetworkAclList) | **POST** /getNetworkAclList | 
[**getNetworkAclRuleList**](V2Api.md#getNetworkAclRuleList) | **POST** /getNetworkAclRuleList | 
[**getRouteList**](V2Api.md#getRouteList) | **POST** /getRouteList | 
[**getRouteTableDetail**](V2Api.md#getRouteTableDetail) | **POST** /getRouteTableDetail | 
[**getRouteTableList**](V2Api.md#getRouteTableList) | **POST** /getRouteTableList | 
[**getRouteTableSubnetList**](V2Api.md#getRouteTableSubnetList) | **POST** /getRouteTableSubnetList | 
[**getSubnetDetail**](V2Api.md#getSubnetDetail) | **POST** /getSubnetDetail | 
[**getSubnetList**](V2Api.md#getSubnetList) | **POST** /getSubnetList | 
[**getVpcDetail**](V2Api.md#getVpcDetail) | **POST** /getVpcDetail | 
[**getVpcList**](V2Api.md#getVpcList) | **POST** /getVpcList | 
[**getVpcPeeringInstanceDetail**](V2Api.md#getVpcPeeringInstanceDetail) | **POST** /getVpcPeeringInstanceDetail | 
[**getVpcPeeringInstanceList**](V2Api.md#getVpcPeeringInstanceList) | **POST** /getVpcPeeringInstanceList | 
[**removeNetworkAclInboundRule**](V2Api.md#removeNetworkAclInboundRule) | **POST** /removeNetworkAclInboundRule | 
[**removeNetworkAclOutboundRule**](V2Api.md#removeNetworkAclOutboundRule) | **POST** /removeNetworkAclOutboundRule | 
[**removeRoute**](V2Api.md#removeRoute) | **POST** /removeRoute | 
[**removeRouteTableSubnet**](V2Api.md#removeRouteTableSubnet) | **POST** /removeRouteTableSubnet | 
[**setNatGatewayDescription**](V2Api.md#setNatGatewayDescription) | **POST** /setNatGatewayDescription | 
[**setNetworkAclDescription**](V2Api.md#setNetworkAclDescription) | **POST** /setNetworkAclDescription | 
[**setRouteTableDescription**](V2Api.md#setRouteTableDescription) | **POST** /setRouteTableDescription | 
[**setSubnetNetworkAcl**](V2Api.md#setSubnetNetworkAcl) | **POST** /setSubnetNetworkAcl | 
[**setVpcPeeringDescription**](V2Api.md#setVpcPeeringDescription) | **POST** /setVpcPeeringDescription | 


<a name="acceptOrRejectVpcPeering"></a>
# **acceptOrRejectVpcPeering**
> AcceptOrRejectVpcPeeringResponse acceptOrRejectVpcPeering(acceptOrRejectVpcPeeringRequest)



VPCPeering요청수락거절

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var acceptOrRejectVpcPeeringRequest = new Vpc.AcceptOrRejectVpcPeeringRequest(); // AcceptOrRejectVpcPeeringRequest | acceptOrRejectVpcPeeringRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.acceptOrRejectVpcPeering(acceptOrRejectVpcPeeringRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptOrRejectVpcPeeringRequest** | [**AcceptOrRejectVpcPeeringRequest**](AcceptOrRejectVpcPeeringRequest.md)| acceptOrRejectVpcPeeringRequest | 

### Return type

[**AcceptOrRejectVpcPeeringResponse**](AcceptOrRejectVpcPeeringResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="addNetworkAclInboundRule"></a>
# **addNetworkAclInboundRule**
> AddNetworkAclInboundRuleResponse addNetworkAclInboundRule(addNetworkAclInboundRuleRequest)



네트워크ACLInboundRule추가

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var addNetworkAclInboundRuleRequest = new Vpc.AddNetworkAclInboundRuleRequest(); // AddNetworkAclInboundRuleRequest | addNetworkAclInboundRuleRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addNetworkAclInboundRule(addNetworkAclInboundRuleRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addNetworkAclInboundRuleRequest** | [**AddNetworkAclInboundRuleRequest**](AddNetworkAclInboundRuleRequest.md)| addNetworkAclInboundRuleRequest | 

### Return type

[**AddNetworkAclInboundRuleResponse**](AddNetworkAclInboundRuleResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="addNetworkAclOutboundRule"></a>
# **addNetworkAclOutboundRule**
> AddNetworkAclOutboundRuleResponse addNetworkAclOutboundRule(addNetworkAclOutboundRuleRequest)



네트워크ACLOutboundRule추가

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var addNetworkAclOutboundRuleRequest = new Vpc.AddNetworkAclOutboundRuleRequest(); // AddNetworkAclOutboundRuleRequest | addNetworkAclOutboundRuleRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addNetworkAclOutboundRule(addNetworkAclOutboundRuleRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addNetworkAclOutboundRuleRequest** | [**AddNetworkAclOutboundRuleRequest**](AddNetworkAclOutboundRuleRequest.md)| addNetworkAclOutboundRuleRequest | 

### Return type

[**AddNetworkAclOutboundRuleResponse**](AddNetworkAclOutboundRuleResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="addRoute"></a>
# **addRoute**
> AddRouteResponse addRoute(addRouteRequest)



라우트추가

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var addRouteRequest = new Vpc.AddRouteRequest(); // AddRouteRequest | addRouteRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addRoute(addRouteRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addRouteRequest** | [**AddRouteRequest**](AddRouteRequest.md)| addRouteRequest | 

### Return type

[**AddRouteResponse**](AddRouteResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="addRouteTableSubnet"></a>
# **addRouteTableSubnet**
> AddRouteTableSubnetResponse addRouteTableSubnet(addRouteTableSubnetRequest)



라우트테이블의연관서브넷추가

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var addRouteTableSubnetRequest = new Vpc.AddRouteTableSubnetRequest(); // AddRouteTableSubnetRequest | addRouteTableSubnetRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addRouteTableSubnet(addRouteTableSubnetRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addRouteTableSubnetRequest** | [**AddRouteTableSubnetRequest**](AddRouteTableSubnetRequest.md)| addRouteTableSubnetRequest | 

### Return type

[**AddRouteTableSubnetResponse**](AddRouteTableSubnetResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="createNatGatewayInstance"></a>
# **createNatGatewayInstance**
> CreateNatGatewayInstanceResponse createNatGatewayInstance(createNatGatewayInstanceRequest)



NATGateway인스턴스생성

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var createNatGatewayInstanceRequest = new Vpc.CreateNatGatewayInstanceRequest(); // CreateNatGatewayInstanceRequest | createNatGatewayInstanceRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNatGatewayInstance(createNatGatewayInstanceRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createNatGatewayInstanceRequest** | [**CreateNatGatewayInstanceRequest**](CreateNatGatewayInstanceRequest.md)| createNatGatewayInstanceRequest | 

### Return type

[**CreateNatGatewayInstanceResponse**](CreateNatGatewayInstanceResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="createNetworkAcl"></a>
# **createNetworkAcl**
> CreateNetworkAclResponse createNetworkAcl(createNetworkAclRequest)



네트워크ACL생성

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var createNetworkAclRequest = new Vpc.CreateNetworkAclRequest(); // CreateNetworkAclRequest | createNetworkAclRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNetworkAcl(createNetworkAclRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createNetworkAclRequest** | [**CreateNetworkAclRequest**](CreateNetworkAclRequest.md)| createNetworkAclRequest | 

### Return type

[**CreateNetworkAclResponse**](CreateNetworkAclResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="createRouteTable"></a>
# **createRouteTable**
> CreateRouteTableResponse createRouteTable(createRouteTableRequest)



라우트테이블생성

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var createRouteTableRequest = new Vpc.CreateRouteTableRequest(); // CreateRouteTableRequest | createRouteTableRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRouteTable(createRouteTableRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createRouteTableRequest** | [**CreateRouteTableRequest**](CreateRouteTableRequest.md)| createRouteTableRequest | 

### Return type

[**CreateRouteTableResponse**](CreateRouteTableResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="createSubnet"></a>
# **createSubnet**
> CreateSubnetResponse createSubnet(createSubnetRequest)



서브넷생성

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var createSubnetRequest = new Vpc.CreateSubnetRequest(); // CreateSubnetRequest | createSubnetRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSubnet(createSubnetRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSubnetRequest** | [**CreateSubnetRequest**](CreateSubnetRequest.md)| createSubnetRequest | 

### Return type

[**CreateSubnetResponse**](CreateSubnetResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="createVpc"></a>
# **createVpc**
> CreateVpcResponse createVpc(createVpcRequest)



VPC생성

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var createVpcRequest = new Vpc.CreateVpcRequest(); // CreateVpcRequest | createVpcRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createVpc(createVpcRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createVpcRequest** | [**CreateVpcRequest**](CreateVpcRequest.md)| createVpcRequest | 

### Return type

[**CreateVpcResponse**](CreateVpcResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="createVpcPeeringInstance"></a>
# **createVpcPeeringInstance**
> CreateVpcPeeringInstanceResponse createVpcPeeringInstance(createVpcPeeringInstanceRequest)



VPCPeering인스턴스생성

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var createVpcPeeringInstanceRequest = new Vpc.CreateVpcPeeringInstanceRequest(); // CreateVpcPeeringInstanceRequest | createVpcPeeringInstanceRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createVpcPeeringInstance(createVpcPeeringInstanceRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createVpcPeeringInstanceRequest** | [**CreateVpcPeeringInstanceRequest**](CreateVpcPeeringInstanceRequest.md)| createVpcPeeringInstanceRequest | 

### Return type

[**CreateVpcPeeringInstanceResponse**](CreateVpcPeeringInstanceResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="deleteNatGatewayInstance"></a>
# **deleteNatGatewayInstance**
> DeleteNatGatewayInstanceResponse deleteNatGatewayInstance(deleteNatGatewayInstanceRequest)



NATGateway인스턴스삭제

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var deleteNatGatewayInstanceRequest = new Vpc.DeleteNatGatewayInstanceRequest(); // DeleteNatGatewayInstanceRequest | deleteNatGatewayInstanceRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteNatGatewayInstance(deleteNatGatewayInstanceRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteNatGatewayInstanceRequest** | [**DeleteNatGatewayInstanceRequest**](DeleteNatGatewayInstanceRequest.md)| deleteNatGatewayInstanceRequest | 

### Return type

[**DeleteNatGatewayInstanceResponse**](DeleteNatGatewayInstanceResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="deleteNetworkAcl"></a>
# **deleteNetworkAcl**
> DeleteNetworkAclResponse deleteNetworkAcl(deleteNetworkAclRequest)



네트워크ACL삭제

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var deleteNetworkAclRequest = new Vpc.DeleteNetworkAclRequest(); // DeleteNetworkAclRequest | deleteNetworkAclRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteNetworkAcl(deleteNetworkAclRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteNetworkAclRequest** | [**DeleteNetworkAclRequest**](DeleteNetworkAclRequest.md)| deleteNetworkAclRequest | 

### Return type

[**DeleteNetworkAclResponse**](DeleteNetworkAclResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="deleteRouteTable"></a>
# **deleteRouteTable**
> DeleteRouteTableResponse deleteRouteTable(deleteRouteTableRequest)



라우트테이블삭제

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var deleteRouteTableRequest = new Vpc.DeleteRouteTableRequest(); // DeleteRouteTableRequest | deleteRouteTableRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteRouteTable(deleteRouteTableRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteRouteTableRequest** | [**DeleteRouteTableRequest**](DeleteRouteTableRequest.md)| deleteRouteTableRequest | 

### Return type

[**DeleteRouteTableResponse**](DeleteRouteTableResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="deleteSubnet"></a>
# **deleteSubnet**
> DeleteSubnetResponse deleteSubnet(deleteSubnetRequest)



서브넷삭제

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var deleteSubnetRequest = new Vpc.DeleteSubnetRequest(); // DeleteSubnetRequest | deleteSubnetRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteSubnet(deleteSubnetRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteSubnetRequest** | [**DeleteSubnetRequest**](DeleteSubnetRequest.md)| deleteSubnetRequest | 

### Return type

[**DeleteSubnetResponse**](DeleteSubnetResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="deleteVpc"></a>
# **deleteVpc**
> DeleteVpcResponse deleteVpc(deleteVpcRequest)



VPC삭제

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var deleteVpcRequest = new Vpc.DeleteVpcRequest(); // DeleteVpcRequest | deleteVpcRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteVpc(deleteVpcRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteVpcRequest** | [**DeleteVpcRequest**](DeleteVpcRequest.md)| deleteVpcRequest | 

### Return type

[**DeleteVpcResponse**](DeleteVpcResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="deleteVpcPeeringInstance"></a>
# **deleteVpcPeeringInstance**
> DeleteVpcPeeringInstanceResponse deleteVpcPeeringInstance(deleteVpcPeeringInstanceRequest)



VPCPeering인스턴스삭제

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var deleteVpcPeeringInstanceRequest = new Vpc.DeleteVpcPeeringInstanceRequest(); // DeleteVpcPeeringInstanceRequest | deleteVpcPeeringInstanceRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteVpcPeeringInstance(deleteVpcPeeringInstanceRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteVpcPeeringInstanceRequest** | [**DeleteVpcPeeringInstanceRequest**](DeleteVpcPeeringInstanceRequest.md)| deleteVpcPeeringInstanceRequest | 

### Return type

[**DeleteVpcPeeringInstanceResponse**](DeleteVpcPeeringInstanceResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getNatGatewayInstanceDetail"></a>
# **getNatGatewayInstanceDetail**
> GetNatGatewayInstanceDetailResponse getNatGatewayInstanceDetail(getNatGatewayInstanceDetailRequest)



NATGateway인스턴스상세조회

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var getNatGatewayInstanceDetailRequest = new Vpc.GetNatGatewayInstanceDetailRequest(); // GetNatGatewayInstanceDetailRequest | getNatGatewayInstanceDetailRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNatGatewayInstanceDetail(getNatGatewayInstanceDetailRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getNatGatewayInstanceDetailRequest** | [**GetNatGatewayInstanceDetailRequest**](GetNatGatewayInstanceDetailRequest.md)| getNatGatewayInstanceDetailRequest | 

### Return type

[**GetNatGatewayInstanceDetailResponse**](GetNatGatewayInstanceDetailResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getNatGatewayInstanceList"></a>
# **getNatGatewayInstanceList**
> GetNatGatewayInstanceListResponse getNatGatewayInstanceList(getNatGatewayInstanceListRequest)



NATGateway인스턴스리스트조회

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var getNatGatewayInstanceListRequest = new Vpc.GetNatGatewayInstanceListRequest(); // GetNatGatewayInstanceListRequest | getNatGatewayInstanceListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNatGatewayInstanceList(getNatGatewayInstanceListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getNatGatewayInstanceListRequest** | [**GetNatGatewayInstanceListRequest**](GetNatGatewayInstanceListRequest.md)| getNatGatewayInstanceListRequest | 

### Return type

[**GetNatGatewayInstanceListResponse**](GetNatGatewayInstanceListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getNetworkAclDetail"></a>
# **getNetworkAclDetail**
> GetNetworkAclDetailResponse getNetworkAclDetail(getNetworkAclDetailRequest)



네트워크ACL상세조회

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var getNetworkAclDetailRequest = new Vpc.GetNetworkAclDetailRequest(); // GetNetworkAclDetailRequest | getNetworkAclDetailRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkAclDetail(getNetworkAclDetailRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getNetworkAclDetailRequest** | [**GetNetworkAclDetailRequest**](GetNetworkAclDetailRequest.md)| getNetworkAclDetailRequest | 

### Return type

[**GetNetworkAclDetailResponse**](GetNetworkAclDetailResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getNetworkAclList"></a>
# **getNetworkAclList**
> GetNetworkAclListResponse getNetworkAclList(getNetworkAclListRequest)



네트워크ACL리스트조회

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var getNetworkAclListRequest = new Vpc.GetNetworkAclListRequest(); // GetNetworkAclListRequest | getNetworkAclListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkAclList(getNetworkAclListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getNetworkAclListRequest** | [**GetNetworkAclListRequest**](GetNetworkAclListRequest.md)| getNetworkAclListRequest | 

### Return type

[**GetNetworkAclListResponse**](GetNetworkAclListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getNetworkAclRuleList"></a>
# **getNetworkAclRuleList**
> GetNetworkAclRuleListResponse getNetworkAclRuleList(getNetworkAclRuleListRequest)



네트워크ACLRule리스트조회

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var getNetworkAclRuleListRequest = new Vpc.GetNetworkAclRuleListRequest(); // GetNetworkAclRuleListRequest | getNetworkAclRuleListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkAclRuleList(getNetworkAclRuleListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getNetworkAclRuleListRequest** | [**GetNetworkAclRuleListRequest**](GetNetworkAclRuleListRequest.md)| getNetworkAclRuleListRequest | 

### Return type

[**GetNetworkAclRuleListResponse**](GetNetworkAclRuleListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getRouteList"></a>
# **getRouteList**
> GetRouteListResponse getRouteList(getRouteListRequest)



라우트리스트조회

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var getRouteListRequest = new Vpc.GetRouteListRequest(); // GetRouteListRequest | getRouteListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRouteList(getRouteListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getRouteListRequest** | [**GetRouteListRequest**](GetRouteListRequest.md)| getRouteListRequest | 

### Return type

[**GetRouteListResponse**](GetRouteListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getRouteTableDetail"></a>
# **getRouteTableDetail**
> GetRouteTableDetailResponse getRouteTableDetail(getRouteTableDetailRequest)



라우트테이블상세조회

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var getRouteTableDetailRequest = new Vpc.GetRouteTableDetailRequest(); // GetRouteTableDetailRequest | getRouteTableDetailRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRouteTableDetail(getRouteTableDetailRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getRouteTableDetailRequest** | [**GetRouteTableDetailRequest**](GetRouteTableDetailRequest.md)| getRouteTableDetailRequest | 

### Return type

[**GetRouteTableDetailResponse**](GetRouteTableDetailResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getRouteTableList"></a>
# **getRouteTableList**
> GetRouteTableListResponse getRouteTableList(getRouteTableListRequest)



라우트테이블리스트조회

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var getRouteTableListRequest = new Vpc.GetRouteTableListRequest(); // GetRouteTableListRequest | getRouteTableListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRouteTableList(getRouteTableListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getRouteTableListRequest** | [**GetRouteTableListRequest**](GetRouteTableListRequest.md)| getRouteTableListRequest | 

### Return type

[**GetRouteTableListResponse**](GetRouteTableListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getRouteTableSubnetList"></a>
# **getRouteTableSubnetList**
> GetRouteTableSubnetListResponse getRouteTableSubnetList(getRouteTableSubnetListRequest)



라우트테이블에연관된서브넷리스트조회

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var getRouteTableSubnetListRequest = new Vpc.GetRouteTableSubnetListRequest(); // GetRouteTableSubnetListRequest | getRouteTableSubnetListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRouteTableSubnetList(getRouteTableSubnetListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getRouteTableSubnetListRequest** | [**GetRouteTableSubnetListRequest**](GetRouteTableSubnetListRequest.md)| getRouteTableSubnetListRequest | 

### Return type

[**GetRouteTableSubnetListResponse**](GetRouteTableSubnetListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getSubnetDetail"></a>
# **getSubnetDetail**
> GetSubnetDetailResponse getSubnetDetail(getSubnetDetailRequest)



서브넷상세조회

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var getSubnetDetailRequest = new Vpc.GetSubnetDetailRequest(); // GetSubnetDetailRequest | getSubnetDetailRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubnetDetail(getSubnetDetailRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getSubnetDetailRequest** | [**GetSubnetDetailRequest**](GetSubnetDetailRequest.md)| getSubnetDetailRequest | 

### Return type

[**GetSubnetDetailResponse**](GetSubnetDetailResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getSubnetList"></a>
# **getSubnetList**
> GetSubnetListResponse getSubnetList(getSubnetListRequest)



서브넷리스트조회

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var getSubnetListRequest = new Vpc.GetSubnetListRequest(); // GetSubnetListRequest | getSubnetListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubnetList(getSubnetListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getSubnetListRequest** | [**GetSubnetListRequest**](GetSubnetListRequest.md)| getSubnetListRequest | 

### Return type

[**GetSubnetListResponse**](GetSubnetListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getVpcDetail"></a>
# **getVpcDetail**
> GetVpcDetailResponse getVpcDetail(getVpcDetailRequest)



VPC상세조회

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var getVpcDetailRequest = new Vpc.GetVpcDetailRequest(); // GetVpcDetailRequest | getVpcDetailRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVpcDetail(getVpcDetailRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getVpcDetailRequest** | [**GetVpcDetailRequest**](GetVpcDetailRequest.md)| getVpcDetailRequest | 

### Return type

[**GetVpcDetailResponse**](GetVpcDetailResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getVpcList"></a>
# **getVpcList**
> GetVpcListResponse getVpcList(getVpcListRequest)



VPC리스트조회

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var getVpcListRequest = new Vpc.GetVpcListRequest(); // GetVpcListRequest | getVpcListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVpcList(getVpcListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getVpcListRequest** | [**GetVpcListRequest**](GetVpcListRequest.md)| getVpcListRequest | 

### Return type

[**GetVpcListResponse**](GetVpcListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getVpcPeeringInstanceDetail"></a>
# **getVpcPeeringInstanceDetail**
> GetVpcPeeringInstanceDetailResponse getVpcPeeringInstanceDetail(getVpcPeeringInstanceDetailRequest)



VPCPeering인스턴스상세조회

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var getVpcPeeringInstanceDetailRequest = new Vpc.GetVpcPeeringInstanceDetailRequest(); // GetVpcPeeringInstanceDetailRequest | getVpcPeeringInstanceDetailRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVpcPeeringInstanceDetail(getVpcPeeringInstanceDetailRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getVpcPeeringInstanceDetailRequest** | [**GetVpcPeeringInstanceDetailRequest**](GetVpcPeeringInstanceDetailRequest.md)| getVpcPeeringInstanceDetailRequest | 

### Return type

[**GetVpcPeeringInstanceDetailResponse**](GetVpcPeeringInstanceDetailResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="getVpcPeeringInstanceList"></a>
# **getVpcPeeringInstanceList**
> GetVpcPeeringInstanceListResponse getVpcPeeringInstanceList(getVpcPeeringInstanceListRequest)



VPCPeering인스턴스리스트조회

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var getVpcPeeringInstanceListRequest = new Vpc.GetVpcPeeringInstanceListRequest(); // GetVpcPeeringInstanceListRequest | getVpcPeeringInstanceListRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVpcPeeringInstanceList(getVpcPeeringInstanceListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getVpcPeeringInstanceListRequest** | [**GetVpcPeeringInstanceListRequest**](GetVpcPeeringInstanceListRequest.md)| getVpcPeeringInstanceListRequest | 

### Return type

[**GetVpcPeeringInstanceListResponse**](GetVpcPeeringInstanceListResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="removeNetworkAclInboundRule"></a>
# **removeNetworkAclInboundRule**
> RemoveNetworkAclInboundRuleResponse removeNetworkAclInboundRule(removeNetworkAclInboundRuleRequest)



네트워크ACLInboundRule제거

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var removeNetworkAclInboundRuleRequest = new Vpc.RemoveNetworkAclInboundRuleRequest(); // RemoveNetworkAclInboundRuleRequest | removeNetworkAclInboundRuleRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeNetworkAclInboundRule(removeNetworkAclInboundRuleRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **removeNetworkAclInboundRuleRequest** | [**RemoveNetworkAclInboundRuleRequest**](RemoveNetworkAclInboundRuleRequest.md)| removeNetworkAclInboundRuleRequest | 

### Return type

[**RemoveNetworkAclInboundRuleResponse**](RemoveNetworkAclInboundRuleResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="removeNetworkAclOutboundRule"></a>
# **removeNetworkAclOutboundRule**
> RemoveNetworkAclOutboundRuleResponse removeNetworkAclOutboundRule(removeNetworkAclOutboundRuleRequest)



네트워크ACLOutboundRule제거

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var removeNetworkAclOutboundRuleRequest = new Vpc.RemoveNetworkAclOutboundRuleRequest(); // RemoveNetworkAclOutboundRuleRequest | removeNetworkAclOutboundRuleRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeNetworkAclOutboundRule(removeNetworkAclOutboundRuleRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **removeNetworkAclOutboundRuleRequest** | [**RemoveNetworkAclOutboundRuleRequest**](RemoveNetworkAclOutboundRuleRequest.md)| removeNetworkAclOutboundRuleRequest | 

### Return type

[**RemoveNetworkAclOutboundRuleResponse**](RemoveNetworkAclOutboundRuleResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="removeRoute"></a>
# **removeRoute**
> RemoveRouteResponse removeRoute(removeRouteRequest)



라우트제거

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var removeRouteRequest = new Vpc.RemoveRouteRequest(); // RemoveRouteRequest | removeRouteRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeRoute(removeRouteRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **removeRouteRequest** | [**RemoveRouteRequest**](RemoveRouteRequest.md)| removeRouteRequest | 

### Return type

[**RemoveRouteResponse**](RemoveRouteResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="removeRouteTableSubnet"></a>
# **removeRouteTableSubnet**
> RemoveRouteTableSubnetResponse removeRouteTableSubnet(removeRouteTableSubnetRequest)



라우트테이블의연관서브넷제거

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var removeRouteTableSubnetRequest = new Vpc.RemoveRouteTableSubnetRequest(); // RemoveRouteTableSubnetRequest | removeRouteTableSubnetRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeRouteTableSubnet(removeRouteTableSubnetRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **removeRouteTableSubnetRequest** | [**RemoveRouteTableSubnetRequest**](RemoveRouteTableSubnetRequest.md)| removeRouteTableSubnetRequest | 

### Return type

[**RemoveRouteTableSubnetResponse**](RemoveRouteTableSubnetResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="setNatGatewayDescription"></a>
# **setNatGatewayDescription**
> SetNatGatewayDescriptionResponse setNatGatewayDescription(setNatGatewayDescriptionRequest)



NATGateway설명설정

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var setNatGatewayDescriptionRequest = new Vpc.SetNatGatewayDescriptionRequest(); // SetNatGatewayDescriptionRequest | setNatGatewayDescriptionRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setNatGatewayDescription(setNatGatewayDescriptionRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setNatGatewayDescriptionRequest** | [**SetNatGatewayDescriptionRequest**](SetNatGatewayDescriptionRequest.md)| setNatGatewayDescriptionRequest | 

### Return type

[**SetNatGatewayDescriptionResponse**](SetNatGatewayDescriptionResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="setNetworkAclDescription"></a>
# **setNetworkAclDescription**
> SetNetworkAclDescriptionResponse setNetworkAclDescription(setNetworkAclDescriptionRequest)



네트워크ACL설명설정

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var setNetworkAclDescriptionRequest = new Vpc.SetNetworkAclDescriptionRequest(); // SetNetworkAclDescriptionRequest | setNetworkAclDescriptionRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setNetworkAclDescription(setNetworkAclDescriptionRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setNetworkAclDescriptionRequest** | [**SetNetworkAclDescriptionRequest**](SetNetworkAclDescriptionRequest.md)| setNetworkAclDescriptionRequest | 

### Return type

[**SetNetworkAclDescriptionResponse**](SetNetworkAclDescriptionResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="setRouteTableDescription"></a>
# **setRouteTableDescription**
> SetRouteTableDescriptionResponse setRouteTableDescription(setRouteTableDescriptionRequest)



라우트테이블설명설정

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var setRouteTableDescriptionRequest = new Vpc.SetRouteTableDescriptionRequest(); // SetRouteTableDescriptionRequest | setRouteTableDescriptionRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setRouteTableDescription(setRouteTableDescriptionRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setRouteTableDescriptionRequest** | [**SetRouteTableDescriptionRequest**](SetRouteTableDescriptionRequest.md)| setRouteTableDescriptionRequest | 

### Return type

[**SetRouteTableDescriptionResponse**](SetRouteTableDescriptionResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="setSubnetNetworkAcl"></a>
# **setSubnetNetworkAcl**
> SetSubnetNetworkAclResponse setSubnetNetworkAcl(setSubnetNetworkAclRequest)



서브넷의네트워크ACL설정

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var setSubnetNetworkAclRequest = new Vpc.SetSubnetNetworkAclRequest(); // SetSubnetNetworkAclRequest | setSubnetNetworkAclRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setSubnetNetworkAcl(setSubnetNetworkAclRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setSubnetNetworkAclRequest** | [**SetSubnetNetworkAclRequest**](SetSubnetNetworkAclRequest.md)| setSubnetNetworkAclRequest | 

### Return type

[**SetSubnetNetworkAclResponse**](SetSubnetNetworkAclResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="setVpcPeeringDescription"></a>
# **setVpcPeeringDescription**
> SetVpcPeeringDescriptionResponse setVpcPeeringDescription(setVpcPeeringDescriptionRequest)



VPCPeering설명설정

### Example
```javascript
var Vpc = require('ncloud-vpc');
var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key'
});

var apiInstance = new Vpc.V2Api();

var setVpcPeeringDescriptionRequest = new Vpc.SetVpcPeeringDescriptionRequest(); // SetVpcPeeringDescriptionRequest | setVpcPeeringDescriptionRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setVpcPeeringDescription(setVpcPeeringDescriptionRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setVpcPeeringDescriptionRequest** | [**SetVpcPeeringDescriptionRequest**](SetVpcPeeringDescriptionRequest.md)| setVpcPeeringDescriptionRequest | 

### Return type

[**SetVpcPeeringDescriptionResponse**](SetVpcPeeringDescriptionResponse.md)

### Authorization

[x-ncp-iam](../README.md#x-ncp-iam)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

