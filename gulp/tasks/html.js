const
  gulp = require('gulp'),
  $ = require('gulp-load-plugins')(),
  config = require('./config');

gulp.task('dev:html', html);

function html() {
  return gulp.src(config.html.src)
    .pipe($.plumber())
    .pipe($.injectPartials())
    .pipe(gulp.dest(config.html.dest));
}