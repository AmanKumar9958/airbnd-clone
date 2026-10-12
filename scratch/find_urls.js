const fs = require('fs');
const content = fs.readFileSync('app/data/listingData.ts', 'utf8');
const urls = [...content.matchAll(/https:\/\/a0\.muscache\.com[^\"]+/g)].map(m => m[0]);
console.log('Unique URLs count:', new Set(urls).size);
[...new Set(urls)].forEach(u => console.log(u));
