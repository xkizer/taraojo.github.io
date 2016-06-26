var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compile-sass', function() {
    gulp.src('./app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css/'));
});