"use strict";

var gulp = require("gulp");
var gutil = require("gulp-util");
var pug = require("gulp-pug");
var config = require("../config");

module.exports = function(callback){
	gulp.src(config.paths.pug.src)
	.pipe(pug(config.options.pug)).on("error", function(e){
		gutil.log(gutil.colors.red(e.message));
	})
	.pipe(gulp.dest(config.paths.pug.dest));
	callback();
};
