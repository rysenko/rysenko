var fs = require('fs');
var marked = require('marked');
var express = require('express');
var app = express();

var indexMd = marked(fs.readFileSync(__dirname + '/index.md', {encoding: 'utf-8'}));
var indexCss = fs.readFileSync(__dirname + '/index.css', {encoding: 'utf-8'});
var indexHtml = '<html><head><title>Alexander Rysenko</title><style>' + indexCss + '</style></head><body>' +
    indexMd + '</body></html>';

app.get('/', function (req, res) {
    res.send(indexHtml);
});

var server = app.listen(process.env.PORT || 3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
});