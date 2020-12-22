const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

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
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        options: {
                            mozjpeg: {
                                progressive: true,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4,
                            },
                        }
                    },
                ],
            }
        ]
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
        new FaviconsWebpackPlugin("./src/images/DrewCartoonNoBackground.png"),
        new MiniCssExtractPlugin(),
    ],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".jpg", ".png", ".css"],
        modules: ["node_modules", "src/sass"],
    },
};