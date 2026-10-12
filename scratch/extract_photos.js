const fs = require('fs');

const html = fs.readFileSync('C:/Users/amanc/.gemini/antigravity-ide/brain/ed7c18f1-f66c-4d35-a8c0-f654b5f76828/.system_generated/steps/16/content.md', 'utf8');
const regex = /https:\/\/a0\.muscache\.com\/im\/pictures\/hosting\/Hosting-1729476134054893611\/original\/([a-f0-9\-]+)\.jpeg/g;

const uniqueIds = new Set();
let match;
while ((match = regex.exec(html)) !== null) {
  uniqueIds.add(match[1]);
}

console.log('Total unique listing photos:', uniqueIds.size);
const idsList = Array.from(uniqueIds);
console.log(JSON.stringify(idsList, null, 2));
fs.writeFileSync('scratch/all_photos.json', JSON.stringify(idsList, null, 2));
