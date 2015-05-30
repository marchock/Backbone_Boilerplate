var path = require('./config'),
    gulp = require('gulp'),
    del  = require('del'),
    requirejs = require('requirejs');



gulp.task('scripts', ['copy-requirejs', 'requirejs']);



gulp.task('requirejs', function(cb) {

    var config = {
        baseUrl: path.scripts.require.baseUrl,
        mainConfigFile: path.scripts.require.mainConfigFile,
        preserveLicenseComments: false,
        name: 'main',
        out: path.scripts.require.out,
        optimize: 'uglify2'
    };

    requirejs.optimize(config, function (buildResponse) {
        cb();
    }, cb);
});


gulp.task('copy-requirejs', function() {
    return gulp.src(path.scripts.require.baseUrl + 'lib/require.js')
      .pipe(gulp.dest(path.scripts.require.dest + 'lib/'));
});