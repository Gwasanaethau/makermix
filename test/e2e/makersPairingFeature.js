describe('Makers Pairing Finder', function() {
  var addMakerBox = element(by.model(addCtrl.newMaker));
  var addMakerButton = element(by.className('btn'));

  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Makers Pairing Finder');
  });

  it('can add a Maker', function() {
    expect(element(by.css('.notice'))).toMatch('Maker added');
  });
});
