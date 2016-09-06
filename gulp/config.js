"use strict";

module.exports = {
	options: {
		autoprefixer: {
			browsers: "> 0.5%",
			cascade: false,
			flexbox: "no-2009"
		},
		pug: {
			pretty: true,
			basedir: "src"
		},
		server: {
			livereload: true,
			open: true
		},
		scss: {
			sourceMapContents: false,
			outputStyle: "compressed"
		}
	},
	paths: {
		pug: {
			src: "src/*.pug",
			dest: "dist"
		},
		server: {
			src: "dist"
		},
		css: {
			src: "src/css/**/*.css",
			dest: "dist/css"
		},
		scss: {
			src: "src/scss/**/*.scss",
			dest: "dist/css"
		},
		imagemin: {
			src: "src/images/*",
			dest: "dist/images"
		},
		webpack: {
			src: {
				app: ["./src/js/script.js"],
				vendor: ["bonzo", "qwery"]
			},
			dest: "dist/js"
		},
		watch: {
			pug: "src/**/*.pug",
			images: "src/images/*",
			scss: "src/scss/**/*.scss",
			css: "src/css/**/*.css"
		}
	},
	names: {
		webpack: "[name].bundle.js"
	}
};
