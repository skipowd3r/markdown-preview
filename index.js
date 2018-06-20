var fs = require('fs');
var http = require('http');

var port = process.env.PORT || 5000;
http.createServer(function (request, response) {
  response.setHeader('Content-Type', 'text/html; charset=utf-8');

  var file;
  if (request.url === '/') {
    file = 'index.html';
  } else if (request.url.match(/\/?style.css$/)) {
    file = 'style.css';
  } else {
    file = '.' + decodeURIComponent(request.url);
  }

  let data;
  try {
    console.log('Serving ' + file);
    data = fs.readFileSync(file);
    if (file.match(/\.css$/)) {
      response.setHeader('Content-Type', 'text/css');
    }
    else if (file.match(/\.js$/)) {
      response.setHeader('Content-Type', 'application/javascript');
    }
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
