const
  gulp = require("gulp"),
  webpack = require('webpack'),
  webpackConfig = require('../../webpack.config');

gulp.task('dev:scripts', (cb) => scripts(true, cb));
gulp.task('prod:scripts', (cb) => scripts(false, cb));

function scripts(isDev, cb) {
  const
    config = clone(webpackConfig);

  if (isDev) {
    config.devtool = 'eval-source-map';
  }
  const compiler = webpack(config);

  compiler.run((err, stats) => {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString({
      colors: true,
      exclude: ['node_modules', 'bower-components', 'jam', 'components']
    }));
    cb();
  });
}

function clone(obj) {
  return Object.assign({}, obj);
}