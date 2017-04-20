// Karma configuration
// Generated on Wed Apr 19 2017 14:32:07 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'angular-cli'],

    // plugins
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-remap-istanbul"),
      require("karma-mocha-reporter"),
      require("angular-cli/plugins/karma")
    ],

    // list of files / patterns to load in the browser
    files: [
      {
        /*// Detailed pattern to include a file. Similarly other options can be used
        { pattern: 'lib/angular.js', watched: false },
        // Prefer to have watched false for library files. No need to watch them for changes

        // simple pattern to load the needed testfiles
        // equal to {pattern: 'test/unit/*.spec.js', watched: true, served: true, included: true}
        'test/unit/*.spec.js',

        // this file gets served but will be ignored by the watcher
        // note if html2js preprocessor is active, reference as `window.__html__['compiled/index.html']`
        {pattern: 'compiled/index.html', watched: false},

        // this file only gets watched and is otherwise ignored
        {pattern: 'app/index.html', included: false, served: false},

        // this file will be served on demand from disk and will be ignored by the watcher
        {pattern: 'compiled/app.js.map', included: false, served: true, watched: false, nocache: true}*/ 

        // pattern: '.src/test.ts', watched: false,
        pattern: 'src/test/*.*', watched: true 
      }
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './src/test/*.ts': ['angular-cli']
    },

    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    
    remapIstanbulReporter: {
      reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov'
      }
    },

    angularCli: {
      config: './angular-cli.json',
      environment: 'dev'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: config.angularCli && config.angularCli.codeCoverage
      ? ['mocha', 'karma-remap-istanbul']
      : ['mocha'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
