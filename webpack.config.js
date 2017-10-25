var webpack   = require('webpack');
var path 	    = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/dist/js');
var APP_DIR   = path.resolve(__dirname, 'public/src/js/');

var config = {
  entry: APP_DIR + '/index.jsx',
 
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
 
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },
  
  devtool: 'inline-source-map',

  devServer: {
    inline : true,
    historyApiFallback: true,
    contentBase: './'
  }

};

module.exports = config;