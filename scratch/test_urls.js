const https = require('https');
const fs = require('fs');
const content = fs.readFileSync('app/data/listingData.ts', 'utf8');
const urls = [...new Set([...content.matchAll(/https:\/\/a0\.muscache\.com[^\"]+/g)].map(m => m[0]))];

Promise.all(urls.map(u => new Promise(resolve => {
  https.get(u, res => resolve({ url: u, status: res.statusCode })).on('error', () => resolve({ url: u, status: 'err' }));
}))).then(results => {
  results.forEach(r => console.log(r.status, r.url));
});
