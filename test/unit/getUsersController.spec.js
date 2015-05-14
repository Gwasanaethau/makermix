describe('GetMakersController',function(){
  beforeEach(module('MakerMix'));
  var ctrl;
  beforeEach(inject(function($controller){
    ctrl = $controller('GetMakersController')
  }));
  var httpBackend;
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
    ctrl.getMakers();
    expect(ctrl.makers[0].name).toEq("Joe");
  });
});