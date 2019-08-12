const gulp = require('gulp');
const webp = require('gulp-webp');

gulp.task('default', () =>
	gulp.src('src/image.png')
		.pipe(webp())
		.pipe(gulp.dest('dist'))
);