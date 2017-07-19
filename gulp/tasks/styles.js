const
  gulp = require('gulp'),
  $ = require('gulp-load-plugins')(),
  config = require('./config');

gulp.task('dev:styles', styles);

function styles() {
  return gulp
    .src(config.styles.src)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass(config.styles.sass))
    .pipe($.autoprefixer())
    .pipe($.csscomb())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(config.styles.dest))
}