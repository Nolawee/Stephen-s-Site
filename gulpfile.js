var gulp = require('gulp'),
	uglify = require('gulp-uglify');

gulp.task('default',function(){
	console.log('Hello World');
});
 
gulp.task('compress', function() {
  return gulp.src('lib/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});