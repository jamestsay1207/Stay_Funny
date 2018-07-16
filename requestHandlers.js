function start() {
    console.log("Request handler 'start' was called.");
}

function upload() {
    console.log("Request handler 'upload' was called.");
}
function test(){
    console.log("Request Handler 'test' was called");
}

exports.start = start;
exports.upload = upload;
exports.test = test;