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
          presets: ['es2015', 'react'],
          plugins: [ 'transform-runtime' ]
        }
      },
      {
        test: /\.(scss|sass)$/,
        loaders: ['style', 'css', 'sass']
      }
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
