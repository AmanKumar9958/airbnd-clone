const https = require("https");

const queries = [
  "The Luxe Garden Suite1BHK",
  "Romantic Garden Retreat Jacuzzi Cinema",
  "Elora by Merakey Homes",
  "Suite 2 Stay Jacuzzi Projector",
  "Luxury Private Studio Hot Tub Balcony"
];

async function run() {
  for (const q of queries) {
    await new Promise(resolve => {
      const url = `https://www.airbnb.co.in/s/Gurugram--Haryana--India/homes?query=${encodeURIComponent(q)}`;
      https.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, res => {
        let html = "";
        res.on("data", chunk => html += chunk);
        res.on("end", () => {
          console.log(`=== Query: ${q} ===`);
          const imgs = [...new Set([...html.matchAll(/https:\/\/a0\.muscache\.com\/im\/pictures\/[a-zA-Z0-9_\-\/]+\.jpeg/g)].map(m => m[0]))];
          console.log("Top 3 imgs:", imgs.slice(0, 3));
          resolve();
        });
      }).on("error", (e) => {
        console.error(e);
        resolve();
      });
    });
  }
}

run();
