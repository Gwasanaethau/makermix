var app = angular.module('MakerMix', ['ngResource']);
app.controller("GetMakersController", ["$http", function($http){
  var self = this;
  self.getMakers= function(){
    var userList = $http.get("http://localhost:3000/makers");
    userList.success(function(data){
      self.makers = data.makers;
    });
  };
}]);
