const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CircularDependencies = require('circular-dependency-plugin');

const srcPath = path.join(__dirname, './lib');
const entryJS = path.join(__dirname, './lib/index');
const entryCSS = path.join(__dirname, './lib/components/index');

module.exports = {
  entry: {
    app: [entryJS, entryCSS],
    vendor: [
      "antd",
      "axios",
      "clipboard-js",
      "d3",
      "firebase",
      "lodash",
      "moment",
      "react",
      "react-dom",
      "react-redux",
      "redux",
      "redux-thunk",
      'reselect'
    ],
  },
  output: {
    path: 'dist/dev',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.less']
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js")
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
          warnings: false,
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