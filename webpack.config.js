module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    plugins: [
    ],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
};