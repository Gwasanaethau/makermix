describe('GetMakersController',function(){
  beforeEach(module('MakerMix'));
  var ctrl;
  beforeEach(inject(function($controller){
    ctrl = $controller('GetMakersController');
  }));
  var httpBackend;
  beforeEach(inject(function($httpBackend){
    httpBackend = $httpBackend;
    httpBackend
      .when('GET', "http://localhost:8888/makers")
      .respond(
        { makers: [ { _id: 1, name: "Joe" },
        { _id: 2, name: "Mark" } ] }
      );
  }));
  it('returns users',function(){
    ctrl.getMakers();
    httpBackend.flush();
    expect(ctrl.makers[0].name).toEqual("Joe");
  });
});
