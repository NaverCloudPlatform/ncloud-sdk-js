# ncloud-vpc

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

```shell
npm install ncloud-vpc --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Vpc = require('ncloud-vpc');

var client = new Vpc.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Vpc.V2Api(client)

var acceptOrRejectVpcPeeringRequest = new Vpc.AcceptOrRejectVpcPeeringRequest(); // {AcceptOrRejectVpcPeeringRequest} acceptOrRejectVpcPeeringRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.acceptOrRejectVpcPeering(acceptOrRejectVpcPeeringRequest, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://ncloud.apigw.ntruss.com/vpc/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Vpc.V2Api* | [**acceptOrRejectVpcPeering**](docs/V2Api.md#acceptOrRejectVpcPeering) | **POST** /acceptOrRejectVpcPeering | 
*Vpc.V2Api* | [**addNetworkAclInboundRule**](docs/V2Api.md#addNetworkAclInboundRule) | **POST** /addNetworkAclInboundRule | 
*Vpc.V2Api* | [**addNetworkAclOutboundRule**](docs/V2Api.md#addNetworkAclOutboundRule) | **POST** /addNetworkAclOutboundRule | 
*Vpc.V2Api* | [**addRoute**](docs/V2Api.md#addRoute) | **POST** /addRoute | 
*Vpc.V2Api* | [**addRouteTableSubnet**](docs/V2Api.md#addRouteTableSubnet) | **POST** /addRouteTableSubnet | 
*Vpc.V2Api* | [**createNatGatewayInstance**](docs/V2Api.md#createNatGatewayInstance) | **POST** /createNatGatewayInstance | 
*Vpc.V2Api* | [**createNetworkAcl**](docs/V2Api.md#createNetworkAcl) | **POST** /createNetworkAcl | 
*Vpc.V2Api* | [**createRouteTable**](docs/V2Api.md#createRouteTable) | **POST** /createRouteTable | 
*Vpc.V2Api* | [**createSubnet**](docs/V2Api.md#createSubnet) | **POST** /createSubnet | 
*Vpc.V2Api* | [**createVpc**](docs/V2Api.md#createVpc) | **POST** /createVpc | 
*Vpc.V2Api* | [**createVpcPeeringInstance**](docs/V2Api.md#createVpcPeeringInstance) | **POST** /createVpcPeeringInstance | 
*Vpc.V2Api* | [**deleteNatGatewayInstance**](docs/V2Api.md#deleteNatGatewayInstance) | **POST** /deleteNatGatewayInstance | 
*Vpc.V2Api* | [**deleteNetworkAcl**](docs/V2Api.md#deleteNetworkAcl) | **POST** /deleteNetworkAcl | 
*Vpc.V2Api* | [**deleteRouteTable**](docs/V2Api.md#deleteRouteTable) | **POST** /deleteRouteTable | 
*Vpc.V2Api* | [**deleteSubnet**](docs/V2Api.md#deleteSubnet) | **POST** /deleteSubnet | 
*Vpc.V2Api* | [**deleteVpc**](docs/V2Api.md#deleteVpc) | **POST** /deleteVpc | 
*Vpc.V2Api* | [**deleteVpcPeeringInstance**](docs/V2Api.md#deleteVpcPeeringInstance) | **POST** /deleteVpcPeeringInstance | 
*Vpc.V2Api* | [**getNatGatewayInstanceDetail**](docs/V2Api.md#getNatGatewayInstanceDetail) | **POST** /getNatGatewayInstanceDetail | 
*Vpc.V2Api* | [**getNatGatewayInstanceList**](docs/V2Api.md#getNatGatewayInstanceList) | **POST** /getNatGatewayInstanceList | 
*Vpc.V2Api* | [**getNetworkAclDetail**](docs/V2Api.md#getNetworkAclDetail) | **POST** /getNetworkAclDetail | 
*Vpc.V2Api* | [**getNetworkAclList**](docs/V2Api.md#getNetworkAclList) | **POST** /getNetworkAclList | 
*Vpc.V2Api* | [**getNetworkAclRuleList**](docs/V2Api.md#getNetworkAclRuleList) | **POST** /getNetworkAclRuleList | 
*Vpc.V2Api* | [**getRouteList**](docs/V2Api.md#getRouteList) | **POST** /getRouteList | 
*Vpc.V2Api* | [**getRouteTableDetail**](docs/V2Api.md#getRouteTableDetail) | **POST** /getRouteTableDetail | 
*Vpc.V2Api* | [**getRouteTableList**](docs/V2Api.md#getRouteTableList) | **POST** /getRouteTableList | 
*Vpc.V2Api* | [**getRouteTableSubnetList**](docs/V2Api.md#getRouteTableSubnetList) | **POST** /getRouteTableSubnetList | 
*Vpc.V2Api* | [**getSubnetDetail**](docs/V2Api.md#getSubnetDetail) | **POST** /getSubnetDetail | 
*Vpc.V2Api* | [**getSubnetList**](docs/V2Api.md#getSubnetList) | **POST** /getSubnetList | 
*Vpc.V2Api* | [**getVpcDetail**](docs/V2Api.md#getVpcDetail) | **POST** /getVpcDetail | 
*Vpc.V2Api* | [**getVpcList**](docs/V2Api.md#getVpcList) | **POST** /getVpcList | 
*Vpc.V2Api* | [**getVpcPeeringInstanceDetail**](docs/V2Api.md#getVpcPeeringInstanceDetail) | **POST** /getVpcPeeringInstanceDetail | 
*Vpc.V2Api* | [**getVpcPeeringInstanceList**](docs/V2Api.md#getVpcPeeringInstanceList) | **POST** /getVpcPeeringInstanceList | 
*Vpc.V2Api* | [**removeNetworkAclInboundRule**](docs/V2Api.md#removeNetworkAclInboundRule) | **POST** /removeNetworkAclInboundRule | 
*Vpc.V2Api* | [**removeNetworkAclOutboundRule**](docs/V2Api.md#removeNetworkAclOutboundRule) | **POST** /removeNetworkAclOutboundRule | 
*Vpc.V2Api* | [**removeRoute**](docs/V2Api.md#removeRoute) | **POST** /removeRoute | 
*Vpc.V2Api* | [**removeRouteTableSubnet**](docs/V2Api.md#removeRouteTableSubnet) | **POST** /removeRouteTableSubnet | 
*Vpc.V2Api* | [**setNatGatewayDescription**](docs/V2Api.md#setNatGatewayDescription) | **POST** /setNatGatewayDescription | 
*Vpc.V2Api* | [**setNetworkAclDescription**](docs/V2Api.md#setNetworkAclDescription) | **POST** /setNetworkAclDescription | 
*Vpc.V2Api* | [**setRouteTableDescription**](docs/V2Api.md#setRouteTableDescription) | **POST** /setRouteTableDescription | 
*Vpc.V2Api* | [**setSubnetNetworkAcl**](docs/V2Api.md#setSubnetNetworkAcl) | **POST** /setSubnetNetworkAcl | 
*Vpc.V2Api* | [**setVpcPeeringDescription**](docs/V2Api.md#setVpcPeeringDescription) | **POST** /setVpcPeeringDescription | 


## Documentation for Models

 - [Vpc.AcceptOrRejectVpcPeeringRequest](docs/AcceptOrRejectVpcPeeringRequest.md)
 - [Vpc.AcceptOrRejectVpcPeeringResponse](docs/AcceptOrRejectVpcPeeringResponse.md)
 - [Vpc.AddNetworkAclInboundRuleRequest](docs/AddNetworkAclInboundRuleRequest.md)
 - [Vpc.AddNetworkAclInboundRuleResponse](docs/AddNetworkAclInboundRuleResponse.md)
 - [Vpc.AddNetworkAclOutboundRuleRequest](docs/AddNetworkAclOutboundRuleRequest.md)
 - [Vpc.AddNetworkAclOutboundRuleResponse](docs/AddNetworkAclOutboundRuleResponse.md)
 - [Vpc.AddNetworkAclRuleParameter](docs/AddNetworkAclRuleParameter.md)
 - [Vpc.AddRouteRequest](docs/AddRouteRequest.md)
 - [Vpc.AddRouteResponse](docs/AddRouteResponse.md)
 - [Vpc.AddRouteTableSubnetRequest](docs/AddRouteTableSubnetRequest.md)
 - [Vpc.AddRouteTableSubnetResponse](docs/AddRouteTableSubnetResponse.md)
 - [Vpc.CommonCode](docs/CommonCode.md)
 - [Vpc.CreateNatGatewayInstanceRequest](docs/CreateNatGatewayInstanceRequest.md)
 - [Vpc.CreateNatGatewayInstanceResponse](docs/CreateNatGatewayInstanceResponse.md)
 - [Vpc.CreateNetworkAclRequest](docs/CreateNetworkAclRequest.md)
 - [Vpc.CreateNetworkAclResponse](docs/CreateNetworkAclResponse.md)
 - [Vpc.CreateRouteTableRequest](docs/CreateRouteTableRequest.md)
 - [Vpc.CreateRouteTableResponse](docs/CreateRouteTableResponse.md)
 - [Vpc.CreateSubnetRequest](docs/CreateSubnetRequest.md)
 - [Vpc.CreateSubnetResponse](docs/CreateSubnetResponse.md)
 - [Vpc.CreateVpcPeeringInstanceRequest](docs/CreateVpcPeeringInstanceRequest.md)
 - [Vpc.CreateVpcPeeringInstanceResponse](docs/CreateVpcPeeringInstanceResponse.md)
 - [Vpc.CreateVpcRequest](docs/CreateVpcRequest.md)
 - [Vpc.CreateVpcResponse](docs/CreateVpcResponse.md)
 - [Vpc.DeleteNatGatewayInstanceRequest](docs/DeleteNatGatewayInstanceRequest.md)
 - [Vpc.DeleteNatGatewayInstanceResponse](docs/DeleteNatGatewayInstanceResponse.md)
 - [Vpc.DeleteNetworkAclRequest](docs/DeleteNetworkAclRequest.md)
 - [Vpc.DeleteNetworkAclResponse](docs/DeleteNetworkAclResponse.md)
 - [Vpc.DeleteRouteTableRequest](docs/DeleteRouteTableRequest.md)
 - [Vpc.DeleteRouteTableResponse](docs/DeleteRouteTableResponse.md)
 - [Vpc.DeleteSubnetRequest](docs/DeleteSubnetRequest.md)
 - [Vpc.DeleteSubnetResponse](docs/DeleteSubnetResponse.md)
 - [Vpc.DeleteVpcPeeringInstanceRequest](docs/DeleteVpcPeeringInstanceRequest.md)
 - [Vpc.DeleteVpcPeeringInstanceResponse](docs/DeleteVpcPeeringInstanceResponse.md)
 - [Vpc.DeleteVpcRequest](docs/DeleteVpcRequest.md)
 - [Vpc.DeleteVpcResponse](docs/DeleteVpcResponse.md)
 - [Vpc.GetNatGatewayInstanceDetailRequest](docs/GetNatGatewayInstanceDetailRequest.md)
 - [Vpc.GetNatGatewayInstanceDetailResponse](docs/GetNatGatewayInstanceDetailResponse.md)
 - [Vpc.GetNatGatewayInstanceListRequest](docs/GetNatGatewayInstanceListRequest.md)
 - [Vpc.GetNatGatewayInstanceListResponse](docs/GetNatGatewayInstanceListResponse.md)
 - [Vpc.GetNetworkAclDetailRequest](docs/GetNetworkAclDetailRequest.md)
 - [Vpc.GetNetworkAclDetailResponse](docs/GetNetworkAclDetailResponse.md)
 - [Vpc.GetNetworkAclListRequest](docs/GetNetworkAclListRequest.md)
 - [Vpc.GetNetworkAclListResponse](docs/GetNetworkAclListResponse.md)
 - [Vpc.GetNetworkAclRuleListRequest](docs/GetNetworkAclRuleListRequest.md)
 - [Vpc.GetNetworkAclRuleListResponse](docs/GetNetworkAclRuleListResponse.md)
 - [Vpc.GetRouteListRequest](docs/GetRouteListRequest.md)
 - [Vpc.GetRouteListResponse](docs/GetRouteListResponse.md)
 - [Vpc.GetRouteTableDetailRequest](docs/GetRouteTableDetailRequest.md)
 - [Vpc.GetRouteTableDetailResponse](docs/GetRouteTableDetailResponse.md)
 - [Vpc.GetRouteTableListRequest](docs/GetRouteTableListRequest.md)
 - [Vpc.GetRouteTableListResponse](docs/GetRouteTableListResponse.md)
 - [Vpc.GetRouteTableSubnetListRequest](docs/GetRouteTableSubnetListRequest.md)
 - [Vpc.GetRouteTableSubnetListResponse](docs/GetRouteTableSubnetListResponse.md)
 - [Vpc.GetSubnetDetailRequest](docs/GetSubnetDetailRequest.md)
 - [Vpc.GetSubnetDetailResponse](docs/GetSubnetDetailResponse.md)
 - [Vpc.GetSubnetListRequest](docs/GetSubnetListRequest.md)
 - [Vpc.GetSubnetListResponse](docs/GetSubnetListResponse.md)
 - [Vpc.GetVpcDetailRequest](docs/GetVpcDetailRequest.md)
 - [Vpc.GetVpcDetailResponse](docs/GetVpcDetailResponse.md)
 - [Vpc.GetVpcListRequest](docs/GetVpcListRequest.md)
 - [Vpc.GetVpcListResponse](docs/GetVpcListResponse.md)
 - [Vpc.GetVpcPeeringInstanceDetailRequest](docs/GetVpcPeeringInstanceDetailRequest.md)
 - [Vpc.GetVpcPeeringInstanceDetailResponse](docs/GetVpcPeeringInstanceDetailResponse.md)
 - [Vpc.GetVpcPeeringInstanceListRequest](docs/GetVpcPeeringInstanceListRequest.md)
 - [Vpc.GetVpcPeeringInstanceListResponse](docs/GetVpcPeeringInstanceListResponse.md)
 - [Vpc.NatGatewayInstance](docs/NatGatewayInstance.md)
 - [Vpc.NetworkAcl](docs/NetworkAcl.md)
 - [Vpc.NetworkAclRule](docs/NetworkAclRule.md)
 - [Vpc.RemoveNetworkAclInboundRuleRequest](docs/RemoveNetworkAclInboundRuleRequest.md)
 - [Vpc.RemoveNetworkAclInboundRuleResponse](docs/RemoveNetworkAclInboundRuleResponse.md)
 - [Vpc.RemoveNetworkAclOutboundRuleRequest](docs/RemoveNetworkAclOutboundRuleRequest.md)
 - [Vpc.RemoveNetworkAclOutboundRuleResponse](docs/RemoveNetworkAclOutboundRuleResponse.md)
 - [Vpc.RemoveNetworkAclRuleParameter](docs/RemoveNetworkAclRuleParameter.md)
 - [Vpc.RemoveRouteRequest](docs/RemoveRouteRequest.md)
 - [Vpc.RemoveRouteResponse](docs/RemoveRouteResponse.md)
 - [Vpc.RemoveRouteTableSubnetRequest](docs/RemoveRouteTableSubnetRequest.md)
 - [Vpc.RemoveRouteTableSubnetResponse](docs/RemoveRouteTableSubnetResponse.md)
 - [Vpc.Route](docs/Route.md)
 - [Vpc.RouteParameter](docs/RouteParameter.md)
 - [Vpc.RouteTable](docs/RouteTable.md)
 - [Vpc.SetNatGatewayDescriptionRequest](docs/SetNatGatewayDescriptionRequest.md)
 - [Vpc.SetNatGatewayDescriptionResponse](docs/SetNatGatewayDescriptionResponse.md)
 - [Vpc.SetNetworkAclDescriptionRequest](docs/SetNetworkAclDescriptionRequest.md)
 - [Vpc.SetNetworkAclDescriptionResponse](docs/SetNetworkAclDescriptionResponse.md)
 - [Vpc.SetRouteTableDescriptionRequest](docs/SetRouteTableDescriptionRequest.md)
 - [Vpc.SetRouteTableDescriptionResponse](docs/SetRouteTableDescriptionResponse.md)
 - [Vpc.SetSubnetNetworkAclRequest](docs/SetSubnetNetworkAclRequest.md)
 - [Vpc.SetSubnetNetworkAclResponse](docs/SetSubnetNetworkAclResponse.md)
 - [Vpc.SetVpcPeeringDescriptionRequest](docs/SetVpcPeeringDescriptionRequest.md)
 - [Vpc.SetVpcPeeringDescriptionResponse](docs/SetVpcPeeringDescriptionResponse.md)
 - [Vpc.Subnet](docs/Subnet.md)
 - [Vpc.Vpc](docs/Vpc.md)
 - [Vpc.VpcPeeringInstance](docs/VpcPeeringInstance.md)


### License

```
Copyright 2018 NAVER BUSINESS PLATFORM Corp.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
