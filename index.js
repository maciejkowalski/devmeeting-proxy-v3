var http = require("http");
var func = require("./func");


http.createServer(func.onRequest).listen(2222);

console.log("Server has started.");
    