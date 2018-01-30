const gulp = require('gulp');
const nib = require('nib');
const babel = require('gulp-babel');
const stylus = require('gulp-stylus');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');



const path = {
	babel: "src/templates/blocks/b1/*.js",
	master_styl: 'src/templates/styles.styl',
	// stylus_blocks_dir: 'src/templates/blocks/**/*.styl',
	css: 'src/static/css/',
	css_builds: 'src/static/css/builds/*.css',
	production_styl: 'src/static/stylus/production.styl',
	stylus_blocks_dir: `src/templates/blocks/b*/*.styl`,
	css_builds_dir: 'src/static/css/builds/',
}



//Babel Compiler
gulp.task('default', () =>
	gulp.src(path.babel)
			.pipe(babel({
					presets: ['env']
			}))
			.pipe(gulp.dest('src/app/blocks/b1/'))
	);
// Concat Css
gulp.task('concat_css', function () {
	setTimeout(function () {
		return gulp.src(path.css_builds)
		.pipe(plumber())
		.pipe(concat('blocks_styl.css'))
		.pipe(plumber.stop())
		.pipe(gulp.dest(path.css)).on('end', function(){
				console.log('>>>>>>>>>> Css Concatenados perfectamente...');
			})
	}, 256);
});

// Stylus Compiler
gulp.task('stylus', function () {
	return gulp.src(path.master_styl)
	.pipe(plumber())
	.pipe(stylus({use: nib(),  import: ['nib'], compress:true}))
	.pipe(plumber.stop())
	.pipe(gulp.dest(path.css))});

	// Stylus Compiler
gulp.task('stylus_prod', function () {
	return gulp.src(path.production_styl)
	//.pipe(plumber())
	.pipe(stylus({ use: nib(),  import: ['nib'], compress:true}))
	//.pipe(plumber.stop())
	.pipe(gulp.dest(path.css))});


// Stylus Compiler



gulp.task('stylus_blocks', function () {

	let elementos = 0

	for ( let i = 0; i < 10 ; i++) {

		elementos ++
		console.log (elementos)
	})

	gulp.src(path.stylus_blocks_dir)
		.pipe(plumber())
		.pipe(stylus({ use: nib(), compress:true}))
		.pipe(plumber.stop())
		.pipe(gulp.dest(path.css_builds_dir)).on('end', function(){
			setTimeout(function () {
				return gulp.src(path.css_builds)
				.pipe(plumber())
				.pipe(concat('blocks_styl.css'))
				.pipe(plumber.stop())
				.pipe(gulp.dest(path.css)).on('end', function(){
					console.log('>>>>>>>>>> Css Concatenados perfectamente...');
				})
			}, 1);
		})
	});