"use strict";

const gulp = require('gulp');
const tasks = require("./gulp/tasks");

gulp.task("minifyIMG", tasks.minifyImage);
gulp.task("minifyCSS", tasks.minifyCss);

gulp.task("compilePUG", tasks.compilePug);
gulp.task("compileSASS", tasks.compileSass);

gulp.task("webpack", tasks.webpack);
gulp.task("webpackdev", tasks.webpackDev);
gulp.task("watch", tasks.watch);

gulp.task("webserver", tasks.webServer);

gulp.task("compile", gulp.parallel("compileSASS", "compilePUG", "minifyIMG", "minifyCSS"));

gulp.task("build", gulp.series("compile", "webpack"));
gulp.task("dev", gulp.series("compile", gulp.parallel("watch", "webpackdev", "webserver")));
