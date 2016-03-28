var path = require('path');
var webpack = require('webpack');
var jqueryPlugin = new webpack.ProvidePlugin({
  $: "jquery",
  jQuery: "jquery",
  "window.jQuery": "jquery"
})
var config = {
  context: path.resolve(__dirname, "src"),
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    path.resolve(__dirname, 'src', 'index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { 
        test: /\.css$/, 
        loaders: ["style", "css" ]
      },
      {
        test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
        loaders: ['react-hot','babel'], // The module to load. "babel" is short for "babel-loader"
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      { test: /vendor\/.+\.(jsx|js)$/,
        loader: 'imports?jQuery=jquery,$=jquery,this=>window'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), jqueryPlugin
  ]
};

module.exports = config;