const https = require("https");

function fetchAirbnb(query) {
  const url = `https://www.airbnb.co.in/s/Gurugram--India/homes?query=${encodeURIComponent(query)}`;
  https.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, res => {
    let html = "";
    res.on("data", chunk => html += chunk);
    res.on("end", () => {
      console.log(`Fetched ${query}, length: ${html.length}`);
      const matches = [...html.matchAll(/https:\/\/a0\.muscache\.com\/im\/pictures\/[a-zA-Z0-9_\-\/]+\.jpeg/g)].map(m => m[0]);
      console.log("Images found:", matches.slice(0, 5));
    });
  });
}

fetchAirbnb("Romantic Garden Retreat Jacuzzi Cinema");
