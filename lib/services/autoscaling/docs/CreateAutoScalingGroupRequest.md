# Autoscaling.CreateAutoScalingGroupRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoScalingGroupName** | **String** | 오토스케일링그룹명 | [optional] 
**launchConfigurationName** | **String** | 론치설정명 | 
**desiredCapacity** | **Number** | 기대용량치 | [optional] 
**minSize** | **Number** | 최소사이즈 | 
**maxSize** | **Number** | 최대사이즈 | 
**defaultCooldown** | **Number** | 디폴트쿨다운타임 | [optional] 
**loadBalancerNameList** | **[String]** | 로드밸런서명리스트 | [optional] 
**healthCheckGracePeriod** | **Number** | 헬스체크보류기간 | [optional] 
**healthCheckTypeCode** | **String** | 헬스체크유형코드 | [optional] 
**zoneNoList** | **[String]** | ZONE번호리스트 | 


