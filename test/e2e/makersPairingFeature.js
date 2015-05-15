describe('Makers Pairing Finder', function() {

  var addMakerBox = element(by.model('addMakerCtrl.addMaker'));
  var addMakerButton = element(by.className('btn-add'));
  var loginMakerBox = element(by.model('loginMakerCtrl.makerName'));
  var loginMakerButton = element(by.className('btn-login'));

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

  it('can log in a maker', function(){
    loginMakerBox.sendKeys('Rob');
    loginMakerButton.click();
    expect(element(by.css('.welcome')).getText()).toMatch('Welcome, Rob');
  });
});
