module.exports = {
  html: {
    watch: './app/index.html'
  },
  styles: {
    src: './app/assets/styles/styles.sass',
    dest: './app/temp/styles',
    watch: './app/assets/styles/**/*.sass',
    inject: './app/temp/styles/styles.css',
    sass: {
      outputStyle: 'nested'
    }
  },
  scripts: {
    src: './app/assets/scripts/app.js',
    dest: './app/temp/scripts',
    watch: './app/assets/scripts/**/*.js'
  },
  clean: ['./app/temp/scripts/**/*', './app/temp/styles/**/*']
};