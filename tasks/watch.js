var gulp        = require('gulp');

//Compile sass on change
gulp.task('default',function() {
    gulp.watch('./app/sass/**/*.scss',['compile-sass']);
});