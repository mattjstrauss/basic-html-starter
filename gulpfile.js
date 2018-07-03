var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

// SVG Sprites
gulp.task('svg-sprite', function() {
  return gulp.src('./src/svg/*.svg')
    .pipe(plugins.svgSprite({
      mode: {
        symbol: {
          dest: '',
          prefix: '',
          sprite: 'spritemap'
        }
      }
    }))
    .pipe(gulp.dest('./img'));
});

// CSS
gulp.task('styles', function () {
  return gulp.src('./src/css/**/*.scss')
    .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass({outputStyle: 'compressed'}).on('error', plugins.sass.logError))
      .pipe(plugins.autoprefixer({
          browsers: ['last 2 versions', 'safari 6', 'ie 9', 'ios 7', 'android 4']
        }))
    .pipe(plugins.sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css'));
});

// JS - custom scripts
gulp.task('scripts', function() {
  return gulp.src('./src/js/scripts.js')
    .pipe(plugins.sourcemaps.init())
      .pipe(plugins.concat('scripts.js'))
      .pipe(plugins.minify())
    .pipe(plugins.sourcemaps.write('./maps'))
    .pipe(gulp.dest('./js'));
});

// JS - plugins
gulp.task('scripts-plugin', function() {
  return gulp.src('./src/js/plugins/*.js')
    .pipe(plugins.sourcemaps.init())
      .pipe(plugins.concat('plugins.js'))
      .pipe(plugins.minify())
    .pipe(plugins.sourcemaps.write('./maps'))
    .pipe(gulp.dest('./js'));
});

// JS - library files
// Copy these files from /src/js/lib to /js/lib to maintain full file
gulp.task('scripts-lib', function() {
  gulp.src('./src/js/lib/**/*')
    .pipe(gulp.dest('./js/lib'));
});


// Default Tasks
gulp.task('default', ['scripts', 'scripts-lib', 'scripts-plugin', 'styles', 'svg-sprite',]);

// Watch tasks
gulp.task('watch', function() {

  // Watch general .scss files
  gulp.watch('src/css/**/*.scss', ['styles']);

  // Watch partials .js files
  gulp.watch('src/js/scripts.js', ['scripts']);

  // Watch plugin .js files
  gulp.watch('src/js/plugins/*.js', ['scripts-plugin']);

  // Watch for .js library files
  gulp.watch('src/js/lib/*.js', ['scripts-lib']);

  // SVG files for spritemap
  gulp.watch('src/svg/**/*.svg', ['svg-sprite']);
  
});
