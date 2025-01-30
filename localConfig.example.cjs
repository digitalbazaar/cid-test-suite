// Rename this file to localConfig.cjs
// Before running the tests, you can specify a BASE_URL, such as
// BASE_URL=http://localhost:40443/zDdfsdfs npm test
module.exports = {
  settings: {},
  implementations: [{
    name: 'My Company',
    implementation: 'My Implementation Name',
    issuers: [{
      id: 'https://example.com'
    }]
  }]
};
