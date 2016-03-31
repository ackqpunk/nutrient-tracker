var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('default', function() {
  console.log('this is the default task');
});

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});