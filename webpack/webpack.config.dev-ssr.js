const { publicPath, assetsPath, commonLoaders } = require('./common.config');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  name: 'SSR',
  context: path.join(__dirname, '..', 'app'),
  entry: './SSR.js',  
  output: {
    path: assetsPath,
    filename: 'SSR.js',
    libraryTarget: 'commonjs2',
    publicPath,
  },
  target: 'node',
  externals: nodeExternals(),  
  module: {
    loaders: commonLoaders.concat([
      {
        test: /\.scss$/,
        // loaders: 'style!css!postcss!sass'
        loaders: ['style', 'css', 'sass']
        // loaders: ['style', 'css']
        // loader: 'style!css/locals?module&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass'
      },
      {
        test: /\.css/,
        // loaders: 'style!css!postcss!sass'
        // loaders: ['style', 'css', 'sass']
        // loaders: ['style', 'css']
        loader: 'style!css/locals?module&localIdentName=[name]__[local]___[hash:base64:5]'
      },
    ]),
  },
};
