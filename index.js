var static = require('node-static');
var file = new static.Server('.');
var port = process.env.PORT || 8080;
var indexFile = 'index.html';

require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    var callback = function (e, rsp) {
      if (e && e.status === 404) {
        response.writeHead(e.status, e.headers);
        response.end(request.url + " not found");
      } else {
        response.end("Not Found");
        console.log(request, response);
      }
    };

    console.log(request.url)
    if (request.url === '/') {
      file.serveFile(indexFile, 200, {}, request, response);
    } else {
      file.serve(request, response, callback);
    }
  }).resume();
}).listen(port);
console.log("Listening on port " + port);
