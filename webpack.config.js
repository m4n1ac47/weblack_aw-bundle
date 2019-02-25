/* global require __dirname module */

let path = require('path');

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
			}
		]
	}
};

module.exports = (env, options) => {
	config.devtool = options.mode === "production" ?
											false : "cheap-module-eval-source-map";
	return config;
};