const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        // Note: The "marketing" before the '@' matches the name configured in the Marketing webpack.dev.js ModuleFederationPlugin
        marketing: 'marketing@http://localhost:8081/remoteEntry.js',
      },
      // Note: Shortcut to allow Webpack to handle the shared modules by importing all dependencies from package.json.
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
