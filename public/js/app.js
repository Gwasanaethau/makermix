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
  this.isNoticeShow = false

  this.postMaker = function(name){
    $http.post('http://localhost:3000/makers', {name: name}).
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
  this.loginMaker = function(){
    console.log(self.makerName);
    $http.get('http://localhost:3000/session/' + self.makerName)
    .success(function(data){
      console.log(data)
      self.currentUser = data;
    })
    ;
  };
}]);