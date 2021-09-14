const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const {resolve} = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: "production",
    entry: './js/genModule/main.js',
    output: {
        path: resolve(__dirname, 'prod'),
        filename: "main.[contenthash].js"
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/'),
        },
        host: 'localhost',
        port: 5000,
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.mp3$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                },
            }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({template: resolve(__dirname, 'index.html'), filename: '[name].[contenthash].html',}),
        new MiniCssExtractPlugin({linkType:'text/css', filename: '[name].[contenthash].css'}),
        new CleanWebpackPlugin(),
    ],
}