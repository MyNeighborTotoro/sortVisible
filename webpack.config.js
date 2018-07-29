const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        main: "./src/main.js"
    },
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },{
                test: /\.css$/,
                use: 'css-loader'
            },{
                test: /\.(png|jpg|svg)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'sortVisible',
            filename: 'main.html',
            template: './index.html'
        })
    ]
}

module.exports = config;