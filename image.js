var im = require('imagemagick'),
  fs = require("fs");

function convertImage(scrImage, dstImage) {

  fs.readFile(scrImage, "binary", function(error, file) {
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
  testStat();
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(12121);

console.log("Server has started.");


function testStat() {
  fs.stat("/home/dev/node-cb/costam", function (status, stats) {
    console.log("stats: " + JSON.stringify(stats));
    console.log("\n\n "+stats);
  });

  fs.readFile("/home/dev/node-cb/costam", "binary", function(error, file) {
    if(error) {
      console.log('response.writeHead(500, {"Content-Type": "text/plain"});');
      console.log('response.write(error + "\n");');
      console.log('response.end();');
    } else {
      console.log('response.writeHead(200, {"Content-Type": "image/png"});');
      console.log('response.write(file, "binary");');
      console.log('response.end();');
      console.log(error);
      console.log(file);
    }
  });


  fs.readFile('/etc/passwd', function (err, data) {

    if (err) throw err;
      console.log(data);
  });

}
