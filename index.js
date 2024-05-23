/*
* Primary file for the API
*
*/

// Dependencies
var http = require('http');
var url = require('url');
var StringDecoder = require('string_decoder').StringDecoder;

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

    //Get the paiload, if any
    var decoder = new StringDecoder('utf-8');
    var buffer = '';
    req.on('data',function(data){
        buffer += decoder.write(data);
    });
    req.on('end',function(){
        buffer += decoder.end();

         // Send the response
        res.end('Hello World\n')

        // Log the request path
        console.log('Request received with this payload: ', buffer);
    })
});


// Start the server, and ahve it listen on port 3000
server.listen(3000,function(){
    console.log('The server is listening on port 3000 now');
})