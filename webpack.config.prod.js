const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackBundleAnalyzer = require('webpack-bundle-analyzer');

process.env.NODE_ENV = 'production';

module.exports = {
  mode: 'production',
  target: 'web',
  devtool: 'source-map',
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    // Display bundle stats
    new webpackBundleAnalyzer.BundleAnalyzerPlugin({ analyzerMode: 'static' }),

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),

    new HtmlWebpackPlugin({
      template: 'public/index.html',
      minify: {
        // see https://github.com/kangax/html-minifier#options-quick-reference
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-react'] },
        }, {
          loader: 'eslint-loader',
        }],
      },
    ],
  },
};
