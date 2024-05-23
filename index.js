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
    var trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // Get the query as an object
    var queryStringObject = parseUrl.query;

    // Get the HTTP Method
    var method = req.method.toLowerCase();

    // Get the header as a object
    var headers = req.headers;

    // Send the response
    res.end('Hello World\n')

    // Log the request path
    console.log('Request recived receaved with thoes headers: ', headers);
    console.log(' and the query object is ',queryStringObject)

});


// Start the server, and ahve it listen on port 3000
server.listen(3000,function(){
    console.log('The server is listening on port 3000 now');
})