# ncloud-autoscaling

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

```shell
npm install ncloud-autoscaling --save
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
var Autoscaling = require('ncloud-autoscaling');

var client = new Autoscaling.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Autoscaling.V2Api(client)

var createAutoScalingGroupRequest = new Autoscaling.CreateAutoScalingGroupRequest(); // {CreateAutoScalingGroupRequest} createAutoScalingGroupRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createAutoScalingGroup(createAutoScalingGroupRequest, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://ncloud.apigw.ntruss.com/autoscaling/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Autoscaling.V2Api* | [**createAutoScalingGroup**](docs/V2Api.md#createAutoScalingGroup) | **POST** /createAutoScalingGroup | 
*Autoscaling.V2Api* | [**createLaunchConfiguration**](docs/V2Api.md#createLaunchConfiguration) | **POST** /createLaunchConfiguration | 
*Autoscaling.V2Api* | [**deleteAutoScalingGroup**](docs/V2Api.md#deleteAutoScalingGroup) | **POST** /deleteAutoScalingGroup | 
*Autoscaling.V2Api* | [**deleteAutoScalingLaunchConfiguration**](docs/V2Api.md#deleteAutoScalingLaunchConfiguration) | **POST** /deleteAutoScalingLaunchConfiguration | 
*Autoscaling.V2Api* | [**deletePolicy**](docs/V2Api.md#deletePolicy) | **POST** /deletePolicy | 
*Autoscaling.V2Api* | [**deleteScheduledAction**](docs/V2Api.md#deleteScheduledAction) | **POST** /deleteScheduledAction | 
*Autoscaling.V2Api* | [**executePolicy**](docs/V2Api.md#executePolicy) | **POST** /executePolicy | 
*Autoscaling.V2Api* | [**getAdjustmentTypeList**](docs/V2Api.md#getAdjustmentTypeList) | **POST** /getAdjustmentTypeList | 
*Autoscaling.V2Api* | [**getAutoScalingActivityLogList**](docs/V2Api.md#getAutoScalingActivityLogList) | **POST** /getAutoScalingActivityLogList | 
*Autoscaling.V2Api* | [**getAutoScalingConfigurationLogList**](docs/V2Api.md#getAutoScalingConfigurationLogList) | **POST** /getAutoScalingConfigurationLogList | 
*Autoscaling.V2Api* | [**getAutoScalingGroupList**](docs/V2Api.md#getAutoScalingGroupList) | **POST** /getAutoScalingGroupList | 
*Autoscaling.V2Api* | [**getAutoScalingPolicyList**](docs/V2Api.md#getAutoScalingPolicyList) | **POST** /getAutoScalingPolicyList | 
*Autoscaling.V2Api* | [**getLaunchConfigurationList**](docs/V2Api.md#getLaunchConfigurationList) | **POST** /getLaunchConfigurationList | 
*Autoscaling.V2Api* | [**getScalingProcessTypeList**](docs/V2Api.md#getScalingProcessTypeList) | **POST** /getScalingProcessTypeList | 
*Autoscaling.V2Api* | [**getScheduledActionList**](docs/V2Api.md#getScheduledActionList) | **POST** /getScheduledActionList | 
*Autoscaling.V2Api* | [**putScalingPolicy**](docs/V2Api.md#putScalingPolicy) | **POST** /putScalingPolicy | 
*Autoscaling.V2Api* | [**putScheduledUpdateGroupAction**](docs/V2Api.md#putScheduledUpdateGroupAction) | **POST** /putScheduledUpdateGroupAction | 
*Autoscaling.V2Api* | [**resumeProcesses**](docs/V2Api.md#resumeProcesses) | **POST** /resumeProcesses | 
*Autoscaling.V2Api* | [**setDesiredCapacity**](docs/V2Api.md#setDesiredCapacity) | **POST** /setDesiredCapacity | 
*Autoscaling.V2Api* | [**setServerInstanceHealth**](docs/V2Api.md#setServerInstanceHealth) | **POST** /setServerInstanceHealth | 
*Autoscaling.V2Api* | [**suspendProcesses**](docs/V2Api.md#suspendProcesses) | **POST** /suspendProcesses | 
*Autoscaling.V2Api* | [**terminateServerInstanceInAutoScalingGroup**](docs/V2Api.md#terminateServerInstanceInAutoScalingGroup) | **POST** /terminateServerInstanceInAutoScalingGroup | 
*Autoscaling.V2Api* | [**updateAutoScalingGroup**](docs/V2Api.md#updateAutoScalingGroup) | **POST** /updateAutoScalingGroup | 


## Documentation for Models

 - [Autoscaling.AccessControlGroup](docs/AccessControlGroup.md)
 - [Autoscaling.ActivityLog](docs/ActivityLog.md)
 - [Autoscaling.AdjustmentType](docs/AdjustmentType.md)
 - [Autoscaling.AutoScalingGroup](docs/AutoScalingGroup.md)
 - [Autoscaling.CommonCode](docs/CommonCode.md)
 - [Autoscaling.ConfigurationLog](docs/ConfigurationLog.md)
 - [Autoscaling.CreateAutoScalingGroupRequest](docs/CreateAutoScalingGroupRequest.md)
 - [Autoscaling.CreateAutoScalingGroupResponse](docs/CreateAutoScalingGroupResponse.md)
 - [Autoscaling.CreateLaunchConfigurationRequest](docs/CreateLaunchConfigurationRequest.md)
 - [Autoscaling.CreateLaunchConfigurationResponse](docs/CreateLaunchConfigurationResponse.md)
 - [Autoscaling.DeleteAutoScalingGroupRequest](docs/DeleteAutoScalingGroupRequest.md)
 - [Autoscaling.DeleteAutoScalingGroupResponse](docs/DeleteAutoScalingGroupResponse.md)
 - [Autoscaling.DeleteAutoScalingLaunchConfigurationRequest](docs/DeleteAutoScalingLaunchConfigurationRequest.md)
 - [Autoscaling.DeleteAutoScalingLaunchConfigurationResponse](docs/DeleteAutoScalingLaunchConfigurationResponse.md)
 - [Autoscaling.DeletePolicyRequest](docs/DeletePolicyRequest.md)
 - [Autoscaling.DeletePolicyResponse](docs/DeletePolicyResponse.md)
 - [Autoscaling.DeleteScheduledActionRequest](docs/DeleteScheduledActionRequest.md)
 - [Autoscaling.DeleteScheduledActionResponse](docs/DeleteScheduledActionResponse.md)
 - [Autoscaling.ExecutePolicyRequest](docs/ExecutePolicyRequest.md)
 - [Autoscaling.ExecutePolicyResponse](docs/ExecutePolicyResponse.md)
 - [Autoscaling.GetAdjustmentTypeListRequest](docs/GetAdjustmentTypeListRequest.md)
 - [Autoscaling.GetAdjustmentTypeListResponse](docs/GetAdjustmentTypeListResponse.md)
 - [Autoscaling.GetAutoScalingActivityLogListRequest](docs/GetAutoScalingActivityLogListRequest.md)
 - [Autoscaling.GetAutoScalingActivityLogListResponse](docs/GetAutoScalingActivityLogListResponse.md)
 - [Autoscaling.GetAutoScalingConfigurationLogListRequest](docs/GetAutoScalingConfigurationLogListRequest.md)
 - [Autoscaling.GetAutoScalingConfigurationLogListResponse](docs/GetAutoScalingConfigurationLogListResponse.md)
 - [Autoscaling.GetAutoScalingGroupListRequest](docs/GetAutoScalingGroupListRequest.md)
 - [Autoscaling.GetAutoScalingGroupListResponse](docs/GetAutoScalingGroupListResponse.md)
 - [Autoscaling.GetAutoScalingPolicyListRequest](docs/GetAutoScalingPolicyListRequest.md)
 - [Autoscaling.GetAutoScalingPolicyListResponse](docs/GetAutoScalingPolicyListResponse.md)
 - [Autoscaling.GetLaunchConfigurationListRequest](docs/GetLaunchConfigurationListRequest.md)
 - [Autoscaling.GetLaunchConfigurationListResponse](docs/GetLaunchConfigurationListResponse.md)
 - [Autoscaling.GetScalingProcessTypeListRequest](docs/GetScalingProcessTypeListRequest.md)
 - [Autoscaling.GetScalingProcessTypeListResponse](docs/GetScalingProcessTypeListResponse.md)
 - [Autoscaling.GetScheduledActionListRequest](docs/GetScheduledActionListRequest.md)
 - [Autoscaling.GetScheduledActionListResponse](docs/GetScheduledActionListResponse.md)
 - [Autoscaling.InAutoScalingGroupServerInstance](docs/InAutoScalingGroupServerInstance.md)
 - [Autoscaling.LaunchConfiguration](docs/LaunchConfiguration.md)
 - [Autoscaling.LoadBalancerInstanceSummary](docs/LoadBalancerInstanceSummary.md)
 - [Autoscaling.Process](docs/Process.md)
 - [Autoscaling.PutScalingPolicyRequest](docs/PutScalingPolicyRequest.md)
 - [Autoscaling.PutScalingPolicyResponse](docs/PutScalingPolicyResponse.md)
 - [Autoscaling.PutScheduledUpdateGroupActionRequest](docs/PutScheduledUpdateGroupActionRequest.md)
 - [Autoscaling.PutScheduledUpdateGroupActionResponse](docs/PutScheduledUpdateGroupActionResponse.md)
 - [Autoscaling.ResumeProcessesRequest](docs/ResumeProcessesRequest.md)
 - [Autoscaling.ResumeProcessesResponse](docs/ResumeProcessesResponse.md)
 - [Autoscaling.ScalingPolicy](docs/ScalingPolicy.md)
 - [Autoscaling.ScheduledUpdateGroupAction](docs/ScheduledUpdateGroupAction.md)
 - [Autoscaling.SetDesiredCapacityRequest](docs/SetDesiredCapacityRequest.md)
 - [Autoscaling.SetDesiredCapacityResponse](docs/SetDesiredCapacityResponse.md)
 - [Autoscaling.SetServerInstanceHealthRequest](docs/SetServerInstanceHealthRequest.md)
 - [Autoscaling.SetServerInstanceHealthResponse](docs/SetServerInstanceHealthResponse.md)
 - [Autoscaling.SuspendProcessesRequest](docs/SuspendProcessesRequest.md)
 - [Autoscaling.SuspendProcessesResponse](docs/SuspendProcessesResponse.md)
 - [Autoscaling.SuspendedProcess](docs/SuspendedProcess.md)
 - [Autoscaling.TerminateServerInstanceInAutoScalingGroupRequest](docs/TerminateServerInstanceInAutoScalingGroupRequest.md)
 - [Autoscaling.TerminateServerInstanceInAutoScalingGroupResponse](docs/TerminateServerInstanceInAutoScalingGroupResponse.md)
 - [Autoscaling.UpdateAutoScalingGroupRequest](docs/UpdateAutoScalingGroupRequest.md)
 - [Autoscaling.UpdateAutoScalingGroupResponse](docs/UpdateAutoScalingGroupResponse.md)
 - [Autoscaling.Zone](docs/Zone.md)


### License

```
Copyright 2018 NAVER BUSINESS PLATFORM Corp.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
