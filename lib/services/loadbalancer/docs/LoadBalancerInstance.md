# Loadbalancer.LoadBalancerInstance

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loadBalancerInstanceNo** | **String** | 로드밸런서인스턴스번호 | [optional] 
**virtualIp** | **String** | virtualIp | [optional] 
**loadBalancerName** | **String** | 로드밸런서명 | [optional] 
**loadBalancerAlgorithmType** | [**CommonCode**](CommonCode.md) | 로드밸런서알고리즘구분코 | [optional] 
**loadBalancerDescription** | **String** | 로드밸런서설명 | [optional] 
**createDate** | **String** | 생성일자 | [optional] 
**domainName** | **String** | 도메인명 | [optional] 
**internetLineType** | [**CommonCode**](CommonCode.md) | 인터넷회선구분 | [optional] 
**loadBalancerInstanceStatusName** | **String** | 로드밸런서인스턴스상태명 | [optional] 
**loadBalancerInstanceStatus** | [**CommonCode**](CommonCode.md) | 로드밸런서인스턴스상태 | [optional] 
**loadBalancerInstanceOperation** | [**CommonCode**](CommonCode.md) | 로드밸런서인스턴스OP | [optional] 
**networkUsageType** | [**CommonCode**](CommonCode.md) | 네트워크사용구분 | [optional] 
**isHttpKeepAlive** | **Boolean** | httpKeepAlive사용여부 | [optional] 
**connectionTimeout** | **Number** | 커넥션타임아웃 | [optional] 
**certificateName** | **String** | SSL인증명 | [optional] 
**loadBalancerRuleList** | [**[LoadBalancerRule]**](LoadBalancerRule.md) |  | [optional] 
**loadBalancedServerInstanceList** | [**[LoadBalancedServerInstance]**](LoadBalancedServerInstance.md) |  | [optional] 


