var gulp = require('gulp');
var gulpConnect = require('gulp-connect');
gulp.task('server', function() {
  gulpConnect.server({
    root: './',
    port: 8888,
    livereload: true
  });
});
gulp.task('js', function() {
  gulp.src(['assets/js/*.js'])
    .pipe(gulpConnect.reload());
});
gulp.task('css', function() {
  gulp.src(['assets/css/custom.css'])
    .pipe(gulpConnect.reload());
});
gulp.task('html', function() {
  gulp.src(['index.html', '*.html'])
    .pipe(gulpConnect.reload());
});
gulp.task('watch', function() {
  gulp.watch(['assets/js/*.js'], ['js']);
  gulp.watch(['assets/css/custom.css'], ['css']);
  gulp.watch(['index.html', '*.html'], ['html']);
});
gulp.task('default', ['server', 'watch']);
