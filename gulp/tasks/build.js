const
  gulp = require('gulp'),
  config = require('./config'),
  $ = require('gulp-load-plugins')(),
  del = require('del');

gulp.task('prod:cleanDist', cleanDist(config.prod.dist));
gulp.task('prod:images', prodImages);
gulp.task('prod:usemin', usemin);
gulp.task('prod:fonts', copyFonts);

gulp.task('build', gulp.series('prod:cleanDist', gulp.parallel('prod:images', 'prod:fonts', gulp.series('prod:scripts', 'prod:usemin'))));

function prodImages() {
  return gulp.src('./app/assets/images/**/*')
    .pipe($.imagemin([
      $.imagemin.gifsicle({interlaced: true}),
      $.imagemin.jpegtran({progressive: true}),
      $.imagemin.optipng({optimizationLevel: 5}),
      $.imagemin.svgo({plugins: [{removeViewBox: true}]})
    ]))
    .pipe(gulp.dest(config.prod.images));
}

function cleanDist(config) {
  return function() {
    return del(config);
  };
}

function copyFonts() {
  return gulp.src(config.prod.fonts.src)
    .pipe(gulp.dest(config.prod.fonts.dest));
}

function usemin() {
  return gulp.src(config.prod.html)
    .pipe($.usemin({
      css: [revCSS, cssnano],
      js: [revJS, uglify]
    }))
    .pipe(gulp.dest(config.prod.dist));
}

function revCSS() {
  return $.rev();
}

function revJS() {
  return $.rev();
}

function cssnano() {
  return $.cssnano();
}

function uglify() {
  return $.uglify();
}