var gulp = require('gulp'),
	uglify = require('gulp-uglify');

gulp.task('default',function(){
	gulp.src();
});
 
gulp.task('compress', function() {
  return gulp.src('lib/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});