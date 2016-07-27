'use strict'
let CopyWebpackPlugin = require('copy-webpack-plugin')
let path = require('path')
let electron = require('electron-connect').server.create()
let WebpackOnBuildPlugin = require('on-build-webpack')

var ENV = process.env.npm_lifecycle_event
var isWatching = ENV === 'start-watch'

let config = {
  context: path.join(__dirname, 'src'),
  entry: './resources/main.jsx',
  devtool: 'source-map',
  target: 'electron',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build')
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: './resources/index.html',
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
          cacheDirectory: true,
          presets: ['es2015', 'react'],
          plugins: [ 'transform-runtime' ]
        }
      },
      {
        test: /\.(scss|sass)$/,
        loaders: ['style', 'css', 'sass']
      },
      // fonts etc..
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml'},
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/font-woff'},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'}
    ]
  }
}

if (isWatching) {
  config.plugins.push(
    new WebpackOnBuildPlugin(function (stats) {
      if (!config.reload) {
        config.reload = true
        electron.start()
      } else {
        electron.reload()
      }
    })
  )
}

module.exports = config
