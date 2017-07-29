module.exports = {
  html: {
    src: './app/assets/html/*.html',
    watch: './app/assets/html/**/*.html',
    dest: './app'
  },
  styles: {
    src: './app/assets/styles/styles.sass',
    dest: './app/temp/styles',
    watch: './app/assets/styles/**/*.sass',
    inject: './app/temp/styles/styles.css',
    sass: {
      outputStyle: 'nested',
      includePaths: ['node_modules/susy/sass']
    }
  },
  scripts: {
    src: './app/assets/scripts/app.js',
    dest: './app/temp/scripts',
    watch: './app/assets/scripts/**/*.js'
  },
  clean: ['./app/temp/scripts/**/*', './app/temp/styles/**/*', './app/*.html'],
  prod: {
    dist: './docs',
    images: './docs/assets/images',
    html: './app/*.html'
  }
};