var fs = require('fs');
var path = require('path');

var webpack = require('webpack');

var babelSettings = JSON.parse(fs.readFileSync('.babelrc'));
var config = {

  entry: path.resolve(__dirname, 'src/Tipsy.js'),

  // options affecting the output.
  output: {
    // Absolute path to output our bundle file. We build into Flask default static dir.
    path: path.resolve(__dirname, 'dist'),

    // The filename of the entry chunk as relative path inside the `output.path` dir
    filename: process.env.NODE_ENV === 'production' ? 'react-tipsy.min.js' : 'react-tipsy.js',

    // name of the global var: "Tipsy"
    library: 'Tipsy',

    // export itself to a global var
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src')
        ],
        query: babelSettings
      }
    ]
  },

  externals: {

    "react": {
      "amd": "react",
      "commonjs": "react",
      "commonjs2": "react",
      "root": "React"
    },

    "react-dom": {
      "amd": "react-dom",
      "commonjs": "react-dom",
      "commonjs2": "react-dom",
      "root": "ReactDOM"
    }

  },

  resolve: {
    alias: {
      // you can now require('file') instead of require('file.coffee')
      extensions: ['', '.js']
    }
  }
};

module.exports = config;