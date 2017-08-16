const
  gulp = require('gulp'),
  $ = require('gulp-load-plugins')(),
  config = require('./config'),
  mergeStream = require('merge-stream');

gulp.task('dev:styles', gulp.series(copyFontAwesomeFonts, styles));

function styles() {
  const normalize = gulp.src('./node_modules/normalize.css/normalize.css'),
    ourStyles = gulp
    .src(config.styles.src)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass(config.styles.sass))
    .pipe($.autoprefixer())
    .pipe($.csscomb())
    .pipe($.sourcemaps.write());

  return mergeStream(normalize, ourStyles)
    .pipe($.concat('styles.css'))
    .pipe(gulp.dest(config.styles.dest));
}

function copyFontAwesomeFonts() {
  return gulp.src(config.styles.fa.src)
    .pipe(gulp.dest(config.styles.fa.dest));
}