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

app.controller('AddMakerController', ['$http', function($http) {

  var self = this;
  this.addedMaker = "";

  this.postMaker = function(name){
    $http.post('http://localhost:3000/makers', {name: name}).
      success(function(data, status, headers, config){
        self.addedMaker = data;
      });
  };
}]);
