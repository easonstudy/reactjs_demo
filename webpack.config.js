var path = require('path');
var webpack = require('webpack');
//CSS打包
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//HTML生成
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	//入口文件
	entry: path.resolve(__dirname, 'app/index.js'),
	//打包输出位置
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: 'main.js'
	},
	plugins: [
		new webpack.BannerPlugin('This file is created by ***'),
		//生产模式
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		}),
		//压缩JS
		/*new webpack.optimize.UglifyJsPlugin({
			output: {
				comments: false,
			},
			compress: {
				warnings: false
			}
		}),*/
		//CSS 打包
		new ExtractTextPlugin("./styles.css"),
		//HTML 模版生成
		new HtmlWebpackPlugin({
			title: "",
			template: './wl/demo.html',
			filename: './index.html',
			inject: true,   //允许插件修改哪些内容，包括head与body
			hash: true,     //为静态资源生成hash值
			minify: {       //压缩HTML文件
				removeComments: true,        //移除HTML中的注释
				collapseWhitespace: false    //删除空白符与换行符
			}
		})
	],
	module: {
		//加载器配置
		loaders: [
			{
				test: /\.css$/,
				//use: ['style-loader', 'css-loader']
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader', use: 'css-loader'
				})
			},
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				loader: 'url-loader',
				options: {limit: 10240}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel-loader'],
				include: __dirname
			}]
	}
}
