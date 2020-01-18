const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, 'src/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
    // publicPath: '/'
  },
  mode: 'production',
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
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 90000
          }
        },

      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: require('html-webpack-template'),
      inject: false,
      appMountId: 'container',
      title: 'React',
      scripts: ['js/modules.js']
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json'),
    })
  ],
  devServer: {
    open: true
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}