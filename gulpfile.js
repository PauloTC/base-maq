const gulp = require('gulp');
const babel = require('gulp-babel');
const stylus = require('gulp-stylus');
const plumber = require('gulp-plumber');

const path = {
	babel: "src/templates/blocks/b1/*.js",
	master_styl: 'src/templates/styles.styl',
	// stylus_blocks_dir: 'src/templates/blocks/**/*.styl',
	css: 'src/static/css/'
}

//Babel Compiler
gulp.task('default', () =>
gulp.src(path.babel)
		.pipe(babel({
				presets: ['env']
		}))
		.pipe(gulp.dest('src/app/blocks/b1/'))
);

// Stylus Compiler
gulp.task('stylus', function () {
	return gulp.src(path.master_styl)
	.pipe(plumber())
	.pipe(stylus({compress:true}))
	.pipe(plumber.stop())
	.pipe(gulp.dest(path.css))});
