var app = angular.module('MakerMix', ['ngResource']);
app.controller("GetMakersController", ["$resource", function($resource){
  var userResource = $resource("http://localhost:3000/makers");
  var self = this;
  self.getMakers= function(){
    var userList = userResource.get();
    userList.$promise.then(function(data){
      console.log("feedback" + data);
      self.makers = data.makers;
    });
    console.log("Outside call");
  };
}]);
