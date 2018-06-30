const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'www'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ]
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html"
        }),
        new webpack.DefinePlugin({
            'PRODUCTION': process.env.NODE_ENV === 'true'
        })
    ]
};
