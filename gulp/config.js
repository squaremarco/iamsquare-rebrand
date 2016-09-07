"use strict";

module.exports = {
	options: {
		autoprefixer: {
			browsers: "> 0.5%",
			cascade: false,
			flexbox: "no-2009"
		},
		pug: {
			pretty: true
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
		clean: {
			src: ["dist/", "!node_modules"]
		},
		pug: {
			src: "./src/*.pug",
			dest: "./dist"
		},
		processhtml: {
			src: "./dist/**/*.html",
			dest: "./dist"
		},
		server: {
			src: "dist"
		},
		css: {
			src: "./src/css/**/*.css",
			dest: "./dist/css"
		},
		scss: {
			src: "./src/scss/**/*.scss",
			dest: "./dist/css"
		},
		imagemin: {
			src: "./src/images/*",
			dest: "./dist/images"
		},
		webpack: {
			src: {
				app: ["./src/js/script.js"],
				vendor: ["bonzo", "qwery", "font-awesome/css/font-awesome.css", "normalize-css/normalize.css", "devicons/css/devicons.css", "alot-font/css/alot.css"]
			},
			dest: "./dist/js"
		},
		webpackDev: {
			src: {
				app: ["./src/js/script.js"],
				vendor: ["bonzo", "qwery"]
			},
			dest: "./dist/js"
		},
		watch: {
			pug: "./src/**/*.pug",
			images: "./src/images/*",
			scss: "./src/scss/**/*.scss",
			css: "./src/css/**/*.css"
		}
	},
	names: {
		webpack: "[name].bundle.js"
	}
};
