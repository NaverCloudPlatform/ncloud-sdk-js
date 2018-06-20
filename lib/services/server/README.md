# server

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

```shell
npm install server --save
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
var Server = require('server');

var client = new Server.ApiClient({
  apiKey: 'your api key',
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Server.V2Api(client)

var addNasVolumeAccessControlRequest = new Server.AddNasVolumeAccessControlRequest(); // {AddNasVolumeAccessControlRequest} addNasVolumeAccessControlRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addNasVolumeAccessControl(addNasVolumeAccessControlRequest, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://ncloud.beta-apigw.ntruss.com/server/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Server.V2Api* | [**addNasVolumeAccessControl**](docs/V2Api.md#addNasVolumeAccessControl) | **POST** /addNasVolumeAccessControl | 
*Server.V2Api* | [**addPortForwardingRules**](docs/V2Api.md#addPortForwardingRules) | **POST** /addPortForwardingRules | 
*Server.V2Api* | [**associatePublicIpWithServerInstance**](docs/V2Api.md#associatePublicIpWithServerInstance) | **POST** /associatePublicIpWithServerInstance | 
*Server.V2Api* | [**changeNasVolumeSize**](docs/V2Api.md#changeNasVolumeSize) | **POST** /changeNasVolumeSize | 
*Server.V2Api* | [**changeServerInstanceSpec**](docs/V2Api.md#changeServerInstanceSpec) | **POST** /changeServerInstanceSpec | 
*Server.V2Api* | [**createBlockStorageInstance**](docs/V2Api.md#createBlockStorageInstance) | **POST** /createBlockStorageInstance | 
*Server.V2Api* | [**createLoginKey**](docs/V2Api.md#createLoginKey) | **POST** /createLoginKey | 
*Server.V2Api* | [**createMemberServerImage**](docs/V2Api.md#createMemberServerImage) | **POST** /createMemberServerImage | 
*Server.V2Api* | [**createNasVolumeInstance**](docs/V2Api.md#createNasVolumeInstance) | **POST** /createNasVolumeInstance | 
*Server.V2Api* | [**createPublicIpInstance**](docs/V2Api.md#createPublicIpInstance) | **POST** /createPublicIpInstance | 
*Server.V2Api* | [**createServerInstances**](docs/V2Api.md#createServerInstances) | **POST** /createServerInstances | 
*Server.V2Api* | [**deleteBlockStorageInstances**](docs/V2Api.md#deleteBlockStorageInstances) | **POST** /deleteBlockStorageInstances | 
*Server.V2Api* | [**deleteLoginKey**](docs/V2Api.md#deleteLoginKey) | **POST** /deleteLoginKey | 
*Server.V2Api* | [**deleteMemberServerImages**](docs/V2Api.md#deleteMemberServerImages) | **POST** /deleteMemberServerImages | 
*Server.V2Api* | [**deleteNasVolumeInstance**](docs/V2Api.md#deleteNasVolumeInstance) | **POST** /deleteNasVolumeInstance | 
*Server.V2Api* | [**deletePortForwardingRules**](docs/V2Api.md#deletePortForwardingRules) | **POST** /deletePortForwardingRules | 
*Server.V2Api* | [**deletePublicIpInstances**](docs/V2Api.md#deletePublicIpInstances) | **POST** /deletePublicIpInstances | 
*Server.V2Api* | [**disassociatePublicIpFromServerInstance**](docs/V2Api.md#disassociatePublicIpFromServerInstance) | **POST** /disassociatePublicIpFromServerInstance | 
*Server.V2Api* | [**getAccessControlGroupList**](docs/V2Api.md#getAccessControlGroupList) | **POST** /getAccessControlGroupList | 
*Server.V2Api* | [**getAccessControlGroupServerInstanceList**](docs/V2Api.md#getAccessControlGroupServerInstanceList) | **POST** /getAccessControlGroupServerInstanceList | 
*Server.V2Api* | [**getAccessControlRuleList**](docs/V2Api.md#getAccessControlRuleList) | **POST** /getAccessControlRuleList | 
*Server.V2Api* | [**getBlockStorageInstanceList**](docs/V2Api.md#getBlockStorageInstanceList) | **POST** /getBlockStorageInstanceList | 
*Server.V2Api* | [**getBlockStorageSnapshotInstanceList**](docs/V2Api.md#getBlockStorageSnapshotInstanceList) | **POST** /getBlockStorageSnapshotInstanceList | 
*Server.V2Api* | [**getLoginKeyList**](docs/V2Api.md#getLoginKeyList) | **POST** /getLoginKeyList | 
*Server.V2Api* | [**getMemberServerImageList**](docs/V2Api.md#getMemberServerImageList) | **POST** /getMemberServerImageList | 
*Server.V2Api* | [**getNasVolumeInstanceList**](docs/V2Api.md#getNasVolumeInstanceList) | **POST** /getNasVolumeInstanceList | 
*Server.V2Api* | [**getNasVolumeInstanceRatingList**](docs/V2Api.md#getNasVolumeInstanceRatingList) | **POST** /getNasVolumeInstanceRatingList | 
*Server.V2Api* | [**getPortForwardingRuleList**](docs/V2Api.md#getPortForwardingRuleList) | **POST** /getPortForwardingRuleList | 
*Server.V2Api* | [**getPublicIpInstanceList**](docs/V2Api.md#getPublicIpInstanceList) | **POST** /getPublicIpInstanceList | 
*Server.V2Api* | [**getPublicIpTargetServerInstanceList**](docs/V2Api.md#getPublicIpTargetServerInstanceList) | **POST** /getPublicIpTargetServerInstanceList | 
*Server.V2Api* | [**getRaidList**](docs/V2Api.md#getRaidList) | **POST** /getRaidList | 
*Server.V2Api* | [**getRegionList**](docs/V2Api.md#getRegionList) | **POST** /getRegionList | 
*Server.V2Api* | [**getRootPassword**](docs/V2Api.md#getRootPassword) | **POST** /getRootPassword | 
*Server.V2Api* | [**getServerImageProductList**](docs/V2Api.md#getServerImageProductList) | **POST** /getServerImageProductList | 
*Server.V2Api* | [**getServerInstanceList**](docs/V2Api.md#getServerInstanceList) | **POST** /getServerInstanceList | 
*Server.V2Api* | [**getServerProductList**](docs/V2Api.md#getServerProductList) | **POST** /getServerProductList | 
*Server.V2Api* | [**getZoneList**](docs/V2Api.md#getZoneList) | **POST** /getZoneList | 
*Server.V2Api* | [**rebootServerInstances**](docs/V2Api.md#rebootServerInstances) | **POST** /rebootServerInstances | 
*Server.V2Api* | [**recreateServerInstance**](docs/V2Api.md#recreateServerInstance) | **POST** /recreateServerInstance | 
*Server.V2Api* | [**removeNasVolumeAccessControl**](docs/V2Api.md#removeNasVolumeAccessControl) | **POST** /removeNasVolumeAccessControl | 
*Server.V2Api* | [**setNasVolumeAccessControl**](docs/V2Api.md#setNasVolumeAccessControl) | **POST** /setNasVolumeAccessControl | 
*Server.V2Api* | [**startServerInstances**](docs/V2Api.md#startServerInstances) | **POST** /startServerInstances | 
*Server.V2Api* | [**stopServerInstances**](docs/V2Api.md#stopServerInstances) | **POST** /stopServerInstances | 
*Server.V2Api* | [**terminateServerInstances**](docs/V2Api.md#terminateServerInstances) | **POST** /terminateServerInstances | 


## Documentation for Models

 - [Server.AccessControlGroup](docs/AccessControlGroup.md)
 - [Server.AccessControlRule](docs/AccessControlRule.md)
 - [Server.AddNasVolumeAccessControlRequest](docs/AddNasVolumeAccessControlRequest.md)
 - [Server.AddNasVolumeAccessControlResponse](docs/AddNasVolumeAccessControlResponse.md)
 - [Server.AddPortForwardingRulesRequest](docs/AddPortForwardingRulesRequest.md)
 - [Server.AddPortForwardingRulesResponse](docs/AddPortForwardingRulesResponse.md)
 - [Server.AssociatePublicIpWithServerInstanceRequest](docs/AssociatePublicIpWithServerInstanceRequest.md)
 - [Server.AssociatePublicIpWithServerInstanceResponse](docs/AssociatePublicIpWithServerInstanceResponse.md)
 - [Server.BlockStorageInstance](docs/BlockStorageInstance.md)
 - [Server.BlockStorageSnapshotInstance](docs/BlockStorageSnapshotInstance.md)
 - [Server.ChangeNasVolumeSizeRequest](docs/ChangeNasVolumeSizeRequest.md)
 - [Server.ChangeNasVolumeSizeResponse](docs/ChangeNasVolumeSizeResponse.md)
 - [Server.ChangeServerInstanceSpecRequest](docs/ChangeServerInstanceSpecRequest.md)
 - [Server.ChangeServerInstanceSpecResponse](docs/ChangeServerInstanceSpecResponse.md)
 - [Server.CommonCode](docs/CommonCode.md)
 - [Server.CreateBlockStorageInstanceRequest](docs/CreateBlockStorageInstanceRequest.md)
 - [Server.CreateBlockStorageInstanceResponse](docs/CreateBlockStorageInstanceResponse.md)
 - [Server.CreateLoginKeyRequest](docs/CreateLoginKeyRequest.md)
 - [Server.CreateLoginKeyResponse](docs/CreateLoginKeyResponse.md)
 - [Server.CreateMemberServerImageRequest](docs/CreateMemberServerImageRequest.md)
 - [Server.CreateMemberServerImageResponse](docs/CreateMemberServerImageResponse.md)
 - [Server.CreateNasVolumeInstanceRequest](docs/CreateNasVolumeInstanceRequest.md)
 - [Server.CreateNasVolumeInstanceResponse](docs/CreateNasVolumeInstanceResponse.md)
 - [Server.CreatePublicIpInstanceRequest](docs/CreatePublicIpInstanceRequest.md)
 - [Server.CreatePublicIpInstanceResponse](docs/CreatePublicIpInstanceResponse.md)
 - [Server.CreateServerInstancesRequest](docs/CreateServerInstancesRequest.md)
 - [Server.CreateServerInstancesResponse](docs/CreateServerInstancesResponse.md)
 - [Server.DeleteBlockStorageInstancesRequest](docs/DeleteBlockStorageInstancesRequest.md)
 - [Server.DeleteBlockStorageInstancesResponse](docs/DeleteBlockStorageInstancesResponse.md)
 - [Server.DeleteLoginKeyRequest](docs/DeleteLoginKeyRequest.md)
 - [Server.DeleteLoginKeyResponse](docs/DeleteLoginKeyResponse.md)
 - [Server.DeleteMemberServerImagesRequest](docs/DeleteMemberServerImagesRequest.md)
 - [Server.DeleteMemberServerImagesResponse](docs/DeleteMemberServerImagesResponse.md)
 - [Server.DeleteNasVolumeInstanceRequest](docs/DeleteNasVolumeInstanceRequest.md)
 - [Server.DeleteNasVolumeInstanceResponse](docs/DeleteNasVolumeInstanceResponse.md)
 - [Server.DeletePortForwardingRulesRequest](docs/DeletePortForwardingRulesRequest.md)
 - [Server.DeletePortForwardingRulesResponse](docs/DeletePortForwardingRulesResponse.md)
 - [Server.DeletePublicIpInstancesResponse](docs/DeletePublicIpInstancesResponse.md)
 - [Server.DisassociatePublicIpFromServerInstanceRequest](docs/DisassociatePublicIpFromServerInstanceRequest.md)
 - [Server.DisassociatePublicIpFromServerInstanceResponse](docs/DisassociatePublicIpFromServerInstanceResponse.md)
 - [Server.GetAccessControlGroupListRequest](docs/GetAccessControlGroupListRequest.md)
 - [Server.GetAccessControlGroupListResponse](docs/GetAccessControlGroupListResponse.md)
 - [Server.GetAccessControlGroupServerInstanceListRequest](docs/GetAccessControlGroupServerInstanceListRequest.md)
 - [Server.GetAccessControlGroupServerInstanceListResponse](docs/GetAccessControlGroupServerInstanceListResponse.md)
 - [Server.GetAccessControlRuleListRequest](docs/GetAccessControlRuleListRequest.md)
 - [Server.GetAccessControlRuleListResponse](docs/GetAccessControlRuleListResponse.md)
 - [Server.GetBlockStorageInstanceListRequest](docs/GetBlockStorageInstanceListRequest.md)
 - [Server.GetBlockStorageInstanceListResponse](docs/GetBlockStorageInstanceListResponse.md)
 - [Server.GetBlockStorageSnapshotInstanceListRequest](docs/GetBlockStorageSnapshotInstanceListRequest.md)
 - [Server.GetBlockStorageSnapshotInstanceListResponse](docs/GetBlockStorageSnapshotInstanceListResponse.md)
 - [Server.GetLoginKeyListRequest](docs/GetLoginKeyListRequest.md)
 - [Server.GetLoginKeyListResponse](docs/GetLoginKeyListResponse.md)
 - [Server.GetMemberServerImageListRequest](docs/GetMemberServerImageListRequest.md)
 - [Server.GetMemberServerImageListResponse](docs/GetMemberServerImageListResponse.md)
 - [Server.GetNasVolumeInstanceListRequest](docs/GetNasVolumeInstanceListRequest.md)
 - [Server.GetNasVolumeInstanceListResponse](docs/GetNasVolumeInstanceListResponse.md)
 - [Server.GetNasVolumeInstanceRatingListRequest](docs/GetNasVolumeInstanceRatingListRequest.md)
 - [Server.GetNasVolumeInstanceRatingListResponse](docs/GetNasVolumeInstanceRatingListResponse.md)
 - [Server.GetPortForwardingRuleListRequest](docs/GetPortForwardingRuleListRequest.md)
 - [Server.GetPortForwardingRuleListResponse](docs/GetPortForwardingRuleListResponse.md)
 - [Server.GetPublicIpInstanceListRequest](docs/GetPublicIpInstanceListRequest.md)
 - [Server.GetPublicIpInstanceListResponse](docs/GetPublicIpInstanceListResponse.md)
 - [Server.GetPublicIpTargetServerInstanceListRequest](docs/GetPublicIpTargetServerInstanceListRequest.md)
 - [Server.GetPublicIpTargetServerInstanceListResponse](docs/GetPublicIpTargetServerInstanceListResponse.md)
 - [Server.GetRaidListRequest](docs/GetRaidListRequest.md)
 - [Server.GetRaidListResponse](docs/GetRaidListResponse.md)
 - [Server.GetRegionListRequest](docs/GetRegionListRequest.md)
 - [Server.GetRegionListResponse](docs/GetRegionListResponse.md)
 - [Server.GetRootPasswordRequest](docs/GetRootPasswordRequest.md)
 - [Server.GetRootPasswordResponse](docs/GetRootPasswordResponse.md)
 - [Server.GetServerImageProductListRequest](docs/GetServerImageProductListRequest.md)
 - [Server.GetServerImageProductListResponse](docs/GetServerImageProductListResponse.md)
 - [Server.GetServerInstanceListRequest](docs/GetServerInstanceListRequest.md)
 - [Server.GetServerInstanceListResponse](docs/GetServerInstanceListResponse.md)
 - [Server.GetServerProductListRequest](docs/GetServerProductListRequest.md)
 - [Server.GetServerProductListResponse](docs/GetServerProductListResponse.md)
 - [Server.GetZoneListRequest](docs/GetZoneListRequest.md)
 - [Server.GetZoneListResponse](docs/GetZoneListResponse.md)
 - [Server.LoginKey](docs/LoginKey.md)
 - [Server.MemberServerImage](docs/MemberServerImage.md)
 - [Server.NasVolumeInstance](docs/NasVolumeInstance.md)
 - [Server.NasVolumeInstanceCustomIp](docs/NasVolumeInstanceCustomIp.md)
 - [Server.NasVolumeInstanceRating](docs/NasVolumeInstanceRating.md)
 - [Server.PortForwardingRule](docs/PortForwardingRule.md)
 - [Server.PortForwardingRuleParameter](docs/PortForwardingRuleParameter.md)
 - [Server.Product](docs/Product.md)
 - [Server.PublicIpInstance](docs/PublicIpInstance.md)
 - [Server.Raid](docs/Raid.md)
 - [Server.RebootServerInstancesRequest](docs/RebootServerInstancesRequest.md)
 - [Server.RebootServerInstancesResponse](docs/RebootServerInstancesResponse.md)
 - [Server.RecreateServerInstanceRequest](docs/RecreateServerInstanceRequest.md)
 - [Server.RecreateServerInstanceResponse](docs/RecreateServerInstanceResponse.md)
 - [Server.Region](docs/Region.md)
 - [Server.RemoveNasVolumeAccessControlRequest](docs/RemoveNasVolumeAccessControlRequest.md)
 - [Server.RemoveNasVolumeAccessControlResponse](docs/RemoveNasVolumeAccessControlResponse.md)
 - [Server.RootPassword](docs/RootPassword.md)
 - [Server.ServerInstance](docs/ServerInstance.md)
 - [Server.SetNasVolumeAccessControlRequest](docs/SetNasVolumeAccessControlRequest.md)
 - [Server.SetNasVolumeAccessControlResponse](docs/SetNasVolumeAccessControlResponse.md)
 - [Server.StartServerInstancesRequest](docs/StartServerInstancesRequest.md)
 - [Server.StartServerInstancesResponse](docs/StartServerInstancesResponse.md)
 - [Server.StopServerInstancesRequest](docs/StopServerInstancesRequest.md)
 - [Server.StopServerInstancesResponse](docs/StopServerInstancesResponse.md)
 - [Server.TerminateServerInstancesRequest](docs/TerminateServerInstancesRequest.md)
 - [Server.TerminateServerInstancesResponse](docs/TerminateServerInstancesResponse.md)
 - [Server.Zone](docs/Zone.md)

