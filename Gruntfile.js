module.exports = function(grunt){
  grunt.initConfig({
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
    },
    jshint:{
      all:[
        'Gruntfile.js',
        'test/**/*.js',
        'public/js/*.js',
        'server.js',
        'karma.conf.js'
      ]
    },
    karma:{
      unit:{
        configFile:'karma.conf.js',
        singleRun:true,
        browsers:['PhantomJS'],
        coverageReporter:{
          type:'lcovonly',
          dir:'coverage'
        },
      }
    },
    exec:{
      updateWebdriver:{
        command:'node_modules/webdriver-manager/bin/webdriver-manager update --standalone'
      }
    },
    express:{
      dev:{
        options:{
          script:'server.js'
        }
      }
    },
    apimocker:{
      options:{
        configFile:'apimocker-grunt.json'
      }
    },
    protractor_webdriver:{
      options:{
        path:'node_modules/webdriver-manager/bin/',
        command:'webdriver-manager start'
      },
      all:{
        options:{}
      }
    },
    protractor:{
      options:{
        configFile:'test/e2e/conf.js',
        args:{}
      },
      standard:{
        options:{
          args:{
            capabilities:{
              'browserName':'chrome'
            }
          }
        }
      },
      travis:{
        options:{
          args:{
            capabilities:{
              'browserName':'phantomjs',
              'phantomjs.binary.path':require('phantomjs').path,
              'phantomjs.ghostdriver.cli.args':['--loglevel=DEBUG']
            }
          }
        }
      }
    },
    coveralls:{
      options:{
        force:true
      },
      all:{
        src:'coverage/**/lcov.info'
      }
    }
  });
  grunt.loadNpmTasks('grunt-ng-constant');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-apimocker');
  grunt.loadNpmTasks('grunt-protractor-webdriver');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-coveralls');

  grunt.registerTask('default',[
    'ngconstant:testing',
    'jshint',
    'karma',
    'exec',
    'express',
    'apimocker',
    'protractor_webdriver',
    'protractor:standard'
  ]);

  grunt.registerTask('travis',[
    'ngconstant:testing',
    'jshint',
    'karma',
    'exec',
    'express',
    'apimocker',
    'protractor_webdriver',
    'protractor:travis',
    'coveralls'
  ]);

  grunt.registerTask('deployment', ['ngconstant:production']);
};
