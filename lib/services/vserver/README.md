# ncloud-vserver

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

```shell
npm install ncloud-vserver --save
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
var Vserver = require('ncloud-vserver');

var client = new Vserver.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Vserver.V2Api(client)

var addAccessControlGroupInboundRuleRequest = new Vserver.AddAccessControlGroupInboundRuleRequest(); // {AddAccessControlGroupInboundRuleRequest} addAccessControlGroupInboundRuleRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addAccessControlGroupInboundRule(addAccessControlGroupInboundRuleRequest, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://ncloud.apigw.ntruss.com/vserver/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Vserver.V2Api* | [**addAccessControlGroupInboundRule**](docs/V2Api.md#addAccessControlGroupInboundRule) | **POST** /addAccessControlGroupInboundRule | 
*Vserver.V2Api* | [**addAccessControlGroupOutboundRule**](docs/V2Api.md#addAccessControlGroupOutboundRule) | **POST** /addAccessControlGroupOutboundRule | 
*Vserver.V2Api* | [**addNetworkInterfaceAccessControlGroup**](docs/V2Api.md#addNetworkInterfaceAccessControlGroup) | **POST** /addNetworkInterfaceAccessControlGroup | 
*Vserver.V2Api* | [**addPlacementGroupServerInstance**](docs/V2Api.md#addPlacementGroupServerInstance) | **POST** /addPlacementGroupServerInstance | 
*Vserver.V2Api* | [**associatePublicIpWithServerInstance**](docs/V2Api.md#associatePublicIpWithServerInstance) | **POST** /associatePublicIpWithServerInstance | 
*Vserver.V2Api* | [**attachBlockStorageInstance**](docs/V2Api.md#attachBlockStorageInstance) | **POST** /attachBlockStorageInstance | 
*Vserver.V2Api* | [**attachNetworkInterface**](docs/V2Api.md#attachNetworkInterface) | **POST** /attachNetworkInterface | 
*Vserver.V2Api* | [**changeBlockStorageVolumeSize**](docs/V2Api.md#changeBlockStorageVolumeSize) | **POST** /changeBlockStorageVolumeSize | 
*Vserver.V2Api* | [**changeServerInstanceSpec**](docs/V2Api.md#changeServerInstanceSpec) | **POST** /changeServerInstanceSpec | 
*Vserver.V2Api* | [**createAccessControlGroup**](docs/V2Api.md#createAccessControlGroup) | **POST** /createAccessControlGroup | 
*Vserver.V2Api* | [**createBlockStorageInstance**](docs/V2Api.md#createBlockStorageInstance) | **POST** /createBlockStorageInstance | 
*Vserver.V2Api* | [**createBlockStorageSnapshotInstance**](docs/V2Api.md#createBlockStorageSnapshotInstance) | **POST** /createBlockStorageSnapshotInstance | 
*Vserver.V2Api* | [**createInitScript**](docs/V2Api.md#createInitScript) | **POST** /createInitScript | 
*Vserver.V2Api* | [**createLoginKey**](docs/V2Api.md#createLoginKey) | **POST** /createLoginKey | 
*Vserver.V2Api* | [**createMemberServerImageInstance**](docs/V2Api.md#createMemberServerImageInstance) | **POST** /createMemberServerImageInstance | 
*Vserver.V2Api* | [**createNetworkInterface**](docs/V2Api.md#createNetworkInterface) | **POST** /createNetworkInterface | 
*Vserver.V2Api* | [**createPlacementGroup**](docs/V2Api.md#createPlacementGroup) | **POST** /createPlacementGroup | 
*Vserver.V2Api* | [**createPublicIpInstance**](docs/V2Api.md#createPublicIpInstance) | **POST** /createPublicIpInstance | 
*Vserver.V2Api* | [**createServerInstances**](docs/V2Api.md#createServerInstances) | **POST** /createServerInstances | 
*Vserver.V2Api* | [**deleteAccessControlGroup**](docs/V2Api.md#deleteAccessControlGroup) | **POST** /deleteAccessControlGroup | 
*Vserver.V2Api* | [**deleteBlockStorageInstances**](docs/V2Api.md#deleteBlockStorageInstances) | **POST** /deleteBlockStorageInstances | 
*Vserver.V2Api* | [**deleteBlockStorageSnapshotInstances**](docs/V2Api.md#deleteBlockStorageSnapshotInstances) | **POST** /deleteBlockStorageSnapshotInstances | 
*Vserver.V2Api* | [**deleteInitScripts**](docs/V2Api.md#deleteInitScripts) | **POST** /deleteInitScripts | 
*Vserver.V2Api* | [**deleteLoginKeys**](docs/V2Api.md#deleteLoginKeys) | **POST** /deleteLoginKeys | 
*Vserver.V2Api* | [**deleteMemberServerImageInstances**](docs/V2Api.md#deleteMemberServerImageInstances) | **POST** /deleteMemberServerImageInstances | 
*Vserver.V2Api* | [**deleteNetworkInterface**](docs/V2Api.md#deleteNetworkInterface) | **POST** /deleteNetworkInterface | 
*Vserver.V2Api* | [**deletePlacementGroup**](docs/V2Api.md#deletePlacementGroup) | **POST** /deletePlacementGroup | 
*Vserver.V2Api* | [**deletePublicIpInstance**](docs/V2Api.md#deletePublicIpInstance) | **POST** /deletePublicIpInstance | 
*Vserver.V2Api* | [**detachBlockStorageInstances**](docs/V2Api.md#detachBlockStorageInstances) | **POST** /detachBlockStorageInstances | 
*Vserver.V2Api* | [**detachNetworkInterface**](docs/V2Api.md#detachNetworkInterface) | **POST** /detachNetworkInterface | 
*Vserver.V2Api* | [**disassociatePublicIpFromServerInstance**](docs/V2Api.md#disassociatePublicIpFromServerInstance) | **POST** /disassociatePublicIpFromServerInstance | 
*Vserver.V2Api* | [**getAccessControlGroupDetail**](docs/V2Api.md#getAccessControlGroupDetail) | **POST** /getAccessControlGroupDetail | 
*Vserver.V2Api* | [**getAccessControlGroupList**](docs/V2Api.md#getAccessControlGroupList) | **POST** /getAccessControlGroupList | 
*Vserver.V2Api* | [**getAccessControlGroupRuleList**](docs/V2Api.md#getAccessControlGroupRuleList) | **POST** /getAccessControlGroupRuleList | 
*Vserver.V2Api* | [**getBlockStorageInstanceDetail**](docs/V2Api.md#getBlockStorageInstanceDetail) | **POST** /getBlockStorageInstanceDetail | 
*Vserver.V2Api* | [**getBlockStorageInstanceList**](docs/V2Api.md#getBlockStorageInstanceList) | **POST** /getBlockStorageInstanceList | 
*Vserver.V2Api* | [**getBlockStorageSnapshotInstanceDetail**](docs/V2Api.md#getBlockStorageSnapshotInstanceDetail) | **POST** /getBlockStorageSnapshotInstanceDetail | 
*Vserver.V2Api* | [**getBlockStorageSnapshotInstanceList**](docs/V2Api.md#getBlockStorageSnapshotInstanceList) | **POST** /getBlockStorageSnapshotInstanceList | 
*Vserver.V2Api* | [**getInitScriptDetail**](docs/V2Api.md#getInitScriptDetail) | **POST** /getInitScriptDetail | 
*Vserver.V2Api* | [**getInitScriptList**](docs/V2Api.md#getInitScriptList) | **POST** /getInitScriptList | 
*Vserver.V2Api* | [**getLoginKeyList**](docs/V2Api.md#getLoginKeyList) | **POST** /getLoginKeyList | 
*Vserver.V2Api* | [**getMemberServerImageInstanceDetail**](docs/V2Api.md#getMemberServerImageInstanceDetail) | **POST** /getMemberServerImageInstanceDetail | 
*Vserver.V2Api* | [**getMemberServerImageInstanceList**](docs/V2Api.md#getMemberServerImageInstanceList) | **POST** /getMemberServerImageInstanceList | 
*Vserver.V2Api* | [**getNetworkInterfaceDetail**](docs/V2Api.md#getNetworkInterfaceDetail) | **POST** /getNetworkInterfaceDetail | 
*Vserver.V2Api* | [**getNetworkInterfaceList**](docs/V2Api.md#getNetworkInterfaceList) | **POST** /getNetworkInterfaceList | 
*Vserver.V2Api* | [**getPlacementGroupDetail**](docs/V2Api.md#getPlacementGroupDetail) | **POST** /getPlacementGroupDetail | 
*Vserver.V2Api* | [**getPlacementGroupList**](docs/V2Api.md#getPlacementGroupList) | **POST** /getPlacementGroupList | 
*Vserver.V2Api* | [**getPublicIpInstanceDetail**](docs/V2Api.md#getPublicIpInstanceDetail) | **POST** /getPublicIpInstanceDetail | 
*Vserver.V2Api* | [**getPublicIpInstanceList**](docs/V2Api.md#getPublicIpInstanceList) | **POST** /getPublicIpInstanceList | 
*Vserver.V2Api* | [**getPublicIpTargetServerInstanceList**](docs/V2Api.md#getPublicIpTargetServerInstanceList) | **POST** /getPublicIpTargetServerInstanceList | 
*Vserver.V2Api* | [**getRegionList**](docs/V2Api.md#getRegionList) | **POST** /getRegionList | 
*Vserver.V2Api* | [**getRootPassword**](docs/V2Api.md#getRootPassword) | **POST** /getRootPassword | 
*Vserver.V2Api* | [**getRootPasswordServerInstanceList**](docs/V2Api.md#getRootPasswordServerInstanceList) | **POST** /getRootPasswordServerInstanceList | 
*Vserver.V2Api* | [**getServerImageProductList**](docs/V2Api.md#getServerImageProductList) | **POST** /getServerImageProductList | 
*Vserver.V2Api* | [**getServerInstanceDetail**](docs/V2Api.md#getServerInstanceDetail) | **POST** /getServerInstanceDetail | 
*Vserver.V2Api* | [**getServerInstanceList**](docs/V2Api.md#getServerInstanceList) | **POST** /getServerInstanceList | 
*Vserver.V2Api* | [**getServerProductList**](docs/V2Api.md#getServerProductList) | **POST** /getServerProductList | 
*Vserver.V2Api* | [**getZoneList**](docs/V2Api.md#getZoneList) | **POST** /getZoneList | 
*Vserver.V2Api* | [**importLoginKey**](docs/V2Api.md#importLoginKey) | **POST** /importLoginKey | 
*Vserver.V2Api* | [**rebootServerInstances**](docs/V2Api.md#rebootServerInstances) | **POST** /rebootServerInstances | 
*Vserver.V2Api* | [**removeAccessControlGroupInboundRule**](docs/V2Api.md#removeAccessControlGroupInboundRule) | **POST** /removeAccessControlGroupInboundRule | 
*Vserver.V2Api* | [**removeAccessControlGroupOutboundRule**](docs/V2Api.md#removeAccessControlGroupOutboundRule) | **POST** /removeAccessControlGroupOutboundRule | 
*Vserver.V2Api* | [**removeNetworkInterfaceAccessControlGroup**](docs/V2Api.md#removeNetworkInterfaceAccessControlGroup) | **POST** /removeNetworkInterfaceAccessControlGroup | 
*Vserver.V2Api* | [**removePlacementGroupServerInstance**](docs/V2Api.md#removePlacementGroupServerInstance) | **POST** /removePlacementGroupServerInstance | 
*Vserver.V2Api* | [**startServerInstances**](docs/V2Api.md#startServerInstances) | **POST** /startServerInstances | 
*Vserver.V2Api* | [**stopServerInstances**](docs/V2Api.md#stopServerInstances) | **POST** /stopServerInstances | 
*Vserver.V2Api* | [**terminateServerInstances**](docs/V2Api.md#terminateServerInstances) | **POST** /terminateServerInstances | 


## Documentation for Models

 - [Vserver.AccessControlGroup](docs/AccessControlGroup.md)
 - [Vserver.AccessControlGroupRule](docs/AccessControlGroupRule.md)
 - [Vserver.AddAccessControlGroupInboundRuleRequest](docs/AddAccessControlGroupInboundRuleRequest.md)
 - [Vserver.AddAccessControlGroupInboundRuleResponse](docs/AddAccessControlGroupInboundRuleResponse.md)
 - [Vserver.AddAccessControlGroupOutboundRuleRequest](docs/AddAccessControlGroupOutboundRuleRequest.md)
 - [Vserver.AddAccessControlGroupOutboundRuleResponse](docs/AddAccessControlGroupOutboundRuleResponse.md)
 - [Vserver.AddAccessControlGroupRuleParameter](docs/AddAccessControlGroupRuleParameter.md)
 - [Vserver.AddNetworkInterfaceAccessControlGroupRequest](docs/AddNetworkInterfaceAccessControlGroupRequest.md)
 - [Vserver.AddNetworkInterfaceAccessControlGroupResponse](docs/AddNetworkInterfaceAccessControlGroupResponse.md)
 - [Vserver.AddPlacementGroupServerInstanceRequest](docs/AddPlacementGroupServerInstanceRequest.md)
 - [Vserver.AddPlacementGroupServerInstanceResponse](docs/AddPlacementGroupServerInstanceResponse.md)
 - [Vserver.AssociatePublicIpWithServerInstanceRequest](docs/AssociatePublicIpWithServerInstanceRequest.md)
 - [Vserver.AssociatePublicIpWithServerInstanceResponse](docs/AssociatePublicIpWithServerInstanceResponse.md)
 - [Vserver.AttachBlockStorageInstanceRequest](docs/AttachBlockStorageInstanceRequest.md)
 - [Vserver.AttachBlockStorageInstanceResponse](docs/AttachBlockStorageInstanceResponse.md)
 - [Vserver.AttachNetworkInterfaceRequest](docs/AttachNetworkInterfaceRequest.md)
 - [Vserver.AttachNetworkInterfaceResponse](docs/AttachNetworkInterfaceResponse.md)
 - [Vserver.BlockStorageInstance](docs/BlockStorageInstance.md)
 - [Vserver.BlockStorageSnapshotInstance](docs/BlockStorageSnapshotInstance.md)
 - [Vserver.ChangeBlockStorageVolumeSizeRequest](docs/ChangeBlockStorageVolumeSizeRequest.md)
 - [Vserver.ChangeBlockStorageVolumeSizeResponse](docs/ChangeBlockStorageVolumeSizeResponse.md)
 - [Vserver.ChangeServerInstanceSpecRequest](docs/ChangeServerInstanceSpecRequest.md)
 - [Vserver.ChangeServerInstanceSpecResponse](docs/ChangeServerInstanceSpecResponse.md)
 - [Vserver.CommonCode](docs/CommonCode.md)
 - [Vserver.CreateAccessControlGroupRequest](docs/CreateAccessControlGroupRequest.md)
 - [Vserver.CreateAccessControlGroupResponse](docs/CreateAccessControlGroupResponse.md)
 - [Vserver.CreateBlockStorageInstanceRequest](docs/CreateBlockStorageInstanceRequest.md)
 - [Vserver.CreateBlockStorageInstanceResponse](docs/CreateBlockStorageInstanceResponse.md)
 - [Vserver.CreateBlockStorageSnapshotInstanceRequest](docs/CreateBlockStorageSnapshotInstanceRequest.md)
 - [Vserver.CreateBlockStorageSnapshotInstanceResponse](docs/CreateBlockStorageSnapshotInstanceResponse.md)
 - [Vserver.CreateInitScriptRequest](docs/CreateInitScriptRequest.md)
 - [Vserver.CreateInitScriptResponse](docs/CreateInitScriptResponse.md)
 - [Vserver.CreateLoginKeyRequest](docs/CreateLoginKeyRequest.md)
 - [Vserver.CreateLoginKeyResponse](docs/CreateLoginKeyResponse.md)
 - [Vserver.CreateMemberServerImageInstanceRequest](docs/CreateMemberServerImageInstanceRequest.md)
 - [Vserver.CreateMemberServerImageInstanceResponse](docs/CreateMemberServerImageInstanceResponse.md)
 - [Vserver.CreateNetworkInterfaceRequest](docs/CreateNetworkInterfaceRequest.md)
 - [Vserver.CreateNetworkInterfaceResponse](docs/CreateNetworkInterfaceResponse.md)
 - [Vserver.CreatePlacementGroupRequest](docs/CreatePlacementGroupRequest.md)
 - [Vserver.CreatePlacementGroupResponse](docs/CreatePlacementGroupResponse.md)
 - [Vserver.CreatePublicIpInstanceRequest](docs/CreatePublicIpInstanceRequest.md)
 - [Vserver.CreatePublicIpInstanceResponse](docs/CreatePublicIpInstanceResponse.md)
 - [Vserver.CreateServerInstancesRequest](docs/CreateServerInstancesRequest.md)
 - [Vserver.CreateServerInstancesResponse](docs/CreateServerInstancesResponse.md)
 - [Vserver.DeleteAccessControlGroupRequest](docs/DeleteAccessControlGroupRequest.md)
 - [Vserver.DeleteAccessControlGroupResponse](docs/DeleteAccessControlGroupResponse.md)
 - [Vserver.DeleteBlockStorageInstancesRequest](docs/DeleteBlockStorageInstancesRequest.md)
 - [Vserver.DeleteBlockStorageInstancesResponse](docs/DeleteBlockStorageInstancesResponse.md)
 - [Vserver.DeleteBlockStorageSnapshotInstancesRequest](docs/DeleteBlockStorageSnapshotInstancesRequest.md)
 - [Vserver.DeleteBlockStorageSnapshotInstancesResponse](docs/DeleteBlockStorageSnapshotInstancesResponse.md)
 - [Vserver.DeleteInitScriptsRequest](docs/DeleteInitScriptsRequest.md)
 - [Vserver.DeleteInitScriptsResponse](docs/DeleteInitScriptsResponse.md)
 - [Vserver.DeleteLoginKeysRequest](docs/DeleteLoginKeysRequest.md)
 - [Vserver.DeleteLoginKeysResponse](docs/DeleteLoginKeysResponse.md)
 - [Vserver.DeleteMemberServerImageInstancesRequest](docs/DeleteMemberServerImageInstancesRequest.md)
 - [Vserver.DeleteMemberServerImageInstancesResponse](docs/DeleteMemberServerImageInstancesResponse.md)
 - [Vserver.DeleteNetworkInterfaceRequest](docs/DeleteNetworkInterfaceRequest.md)
 - [Vserver.DeleteNetworkInterfaceResponse](docs/DeleteNetworkInterfaceResponse.md)
 - [Vserver.DeletePlacementGroupRequest](docs/DeletePlacementGroupRequest.md)
 - [Vserver.DeletePlacementGroupResponse](docs/DeletePlacementGroupResponse.md)
 - [Vserver.DeletePublicIpInstanceRequest](docs/DeletePublicIpInstanceRequest.md)
 - [Vserver.DeletePublicIpInstanceResponse](docs/DeletePublicIpInstanceResponse.md)
 - [Vserver.DetachBlockStorageInstancesRequest](docs/DetachBlockStorageInstancesRequest.md)
 - [Vserver.DetachBlockStorageInstancesResponse](docs/DetachBlockStorageInstancesResponse.md)
 - [Vserver.DetachNetworkInterfaceRequest](docs/DetachNetworkInterfaceRequest.md)
 - [Vserver.DetachNetworkInterfaceResponse](docs/DetachNetworkInterfaceResponse.md)
 - [Vserver.DisassociatePublicIpFromServerInstanceRequest](docs/DisassociatePublicIpFromServerInstanceRequest.md)
 - [Vserver.DisassociatePublicIpFromServerInstanceResponse](docs/DisassociatePublicIpFromServerInstanceResponse.md)
 - [Vserver.GetAccessControlGroupDetailRequest](docs/GetAccessControlGroupDetailRequest.md)
 - [Vserver.GetAccessControlGroupDetailResponse](docs/GetAccessControlGroupDetailResponse.md)
 - [Vserver.GetAccessControlGroupListRequest](docs/GetAccessControlGroupListRequest.md)
 - [Vserver.GetAccessControlGroupListResponse](docs/GetAccessControlGroupListResponse.md)
 - [Vserver.GetAccessControlGroupRuleListRequest](docs/GetAccessControlGroupRuleListRequest.md)
 - [Vserver.GetAccessControlGroupRuleListResponse](docs/GetAccessControlGroupRuleListResponse.md)
 - [Vserver.GetBlockStorageInstanceDetailRequest](docs/GetBlockStorageInstanceDetailRequest.md)
 - [Vserver.GetBlockStorageInstanceDetailResponse](docs/GetBlockStorageInstanceDetailResponse.md)
 - [Vserver.GetBlockStorageInstanceListRequest](docs/GetBlockStorageInstanceListRequest.md)
 - [Vserver.GetBlockStorageInstanceListResponse](docs/GetBlockStorageInstanceListResponse.md)
 - [Vserver.GetBlockStorageSnapshotInstanceDetailRequest](docs/GetBlockStorageSnapshotInstanceDetailRequest.md)
 - [Vserver.GetBlockStorageSnapshotInstanceDetailResponse](docs/GetBlockStorageSnapshotInstanceDetailResponse.md)
 - [Vserver.GetBlockStorageSnapshotInstanceListRequest](docs/GetBlockStorageSnapshotInstanceListRequest.md)
 - [Vserver.GetBlockStorageSnapshotInstanceListResponse](docs/GetBlockStorageSnapshotInstanceListResponse.md)
 - [Vserver.GetInitScriptDetailRequest](docs/GetInitScriptDetailRequest.md)
 - [Vserver.GetInitScriptDetailResponse](docs/GetInitScriptDetailResponse.md)
 - [Vserver.GetInitScriptListRequest](docs/GetInitScriptListRequest.md)
 - [Vserver.GetInitScriptListResponse](docs/GetInitScriptListResponse.md)
 - [Vserver.GetLoginKeyListRequest](docs/GetLoginKeyListRequest.md)
 - [Vserver.GetLoginKeyListResponse](docs/GetLoginKeyListResponse.md)
 - [Vserver.GetMemberServerImageInstanceDetailRequest](docs/GetMemberServerImageInstanceDetailRequest.md)
 - [Vserver.GetMemberServerImageInstanceDetailResponse](docs/GetMemberServerImageInstanceDetailResponse.md)
 - [Vserver.GetMemberServerImageInstanceListRequest](docs/GetMemberServerImageInstanceListRequest.md)
 - [Vserver.GetMemberServerImageInstanceListResponse](docs/GetMemberServerImageInstanceListResponse.md)
 - [Vserver.GetNetworkInterfaceDetailRequest](docs/GetNetworkInterfaceDetailRequest.md)
 - [Vserver.GetNetworkInterfaceDetailResponse](docs/GetNetworkInterfaceDetailResponse.md)
 - [Vserver.GetNetworkInterfaceListRequest](docs/GetNetworkInterfaceListRequest.md)
 - [Vserver.GetNetworkInterfaceListResponse](docs/GetNetworkInterfaceListResponse.md)
 - [Vserver.GetPlacementGroupDetailRequest](docs/GetPlacementGroupDetailRequest.md)
 - [Vserver.GetPlacementGroupDetailResponse](docs/GetPlacementGroupDetailResponse.md)
 - [Vserver.GetPlacementGroupListRequest](docs/GetPlacementGroupListRequest.md)
 - [Vserver.GetPlacementGroupListResponse](docs/GetPlacementGroupListResponse.md)
 - [Vserver.GetPublicIpInstanceDetailRequest](docs/GetPublicIpInstanceDetailRequest.md)
 - [Vserver.GetPublicIpInstanceDetailResponse](docs/GetPublicIpInstanceDetailResponse.md)
 - [Vserver.GetPublicIpInstanceListRequest](docs/GetPublicIpInstanceListRequest.md)
 - [Vserver.GetPublicIpInstanceListResponse](docs/GetPublicIpInstanceListResponse.md)
 - [Vserver.GetPublicIpTargetServerInstanceListRequest](docs/GetPublicIpTargetServerInstanceListRequest.md)
 - [Vserver.GetPublicIpTargetServerInstanceListResponse](docs/GetPublicIpTargetServerInstanceListResponse.md)
 - [Vserver.GetRegionListRequest](docs/GetRegionListRequest.md)
 - [Vserver.GetRegionListResponse](docs/GetRegionListResponse.md)
 - [Vserver.GetRootPasswordRequest](docs/GetRootPasswordRequest.md)
 - [Vserver.GetRootPasswordResponse](docs/GetRootPasswordResponse.md)
 - [Vserver.GetRootPasswordServerInstanceListRequest](docs/GetRootPasswordServerInstanceListRequest.md)
 - [Vserver.GetRootPasswordServerInstanceListResponse](docs/GetRootPasswordServerInstanceListResponse.md)
 - [Vserver.GetServerImageProductListRequest](docs/GetServerImageProductListRequest.md)
 - [Vserver.GetServerImageProductListResponse](docs/GetServerImageProductListResponse.md)
 - [Vserver.GetServerInstanceDetailRequest](docs/GetServerInstanceDetailRequest.md)
 - [Vserver.GetServerInstanceDetailResponse](docs/GetServerInstanceDetailResponse.md)
 - [Vserver.GetServerInstanceListRequest](docs/GetServerInstanceListRequest.md)
 - [Vserver.GetServerInstanceListResponse](docs/GetServerInstanceListResponse.md)
 - [Vserver.GetServerProductListRequest](docs/GetServerProductListRequest.md)
 - [Vserver.GetServerProductListResponse](docs/GetServerProductListResponse.md)
 - [Vserver.GetZoneListRequest](docs/GetZoneListRequest.md)
 - [Vserver.GetZoneListResponse](docs/GetZoneListResponse.md)
 - [Vserver.ImportLoginKeyRequest](docs/ImportLoginKeyRequest.md)
 - [Vserver.ImportLoginKeyResponse](docs/ImportLoginKeyResponse.md)
 - [Vserver.InitScript](docs/InitScript.md)
 - [Vserver.LoginKey](docs/LoginKey.md)
 - [Vserver.MemberServerImageInstance](docs/MemberServerImageInstance.md)
 - [Vserver.NetworkInterface](docs/NetworkInterface.md)
 - [Vserver.NetworkInterfaceParameter](docs/NetworkInterfaceParameter.md)
 - [Vserver.PlacementGroup](docs/PlacementGroup.md)
 - [Vserver.Product](docs/Product.md)
 - [Vserver.PublicIpInstance](docs/PublicIpInstance.md)
 - [Vserver.RebootServerInstancesRequest](docs/RebootServerInstancesRequest.md)
 - [Vserver.RebootServerInstancesResponse](docs/RebootServerInstancesResponse.md)
 - [Vserver.Region](docs/Region.md)
 - [Vserver.RemoveAccessControlGroupInboundRuleRequest](docs/RemoveAccessControlGroupInboundRuleRequest.md)
 - [Vserver.RemoveAccessControlGroupInboundRuleResponse](docs/RemoveAccessControlGroupInboundRuleResponse.md)
 - [Vserver.RemoveAccessControlGroupOutboundRuleRequest](docs/RemoveAccessControlGroupOutboundRuleRequest.md)
 - [Vserver.RemoveAccessControlGroupOutboundRuleResponse](docs/RemoveAccessControlGroupOutboundRuleResponse.md)
 - [Vserver.RemoveAccessControlGroupRuleParameter](docs/RemoveAccessControlGroupRuleParameter.md)
 - [Vserver.RemoveNetworkInterfaceAccessControlGroupRequest](docs/RemoveNetworkInterfaceAccessControlGroupRequest.md)
 - [Vserver.RemoveNetworkInterfaceAccessControlGroupResponse](docs/RemoveNetworkInterfaceAccessControlGroupResponse.md)
 - [Vserver.RemovePlacementGroupServerInstanceRequest](docs/RemovePlacementGroupServerInstanceRequest.md)
 - [Vserver.RemovePlacementGroupServerInstanceResponse](docs/RemovePlacementGroupServerInstanceResponse.md)
 - [Vserver.RootPasswordServerInstance](docs/RootPasswordServerInstance.md)
 - [Vserver.RootPasswordServerInstanceParameter](docs/RootPasswordServerInstanceParameter.md)
 - [Vserver.ServerInstance](docs/ServerInstance.md)
 - [Vserver.StartServerInstancesRequest](docs/StartServerInstancesRequest.md)
 - [Vserver.StartServerInstancesResponse](docs/StartServerInstancesResponse.md)
 - [Vserver.StopServerInstancesRequest](docs/StopServerInstancesRequest.md)
 - [Vserver.StopServerInstancesResponse](docs/StopServerInstancesResponse.md)
 - [Vserver.TerminateServerInstancesRequest](docs/TerminateServerInstancesRequest.md)
 - [Vserver.TerminateServerInstancesResponse](docs/TerminateServerInstancesResponse.md)
 - [Vserver.Zone](docs/Zone.md)


### License

```
Copyright 2018 NAVER BUSINESS PLATFORM Corp.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
