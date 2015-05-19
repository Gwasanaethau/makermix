module.exports = function(grunt){
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    ngconstant:{
      options:{
        name:'config',
        dest:'public/js/config.js'
      },
      testing:{
        constants:{
          ENV:{
            name:'testing',
            apiLink:'http://localhost:8888/'
          }
        }
      },
      production:{
        constants:{
          ENV:{
            name:'production',
            apiLink:'https://ronin-rearend.herokuapp.com/'
          }
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-ng-constant');
  grunt.registerTask('default', ['ngconstant:testing']);
  grunt.registerTask('deployment', ['ngconstant:production']);
};
