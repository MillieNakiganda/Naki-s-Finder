const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

process.env.NODE_ENV = 'development';

module.exports = {
  mode: 'development',
  entry: './src/index',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    port: 4000,
    https: false,
  },
  stats: {
    preset: 'minimal',
    errorDetails: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
    }),
  ],
};
