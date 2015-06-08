/**
 * Gulp main entry point.
 *
 * @author DarkPark
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var path = require('path'),
	gulp = require('gulp');


// enable colors in console
require('tty-colors');


gulp.task('static', function () {
	gulp.removeAllListeners();
	console.log(gulp);
	console.log(gulp.tasks.default.dep[0]);
});

gulp.task('default', ['static'], function () {

});


// main entry point
//gulp.task('default', ['lint', 'img', 'jade', 'less', 'webpack', 'static'], function () {
//	// rebuild files on modification
//	gulp.watch(['./js/**/*.js'], ['webpack:develop']);
//	gulp.watch(['./jade/**/*.jade'], ['jade:develop']);
//	gulp.watch(['./less/**/*.less'], ['less:develop']);
//
//	// serve livereload
//	glr.listen({quiet: true});
//
//	// reload event
//	gulp.watch(['./build/**/*.{html,js,css}']).on('change', function ( file ) {
//		// report
//		log('watch   '.bgCyan.black, 'reload ' + ('./' + path.relative(path.join(__dirname, '..'), file.path)).bold);
//		// reload
//		glr.changed(file);
//	});
//});
