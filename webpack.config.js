const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/script.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] }
        ],
    },
    plugins: [
        new Dotenv()
    ]
};