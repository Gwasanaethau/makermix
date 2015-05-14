describe('GetUsersController',function(){
  beforeEach(module('GetUsersController'));
  var ctrl;
  beforeEach(inject(function($controller){
    ctrl = $controller('GetUsersController')
  }));
  var httBackend;
  beforeEach(inject(function($httpBackend){
    httpBackend = $httpBackend;
    httpBackend
      .when('GET', "http://localhost:3000/makers")
      .respond(
        { makers: [ { id: 1, name: "Joe" },
        { id: 2, name: "Mark" } ] }
      );
  }));
  it('returns users',function(){
    ctrl.getUsers();
    expect(ctrl.users.makers[0].name).toEq("Joe");
  });
});