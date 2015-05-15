describe('Makers Pairing Finder', function() {

  var addMakerBox = element(by.model('addMakerCtrl.addMaker'));
  var addMakerButton = element(by.className('btn'));

  it('has a title', function() {
    browser.get('http://localhost:3000');
    expect(browser.getTitle()).toEqual('Makers Pairing Finder');
  });

  it('can add a Maker', function() {

    browser.get('http://localhost:3000');
    browser.waitForAngular();
    addMakerBox.sendKeys('Joe');
    addMakerButton.click();
    expect(element(by.css('.notice')).getText()).toMatch('Joe added');
  });
});
