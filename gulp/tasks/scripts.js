const
  gulp = require("gulp"),
  webpack = require('webpack'),
  webpackConfig = require('../../webpack.config');

gulp.task('dev:scripts', (cb) => {
  const
    config = clone(webpackConfig);
  config.devtool = 'eval-source-map';

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
});

function clone(obj) {
  return Object.assign({}, obj);
}