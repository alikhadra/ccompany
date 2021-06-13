var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '', 
        filename: 'main.js'
    },
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        port: 1401,
        overlay: true,
        writeToDisk: true,
        open: true,
    },
    
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize:true,
                        }
                    }
                ]
            },

            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: "images",
                        }
                    }
                ]
            },

            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: "fonts",
                            esModule: false,
                        }
                    }
                ]
            },

            {
                test: require.resolve('jquery'),
                loader: 'expose-loader',
                options: {
                    exposes: ['$', 'jquery', 'jQuery'],

                }
            },


        ]
       
    },
  
    
    plugins: [

    

        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),

        new HtmlWebpackPlugin({
            filename: "product1.html",
            template: "./src/product1.html",
        }),
        new HtmlWebpackPlugin({
            filename: "distributors.html",
            template: "./src/distributors.html",
        }),
        new HtmlWebpackPlugin({
            filename: "about.html",
            template: "./src/about.html",
        }),
        new HtmlWebpackPlugin({
            filename: "contact.html",
            template: "./src/contact.html",
        }),
        new HtmlWebpackPlugin({
            filename: "product2.html",
            template: "./src/product2.html",
        }),
        new HtmlWebpackPlugin({
            filename: "product3.html",
            template: "./src/product3.html",
        }),
        
        new MiniCssExtractPlugin({ filename: "css/style.css" }),
        new OptimizeCssAssetsPlugin({}),

    ],
    
};
