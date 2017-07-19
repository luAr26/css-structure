const
  gulp = require("gulp"),
  $ = require('gulp-load-plugins')(),
  config = require('./config');

gulp.task('dev:scripts', scripts);

function scripts() {
  return gulp
    .src(config.scripts.src)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(config.scripts.dest));
}