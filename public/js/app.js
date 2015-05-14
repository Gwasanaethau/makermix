var app = angular.module('MakerMix', ['ngResource']);



app.controller('AddMakerController', ['$http', function($http) {

  var self = this;
  this.addedMaker = "";

  this.postMaker = function(name){
    $http.post('http://localhost:3000/makers', {name: name}).
      success(function(data, status, headers, config){
        self.addedMaker = data;
      });
  };
}])