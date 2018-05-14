const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const srcPath = path.join(__dirname, './lib');
const entryJS = path.join(__dirname, './lib/index');
const entryCSS = path.join(__dirname, './lib/components/index');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  JS: path.resolve(__dirname, 'lib'),
};

module.exports = {
  entry: {
    app: [entryJS, entryCSS],
  },
  output: {
    path: paths.DIST+'/dev',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [srcPath],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        },
      },
      {
        test: /\.less$/,
        include: [srcPath],
        use: ExtractTextPlugin.extract(
          {
            use: ['css-loader', 'less-loader']
          })
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin(
      { filename: 'bundle.css' }
    ),
  ]
};
