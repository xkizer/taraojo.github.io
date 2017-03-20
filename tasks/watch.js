var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['compile-sass'],function() {
    browserSync.init({
        server: {
            baseDir: './dist/'
        }
    });

    gulp.watch('./app/sass/**/*.scss',['compile-sass']);
    gulp.watch('./app/**/*.html').on('change', ['build', browserSync.reload]);
});

gulp.task('default', ['build', 'serve']);