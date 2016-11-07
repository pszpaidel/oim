const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './lib',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'eval',
  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ],
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.js*/,
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.less/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(["css", "postcss", "less"])
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