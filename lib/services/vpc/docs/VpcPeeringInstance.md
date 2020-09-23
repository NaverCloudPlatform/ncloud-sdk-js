# Vpc.VpcPeeringInstance

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vpcPeeringInstanceNo** | **String** | VPCPeering인스턴스번호 | [optional] 
**vpcPeeringName** | **String** | VPCPeering이름 | [optional] 
**regionCode** | **String** | REGION코드 | [optional] 
**createDate** | **String** | 생성일시 | [optional] 
**lastModifiyDate** | **String** | 마지막수정일시 | [optional] 
**vpcPeeringInstanceStatus** | [**CommonCode**](CommonCode.md) | VPCPeering인스턴스상태 | [optional] 
**vpcPeeringInstanceStatusName** | **String** | VPCPeering인스턴스상태이름 | [optional] 
**vpcPeeringInstanceOperation** | [**CommonCode**](CommonCode.md) | VPCPeering인스턴스OP | [optional] 
**sourceVpcNo** | **String** | 요청VPC번호 | [optional] 
**sourceVpcName** | **String** | 요청VPC이름 | [optional] 
**sourceVpcIpv4CidrBlock** | **String** | 요청VPC IPv4 CIDR블록 | [optional] 
**sourceVpcLoginId** | **String** | 요청VPC소유자ID | [optional] 
**targetVpcNo** | **String** | 수락VPC번호 | [optional] 
**targetVpcName** | **String** | 수락VPC이름 | [optional] 
**targetVpcIpv4CidrBlock** | **String** | 수락VPC IPv4 CIDR블록 | [optional] 
**targetVpcLoginId** | **String** | 수락VPC소유자ID | [optional] 
**vpcPeeringDescription** | **String** | VPCPeering설명 | [optional] 
**hasReverseVpcPeering** | **Boolean** | 역방향VPCPeering존재여부 | [optional] 
**isBetweenAccounts** | **Boolean** | 계정간의VPCPeering여부 | [optional] 
**reverseVpcPeeringInstanceNo** | **String** | 역방향VPCPeering인스턴스번호 | [optional] 


