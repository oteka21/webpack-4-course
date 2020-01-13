const path = require('path')
const MiniCSSExtractWebpackPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

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
        use: [{
          loader: MiniCSSExtractWebpackPlugin.loader
        },'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCSSExtractWebpackPlugin({
      filename: 'css/[name].css'
    }),
    new HTMLWebpackPlugin({
      title: 'plugins'
    })
  ]
}