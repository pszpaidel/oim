const webpack = require('webpack');

module.exports = {
  entry: './app/index.jsx',
  output: {
    path: './dist/js/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'inline-source-map',
  plugins: [],
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
};