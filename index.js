var fs = require('fs');
var http = require('http');

var port = process.env.PORT || 5000;
http.createServer(function (request, response) {
  response.setHeader('Content-Type', 'text/html; charset=utf-8');

  var file;
  if (request.url === '/') {
    file = 'index.html';
  } else if (request.url === 'marked.js') {
    file = 'node_modules/marked/lib/marked.js';
  } else {
    file = '.' + decodeURIComponent(request.url);
  }

  var data = fs.readFileSync(file);
  response.write(data);
  response.end();
}).listen(port);

console.log("Listening on port " + port);
