const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const srcPath = path.join(__dirname, './lib');
const entryJS = path.join(__dirname, './lib/index.jsx');

module.exports = {
  entry: {
    app: entryJS,
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
      'reselect',
      'immutable'
    ],
  },
  output: {
    path: 'dist/prod/public',
    filename: 'bundle.min.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin("bundle.min.css"),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false
      },
      'screw-ie8': true
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.min.js")
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
      },
      {
        loader: ExtractTextPlugin.extract(["css", "postcss", "less"]),
        test: /\.less$/,
        include: [srcPath],
      },
    ]
  },
  postcss: function () {
    return [
      require('autoprefixer')(),
      require('cssnano')()
    ];
  }
};