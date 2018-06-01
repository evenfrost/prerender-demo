const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  entry: path.resolve(__dirname, 'src/index.jsx'),
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // template: '!!prerender-loader?string!src/index.html',
      template: './src/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
