/*
* vpc
* VPC Network 관련 API<br/>https://ncloud.apigw.ntruss.com/vpc/v2
*
* NBP corp.
*
* NOTE: This class is auto generated by the swagger code generator program.
* https://github.com/swagger-api/swagger-codegen.git
* Do not edit the class manually.
*/

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    factory(require('expect.js'), require('../../src/index'));
  } else {
    factory(root.expect, root.Vpc);
  }
}(this, function(expect, Vpc) {
  'use strict';

  var client = new Vpc.ApiClient({
    accessKey: 'your access key',
    secretKey: 'your secret key'
  });
  var instance = new Vpc.V2Api(client);

  describe('V2Api', function() {
    describe('acceptOrRejectVpcPeering', function() {
      it('should call acceptOrRejectVpcPeering successfully', function(done) {
        //uncomment below and update the code to test acceptOrRejectVpcPeering
        //instance.acceptOrRejectVpcPeering(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('addNetworkAclInboundRule', function() {
      it('should call addNetworkAclInboundRule successfully', function(done) {
        //uncomment below and update the code to test addNetworkAclInboundRule
        //instance.addNetworkAclInboundRule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('addNetworkAclOutboundRule', function() {
      it('should call addNetworkAclOutboundRule successfully', function(done) {
        //uncomment below and update the code to test addNetworkAclOutboundRule
        //instance.addNetworkAclOutboundRule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('addRoute', function() {
      it('should call addRoute successfully', function(done) {
        //uncomment below and update the code to test addRoute
        //instance.addRoute(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('addRouteTableSubnet', function() {
      it('should call addRouteTableSubnet successfully', function(done) {
        //uncomment below and update the code to test addRouteTableSubnet
        //instance.addRouteTableSubnet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('createNatGatewayInstance', function() {
      it('should call createNatGatewayInstance successfully', function(done) {
        //uncomment below and update the code to test createNatGatewayInstance
        //instance.createNatGatewayInstance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('createNetworkAcl', function() {
      it('should call createNetworkAcl successfully', function(done) {
        //uncomment below and update the code to test createNetworkAcl
        //instance.createNetworkAcl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('createRouteTable', function() {
      it('should call createRouteTable successfully', function(done) {
        //uncomment below and update the code to test createRouteTable
        //instance.createRouteTable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('createSubnet', function() {
      it('should call createSubnet successfully', function(done) {
        //uncomment below and update the code to test createSubnet
        //instance.createSubnet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('createVpc', function() {
      it('should call createVpc successfully', function(done) {
        //uncomment below and update the code to test createVpc
        //instance.createVpc(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('createVpcPeeringInstance', function() {
      it('should call createVpcPeeringInstance successfully', function(done) {
        //uncomment below and update the code to test createVpcPeeringInstance
        //instance.createVpcPeeringInstance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('deleteNatGatewayInstance', function() {
      it('should call deleteNatGatewayInstance successfully', function(done) {
        //uncomment below and update the code to test deleteNatGatewayInstance
        //instance.deleteNatGatewayInstance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('deleteNetworkAcl', function() {
      it('should call deleteNetworkAcl successfully', function(done) {
        //uncomment below and update the code to test deleteNetworkAcl
        //instance.deleteNetworkAcl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('deleteRouteTable', function() {
      it('should call deleteRouteTable successfully', function(done) {
        //uncomment below and update the code to test deleteRouteTable
        //instance.deleteRouteTable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('deleteSubnet', function() {
      it('should call deleteSubnet successfully', function(done) {
        //uncomment below and update the code to test deleteSubnet
        //instance.deleteSubnet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('deleteVpc', function() {
      it('should call deleteVpc successfully', function(done) {
        //uncomment below and update the code to test deleteVpc
        //instance.deleteVpc(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('deleteVpcPeeringInstance', function() {
      it('should call deleteVpcPeeringInstance successfully', function(done) {
        //uncomment below and update the code to test deleteVpcPeeringInstance
        //instance.deleteVpcPeeringInstance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('getNatGatewayInstanceDetail', function() {
      it('should call getNatGatewayInstanceDetail successfully', function(done) {
        //uncomment below and update the code to test getNatGatewayInstanceDetail
        //instance.getNatGatewayInstanceDetail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('getNatGatewayInstanceList', function() {
      it('should call getNatGatewayInstanceList successfully', function(done) {
        //uncomment below and update the code to test getNatGatewayInstanceList
        //instance.getNatGatewayInstanceList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('getNetworkAclDetail', function() {
      it('should call getNetworkAclDetail successfully', function(done) {
        //uncomment below and update the code to test getNetworkAclDetail
        //instance.getNetworkAclDetail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('getNetworkAclList', function() {
      it('should call getNetworkAclList successfully', function(done) {
        //uncomment below and update the code to test getNetworkAclList
        //instance.getNetworkAclList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('getNetworkAclRuleList', function() {
      it('should call getNetworkAclRuleList successfully', function(done) {
        //uncomment below and update the code to test getNetworkAclRuleList
        //instance.getNetworkAclRuleList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('getRouteList', function() {
      it('should call getRouteList successfully', function(done) {
        //uncomment below and update the code to test getRouteList
        //instance.getRouteList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('getRouteTableDetail', function() {
      it('should call getRouteTableDetail successfully', function(done) {
        //uncomment below and update the code to test getRouteTableDetail
        //instance.getRouteTableDetail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('getRouteTableList', function() {
      it('should call getRouteTableList successfully', function(done) {
        //uncomment below and update the code to test getRouteTableList
        //instance.getRouteTableList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('getRouteTableSubnetList', function() {
      it('should call getRouteTableSubnetList successfully', function(done) {
        //uncomment below and update the code to test getRouteTableSubnetList
        //instance.getRouteTableSubnetList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('getSubnetDetail', function() {
      it('should call getSubnetDetail successfully', function(done) {
        //uncomment below and update the code to test getSubnetDetail
        //instance.getSubnetDetail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('getSubnetList', function() {
      it('should call getSubnetList successfully', function(done) {
        //uncomment below and update the code to test getSubnetList
        //instance.getSubnetList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('getVpcDetail', function() {
      it('should call getVpcDetail successfully', function(done) {
        //uncomment below and update the code to test getVpcDetail
        //instance.getVpcDetail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('getVpcList', function() {
      it('should call getVpcList successfully', function(done) {
        //uncomment below and update the code to test getVpcList
        //instance.getVpcList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('getVpcPeeringInstanceDetail', function() {
      it('should call getVpcPeeringInstanceDetail successfully', function(done) {
        //uncomment below and update the code to test getVpcPeeringInstanceDetail
        //instance.getVpcPeeringInstanceDetail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('getVpcPeeringInstanceList', function() {
      it('should call getVpcPeeringInstanceList successfully', function(done) {
        //uncomment below and update the code to test getVpcPeeringInstanceList
        //instance.getVpcPeeringInstanceList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('removeNetworkAclInboundRule', function() {
      it('should call removeNetworkAclInboundRule successfully', function(done) {
        //uncomment below and update the code to test removeNetworkAclInboundRule
        //instance.removeNetworkAclInboundRule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('removeNetworkAclOutboundRule', function() {
      it('should call removeNetworkAclOutboundRule successfully', function(done) {
        //uncomment below and update the code to test removeNetworkAclOutboundRule
        //instance.removeNetworkAclOutboundRule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('removeRoute', function() {
      it('should call removeRoute successfully', function(done) {
        //uncomment below and update the code to test removeRoute
        //instance.removeRoute(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('removeRouteTableSubnet', function() {
      it('should call removeRouteTableSubnet successfully', function(done) {
        //uncomment below and update the code to test removeRouteTableSubnet
        //instance.removeRouteTableSubnet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('setNatGatewayDescription', function() {
      it('should call setNatGatewayDescription successfully', function(done) {
        //uncomment below and update the code to test setNatGatewayDescription
        //instance.setNatGatewayDescription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('setNetworkAclDescription', function() {
      it('should call setNetworkAclDescription successfully', function(done) {
        //uncomment below and update the code to test setNetworkAclDescription
        //instance.setNetworkAclDescription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('setRouteTableDescription', function() {
      it('should call setRouteTableDescription successfully', function(done) {
        //uncomment below and update the code to test setRouteTableDescription
        //instance.setRouteTableDescription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('setSubnetNetworkAcl', function() {
      it('should call setSubnetNetworkAcl successfully', function(done) {
        //uncomment below and update the code to test setSubnetNetworkAcl
        //instance.setSubnetNetworkAcl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
    describe('setVpcPeeringDescription', function() {
      it('should call setVpcPeeringDescription successfully', function(done) {
        //uncomment below and update the code to test setVpcPeeringDescription
        //instance.setVpcPeeringDescription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //done();
        //});
        done();
      });
    });
  });

}));
