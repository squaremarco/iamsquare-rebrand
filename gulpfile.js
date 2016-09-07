"use strict";

const gulp = require('gulp');
const tasks = require("./gulp/tasks");

gulp.task("cleanDIST", tasks.cleanDist);

gulp.task("minifyIMG", tasks.minifyImage);
gulp.task("minifyCSS", tasks.minifyCss);

gulp.task("compileHTML", tasks.compileHtml);
gulp.task("compilePUG", tasks.compilePug);
gulp.task("compileSASS", tasks.compileSass);

gulp.task("webpack", tasks.webpack);
gulp.task("webpackdev", tasks.webpackDev);
gulp.task("watch", tasks.watch);

gulp.task("webserver", tasks.webServer);

gulp.task("compile", gulp.parallel(
	"compileSASS", "compilePUG", "minifyIMG", "minifyCSS"
));

gulp.task("build", gulp.series(
	"cleanDIST",
	"compile",
	"webpack",
	"compileHTML"
));

gulp.task("dev", gulp.series(
	"cleanDIST",
	"compile",
	"webpackdev",
	gulp.parallel("watch", "webserver")
));
