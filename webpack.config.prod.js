const config = require('./webpack.config');
const webpack = require('webpack');

//remove dev tools for production config
config.devtool = null;

//add optimize plugins for production
config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false,
      screw_ie8: true
    }
  })
);



module.exports = config;


