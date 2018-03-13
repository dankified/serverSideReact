const path = require("path");
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Imform webpack that we are building a bundle for nodeJS, rather than for the browser
  target: "node",

  //Tell webpack the root file of our server application
  entry: "./src/index.js",

  //Tell webpack the destination of our bundled file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  externals: [webpackNodeExternals()]

};

module.exports = merge(baseConfig, config);