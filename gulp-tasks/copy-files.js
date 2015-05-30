var gulp = require('gulp');


// Default task
gulp.task('copy', function() {
    gulp.start("copy-index");
});

gulp.task('copy-index', function() {
    return gulp.src('src/index.html')
      .pipe(gulp.dest('dest/'));
});

