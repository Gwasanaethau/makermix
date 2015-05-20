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
      standard:{
        configFile:'karma.conf.js',
        singleRun:true,
        browsers:['PhantomJS'],
        coverageReporter:{
          type:'html',
          dir:'coverage'
        }
      },
      travis:{
        configFile:'karma.conf.js',
        singleRun:true,
        browsers:['PhantomJS'],
        coverageReporter:{
          type:'lcovonly',
          dir:'coverage'
        }
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
      },
      coverage:{
        options:{
          script:'instrument/server.js'
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


    instrument:{
      files:[
        'public/js/*.js',
        'test/e2e/*.js',
        'server.js'
      ],
      options:{
        lazy:true,
        basePath:'instrument'
      }
    },


    copy:{
      coverage:{
        files:[{
          expand:true,
          dest:'instrument/',
          src:[
            'index.html',
            'public/bower_components/**/*'
          ]
        }]
      }
    },


    protractor_coverage:{
      options:{
        keepAlive:true,
        coverageDir:'coverage/e2e',
        args:{
          baseUrl:'http://localhost:3000',
          specs:[
            'instrument/test/e2e/*Feature.js'
          ],
          capabilities:{
            'browserName':'phantomjs',
            'phantomjs.binary.path':require('phantomjs').path,
            'phantomjs.ghostdriver.cli.args':['--loglevel=DEBUG']
          }
        }
      },
      all:{
        options:{
          configFile:'instrument/test/e2e/conf.js'
        }
      }
    },


    makeReport:{
      src:'coverage/e2e/*.json',
      options:{
        type:'lcov',
        dir:'coverage/e2e',
        print:'detail'
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
  grunt.loadNpmTasks('grunt-istanbul');
  grunt.loadNpmTasks('grunt-protractor-coverage');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default',[
    'ngconstant:testing',
    'jshint',
    'karma:standard',
    'exec',
    'express:dev',
    'apimocker',
    'protractor_webdriver',
    'protractor:standard'
  ]);

  grunt.registerTask('travis',[
    'ngconstant:testing',
    'jshint',
    'karma:travis',
    'exec',
    'express:dev',
    'apimocker',
    'protractor_webdriver',
    'protractor:travis',
    'express:dev:stop',
    'instrument',
    'copy',
    'express:coverage',
    'protractor_webdriver',
    'protractor_coverage',
    'makeReport',
    'coveralls'
  ]);

  grunt.registerTask('testing',['ngconstant:testing']);
  grunt.registerTask('deployment',['ngconstant:production']);
};
