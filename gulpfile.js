var gulp = require('gulp'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch')

gulp.task('default', function() {

});

gulp.task('css', function(){
	return gulp.src('src/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('styles'))
});

gulp.task('watch', function(){
	gulp.watch('src/*.scss', ['css']); 
})