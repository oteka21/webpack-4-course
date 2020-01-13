const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, 'src/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader']
      }
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "../index.html"),
      title: 'React'
    })
  ],
  devServer: {
    open: true
  }
}