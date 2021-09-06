const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const {resolve} = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: "production",
    entry: './js/genModule/main.js',
    output: {
        path: resolve(__dirname, 'prod'),
        filename: "main.[contenthash].js"
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
        new BundleAnalyzerPlugin(),
        new CleanWebpackPlugin(),
    ],
}