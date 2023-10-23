const CopyPlugin = require("copy-webpack-plugin")
const FaviconsWebpackPlugin = require("favicons-webpack-plugin")
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const path = require("path")
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css?$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: [/\.s[ac]ss$/i],
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpg)$/i,
                type: "asset",
            }
        ]
    },
    optimization: {
        minimizer: [
            new ImageMinimizerPlugin({
                minimizer: {
                  implementation: ImageMinimizerPlugin.imageminMinify,
                  options: {
                    plugins: [
                      ["optipng", { optimizationLevel: 5 }],
                    ],
                  },
                },
              }),
            new UglifyJsPlugin(),
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: "body",
            template: "src/index.ejs",
            title: "Welcome to Budw.in",
            meta: {
                charset: { charset: "utf-8" },
                viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
            },
        }),
        new CopyPlugin({
            patterns: [
              {
                from: "src/static/404.html",
                to: "404.html",
              },
            ],
        }),
        new FaviconsWebpackPlugin("./src/images/DrewCartoonNoBackground.png"),
        new MiniCssExtractPlugin(),
        new webpack.DefinePlugin({
            process: {env: {}}
        })
    ],
    resolve: {
        extensions: [
            ".css",
            ".jpg",
            ".js",
            ".jsx",
            ".png",
            ".ts",
            ".tsx",
        ],
        fallback: {
            util: require.resolve('util'),
        },
        modules: ["node_modules", "src/sass"],
    },
}
