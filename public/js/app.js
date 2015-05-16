var app = angular.module('MakerMix', ['ngResource']);
var testServer = 'http://localhost:3000/';
var prodServer = 'https://ronin-rearend.herokuapp.com/';

app.controller("GetMakersController", ["$http", function($http){
  var self = this;
  self.getMakers = function(testEnv){
    var server = testEnv ? testServer : prodServer;
    var userList = $http.get(server + 'makers');
    userList.success(function(data){
      self.makers = data.makers;
    });
  };
}]);

app.controller('AddMakerController', ['$http', function($http) {

  var self = this;
  this.addedMaker = "";
  this.isNoticeShow = false;

  this.postMaker = function(testEnv){
    var server = testEnv ? testServer : prodServer;
    $http.post(server + 'makers', {name: name}).
      success(function(data, status, headers, config){
        self.addedMaker = data.name;
        self.isNoticeShow = true;
      });
  };

  this.hideNotice = function(){
    self.isNoticeShow = false;
  };
}]);

app.controller('LoginMakerController', ['$http',function($http){
  var self = this;
  this.currentUser = {};
  this.loginMaker = function(testEnv){
    var server = testEnv ? testServer : prodServer;
    $http.get(server + 'makers/session/' + self.makerName)
    .success(function(data){
      self.currentUser = data;
    });
  };
}]);
