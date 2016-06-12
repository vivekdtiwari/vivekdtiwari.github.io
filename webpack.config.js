var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template : __dirname + '/index.html',
  filename : 'index.html',
  inject : 'body'
})

var webpack = require('webpack')
var ProdPlugin = new webpack.DefinePlugin({
  "process.env": {
     NODE_ENV: JSON.stringify("production")
   }
})
module.exports = {
  entry : [
    './app/index.js'
  ],
  output : {
    path: __dirname + '/',
    filename: "index_bundle.js"
  },
  module: {
    loaders:[
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [HtmlWebpackPluginConfig,ProdPlugin]
}
