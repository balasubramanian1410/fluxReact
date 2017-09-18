var path = require('path');
var webpack = require('webpack');
var config = {
   entry: {
	   app: './main.js',
	   vendor: ["react", 
            "react-dom", 
            "react-bootstrap",
            "react-router",           
		]
   },
   
   output: {
      path: path.join(__dirname, "scripts/src"),
      filename: "[name].bundle.js",
	  chunkFilename: "[id].chunk.js",
	  publicPath: "scripts/src/"
   },
	
   devServer: {
      inline: true,
      port: 8067
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },
   plugins: [
		new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js', minChunks: 2}),
		new webpack.DefinePlugin({
		  'process.env':{
			'NODE_ENV': JSON.stringify('development')
		  }
		}),
   ]
}

module.exports = config;