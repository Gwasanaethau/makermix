var express = require("express");
var app = express();
var server = require("http").createServer(app);

app.use(express.static(__dirname + '/public'));

app.get("/",function(request, response){
  response.sendFile(__dirname + '/index.html');
});

app.get("/session/Rob",function(request, response){
  response.send({"_id": 1, "name": "Rob"});
});

app.get("/makers", function(request, response){
  response.send({ makers: [ { id: 1, name: "Joe" }, { id: 2, name: "Mark" } ] });
});

app.post("/makers", function(request, response){
  response.send({"_id": 1, "name": "Joe"});
});

server.listen(process.env.PORT || 3000, function(){
  console.log("Server working on 3000");
});

module.exports = server;
