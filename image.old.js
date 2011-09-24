var im = require('imagemagick'),
  fs = require("fs");

function safeRead(filename, callback) {

  fs.readFile(filename, function (err, data) {
    if (err) {
      if (error.errno === process.ENOENT) {
      // Ignore file not found errors and return an empty result
	callback(null, "");
      } else {
      // Pass other errors through as is
	callback(err);
      }
    } else {
    // Pass successes through as it too.
      callback(null, data);
    }
  });
}

function convertImage(scrImage, dstImage, callback) {

  var image = safeRead(srcImage, function(error, file) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
    }
  });

  var path = "./tmp/";
  im.convert([ srcImage , '-resize', '120x120', dstImage ],
  function(err, metadata){
    if (err) throw err
      console.log('stdout:', stdout);
  });
}



var http = require("http");
//var func = require("./func");

function onRequest(request, response){
  console.log("Testing image");
//  testStat();

  safeRead("/home/dev/node-cb/image.js", function(error, file) { console.log(file)} );
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(12121);

console.log("Server has started.");


