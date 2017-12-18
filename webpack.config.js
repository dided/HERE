const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';
const sourcePath = path.join(__dirname, './src');

const config = {
    devtool: isProduction ? 'eval' : 'source-map',
    context: __dirname + '/src',
    entry: {
        index: './index.js',
    },
    output: {
        path: __dirname + '/dist',
        publicPath: "/assets/",
        filename: 'bundle.js',
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(nodeEnv),
            },
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] }
                }]
            },
            {
                test:/\.(s*)css$/,
                use:['style-loader','css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    // eslint options (if necessary)
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                  loaders: {
                     scss: 'vue-style-loader!css-loader!sass-loader',
                     sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                  }
                }
            }
        ]
    },
    devServer: {
        contentBase: isProduction ? './dist' : './src',
        historyApiFallback: true,
        port: 8080,
        compress: isProduction,
        inline: !isProduction,
        hot: !isProduction,
        host: '0.0.0.0',
        stats: {
            assets: true,
            children: false,
            chunks: false,
            hash: false,
            modules: false,
            publicPath: false,
            timings: true,
            version: false,
            warnings: true
        },
    }
};


// Production build config
if (isProduction) {
    // Add more configuration for production.
}

module.exports = config;
