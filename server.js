var express = require("express");
 
var app = express();

app.use(express.static('public'));

var server = app.listen(8080, function(){
    var address = server.address();
    console.log("Server started at http://localhost:%s", address.port);
});