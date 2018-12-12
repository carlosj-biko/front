/**
 * @file
 * Task: Build.
 */

 /* global module */

module.exports = function (gulp, plugins, options) {
  'use strict';
  plugins.runSequence.options.showErrorStackTrace = false;

  gulp.task('build', function(done) {
    gulp.series(
      'compile:sass',
      'compile:js',
      'compile:vendorjs',
      'images',
      gulp.series('minify:css',
        'minify:js'),
        /*'compile:styleguide',*/
      gulp.series(/*'lint:js',
        'lint:js-gulp',*/
        'lint:js-with-fail',
        'lint:css-with-fail'));
      done();
  });

  gulp.task('build:dev', function(cb) {
    gulp.series(
      'compile:sass',
      'compile:js',
      'compile:vendorjs',
      'images',
      gulp.series('minify:css',
        'minify:js',
      /*'compile:styleguide'*/),
      gulp.series(/*'lint:js-gulp',
        'lint:js',*/
        'lint:css'));

      cb();
  });
};
