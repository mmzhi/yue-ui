var webpack = require('webpack');

var BUILDROOT = __dirname + "/public";
var SRCROOT = __dirname + "/src";
var PAGEROOT = __dirname + "/src";
module.exports = {
	devtool: '#source-map',
  // entry point of our application
  entry: [
  // 'webpack-dev-server/client?http://0.0.0.0:8080',//资源服务器地址
  //   'webpack/hot/only-dev-server',
  	PAGEROOT + "/main.js"
  ],
  // where to place the compiled bundle
  output: {
  	path: BUILDROOT,
  	filename: 'js/index.bundle.js',
  	chunkFilename: "js/[id].chunk.js",
  	publicPath: "/",
  },
  module: {
  	loaders: [
  	{
		// use vue-loader for *.vue files
		test: /\.vue$/,
		loader: 'vue'
	},
	{
		// use babel-loader for *.js files
		test: /\.js$/,
		loader: 'babel',
		// important: exclude files in node_modules
		// otherwise it's going to be really slow!
		exclude: /node_modules/
	},
	{
		// edit this for additional asset file types
		test: /\.(png|jpg|gif)$/,
		loader: 'url',
		query: {
		  // inline files smaller then 10kb as base64 dataURL
		  limit: 10000,
		  // fallback to file-loader with this naming scheme
		  name: 'img/[name]-[hash].[ext]'
		}
	}
	]
},
  // if you are using babel-loader directly then
  // the babel config block becomes required.
  babel: {
  	presets: ['es2015'],
  	plugins: ['transform-runtime']
  },
  plugins: [
  		new webpack.optimize.CommonsChunkPlugin({
            filename: "js/commons.js",
            name: "commons"
        })
  ]

}