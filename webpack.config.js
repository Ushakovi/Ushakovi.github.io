const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        assetModuleFilename: 'assets/[name][ext]',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset",
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
        port: 3000,
        open: true,
        contentBase: path.join(__dirname, "build"),
        compress: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        })
    ],
};