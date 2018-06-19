var fs = require('fs');
var http = require('http');

var port = process.env.PORT || 5000;
http.createServer(function (request, response) {
  response.setHeader('Content-Type', 'text/html; charset=utf-8');

  var file;
  if (request.url === '/') {
    file = 'index.html';
  } else if (request.url.match(/\/?marked.js$/)) {
    file = 'node_modules/marked/lib/marked.js';
  } else {
    file = '.' + decodeURIComponent(request.url);
  }

  let data;
  try {
    data = fs.readFileSync(file);
  } catch (error) {
    console.log(error);
    // todo: confirm this is a file not found error
    data = "Error: " + error.toString();
    response.statusCode = 404;
  }
  response.write(data);
  response.end();
}).listen(port);

console.log("Listening on port " + port);
