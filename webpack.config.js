/* global require __dirname module */

let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist/'),
		filename: 'bundle.js',
		publicPath: 'dist/'
	},
	devServer: {
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.sass|scss$/,
                use: ExtractTextPlugin.extract({
                    // fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            // options: { sourceMap }
                        },
                        {
							loader: "postcss-loader",
                            // options: { sourceMap }
                        },
                        {
                            loader: "sass-loader",
                            // options: { sourceMap }
                        }
                    ]
                })
			},
			{
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: '../img/',
                            outputPath: 'img/'
                        }
                    }]
            },
            {
                test: /\.(woff2|woff)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: '../fonts/',
                        outputPath: '/fonts/'
                    }
                }]
            }
		]
	},
    plugins: [
        new ExtractTextPlugin("css/styles.css")
    ]
};

module.exports = (env, options) => {
	config.devtool = options.mode === "production" ?
											false : "cheap-module-eval-source-map";
	return config;
};