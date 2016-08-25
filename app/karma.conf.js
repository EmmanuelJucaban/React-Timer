var webpackConfig = require('./webpack.condig.js')

module.exports = function(config){
  config.set({
    browser: ["Chrome"],
    singleRun: true,
    frameworks: ['Mocha'],
    files: ['app/tests/**/*.test.jsx'],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
