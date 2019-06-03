var webpack = require('./node_modules/webpack');
var ExtractTextPlugin = require('./node_modules/extract-text-webpack-plugin');
var autoprefixer = require('./node_modules/autoprefixer');

module.exports = {
  entry: './src/js/aos.js',
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: 'aos.js',
    library: 'AOS',
    libraryTarget: 'umd',
  },
  devServer: {
    contentBase: 'demo/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!sass-loader!postcss-loader")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('aos.css'),
    new webpack.optimize.UglifyJsPlugin()
  ]
}