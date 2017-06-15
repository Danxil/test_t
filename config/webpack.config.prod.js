const webpack = require('webpack');
const webpackConfigBase = require('./webpack.config.base');
const pjson = require('../package.json');

const config = Object.assign({}, webpackConfigBase, {
  plugins: webpackConfigBase.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        VERSION: JSON.stringify(`roamt-fe-${pjson.version}-b${process.env.BUILD_NUMBER}-${process.env.JOB_NAME && process.env.JOB_NAME.indexOf('stable') !== -1 ? 'stable' : 'dev'}`),
      },
    }),
  ]),
});

module.exports = config;
