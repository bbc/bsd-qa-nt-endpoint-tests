
const api_Key = 'ApiKey4e9c3775-1923-4d27-9724-cdb9ecfd0860';
var path = require('path');

// need to add in case of self-signed certificate connection
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

module.exports = {
  time: {
    now: new Date()
  },
  auth: {
    fs: require('fs'),
    certFile: path.resolve(__dirname, '../../../Documents/certs/cert.crt'),
    keyFile: path.resolve(__dirname, '../../../Documents/certs/private.key'),
    caFile: path.resolve(__dirname, '../../../Documents/certs/bbc-ca-root.pem')
  },
  options: {
    headers: {
        'User-Agent': 'request',
        'Authorization': api_Key,
        'Content-Type': 'application/json'
    }
    // cert: fs.readFileSync(certFile),
    // key: fs.readFileSync(keyFile),
    // passphrase: 'anna1234!',
    // ca: fs.readFileSync(caFile)
  },
  request: require('request'),
  util: require("util"),
  should: require("should"),
  chai: require("chai"),
  chaiJSONSchema: require('chai-json-schema'),
  chaiHttp: require('chai-http'),
  expect: require("chai").expect,
  baseURL: "https://test-api.jupiter.bbc.co.uk",
  NTApi: {
    publish: '/v1/publish',
    media: '/v1/mediaitem',
    refdata: '/v1/refdata' 
  }
}


