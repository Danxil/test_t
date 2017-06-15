const webpack = require('webpack');
const webpackConfigBase = require('./webpack.config.base');

const config = Object.assign({}, webpackConfigBase, {
  devtool: 'source-map',
  plugins: webpackConfigBase.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ]),
});

module.exports = config;
