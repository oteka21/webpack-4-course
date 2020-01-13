const path = require('path')
const MiniCSSExtractWebpackPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

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
        test: /\.css$/,
        use: [
          // { loader: MiniCSSExtractWebpackPlugin.loader },
          'style-loader',
          'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new MiniCSSExtractWebpackPlugin({
    //   filename: 'css/[name].css'
    // }),
    new HTMLWebpackPlugin({
      title: 'dev server'
    })
  ],
  devServer: {
    hot: true,
    open: true
  }
}