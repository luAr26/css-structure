const
  gulp = require('gulp');

gulp.task('dev', gulp.series('dev:clean', gulp.parallel('dev:scripts', 'dev:styles', 'dev:html')));