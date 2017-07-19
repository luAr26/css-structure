const
  gulp = require('gulp'),
  del = require('del'),
  config = require('./config');

gulp.task('dev:clean', clean(config.clean));
gulp.task('dev:cleanJS', clean(config.clean[0]));
gulp.task('dev:cleanCSS', clean(config.clean[1]));
gulp.task('dev:cleanHTML', clean(config.clean[2]));

function clean(config) {
  return function() {
    return del(config);
  };
}