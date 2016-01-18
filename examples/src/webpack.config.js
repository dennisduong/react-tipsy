var path = require('path');
var webpack = require('webpack');

var entry = {};

if (process.env.NODE_ENV === 'production') {
  entry["example.min"] = './index.js';
} else {
  entry["example"] = './index.js';
}

module.exports = {
  entry: entry,

  // options affecting the output.
  output: {
    path: path.resolve(__dirname),
    filename: '../[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react',
            'stage-0'
          ],
          plugins: [
            'add-module-exports',
            'syntax-object-rest-spread'
          ]
        }
      }
    ]
  },

  resolve: {
    alias: {
      // you can now require('file') instead of require('file.coffee')
      extensions: ['', '.js']
    }
  }
};