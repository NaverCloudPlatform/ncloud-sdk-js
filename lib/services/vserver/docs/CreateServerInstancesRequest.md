# Vserver.CreateServerInstancesRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**regionCode** | **String** | REGION코드 | [optional] 
**serverProductCode** | **String** | 서버상품코드 | [optional] 
**serverImageProductCode** | **String** | 서버이미지상품코드 | [optional] 
**memberServerImageInstanceNo** | **String** | 회원서버이미지인스턴스번호 | [optional] 
**serverName** | **String** | 서버이름 | [optional] 
**serverDescription** | **String** | 서버설명 | [optional] 
**loginKeyName** | **String** | 로그인키이름 | [optional] 
**isProtectServerTermination** | **Boolean** | 반납보호여부 | [optional] 
**serverCreateCount** | **Number** | 서버생성개수 | [optional] 
**serverCreateStartNo** | **Number** | 서버생성시작번호 | [optional] 
**feeSystemTypeCode** | **String** | 요금제유형코드 | [optional] 
**initScriptNo** | **String** | 초기화스크립트번호 | [optional] 
**vpcNo** | **String** | VPC번호 | 
**subnetNo** | **String** | 서브넷번호 | 
**networkInterfaceList** | [**[NetworkInterfaceParameter]**](NetworkInterfaceParameter.md) | 네트워크인터페이스리스트 | 
**placementGroupNo** | **String** | 물리배치그룹번호 | [optional] 
**isEncryptedBaseBlockStorageVolume** | **Boolean** | 기본블록스토리지볼륨암호화여부 | [optional] 


