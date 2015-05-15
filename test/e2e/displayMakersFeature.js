describe('Display Makers', function() {
  // var addMakerBox = element(by.model('addMakerCtrl.addMaker'));
  // var addMakerButton = element(by.className('btn'));
  var showMakersButton = element(by.id('show_btn'));

  // function addUser() {
  //   addMakerBox.sendKeys('Joe');
  //   addMakerButton.click();
  // }

  it('can display a list of Makers', function() {
    browser.get('http://localhost:3000');
    browser.waitForAngular();
    showMakersButton.click();
    expect(element(by.className('maker')).getText()).toMatch('Joe');
  });
});
