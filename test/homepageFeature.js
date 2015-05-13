var chai = require("chai");
var expect = chai.expect;

describe("Homepage", function(){

  it("displays hello world", function(){
    browser.url("http://localhost:3000");
    browser.getText("body", function(err, text){
      expect(text).to.equal("Hello world");
    }).call(done);
  });
});
