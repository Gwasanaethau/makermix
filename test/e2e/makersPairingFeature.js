describe('Makers Pairing Finder', function() {
  var addMakerBox = element(by.model(addCtrl.addMaker));
  var addMakerButton = element(by.className('btn'));

  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Makers Pairing Finder');
  });

  it('can add a Maker', function() {
    addMakerBox.sendKeys('Joe');
    addMakerButton.click();
    expect(element(by.css('.notice'))).toMatch('Joe added');
  });
});
