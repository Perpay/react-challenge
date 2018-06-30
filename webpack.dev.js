const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.scss|.css$/,
                // exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            modules: true,
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 8080,
        historyApiFallback: true,
        inline: true,
        hot: true
    }
});
