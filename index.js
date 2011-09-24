var http = require("http");
var func = require("./func");


http.createServer(func.onRequest).listen(28081);

console.log("Server has started.");
    