let gulp        = require('gulp');

let rootFiles = [
    './CNAME',
    './README.md'
];
let appFiles = [
    './app/index.html',
    './app/css/style.css',
    './app/assets/**/*'
];
let viewFiles = [
    './app/views/**/*'
];

gulp.task('build-root-files', function () {
    return gulp.src(rootFiles, { base: './' })
        .pipe(gulp.dest('dist'));
});

gulp.task('build-app-files', function () {
    return gulp.src(appFiles, { base: './app/' })
        .pipe(gulp.dest('dist'));
});

gulp.task('build-view-files', function () {
    return gulp.src(viewFiles, { base: './app/views/' })
        .pipe(gulp.dest('dist'));
});

gulp.task('build',
    [
        'build-root-files',
        'build-app-files',
        'build-view-files'
    ]);