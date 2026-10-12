const https = require("https");

https.get("https://www.airbnb.co.in/rooms/1729476134054893611", (res) => {
  let data = "";
  res.on("data", (chunk) => (data += chunk));
  res.on("end", () => {
    // search for stays nearby or similar titles in HTML / JSON
    const terms = ["More stays nearby", "The Luxe Garden Suite", "Romantic Garden Retreat", "Elora by Merakey", "Suite 2 Stay", "Luxury Private Studio"];
    terms.forEach(term => {
      const idx = data.indexOf(term);
      console.log(`Term "${term}": ${idx !== -1 ? "FOUND at " + idx : "NOT FOUND"}`);
      if (idx !== -1) {
        console.log(data.substring(idx - 200, idx + 400));
      }
    });

    // Also look for similar listings in the JSON
    const m = data.match(/"similarListings"[\s\S]{1,1000}/) || data.match(/"similar_listings"[\s\S]{1,1000}/) || data.match(/More stays nearby[\s\S]{1,1000}/);
    if (m) console.log("Match:", m[0]);
  });
}).on("error", (e) => console.error(e));
