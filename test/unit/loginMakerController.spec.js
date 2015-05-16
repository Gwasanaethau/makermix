describe('LoginMakerController',function(){
  beforeEach(module('MakerMix'));
  var ctrl;
  beforeEach(inject(function($controller){
    ctrl = $controller('LoginMakerController');
  }));
  var httpBackend;
  beforeEach(inject(function($httpBackend){
    httpBackend = $httpBackend;
    httpBackend
      .when('GET', "http://localhost:8888/makers/session/Rob")
      .respond(
        { _id: 1, name: "Rob" }
      );
  }));
  it('returns a user given a name',function(){
    ctrl.makerName = 'Rob';
    ctrl.loginMaker();
    httpBackend.flush();
    expect(ctrl.currentUser.name).toEqual("Rob");
    expect(ctrl.currentUser._id).toEqual(1);
  });
});
