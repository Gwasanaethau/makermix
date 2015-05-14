var express = require("express");
var app = express();
var server = require("http").createServer(app);

app.use(express.static(__dirname + '/public'));

app.get("/",function(request, response){
  response.sendFile(__dirname + '/index.html');
});

server.listen(3000, function(){
  console.log("Server working on 3000");
});

module.exports = server;
