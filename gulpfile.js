var gulp = require('gulp'),
	uglify = require('gulp-uglify');

// Scripts Task
// Uglifies
gulp.task('compress', function() {
  return gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/minjs'));
});

// Scripts Task
// Uglifies
gulp.task('styles', function() {
	console.log("this will make sense")
});

// Watch Task
// Watches js
gulp.task('watch', function() {
	gulp.watch('assets/js/*.js',['compress']);

});

gulp.task('default', ['compress','styles']);