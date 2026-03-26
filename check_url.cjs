const https = require('https');

https.get('https://raw.githubusercontent.com/clem109/hsk-vocabulary/master/hsk-vocabulary.json', (res) => {
  console.log('Status:', res.statusCode);
});
