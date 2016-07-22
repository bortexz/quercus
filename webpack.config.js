'use strict'
let CopyWebpackPlugin = require('copy-webpack-plugin')
let path = require('path')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './public/main.js',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build')
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: './public/index.html',
        to: '../build/index.html'
      }
    ])
  ],
  module: {
    loaders: [
      { test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
}
