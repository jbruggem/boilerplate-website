var gulp = require('gulp');
var path = require('path');
var _p = require('../paths');

var rename = require("gulp-rename");
var dust = require('gulp-dust-compile-render');

var dustVars = require('../../src/dust-vars');


gulp.task('dust', function () {

    return gulp.src([path.join(_p.dust, '**/*.dust')])

        .pipe(new dust(dustVars))

        .pipe(rename(function (path) {
            path.extname = "";
          }))

        .pipe(gulp.dest(_p.build));
});