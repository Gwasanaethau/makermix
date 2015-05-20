describe('AddMakerController', function() {
  beforeEach(module('MakerMix'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('AddMakerController');
  }));

  var httpBackend;

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend;
    httpBackend
      .when('POST', 'http://localhost:8888/makers')
      .respond({ _id: 1, name: "Joe" });
  }));

  it('adds a Maker', function() {
    ctrl.addMaker = 'Joe';
    ctrl.postMaker();
    httpBackend.flush();
    expect(ctrl.addedMaker).toEqual('Joe');
  });
});
