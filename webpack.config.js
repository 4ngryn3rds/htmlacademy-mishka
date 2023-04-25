const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: {
        index: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][hash].js',
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
    ],
    devServer: {
        host: 'localhost',
        port: 8080,
        compress: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.svg$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                      maxSize: 8 * 1024,
                    },
                  },
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                type: 'asset',
            },
        ],
    },
}