var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass'),
	livereload = require('gulp-livereload'),
	plumber = require('gulp-plumber'),
	prefix = require('gulp-autoprefixer');;
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant'); // $ npm i -D imagemin-pngquant;

function errorlog(error){
	console.error.bind(error);
	this.emit('end')
}


// Scripts Task
// Uglifies
gulp.task('compress', function() {
  return gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/minjs'));
});

// Styles Task
// Uglifies
gulp.task('styles', function() {
	return sass('assets/scss/**/*.scss', {
		style: 'expanded'
	})
		.on('error', errorlog)
		.pipe(prefix({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('assets/css/uglify'))
		.pipe(livereload());
});

// Image Task
// Compress
gulp.task('image',function(){
	gulp.src('assets/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('assets/images/imgCompress'));
});

// Watch Task
// Watches js
gulp.task('watch', function() {

	livereload.listen();

	gulp.watch('assets/js/*.js',['compress']);
	gulp.watch('assets/scss/**/*.scss',['styles'])
});

gulp.task('default', ['compress','styles', 'image', 'watch']);