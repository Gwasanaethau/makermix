var chai = require('chai');
var expect = chai.expect;

describe('Going to the Homepage', function () {

  it('Shows the Capture homepage', function(done) {
    browser
      .url('http://localhost:3000')
      .getText('body', function(err, text) {
        expect(text).to.equal('Hello world')
      })
      .call(done);
    });

});
