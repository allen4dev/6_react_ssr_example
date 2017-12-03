const { resolve } = require('path');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base');

const config = {
  entry: resolve('src', 'client', 'index.jsx'),
  output: {
    filename: 'bundle.js',
    path: resolve('public'),
  },
  target: 'web',
};

module.exports = merge(baseConfig, config);
