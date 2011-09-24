var im = require('imagemagick'),
fs = require("fs");
var http = require("http");
var deferred = require('deferred');

var hashlib = require("hashlib");

function fHash( request) {
    var hash = hashlib.md5( request.path );
    return hash;
}

console.log(fHash(
{
    "path": 1
}
));

function convertImage(srcImage, dstImage) {
    im.convert([ srcImage , '-resize' , '120x120', dstImage ],
        function(err, metadata){
            if (err) throw err
            console.log( metadata );
        });
}

var path = "./tmp/img/";
    
console.log(
    convertImage( path+"test.png", path+"mini_test.png")
    );

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

function fRead(name, response) {

    fs.readFile("./tmp/img"+name, "binary", function(error, file) {
        if(error) {
            console.log('response.writeHead(500, {"Content-Type": "text/plain"});');
            console.log('response.write(error + "\n");');
            console.log('response.end();');
        } else {
            console.log('response.writeHead(200, {"Content-Type": "image/png"});');
            console.log('response.write(file, "binary");');
            console.log('response.end();');
        }

        response.writeHead(200, {
            "Content-type": "image/png"
        });
    });
}

function fIdentifyFormat(name) {
    var d = deferred();
    im.identify( "./tmp/img/" + name , function(err, features){
        d.resolve(err || features);
    // { format: 'JPEG', width: 3904, height: 2622, depth: 8 }
    })
    return d.promise;
}



fIdentifyFormat( "test.png" )
    (function (results) {
        console.log(results);
    }).end();

function fStat(name ) {

    try {
        fs.stat("./tmp/img/" + name, function (status, stats) {
            //    console.log("stats: " + JSON.stringify(stats));
            //    console.log("\n\n "+stats);
            });
        return true;
    } catch (e) {
        return false;
    }


}
