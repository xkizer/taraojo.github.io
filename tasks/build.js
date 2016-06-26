var gulp        = require('gulp');

var rootFiles = [
    './CNAME',
    './README.md'
];
var appFiles = [
    './app/index.html',
    './app/css/style.css',
    './app/assets/**/*'
];

gulp.task('build-root-files', function () {
    return gulp.src(rootFiles, { base: './' })
        .pipe(gulp.dest('dist'));
});

gulp.task('build-app-files', function () {
    return gulp.src(appFiles, { base: './app/' })
        .pipe(gulp.dest('dist'))
});

gulp.task('build', ['build-root-files', 'build-app-files']);