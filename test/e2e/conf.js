exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['makersPairingFeature.js'],
  onPrepare: function(){
    require('protractor-http-mock').config = {
        rootDirectory: process.cwd(),
        protractorConfig: 'test/e2e/conf.js' // default value: 'protractor.conf'
    };
}
};
