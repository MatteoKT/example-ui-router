var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('./*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    browserSync.init({
        server: "./"
    });
    gulp.watch('./*.scss', ['sass']).on('change', browserSync.reload)
});