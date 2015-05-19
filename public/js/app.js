var app = angular.module('MakerMix', ['ngResource', 'config']);

app.controller('GetMakersController', ['$http', 'ENV', function($http, ENV){
  var self = this;
  self.getMakers = function(){
    $http.get(ENV.apiLink + 'makers')
      .success(function(data){
        self.makers = data.makers;
    });
  };
}]);

app.controller('AddMakerController', ['$http', 'ENV', function($http, ENV) {

  var self = this;
  this.addedMaker = "";
  this.isNoticeShow = false;

  this.postMaker = function(){
    $http.post(ENV.apiLink + 'makers', {name: name})
      .success(function(data, status, headers, config){
        self.addedMaker = data.name;
        self.isNoticeShow = true;
      });
  };

  this.hideNotice = function(){
    self.isNoticeShow = false;
  };
}]);

app.controller('LoginMakerController', ['$http', 'ENV', function($http, ENV){
  var self = this;
  this.currentUser = {};
  this.loginMaker = function(){
    $http.get(ENV.apiLink + 'makers/session/' + self.makerName)
    .success(function(data){
      self.currentUser = data;
    });
  };
}]);
