const
  gulp = require("gulp"),
  config = require('./config'),
  browserSync = require('browser-sync');


gulp.task('dev', gulp.series('dev:clean', gulp.parallel('dev:scripts', 'dev:styles')));
gulp.task('styles:inject', stylesInject);
gulp.task('dev:watch', gulp.series('dev', watch));

function watch() {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });
  gulp.watch(config.html.watch, function(cb) {
    browserSync.reload();
    cb();
  });
  gulp.watch(config.styles.watch, gulp.series('dev:cleanCSS', 'dev:styles', 'styles:inject'));
  gulp.watch(config.scripts.watch, gulp.series('dev:cleanJS', 'dev:scripts'));
}

function stylesInject() {
  return gulp
    .src(config.styles.inject)
    .pipe(browserSync.stream());
}