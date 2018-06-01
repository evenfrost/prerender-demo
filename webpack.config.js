const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Critters = require('critters-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  entry: path.resolve(__dirname, 'src/index.jsx'),
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    }, {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
      ],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '!!prerender-loader?string!src/index.html',
    }),
    new MiniCssExtractPlugin('main.css'),
    new Critters(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
