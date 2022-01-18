const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry : "./src/index.js",
    mode: 'development',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        //Trabajar mejor con rutas
        publicPath : '/'
    },
    resolve : {
        extensions: ['.js','.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                //Test para extenciones sass
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    "svg-url-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        //Trabajar con rutas 
        historyApiFallback: true,

        //Configuracion soportada del webpack actual

        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
        open: true,
    }
}