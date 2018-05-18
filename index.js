var fs = require('fs');
var http = require('http');
// var marked = require("marked");

var indexHtml = function () {
  return '<h1>Markdown Preview</h1><form>' + '<textarea id="source"></textarea>' + '</form>'
};

var port = process.env.PORT || 5000;
http.createServer(function (request, response) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (request.url === '/') {
        response.write(indexHtml());
    }
    response.end();
}).listen(port);

console.log("Listening on port " + port);