const fs = require('fs');

const urls = [
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/fffd8e76-04a8-4cee-89df-b490d6e29b85.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/34b2ffd4-7480-40e2-a66b-619daf5c506a.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/57d18950-58b9-4c58-8aff-ffdc5b73673d.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/7775ef82-b7b5-4c9a-b36e-8973cb1fe276.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/810da56f-7ce4-4b78-be65-4aee1be5c16c.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/26f90a0b-929e-44a3-b7d2-739f2891c02c.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/cad63bf7-aaeb-43b6-92c3-b0253eca42bf.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/8f529071-1be4-4df8-9170-6aac6def7021.jpeg',
];

const html = `<html><body>${urls.map((u, i) => `<div><h3>${i}: ${u}</h3><img src="${u}" width="300"/></div>`).join('')}</body></html>`;
fs.writeFileSync('scratch/photos_check.html', html);
console.log('Saved scratch/photos_check.html');
