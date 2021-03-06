// This file has been autogenerated.

exports.setEnvironment = function () {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id?api-version=2015-12-01')
  .reply(200, "{\"id\":\"my_application_id\",\"displayName\":\"my_application_name\",\"packages\":[],\"allowUpdates\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '96',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Thu, 10 Mar 2016 23:49:12 GMT',
  etag: '0x8D3493E94E8A8AC',
  'request-id': 'c7199589-ee5e-455e-823f-04c2e37aa398',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-request-id': 'aab728b5-0827-4ebb-8ae6-e67a779692c1',
  'x-ms-correlation-request-id': 'aab728b5-0827-4ebb-8ae6-e67a779692c1',
  'x-ms-routing-request-id': 'WESTUS:20160310T234914Z:aab728b5-0827-4ebb-8ae6-e67a779692c1',
  date: 'Thu, 10 Mar 2016 23:49:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id?api-version=2015-12-01')
  .reply(200, "{\"id\":\"my_application_id\",\"displayName\":\"my_application_name\",\"packages\":[],\"allowUpdates\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '96',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Thu, 10 Mar 2016 23:49:12 GMT',
  etag: '0x8D3493E94E8A8AC',
  'request-id': 'c7199589-ee5e-455e-823f-04c2e37aa398',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-request-id': 'aab728b5-0827-4ebb-8ae6-e67a779692c1',
  'x-ms-correlation-request-id': 'aab728b5-0827-4ebb-8ae6-e67a779692c1',
  'x-ms-routing-request-id': 'WESTUS:20160310T234914Z:aab728b5-0827-4ebb-8ae6-e67a779692c1',
  date: 'Thu, 10 Mar 2016 23:49:14 GMT',
  connection: 'close' });
 return result; }]];