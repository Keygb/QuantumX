// empty-img.js
const base64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=";

$done({
  status: 200,
  headers: {
    "Content-Type": "image/png",
    "Content-Length": `${base64.length}`,
  },
  body: $util.decodeBase64(base64),
});
