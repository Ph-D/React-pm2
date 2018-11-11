const path = require('path');

const config = {
  entry: ['babel-polyfill','./lib/components/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/,  
        use: {
          loader: 'babel-loader'
        } 
      }
    ]
  }
};

module.exports = config;