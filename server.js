const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3030;
const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : "req.url",
  );
  const extName = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/js",
    ".png": "text/png",
  };
  const contentType = mimeTypes[extName] || "application/octet-stream";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead;
    } else {
    }
  });
});

server.listen(port, () => {
  console.log(`server is listening ${port}`);
});
