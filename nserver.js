const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    fs.readFile("./dist/index.html", "binary", function(err, data) {
      if (err) {
        response.writeHead(404);
        response.write("Not Found!");
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
      }
      response.end();
    });
  } else if ((request.url = "/main.js")) {
    fs.readFile("./dist/main.js", "binary", function(err, data) {
      if (err) {
        response.writeHead(404);
        response.write("Not Found!");
      } else {
        response.writeHead(200, { "Content-Type": "text/javascript" });
        response.write(data);
      }
      response.end();
    });
  } else {
    //4.
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>Portfolio</h1><br /><br />Not Found: " + request.url);
    response.end();
  }
});

server.listen(1000, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("SERVER STARTED ON http://localhost:1000");
  }
});
