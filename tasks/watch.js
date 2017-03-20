var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['compile-sass'],function() {
    browserSync.init({
        server: {
            baseDir: './app/'
        }
    });

    gulp.watch('./app/sass/**/*.scss',['compile-sass', browserSync.reload]);
    gulp.watch('./app/**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['build', 'serve']);