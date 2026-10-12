const https = require("https");

https.get("https://www.airbnb.co.in/rooms/1729476134054893611", (res) => {
  let data = "";
  res.on("data", (chunk) => (data += chunk));
  res.on("end", () => {
    console.log("Length:", data.length);
    const userImgs = [...data.matchAll(/https:\/\/a0\.muscache\.com\/im\/pictures\/user\/[a-zA-Z0-9_\-\.\/]+/g)].map(m => m[0]);
    console.log("Unique user imgs:", [...new Set(userImgs)]);

    // search around Shivika
    const idx = data.indexOf("Shivika");
    if (idx !== -1) {
      console.log("Around Shivika:", data.substring(Math.max(0, idx - 400), Math.min(data.length, idx + 400)));
    } else {
      console.log("Shivika not found in raw html");
    }
  });
}).on("error", (e) => console.error(e));
