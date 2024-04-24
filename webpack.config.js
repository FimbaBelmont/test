const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename:"index.js",
        path:path.resolve(__dirname, "dist"),
    },
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
        watchFiles: ["src/index.js", "index.html"]
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Restraunt",
            filename: "index.html",
            inject: "body",
            template: "./src/index.html",
        })
    ],
};