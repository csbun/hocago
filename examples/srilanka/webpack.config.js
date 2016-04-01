var path = require('path');
var webpack = require('webpack');

var EXAMPLE_DIR = __dirname;

module.exports = {
  entry: [
    './index.js',
  ],
  output: {
    filename: 'bundle.js',
  },
  plugins: [
      // new webpack.
  ],
  module: {
    loaders: [{
      loader: 'babel',
      query: {
        presets: ['es2015'],
      },
      test: /\.js$/,
      exclude: [
        path.resolve(EXAMPLE_DIR, 'node_modules'),
        path.resolve(EXAMPLE_DIR, '../../node_modules'),
      ],
    }]
  },
  devServer: {
    hot: true,
  }
};
