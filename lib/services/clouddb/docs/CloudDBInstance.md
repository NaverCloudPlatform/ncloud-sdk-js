# Clouddb.CloudDBInstance

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloudDBInstanceNo** | **String** | CloudDB인스턴스번호 | [optional] 
**cloudDBServiceName** | **String** | CloudDB서비스이름 | [optional] 
**dbKindCode** | **String** | DB유형코드 | [optional] 
**engineVersion** | **String** | 엔진버전 | [optional] 
**cpuCount** | **Number** | CPU개수 | [optional] 
**memorySize** | **Number** | 메모리사이즈 | [optional] 
**dataStorageType** | [**CommonCode**](CommonCode.md) | 데이터스토리지타입 | [optional] 
**licenseCode** | **String** | 라이센스코드 | [optional] 
**cloudDBPort** | **Number** | CloudDB포트 | [optional] 
**isHa** | **Boolean** | HA여부 | [optional] 
**backupTime** | **String** | 백업시간 | [optional] 
**backupFileRetentionPeriod** | **Number** | 백업파일유지기간 | [optional] 
**cloudDBInstanceStatusName** | **String** | CloudDB인스턴스상태이름 | [optional] 
**collation** | **String** | Collation | [optional] 
**rebootScheduleTime** | **String** | 재부팅예약시간 | [optional] 
**createDate** | **String** | 생성일시 | [optional] 
**cloudDBImageProductCode** | **String** | CloudDB이미지상품코드 | [optional] 
**cloudDBProductCode** | **String** | CloudDB상품코드 | [optional] 
**isCloudDBConfigNeedReboot** | **Boolean** | CloudDB설정재부팅필요여부 | [optional] 
**isCloudDBNeedReboot** | **Boolean** | CloudDB재부팅필요여부 | [optional] 
**zone** | [**Zone**](Zone.md) | Zone | [optional] 
**region** | [**Region**](Region.md) | 리전 | [optional] 
**cloudDBConfigList** | [**[CloudDBConfig]**](CloudDBConfig.md) |  | [optional] 
**cloudDBConfigGroupList** | [**[CloudDBConfigGroup]**](CloudDBConfigGroup.md) |  | [optional] 
**accessControlGroupList** | [**[AccessControlGroup]**](AccessControlGroup.md) |  | [optional] 
**cloudDBServerInstanceList** | [**[CloudDBServerInstance]**](CloudDBServerInstance.md) |  | [optional] 


