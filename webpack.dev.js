const merge = require('webpack-merge');
const config = require('./webpack.config.js');
const WebpackBar = require('webpackbar');

module.exports = merge(config, {
  mode: 'development',
  devServer: {
    clientLogLevel: 'error',
    contentBase: './dist',
    hot: true,
    noInfo: true,
    stats: 'errors-only',
    after: function (app, server) {
      console.log(
        `\u001b[1m\u001b[34mFloof\u001b[39m\u001b[22m Running on \u001b[1m\u001b[34mhttp://${server.options.host}:${server.options.port}\u001b[39m\u001b[22m`,
      );
    },
  },
  plugins: [
    new WebpackBar({
      name: 'floof',
    }),
  ],
});
