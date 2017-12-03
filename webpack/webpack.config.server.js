const { resolve } = require('path');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base');

const config = {
  entry: resolve('index.js'),
  output: {
    filename: 'index.js',
    path: resolve('build'),
  },
  target: 'node',
};

module.exports = merge(baseConfig, config);
