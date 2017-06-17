//Simple Web Server
//Author: Nikhil Raghavendra
//TS: 3:37 PM 17/6/2017

//Modules
var http = require('http');
var fs = require('fs');

//If file not found: Error 404
function sendError404(response){
    response.writeHead(404, {"context-type": "text/plain"});
    response.write("Error 404: Page not found!");
    response.end();
}

//Called when user requests for file
function onRequest(request, response){
   if (request.method == 'GET' && request.url == '/'){
       response.writeHead(200, {"context-type": "text/html"});
       fs.createReadStream("./index.html").pipe(response);
   } else {
       sendError404(response);
   }
}

http.createServer(onRequest).listen(8080);
console.log("Server is now running.");