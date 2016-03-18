var webpack = require('webpack')
var path = require('path')
var env = process.env.NODE_ENV || 'development'
var minify = process.env.MINIFY || false

console.log('================' + env)

var standardLoader = {
  test: /\.js$/,
  loaders: ['standard'],
  include: path.resolve('./source/')
}

var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
  sourceMap: true
})

module.exports = {
  devtool: 'sourcemap',

  entry: './source/index.js',

  output: {
    filename: minify ? 'index.min.js' : 'index.js',
    path: path.resolve('./build')
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"' + env + '"'
      }
    })
  ].concat(minify ? [uglifyPlugin] : []),

  module: {
    preLoaders: env === 'development' ? [
      standardLoader
    ] : [],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel?plugins=object-assign'],
        include: path.resolve('./source')
      }
    ]
  },

  resolve: {
    extensions: ['', '.js']
  },

  stats: {
    colors: true
  },

  standard: {
    global: [],
    parser: 'babel-eslint'
  }
}
