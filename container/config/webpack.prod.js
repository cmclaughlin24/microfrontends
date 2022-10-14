const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  // Note: Setting mode to production causes webpack to behave differently (optimize JavaScript files, minify them, etc.)
  mode: 'production',
  output: {
    // Note: Insures webpack outputs files with that start with the name of the file, a hash of the contents of file (solves caching issues)
    filename: '[name].[contenthash].js',
    // Note: Used by webpack that tries to refer to a file that has been built by webpack (e.g. HtmlPlugin tries to refer to js file, it will prepend the publicPath to all of them)
    publicPath: '/container/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
