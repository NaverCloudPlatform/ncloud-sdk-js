# Server.ServerInstance

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serverInstanceNo** | **String** | 서버인스턴스번호 | [optional] 
**serverName** | **String** | 서버명 | [optional] 
**serverDescription** | **String** | 서버설명 | [optional] 
**cpuCount** | **Number** | CPU수 | [optional] 
**memorySize** | **Number** | 메모리사이즈 | [optional] 
**baseBlockStorageSize** | **Number** | 기본블럭스토리지사이즈 | [optional] 
**platformType** | [**CommonCode**](CommonCode.md) | 플랫폼구분 | [optional] 
**loginKeyName** | **String** | 로그인키명 | [optional] 
**isFeeChargingMonitoring** | **Boolean** | 유료모니터링여부 | [optional] 
**publicIp** | **String** | 공인IP | [optional] 
**privateIp** | **String** | 사설IP | [optional] 
**serverImageName** | **String** | 서버이미지명 | [optional] 
**serverInstanceStatus** | [**CommonCode**](CommonCode.md) | 서버인스턴스상태 | [optional] 
**serverInstanceOperation** | [**CommonCode**](CommonCode.md) | 서버인스턴스OP | [optional] 
**serverInstanceStatusName** | **String** | 서버인스턴스상태명 | [optional] 
**createDate** | **String** | 생성일자 | [optional] 
**uptime** | **String** | UPTIME | [optional] 
**serverImageProductCode** | **String** | 서버이미지상품코드 | [optional] 
**serverProductCode** | **String** | 서버상품코드 | [optional] 
**isProtectServerTermination** | **Boolean** | 반납보호여부 | [optional] 
**portForwardingPublicIp** | **String** | portForwarding 공인 Ip | [optional] 
**portForwardingExternalPort** | **Number** | portForwarding 외부 포트 | [optional] 
**portForwardingInternalPort** | **Number** | portForwarding 내부 포트 | [optional] 
**zone** | [**Zone**](Zone.md) | Zone | [optional] 
**region** | [**Region**](Region.md) | 리전 | [optional] 
**baseBlockStorageDiskType** | [**CommonCode**](CommonCode.md) | 기본블록스토리지디스크유형 | [optional] 
**baseBlockStorageDiskDetailType** | [**CommonCode**](CommonCode.md) | 기본블록스토리지디스크상세유형 | [optional] 
**internetLineType** | [**CommonCode**](CommonCode.md) | 인터넷라인구분 | [optional] 
**serverInstanceType** | [**CommonCode**](CommonCode.md) | 서버인스턴스구분 | [optional] 
**userData** | **String** | 사용자데이타 | [optional] 
**accessControlGroupList** | [**[AccessControlGroup]**](AccessControlGroup.md) | ACG리스트 | [optional] 
**instanceTagList** | [**[InstanceTag]**](InstanceTag.md) | 인스턴스태그리스트 | [optional] 


