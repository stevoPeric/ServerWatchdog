/*
* Primary file for the API
*
*/

// Dependencies
var http = require('http');
var url = require('url');

// The server should responde to all request with a string
var server = http.createServer(function(req,res){

    // Get the URl and parse it
    var parseUrl = url.parse(req.url,true);

    // Get the path
    var path = parseUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g, '')

    // Send the response
    res.end('Hello World\n')

    // Log the request path
    console.log('Request recived on this path: '+trimmedPath);

});


// Start the server, and ahve it listen on port 3000
server.listen(3000,function(){
    console.log('The server is listening on port 3000 now');
})