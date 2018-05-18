var fs = require('fs');
var http = require('http');
// var marked = require("marked");

var port = process.env.PORT || 5000;
http.createServer(function (request, response) {
  response.setHeader('Content-Type', 'text/html; charset=utf-8');

  if (request.url === '/') {
    response.write(fs.readFileSync('index.html'));
  } else if (request.url === 'marked.js') {
    response.write(fs.readFileSync('node_modules/marked/lib/marked.js'))
  }
  response.end();
}).listen(port);

console.log("Listening on port " + port);
