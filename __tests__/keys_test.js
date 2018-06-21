test('get keys', () => {
  const ncloud = require('../lib/ncloud');
  const options = { accessKey: 'b', secretKey: 'c' };
  const n = new ncloud(options);
  const keys = n.keys();

  expect(keys.accessKey).toBe(options.accessKey);
  expect(keys.secretKey).toBe(options.secretKey);
});
