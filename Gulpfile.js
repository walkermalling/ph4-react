var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var del = require('del');

var paths = {
  styles: 'app/client/styles/*.css',
  views: 'app/client/views',
  index: 'app/client/*.html',
  assets: 'app/client/assets',
  js: ['app/client/app.js']
};

gulp.task('browserify', ['clean'], function () {
  return browserify(paths.js, {debug: true})
    .transform(reactify)
    .bundle()
    .pipe(source('scripts.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function (cb) {
  del(['dist/**/*.*','dist/*.*'], cb);
});

gulp.task('index', function (cb) {
  return gulp.src(paths.index)
    .pipe(gulp.dest('dist'));
});

gulp.task('style', function (cb) {
  return gulp.src(paths.styles)
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('copy', function () {
  gulp.start('index','style');
});

gulp.task('default', ['browserify', 'copy']);

gulp.task('watch',['default'], function () {
  gulp.watch(['app/**/*'], ['browserify','copy']);
});