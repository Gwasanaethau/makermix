describe('Makers Pairing Finder', function() {

  var addMakerBox = element(by.model('addMakerCtrl.addMaker'));
  var addMakerButton = element(by.className('btn'));

  beforeEach(function(){
    browser.get('http://localhost:3000');
    browser.waitForAngular();
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Makers Pairing Finder');
  });

  it('can add a Maker', function() {
    addMakerBox.sendKeys('Joe');
    addMakerButton.click();
    expect(element(by.css('.notice')).getText()).toMatch('Joe added');
  });

  it('removes Maker Added Message on click', function(){
    addMakerBox.sendKeys('Joe');
    addMakerButton.click();
    addMakerBox.click();
    expect(element(by.css('.notice')).isDisplayed()).toBeFalsy();
  });
});
