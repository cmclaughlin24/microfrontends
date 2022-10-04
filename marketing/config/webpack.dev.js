const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      // Note: Used to declare a global variable in the browser upon being loaded.
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap',
      },
      // Note: Shortcut to allow Webpack to handle the shared modules by importing all dependencies from package.json.
      shared: packageJson.dependencies,    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
