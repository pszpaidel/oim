const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const srcPath = path.join(__dirname, './lib');
const entryJS = path.join(__dirname, './lib/index.jsx');

module.exports = {
  entry: [entryJS],
  output: {
    path: 'dist',
    filename: 'bundle.min.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new LiveReloadPlugin({appendScriptTag: true})
  ],
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.(js|jsx)$/,
        include: [srcPath],
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        loader: 'eslint',
        test: /\.(js|jsx)$/,
        include: [srcPath],
        options: {
          fix: true,
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