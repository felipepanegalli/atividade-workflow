var gulp = require("gulp");
var sass = require("gulp-sass");
var minifyCSS = require('gulp-csso');
var minifyHTML = require('gulp-htmlmin');
var del = require('del');

gulp.task('clean', function(){
	del('./dist/css');
});

gulp.task('css', ['clean'], function(){
	return gulp.src('./source/scss/*.scss')
			.pipe(sass())
			.pipe(minifyCSS())
			.pipe(gulp.dest('./dist/css'));
});

gulp.task('html', function(){
	return gulp.src('./source/index.html')
			.pipe(minifyHTML())
			.pipe(gulp.dest('./dist'));
});

gulp.task('background', function(){
	gulp.watch('./source/scss/*.scss',['css']);
	gulp.watch('./source/index.html',['html']);
});