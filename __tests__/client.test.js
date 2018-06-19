const ncloud = require('../lib/ncloud');
const Server = require('server');

const n = new ncloud();
const client = new Server.ApiClient(n.keys());
const instance = new Server.V1Api(client);

test('getLoginKeyListGet', done => {
  instance.getLoginKeyListGet({ keyName: 'rabbit' }, function(err, data) {
    expect(err).toBeNull();
    expect(data).not.toBeNull();
    expect(data.totalRows).toBe(1);
    expect(data.loginKeyList[0].keyName).toBe('rabbit');
    done();
  });
});

test('getLoginKeyListPost', done => {
  instance.getLoginKeyListPost({ keyName: 'rabbit' }, function(err, data) {
    expect(err).toBeNull();
    expect(data).not.toBeNull();
    expect(data.totalRows).toBe(1);
    expect(data.loginKeyList[0].keyName).toBe('rabbit');
    done();
  });
});

test('getPublicIpInstanceListGet', done => {
  instance.getPublicIpInstanceListGet({ publicIpInstanceNoList: ['691030', '690456', '690457'] }, function(err, data) {
    expect(err).toBeNull();
    expect(data).not.toBeNull();
    expect(data.totalRows).toBe(3);
    expect(data.publicIpInstanceList[0].publicIpInstanceNo).toBe('690456');
    done();
  });
});

test('getPublicIpInstanceListPost', done => {
  instance.getPublicIpInstanceListPost({ publicIpInstanceNoList: ['691030', '690456', '690457'] }, function(err, data) {
    expect(err).toBeNull();
    expect(data).not.toBeNull();
    expect(data.totalRows).toBe(3);
    expect(data.publicIpInstanceList[0].publicIpInstanceNo).toBe('690456');
    done();
  });
});
