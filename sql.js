var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'loacalhost',
    user:'root',
    password:'123456',
});

connection.connect();

connection.connect(function(err){
    if (err) throw err;
    consol.log("Conneted");
});