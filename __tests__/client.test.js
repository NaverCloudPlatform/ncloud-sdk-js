const ncloud = require('../lib/ncloud');
const Server = require('../lib/services/server');

const n = new ncloud();
const client = new Server.ApiClient(n.keys());
const instance = new Server.V2Api(client);

test('getLoginKeyList', done => {
  instance.getRegionList({}, function(err, data) {
    expect(err).toBeNull();
    expect(data).not.toBeNull();
    expect(data.regionList[0].regionCode).toBe('KR');
    done();
  });
});

