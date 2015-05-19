var gulp = require('gulp');
var path = require('path');
var _p = require('../paths');

var del = require('del');

gulp.task('clean', function (done) {
    del([ path.join(_p.build, '**/*') ], done);
});