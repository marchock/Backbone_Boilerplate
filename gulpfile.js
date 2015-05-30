// /************************
// Gulp - Installation Instructions

// To install Gulp globally:
// $ npm install gulp -g

// To install dependencies automatically (Requires up to data package.json):
// $ npm install gulp --save-dev

// To install dependencies manually (Ensure this list matches the plugins list below):
// $ npm install gulp-compass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-uglify gulp-imagemin gulp-concat gulp-notify gulp-cache gulp-livereload gulp-util tiny-lr gulp-combine-media-queries gulp-requirejs --save-dev
// ***********************/


var path = require('./gulp-tasks/config'),
    gulp = require('gulp'),
    watch = require('gulp-watch'),
    del  = require('del'),
    requireDir = require('require-dir');

requireDir('./gulp-tasks');

// Default task
// gulp.task('default', ['inject-src', 'clean'], function() {
//     gulp.start("scripts", "copy", "inject-script-dest");
//     util.log('default task executed.');
// });

gulp.task('dev-watch', function () {
    gulp.watch(path.styles.src, ['dev-styles']);
});


// Build preduction
gulp.task('build', ['clean'], function() {
    gulp.start("scripts", "copy", "styles");
    //util.log('default task executed.');
});


// Clean - Deletes all the files before recompiling to ensure no unused files remain
gulp.task('clean', function(cb) {
    del(['dest'], cb);
});






