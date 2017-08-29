'use strict'

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', function (req, res) {
  res.sendFile(__dirname + '/about.html');
});

app.get('/contact', function (req, res) {
  res.sendFile(__dirname + '/contact.html');
});

app.use(function (req, res) {
  res.status(404).sendFile(__dirname + '/404.html');
});

app.listen(8080, function() {
  console.log('Web server listening on port 8080!');
});