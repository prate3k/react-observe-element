const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	entry: {
		index: './src/index.js',
		ObserverComponent: './src/ObserverComponent.js'
	},
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'lib'),
		filename: '[name].js',
		libraryTarget: 'commonjs2',
		umdNamedDefine: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|lib)/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.ProvidePlugin({
			"React": "react"
		})
	],
	externals: {
		'react': 'commonjs2 react'
	}
};