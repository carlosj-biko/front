/**
 * @file
 * Task: jekyll.
 */

/* global module */

module.exports = function (gulp, plugins, options) {
  'use strict';

  var shell = require('shelljs');


  // Clean CSS files.
  gulp.task('jekyll', function () {
    const resultCode = shell.exec('jekyll build').code;

    if (resultCode !== 0) {
      notifier.notify({
        'title': 'Error',
        'message': 'Error compilando JEKYLL',
        icon: path.join(__dirname, '../../node_modules/gulp-notify/assets/gulp-error.png'),
      });
    }
  });
};

