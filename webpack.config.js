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
        new MiniCssExtractPlugin(),
    ],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".jpg", ".png", ".css"],
        modules: ["node_modules", "src/sass"],
    },
};