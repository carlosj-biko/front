/**
 * @file
 * Task: Watch.
 */

 /* global module */

module.exports = function (gulp, plugins, options) {
  'use strict';



  gulp.task('watch:js', function () {
    return gulp.watch([
      options.js.files
    ], function () {
      gulp.series(
        //'lint:js',
        'compile:js',
        'minify:js',
        //'lint:css',
        'browser-sync:reload'
      );
    });
  });

  gulp.task('watch:sass', function () {
    return gulp.watch([
      options.sass.files
    ], function () {
      gulp.series(
        'compile:sass',
        'minify:css',
        'browser-sync:reload'
      );
    });
  });

  gulp.task('watch:images', function () {
    return gulp.watch([
      options.images.files
    ], function () {
      gulp.series(
        'images',
        'browser-sync:reload'
      );
    });
  });

  gulp.task('watch:styleguide', function () {
    return gulp.watch([
      options.sass.files
    ], function () {
      plugins.runSequence(
        /*'compile:styleguide'*/
      );
    });
  });

  gulp.task('watch:jekyll', function () {
    return gulp.watch([
      options.jekyll.files
    ], function () {
      gulp.series(
        'jekyll',
        'browser-sync:reload'
      );
    });
  });
  gulp.task('watch', gulp.parallel('watch:sass', /*'watch:styleguide',*/ 'watch:js', 'watch:images', 'watch:jekyll'));
};
