var http = require("http");
var func = require("./func");

var im = require('imagemagick'),
  fs = require("fs");


http.createServer(func.onRequest).listen(2222);

console.log("Server has started.");
    