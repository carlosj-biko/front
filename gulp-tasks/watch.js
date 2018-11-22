/**
 * @file
 * Task: Watch.
 */

 /* global module */

module.exports = function (gulp, plugins, options) {
  'use strict';

  gulp.task('watch', ['watch:sass', /*'watch:styleguide',*/ 'watch:js', 'watch:images', 'watch:jekyll']);

  gulp.task('watch:js', function () {
    return gulp.watch([
      options.js.files
    ], function () {
      plugins.runSequence(
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
      plugins.runSequence(
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
      plugins.runSequence(
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
      plugins.runSequence(
        'jekyll',
        'browser-sync:reload'
      );
    });
  });
};
