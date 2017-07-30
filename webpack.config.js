const
  path = require('path'),
  webpack = require('webpack');

module.exports = {
  entry: {
    app: './app/assets/scripts/app.js',
    vendor: './app/assets/scripts/vendor.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    })
  ],
  output: {
    path: path.join(__dirname, 'app', 'temp', 'scripts'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
    ]
  }
};