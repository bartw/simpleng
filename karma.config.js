//var webpackConfig = require('./webpack.config.js');
//webpackConfig.entry = {};

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    autoWatchBatchDelay: 300,

    files: [
      './bundle.js',
      './test/**/*.js'],

    preprocessors: {
      "./test/**/*.spec.js": ["webpack"]
    },
    
    webpack: {},

    webpackMiddleware: {
      noInfo: true
    }
  });
}