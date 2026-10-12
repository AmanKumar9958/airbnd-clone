const fs = require("fs");
const https = require("https");

https.get("https://www.airbnb.co.in/rooms/1729476134054893611", (res) => {
  let data = "";
  res.on("data", (chunk) => (data += chunk));
  res.on("end", () => {
    function findNear(term, radius = 500) {
      let idx = 0;
      while ((idx = data.indexOf(term, idx)) !== -1) {
        console.log(`=== FOUND "${term}" at ${idx} ===`);
        const slice = data.substring(Math.max(0, idx - radius), Math.min(data.length, idx + radius));
        const svgs = slice.match(/<svg[\s\S]*?<\/svg>/gi);
        if (svgs) {
          svgs.forEach((s, i) => console.log(`SVG ${i}:`, s));
        } else {
          console.log("No SVG in slice");
        }
        idx += term.length;
      }
    }

    findNear("Born in the 90s");
    findNear("Superhost");
    findNear("protect your payment");
  });
});
