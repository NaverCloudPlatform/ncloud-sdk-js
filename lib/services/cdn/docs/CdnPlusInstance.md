# Cdn.CdnPlusInstance

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cdnInstanceNo** | **String** | CDN인스턴스번호 | [optional] 
**cdnInstanceStatus** | [**CommonCode**](CommonCode.md) | CDN인스턴스상태 | [optional] 
**cdnInstanceOperation** | [**CommonCode**](CommonCode.md) | CDN인스턴스OP | [optional] 
**cdnInstanceStatusName** | **String** | CDN인스턴스상태명 | [optional] 
**createDate** | **String** | 생성일자 | [optional] 
**lastModifiedDate** | **String** | UPTIME | [optional] 
**cdnInstanceDescription** | **String** | CDN인스턴스설명 | [optional] 
**serviceName** | **String** | 서비스이름 | [optional] 
**isForLiveTranscoder** | **Boolean** | 라이브트랜스코더여부 | [optional] 
**liveTranscoderInstanceNoList** | **[String]** | 라이브트랜스코더인스턴스번호리스트 | [optional] 
**isForImageOptimizer** | **Boolean** | Image Optimizer여부 | [optional] 
**imageOptimizerInstanceNo** | **String** | Image Optimizer인스턴스번호 | [optional] 
**isAvailablePartialDomainPurge** | **Boolean** |  | [optional] 
**cdnPlusServiceDomainList** | [**[CdnPlusServiceDomain]**](CdnPlusServiceDomain.md) | CDN+서비스도메인리스트 | [optional] 
**cdnPlusRule** | [**CdnPlusRule**](CdnPlusRule.md) |  | [optional] 


