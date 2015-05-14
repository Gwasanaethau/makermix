module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webdriver: {
      helloWorld: {
        tests: "test/server/*"
      },
      options: {
        desiredCapabilities: {
          browserName: "chrome"
        }
      },
    }
  });
  grunt.loadNpmTasks("grunt-webdriver");
  grunt.registerTask("default", ["webdriver"]);
};
