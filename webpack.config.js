const path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
	mode: NODE_ENV === 'production' || NODE_ENV === 'build' ? 'production' : 'development',
	entry: {
		"index": './src/index.js',
		"ObserverComponent": './src/ObserverComponent.js'
	},
	optimization: {
		namedModules: true
	},
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		libraryTarget: 'commonjs2',
		umdNamedDefine: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|dist)/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			"React": "react"
		})
	],
	externals: {
		'react': 'commonjs2 react'
	}
};