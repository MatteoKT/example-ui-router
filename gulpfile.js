var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
            baseDir: "./",
            online: "true"
        }
    });

    gulp.watch("*.scss", ['sass']);
    gulp.watch(["./**/*.{html,js}"]).on('change', browserSync.reload);

});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);