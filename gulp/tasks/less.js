var gulp = require('gulp');
var path = require('path');
var _p = require('../paths');

var concat = require('gulp-concat');
var less = require('gulp-less');

gulp.task('less',  function () {
    gulp.src(path.join(_p.main_less))
        .pipe(less())
        .pipe(concat(path.basename(_p.main_built_css)))
        .pipe(gulp.dest(path.dirname(_p.main_built_css)));
});