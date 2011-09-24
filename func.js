var http = require('http');

function onRequest(request, response) {

    console.log("Request received.");
    request.addListener("end", function() {
        getListener(request, response);
    } );
}

function getListener(request, response) {
    //  sleep( 8000 );
    httpGet( request, response );
  
 
//response.writeHead(200, {"Content-Type": "text/plain"});
//response.write("Hello World");
//    response.write( html  );
//   response.end();
}

function httpGet( request, response ) {

    var options = {
        host: "rootnode.net",
        port: 80,
        path: request.url,
        headers: {
            'user-agent' : request.headers['user-agent'],
            'accept-charset' : request.headers['accept-charset']
        },
        method: request.method
    };

    console.log(options);

    var html = http.get(options, function(res ) {
        console.log("Got response: " + res.statusCode);
    //response.write( res );
    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });
    
    var info = '' ;  
      
    html.on("response", function(res) {
        res.on("data", function(chunk) {
            info += chunk;
        } );
        
        res.on("end", function() {
            console.log( info );
        });
    } ); 
    
    console.log(html)
    console.log( html.output );
    

//    request.content = '';
//    request.addListener('data', function(chunk) {
//        request.content += chunk;
//    });
//    
//    request.addListener('end', function() {
//        
//        try {
//            var falsy = http.get(options, function(result) {
//                response.writeHead(200, result.header);
//                response.write(request.content);
//            
//                result.on('data', function(cont) {
//                    response.write(cont);
//                });
//            
//                result.on('error', function(e) {
//                    console.log("Got error: " + e.message);
//                });
//            
//                result.on('end', function() {
//                    console.log("end");
//                    response.end();
//                });
//            
//            });
//            console.log(falsy);
//        
//            falsy.end();
//        
//        } catch(e) {
//            console.log( falsy);
//        }
//        
//    });
    
    

}


function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
};



exports.onRequest = onRequest; 
