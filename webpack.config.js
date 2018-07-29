const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: {
    main: './src/main.js'
  },
  mode: process.env.NODE_ENV,
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      }, {
        test: /\.css$/,
        use: 'css-loader'
      }, {
        test: /\.(png|jpg|svg)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'sortVisible',
      filename: 'index.html',
      template: './index.html'
    })
  ],
  devServer: {
    compress: true,
    port: 9000
  }
}

module.exports = config
