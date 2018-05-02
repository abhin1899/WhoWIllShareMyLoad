#!/usr/bin/env nodejs
const http = require('http');
const hostname = '127.0.0.1';
const port =  process.argv[2] || 3000;
var express = require('express'),morgan = require('morgan');
var app = express();
var path = require('path');
var fs = require("fs");

const server = http.createServer((req, res) => {
fs.readFile("index.html", function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>############################ SERVING FROM SERVER 1 ################################</h1>");
    res.write(data);
    res.end("<h1>############################ SERVING FROM SERVER 1 ##################################</h1>");
  });

});




app.use(morgan('dev', {
    skip: function (req, res) {
        return res.statusCode < 400
    }, stream: process.stderr
}));

app.use(morgan('dev', {
    skip: function (req, res) {
        return res.statusCode >= 400
    }, stream: process.stdout
}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});