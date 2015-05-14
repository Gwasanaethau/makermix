var mock = require('protractor-http-mock');
describe('Makers Pairing Finder', function() {

  var addMakerBox = element(by.model('addMakerCtrl.addMaker'));
  var addMakerButton = element(by.className('btn'));

  afterEach(function(){
    mock.teardown();
  });

  it('has a title', function() {
    browser.get('http://localhost:3000');
    expect(browser.getTitle()).toEqual('Makers Pairing Finder');
  });

  it('can add a Maker', function() {
    mock([{
      request: {
        path: '/makers',
        method: 'POST'
      },
      response: {
        data: {
          id: 1,
          name: 'Joe'
        }
      }
    }]);
    browser.get('http://localhost:3000');
    addMakerBox.sendKeys('Joe');
    addMakerButton.click();
    expect(element(by.css('.notice'))).toMatch('Joe added');
  });
});
