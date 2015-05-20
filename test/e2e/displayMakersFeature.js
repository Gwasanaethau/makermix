describe('Display Makers', function() {
  var showMakersButton = element(by.id('show_btn'));

  it('can display a list of Makers', function() {
    browser.get('http://localhost:3000');
    browser.waitForAngular();
    showMakersButton.click();
    expect(element.all(by.className('maker')).get(0).getText()).toMatch('Joe');
  });
});
