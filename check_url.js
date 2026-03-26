const fs = require('fs');
const https = require('https');

https.get('https://raw.githubusercontent.com/simonw/hsk-vocab/main/hsk1.csv', (res) => {
  console.log('Status:', res.statusCode);
});
