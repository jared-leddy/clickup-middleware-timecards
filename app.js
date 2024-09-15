// Core Modules


// NPM Modules
require('dotenv').config();

// Custom Modules




// request({
//   method: 'POST',
//   url: `https://api.clickup.com/api/v2/oauth/token?client_id=${process.env.client_id}=&client_secret=${process.env.client_secret}=&code=`,
// }, function (error, response, body) {
//   console.log('Status:', response.statusCode);
//   console.log('Headers:', JSON.stringify(response.headers));
//   console.log('Response:', body);
// });











const https = require('https');

const options = {
  hostname: 'https://app.clickup.com',
  path: `/api?client_id=${process.env.client_id}&redirect_uri=${process.env.redirect_uri}`,
  method: 'GET'
};




const req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();