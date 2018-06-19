# ncloud-sdk

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

```shell
npm install ncloud-sdk --save
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

var apiInstance = new Server.V1Api(client)

var nasVolumeAccessControl = new Server.NasVolumeAccessControl(); // {NasVolumeAccessControl} NasVolumeAccessControl


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addNasVolumeAccessControlGet(nasVolumeAccessControl, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://ncloud.beta-apigw.ntruss.com/server/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Server.V1Api* | [**addNasVolumeAccessControlGet**](docs/V1Api.md#addNasVolumeAccessControlGet) | **GET** /addNasVolumeAccessControl |
*Server.V1Api* | [**addNasVolumeAccessControlPost**](docs/V1Api.md#addNasVolumeAccessControlPost) | **POST** /addNasVolumeAccessControl |
*Server.V1Api* | [**addPortForwardingRulesGet**](docs/V1Api.md#addPortForwardingRulesGet) | **GET** /addPortForwardingRules |
*Server.V1Api* | [**addPortForwardingRulesPost**](docs/V1Api.md#addPortForwardingRulesPost) | **POST** /addPortForwardingRules |
*Server.V1Api* | [**associatePublicIpWithServerInstanceGet**](docs/V1Api.md#associatePublicIpWithServerInstanceGet) | **GET** /associatePublicIpWithServerInstance |
*Server.V1Api* | [**associatePublicIpWithServerInstancePost**](docs/V1Api.md#associatePublicIpWithServerInstancePost) | **POST** /associatePublicIpWithServerInstance |
*Server.V1Api* | [**changeNasVolumeSizeGet**](docs/V1Api.md#changeNasVolumeSizeGet) | **GET** /changeNasVolumeSize |
*Server.V1Api* | [**changeNasVolumeSizePost**](docs/V1Api.md#changeNasVolumeSizePost) | **POST** /changeNasVolumeSize |
*Server.V1Api* | [**changeServerInstanceSpecGet**](docs/V1Api.md#changeServerInstanceSpecGet) | **GET** /changeServerInstanceSpec |
*Server.V1Api* | [**changeServerInstanceSpecPost**](docs/V1Api.md#changeServerInstanceSpecPost) | **POST** /changeServerInstanceSpec |
*Server.V1Api* | [**createBlockStorageInstanceGet**](docs/V1Api.md#createBlockStorageInstanceGet) | **GET** /createBlockStorageInstance |
*Server.V1Api* | [**createBlockStorageInstancePost**](docs/V1Api.md#createBlockStorageInstancePost) | **POST** /createBlockStorageInstance |
*Server.V1Api* | [**createLoginKeyGet**](docs/V1Api.md#createLoginKeyGet) | **GET** /createLoginKey |
*Server.V1Api* | [**createLoginKeyPost**](docs/V1Api.md#createLoginKeyPost) | **POST** /createLoginKey |
*Server.V1Api* | [**createMemberServerImageGet**](docs/V1Api.md#createMemberServerImageGet) | **GET** /createMemberServerImage |
*Server.V1Api* | [**createMemberServerImagePost**](docs/V1Api.md#createMemberServerImagePost) | **POST** /createMemberServerImage |
*Server.V1Api* | [**createNasVolumeInstanceGet**](docs/V1Api.md#createNasVolumeInstanceGet) | **GET** /createNasVolumeInstance |
*Server.V1Api* | [**createNasVolumeInstancePost**](docs/V1Api.md#createNasVolumeInstancePost) | **POST** /createNasVolumeInstance |
*Server.V1Api* | [**createPublicIpInstanceGet**](docs/V1Api.md#createPublicIpInstanceGet) | **GET** /createPublicIpInstance |
*Server.V1Api* | [**createPublicIpInstancePost**](docs/V1Api.md#createPublicIpInstancePost) | **POST** /createPublicIpInstance |
*Server.V1Api* | [**createServerInstancesGet**](docs/V1Api.md#createServerInstancesGet) | **GET** /createServerInstances |
*Server.V1Api* | [**createServerInstancesPost**](docs/V1Api.md#createServerInstancesPost) | **POST** /createServerInstances |
*Server.V1Api* | [**deleteBlockStorageInstancesGet**](docs/V1Api.md#deleteBlockStorageInstancesGet) | **GET** /deleteBlockStorageInstances |
*Server.V1Api* | [**deleteBlockStorageInstancesPost**](docs/V1Api.md#deleteBlockStorageInstancesPost) | **POST** /deleteBlockStorageInstances |
*Server.V1Api* | [**deleteLoginKeyGet**](docs/V1Api.md#deleteLoginKeyGet) | **GET** /deleteLoginKey |
*Server.V1Api* | [**deleteLoginKeyPost**](docs/V1Api.md#deleteLoginKeyPost) | **POST** /deleteLoginKey |
*Server.V1Api* | [**deleteMemberServerImagesGet**](docs/V1Api.md#deleteMemberServerImagesGet) | **GET** /deleteMemberServerImages |
*Server.V1Api* | [**deleteMemberServerImagesPost**](docs/V1Api.md#deleteMemberServerImagesPost) | **POST** /deleteMemberServerImages |
*Server.V1Api* | [**deleteNasVolumeInstanceGet**](docs/V1Api.md#deleteNasVolumeInstanceGet) | **GET** /deleteNasVolumeInstance |
*Server.V1Api* | [**deleteNasVolumeInstancePost**](docs/V1Api.md#deleteNasVolumeInstancePost) | **POST** /deleteNasVolumeInstance |
*Server.V1Api* | [**deletePortForwardingRulesGet**](docs/V1Api.md#deletePortForwardingRulesGet) | **GET** /deletePortForwardingRules |
*Server.V1Api* | [**deletePortForwardingRulesPost**](docs/V1Api.md#deletePortForwardingRulesPost) | **POST** /deletePortForwardingRules |
*Server.V1Api* | [**deletePublicIpInstancesGet**](docs/V1Api.md#deletePublicIpInstancesGet) | **GET** /deletePublicIpInstances |
*Server.V1Api* | [**deletePublicIpInstancesPost**](docs/V1Api.md#deletePublicIpInstancesPost) | **POST** /deletePublicIpInstances |
*Server.V1Api* | [**disassociatePublicIpFromServerInstanceGet**](docs/V1Api.md#disassociatePublicIpFromServerInstanceGet) | **GET** /disassociatePublicIpFromServerInstance |
*Server.V1Api* | [**disassociatePublicIpFromServerInstancePost**](docs/V1Api.md#disassociatePublicIpFromServerInstancePost) | **POST** /disassociatePublicIpFromServerInstance |
*Server.V1Api* | [**getAccessControlGroupListGet**](docs/V1Api.md#getAccessControlGroupListGet) | **GET** /getAccessControlGroupList |
*Server.V1Api* | [**getAccessControlGroupListPost**](docs/V1Api.md#getAccessControlGroupListPost) | **POST** /getAccessControlGroupList |
*Server.V1Api* | [**getAccessControlGroupServerInstanceListGet**](docs/V1Api.md#getAccessControlGroupServerInstanceListGet) | **GET** /getAccessControlGroupServerInstanceList |
*Server.V1Api* | [**getAccessControlGroupServerInstanceListPost**](docs/V1Api.md#getAccessControlGroupServerInstanceListPost) | **POST** /getAccessControlGroupServerInstanceList |
*Server.V1Api* | [**getAccessControlRuleListGet**](docs/V1Api.md#getAccessControlRuleListGet) | **GET** /getAccessControlRuleList |
*Server.V1Api* | [**getAccessControlRuleListPost**](docs/V1Api.md#getAccessControlRuleListPost) | **POST** /getAccessControlRuleList |
*Server.V1Api* | [**getBlockStorageInstanceListGet**](docs/V1Api.md#getBlockStorageInstanceListGet) | **GET** /getBlockStorageInstanceList |
*Server.V1Api* | [**getBlockStorageInstanceListPost**](docs/V1Api.md#getBlockStorageInstanceListPost) | **POST** /getBlockStorageInstanceList |
*Server.V1Api* | [**getBlockStorageSnapshotInstanceListGet**](docs/V1Api.md#getBlockStorageSnapshotInstanceListGet) | **GET** /getBlockStorageSnapshotInstanceList |
*Server.V1Api* | [**getBlockStorageSnapshotInstanceListPost**](docs/V1Api.md#getBlockStorageSnapshotInstanceListPost) | **POST** /getBlockStorageSnapshotInstanceList |
*Server.V1Api* | [**getLoginKeyListGet**](docs/V1Api.md#getLoginKeyListGet) | **GET** /getLoginKeyList |
*Server.V1Api* | [**getLoginKeyListPost**](docs/V1Api.md#getLoginKeyListPost) | **POST** /getLoginKeyList |
*Server.V1Api* | [**getMemberServerImageListGet**](docs/V1Api.md#getMemberServerImageListGet) | **GET** /getMemberServerImageList |
*Server.V1Api* | [**getMemberServerImageListPost**](docs/V1Api.md#getMemberServerImageListPost) | **POST** /getMemberServerImageList |
*Server.V1Api* | [**getNasVolumeInstanceListGet**](docs/V1Api.md#getNasVolumeInstanceListGet) | **GET** /getNasVolumeInstanceList |
*Server.V1Api* | [**getNasVolumeInstanceListPost**](docs/V1Api.md#getNasVolumeInstanceListPost) | **POST** /getNasVolumeInstanceList |
*Server.V1Api* | [**getNasVolumeInstanceRatingListGet**](docs/V1Api.md#getNasVolumeInstanceRatingListGet) | **GET** /getNasVolumeInstanceRatingList |
*Server.V1Api* | [**getNasVolumeInstanceRatingListPost**](docs/V1Api.md#getNasVolumeInstanceRatingListPost) | **POST** /getNasVolumeInstanceRatingList |
*Server.V1Api* | [**getPortForwardingRuleListGet**](docs/V1Api.md#getPortForwardingRuleListGet) | **GET** /getPortForwardingRuleList |
*Server.V1Api* | [**getPortForwardingRuleListPost**](docs/V1Api.md#getPortForwardingRuleListPost) | **POST** /getPortForwardingRuleList |
*Server.V1Api* | [**getPublicIpInstanceListGet**](docs/V1Api.md#getPublicIpInstanceListGet) | **GET** /getPublicIpInstanceList |
*Server.V1Api* | [**getPublicIpInstanceListPost**](docs/V1Api.md#getPublicIpInstanceListPost) | **POST** /getPublicIpInstanceList |
*Server.V1Api* | [**getPublicIpTargetServerInstanceListGet**](docs/V1Api.md#getPublicIpTargetServerInstanceListGet) | **GET** /getPublicIpTargetServerInstanceList |
*Server.V1Api* | [**getPublicIpTargetServerInstanceListPost**](docs/V1Api.md#getPublicIpTargetServerInstanceListPost) | **POST** /getPublicIpTargetServerInstanceList |
*Server.V1Api* | [**getRaidListGet**](docs/V1Api.md#getRaidListGet) | **GET** /getRaidList |
*Server.V1Api* | [**getRaidListPost**](docs/V1Api.md#getRaidListPost) | **POST** /getRaidList |
*Server.V1Api* | [**getRegionListGet**](docs/V1Api.md#getRegionListGet) | **GET** /getRegionList |
*Server.V1Api* | [**getRegionListPost**](docs/V1Api.md#getRegionListPost) | **POST** /getRegionList |
*Server.V1Api* | [**getRootPasswordGet**](docs/V1Api.md#getRootPasswordGet) | **GET** /getRootPassword |
*Server.V1Api* | [**getRootPasswordPost**](docs/V1Api.md#getRootPasswordPost) | **POST** /getRootPassword |
*Server.V1Api* | [**getServerImageProductListGet**](docs/V1Api.md#getServerImageProductListGet) | **GET** /getServerImageProductList |
*Server.V1Api* | [**getServerImageProductListPost**](docs/V1Api.md#getServerImageProductListPost) | **POST** /getServerImageProductList |
*Server.V1Api* | [**getServerInstanceListGet**](docs/V1Api.md#getServerInstanceListGet) | **GET** /getServerInstanceList |
*Server.V1Api* | [**getServerInstanceListPost**](docs/V1Api.md#getServerInstanceListPost) | **POST** /getServerInstanceList |
*Server.V1Api* | [**getServerProductListGet**](docs/V1Api.md#getServerProductListGet) | **GET** /getServerProductList |
*Server.V1Api* | [**getServerProductListPost**](docs/V1Api.md#getServerProductListPost) | **POST** /getServerProductList |
*Server.V1Api* | [**getZoneListGet**](docs/V1Api.md#getZoneListGet) | **GET** /getZoneList |
*Server.V1Api* | [**getZoneListPost**](docs/V1Api.md#getZoneListPost) | **POST** /getZoneList |
*Server.V1Api* | [**rebootServerInstancesGet**](docs/V1Api.md#rebootServerInstancesGet) | **GET** /rebootServerInstances |
*Server.V1Api* | [**rebootServerInstancesPost**](docs/V1Api.md#rebootServerInstancesPost) | **POST** /rebootServerInstances |
*Server.V1Api* | [**recreateServerInstanceGet**](docs/V1Api.md#recreateServerInstanceGet) | **GET** /recreateServerInstance |
*Server.V1Api* | [**recreateServerInstancePost**](docs/V1Api.md#recreateServerInstancePost) | **POST** /recreateServerInstance |
*Server.V1Api* | [**removeNasVolumeAccessControlGet**](docs/V1Api.md#removeNasVolumeAccessControlGet) | **GET** /removeNasVolumeAccessControl |
*Server.V1Api* | [**removeNasVolumeAccessControlPost**](docs/V1Api.md#removeNasVolumeAccessControlPost) | **POST** /removeNasVolumeAccessControl |
*Server.V1Api* | [**setNasVolumeAccessControlGet**](docs/V1Api.md#setNasVolumeAccessControlGet) | **GET** /setNasVolumeAccessControl |
*Server.V1Api* | [**setNasVolumeAccessControlPost**](docs/V1Api.md#setNasVolumeAccessControlPost) | **POST** /setNasVolumeAccessControl |
*Server.V1Api* | [**startServerInstancesGet**](docs/V1Api.md#startServerInstancesGet) | **GET** /startServerInstances |
*Server.V1Api* | [**startServerInstancesPost**](docs/V1Api.md#startServerInstancesPost) | **POST** /startServerInstances |
*Server.V1Api* | [**stopServerInstancesGet**](docs/V1Api.md#stopServerInstancesGet) | **GET** /stopServerInstances |
*Server.V1Api* | [**stopServerInstancesPost**](docs/V1Api.md#stopServerInstancesPost) | **POST** /stopServerInstances |
*Server.V1Api* | [**terminateServerInstancesGet**](docs/V1Api.md#terminateServerInstancesGet) | **GET** /terminateServerInstances |
*Server.V1Api* | [**terminateServerInstancesPost**](docs/V1Api.md#terminateServerInstancesPost) | **POST** /terminateServerInstances |


## Documentation for Models

 - [Server.AccessControlGroup](docs/AccessControlGroup.md)
 - [Server.AccessControlGroupRequest](docs/AccessControlGroupRequest.md)
 - [Server.AddPortForwardingRulesResponse](docs/AddPortForwardingRulesResponse.md)
 - [Server.AssociatePublicIpWithServerInstanceRequest](docs/AssociatePublicIpWithServerInstanceRequest.md)
 - [Server.AssociatePublicIpWithServerInstanceResponse](docs/AssociatePublicIpWithServerInstanceResponse.md)
 - [Server.BlockStorageInstance](docs/BlockStorageInstance.md)
 - [Server.BlockStorageInstanceNoList](docs/BlockStorageInstanceNoList.md)
 - [Server.BlockStorageInstanceRequest](docs/BlockStorageInstanceRequest.md)
 - [Server.BlockStorageSnapshotInstance](docs/BlockStorageSnapshotInstance.md)
 - [Server.ChangeNasVolumeSizeRequest](docs/ChangeNasVolumeSizeRequest.md)
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
 - [Server.CreatePublicIpInstanceRequest](docs/CreatePublicIpInstanceRequest.md)
 - [Server.CreatePublicIpInstanceResponse](docs/CreatePublicIpInstanceResponse.md)
 - [Server.CreateServerInstancesRequest](docs/CreateServerInstancesRequest.md)
 - [Server.CreateServerInstancesResponse](docs/CreateServerInstancesResponse.md)
 - [Server.DeleteBlockStorageInstancesResponse](docs/DeleteBlockStorageInstancesResponse.md)
 - [Server.DeleteLoginKeyRequest](docs/DeleteLoginKeyRequest.md)
 - [Server.DeleteLoginKeyResponse](docs/DeleteLoginKeyResponse.md)
 - [Server.DeleteMemberServerImagesResponse](docs/DeleteMemberServerImagesResponse.md)
 - [Server.DeleteNasVolumeInstanceRequest](docs/DeleteNasVolumeInstanceRequest.md)
 - [Server.DeletePortForwardingRulesResponse](docs/DeletePortForwardingRulesResponse.md)
 - [Server.DeletePublicIpInstancesResponse](docs/DeletePublicIpInstancesResponse.md)
 - [Server.DisassociatePublicIpFromServerInstanceRequest](docs/DisassociatePublicIpFromServerInstanceRequest.md)
 - [Server.DisassociatePublicIpFromServerInstanceResponse](docs/DisassociatePublicIpFromServerInstanceResponse.md)
 - [Server.GetAccessControlGroupListResponse](docs/GetAccessControlGroupListResponse.md)
 - [Server.GetAccessControlGroupServerInstanceListRequest](docs/GetAccessControlGroupServerInstanceListRequest.md)
 - [Server.GetAccessControlGroupServerInstanceListResponse](docs/GetAccessControlGroupServerInstanceListResponse.md)
 - [Server.GetAccessControlRuleListRequest](docs/GetAccessControlRuleListRequest.md)
 - [Server.GetBlockStorageInstanceListResponse](docs/GetBlockStorageInstanceListResponse.md)
 - [Server.GetBlockStorageSnapshotInstanceListRequest](docs/GetBlockStorageSnapshotInstanceListRequest.md)
 - [Server.GetBlockStorageSnapshotInstanceListResponse](docs/GetBlockStorageSnapshotInstanceListResponse.md)
 - [Server.GetLoginKeyListRequest](docs/GetLoginKeyListRequest.md)
 - [Server.GetLoginKeyListResponse](docs/GetLoginKeyListResponse.md)
 - [Server.GetMemberServerImageListResponse](docs/GetMemberServerImageListResponse.md)
 - [Server.GetNasVolumeInstanceRatingListRequest](docs/GetNasVolumeInstanceRatingListRequest.md)
 - [Server.GetPortForwardingRuleListRequest](docs/GetPortForwardingRuleListRequest.md)
 - [Server.GetPortForwardingRuleListResponse](docs/GetPortForwardingRuleListResponse.md)
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
 - [Server.MemberServerImageNoList](docs/MemberServerImageNoList.md)
 - [Server.MemberServerImageRequest](docs/MemberServerImageRequest.md)
 - [Server.NasVolumeAccessControl](docs/NasVolumeAccessControl.md)
 - [Server.NasVolumeInstance](docs/NasVolumeInstance.md)
 - [Server.NasVolumeInstanceCustomIp](docs/NasVolumeInstanceCustomIp.md)
 - [Server.NasVolumeInstanceListRequest](docs/NasVolumeInstanceListRequest.md)
 - [Server.NasVolumeInstanceListResponse](docs/NasVolumeInstanceListResponse.md)
 - [Server.NasVolumeInstanceRating](docs/NasVolumeInstanceRating.md)
 - [Server.NasVolumeInstanceRatingListResponse](docs/NasVolumeInstanceRatingListResponse.md)
 - [Server.NasVolumeServerInstance](docs/NasVolumeServerInstance.md)
 - [Server.PortForwardingRule](docs/PortForwardingRule.md)
 - [Server.PortForwardingRuleRequest](docs/PortForwardingRuleRequest.md)
 - [Server.PortForwardingRuleRequestPortForwardingRule](docs/PortForwardingRuleRequestPortForwardingRule.md)
 - [Server.Product](docs/Product.md)
 - [Server.PublicIpInstance](docs/PublicIpInstance.md)
 - [Server.PublicIpInstanceList](docs/PublicIpInstanceList.md)
 - [Server.PublicIpInstanceNoList](docs/PublicIpInstanceNoList.md)
 - [Server.Raid](docs/Raid.md)
 - [Server.RebootServerInstancesResponse](docs/RebootServerInstancesResponse.md)
 - [Server.RecreateServerInstanceRequest](docs/RecreateServerInstanceRequest.md)
 - [Server.RecreateServerInstanceResponse](docs/RecreateServerInstanceResponse.md)
 - [Server.Region](docs/Region.md)
 - [Server.RootPassword](docs/RootPassword.md)
 - [Server.ServerInstance](docs/ServerInstance.md)
 - [Server.ServerInstanceNoList](docs/ServerInstanceNoList.md)
 - [Server.StartServerInstancesResponse](docs/StartServerInstancesResponse.md)
 - [Server.StopServerInstancesResponse](docs/StopServerInstancesResponse.md)
 - [Server.TerminateServerInstancesResponse](docs/TerminateServerInstancesResponse.md)
 - [Server.Zone](docs/Zone.md)

