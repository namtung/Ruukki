const combineLoaders = require('webpack-combine-loaders')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            }, {
                exclude: /node_modules/,
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '/fonts/'
                        }
                    }
                ]
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            useRelativePath: false,
                            name: '[hash].[ext]',
                        }
                    }
                ]
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    combineLoaders([
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        }
                    ])
                )
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "src"),
        inline: true,
        port: 3300,
        historyApiFallback: true
    },
    entry: ['babel-polyfill', './src/index.js'],
    plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html", filename: "./index.html"}),
        new ExtractTextPlugin('css/styles.css'),
        new CopyWebpackPlugin([{ from: 'src/css', to: 'css' },{ from: 'src/img', to: 'img' }])
    ]
}
