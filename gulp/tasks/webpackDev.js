"use strict";

var gulp = require("gulp");
var webpack = require("webpack");
var webpackStream = require("webpack-stream");
var config = require("../config");

module.exports = function(callback){
	var options = {
		entry: config.paths.webpack.src,
		output: {
			filename: config.names.webpack
		},
		watch: true,
		cache: true,
		plugins: [
			new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
		]
	};

	webpackStream(options)
	.pipe(gulp.dest(config.paths.webpack.dest));
	callback();
};
