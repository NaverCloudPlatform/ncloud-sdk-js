# Autoscaling.AutoScalingGroup

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoScalingGroupName** | **String** | 오토스케일링그룹명 | [optional] 
**launchConfigurationName** | **String** | 론치설정명 | [optional] 
**desiredCapacity** | **Number** | 기대능력치 | [optional] 
**minSize** | **Number** | 최소사이즈 | [optional] 
**maxSize** | **Number** | 최대사이즈 | [optional] 
**defaultCooldown** | **Number** |  | [optional] 
**loadBalancerInstanceSummaryList** | [**[LoadBalancerInstanceSummary]**](LoadBalancerInstanceSummary.md) | 로드밸런서인스턴스Summary리스트 | [optional] 
**healthCheckGracePeriod** | **Number** | 헬스체크보류기간 | [optional] 
**healthCheckType** | [**CommonCode**](CommonCode.md) | 헬스체크유형 | [optional] 
**createDate** | **String** | 생성일시 | [optional] 
**inAutoScalingGroupServerInstanceList** | [**[InAutoScalingGroupServerInstance]**](InAutoScalingGroupServerInstance.md) | 오토스케일링그룹에속한서버인스턴스리스트 | [optional] 
**suspendedProcessList** | [**[SuspendedProcess]**](SuspendedProcess.md) | 보류된프로세스리스트 | [optional] 
**zoneList** | [**[Zone]**](Zone.md) | ZONE리스트 | [optional] 


