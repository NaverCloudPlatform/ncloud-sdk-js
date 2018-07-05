# Cdn.GlobalCdnRule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protocolTypeCode** | **String** | 프로토콜구분코드 | [optional] 
**serviceDomainTypeCode** | **String** | 서비스도메인구분코드 | [optional] 
**originUrl** | **String** | 원본URL | [optional] 
**originPath** | **String** | 원본경로 | [optional] 
**originHttpPort** | **Number** | 원본HTTP포트 | [optional] 
**originHttpsPort** | **Number** | 원본HTTPS포트 | [optional] 
**forwardHostHeaderTypeCode** | **String** | 포워드호스트헤더구분코드 | [optional] 
**forwardHostHeader** | **String** | 포워드호스트헤더 | [optional] 
**cacheKeyHostNameTypeCode** | **String** | 캐쉬키호스트명구분코드 | [optional] 
**isGzipCompressionUse** | **Boolean** | GZIP압축사용여부 | [optional] 
**cachingOptionTypeCode** | **String** | 캐싱옵션구분코드 | [optional] 
**isErrorContentsResponseUse** | **Boolean** | 오류내용응답사용여부 | [optional] 
**cachingTtlTime** | **String** | TTL캐싱 | [optional] 
**isQueryStringIgnoreUse** | **Boolean** | 쿼리스트링무시여부 | [optional] 
**isRemoveVaryHeaderUse** | **Boolean** | 헤더제거사용여부 | [optional] 
**isLargeFileOptimizationUse** | **Boolean** | 대용량파일최적화사용여부 | [optional] 
**gzipResponseTypeCode** | **String** | GZIP응답구분코드 | [optional] 
**isReferrerDomainUse** | **Boolean** | 레퍼러도메인사용여부 | [optional] 
**referrerDomainList** | **[String]** | 레퍼러도메인리스트 | [optional] 
**isReferrerDomainRestrictUse** | **Boolean** | 레퍼러도메인제한사용여부 | [optional] 
**isSecureTokenUse** | **Boolean** | 보안토큰사용여부 | [optional] 
**secureTokenPassword** | **String** | 보안토큰비밀번호 | [optional] 
**isReissueSecureTokenPassword** | **Boolean** | 보안토큰재발급여부 | [optional] 
**certificateName** | **String** | 인증서이름 | [optional] 
**isAccessLogUse** | **Boolean** | 엑세스로그사용여부 | [optional] 
**accessLogFileStorageContainerName** | **String** | 엑세스로그파일스토리지인스턴스이름 | [optional] 


