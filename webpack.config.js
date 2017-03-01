const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const CircularDependencies = require('circular-dependency-plugin');

const srcPath = path.join(__dirname, './lib');
const entryJS = path.join(__dirname, './lib/index');

module.exports = {
  entry: [entryJS],
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'inline-source-map',
  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new LiveReloadPlugin({appendScriptTag: true}),
    new CircularDependencies({failOnError: true})
  ],
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.(js|jsx)$/,
        include: [srcPath],
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        loader: 'eslint',
        test: /\.(js|jsx)$/,
        include: [srcPath],
        query: {
          fix: true
        }
      },
      {
        loader: ExtractTextPlugin.extract(["css", "less"]),
        test: /\.less$/,
        include: [srcPath],
      },
    ]
  },
};