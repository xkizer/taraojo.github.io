var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');


require('./tasks/sass');

var filesToMove = [
    './app/index.html',
    './CNAME',
    './README.md',
    './resources/**/*'
];

gulp.task('build', function () {
    return gulp.src(filesToMove, { base: './' })
        .pipe(gulp.dest('dist'))
});

/**
 * Push build to origin master
 */
gulp.task('deploy', ['build'], function () {
    return gulp.src("./dist/**/*")
        .pipe(deploy({branch: 'master'}))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('./app/sass/**/*.scss',['compile-sass']);
});