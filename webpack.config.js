const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { name } = require('./package.json')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'react-hot-loader/patch',
    './src',
    './src/shorthand',
  ],

  plugins: [
    new HtmlWebpackPlugin({ title: name, template: 'src/index.ejs' }),
    new ExtractTextPlugin('assets/bundle.css'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/bundle.js',
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.scss'],
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: [
          path.resolve('./src'),
        ],
      }
    ],
  },
}
