const fs = require("fs");
const https = require("https");

https.get("https://www.airbnb.co.in/rooms/1729476134054893611", (res) => {
  let data = "";
  res.on("data", (chunk) => (data += chunk));
  res.on("end", () => {
    const idx = data.indexOf("Born in the 90s");
    console.log(data.substring(idx - 500, idx + 1000));
  });
});
