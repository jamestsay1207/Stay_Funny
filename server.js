var http = require("http"),
    url = require("url");

function start(route, handle) {

    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;

        if (!pathname.indexOf('/favicon.ico')) {
            return; 
        };

        console.log("Request for " + pathname + " received.");

        route(handle, pathname);
        response.writeHead(200, {"Content-type": "text/plain"});
        response.write("Hello world!");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has start!");
}

function test(route, handle) {

    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;

        if (!pathname.indexOf('/favicon.ico')) {
            return; 
        };

        console.log("Request for " + pathname + " received.");

        route(handle, pathname);
        response.writeHead(200, {"Content-type": "text/plain"});
        response.write("Hello world!");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has start!");
}

exports.start = start;
exports.test = test;