var customPaths = {};
var customOptions = {};

var gulp = require('gulp');
// Tasks
var fs = require('fs');

if (fs.existsSync('./gulpfile.custom.paths.js')) {
    customPaths = require('./gulpfile.custom.paths.js');
}
if (fs.existsSync('./gulpfile.custom.configs.js')) {
    customOptions = require('./gulpfile.custom.options.js');
}

require('../gulp-tasks-front')(gulp,customPaths,customOptions);
