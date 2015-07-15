/* https://github.com/cowboy/wesbos/commit/5a2980a7818957cbaeedcd7552af9ce54e05e3fb */
var src_js_path = 'src/static/js/';
var dist_js_path = 'dist/static/js/';

module.exports = function(grunt) {
	grunt.initConfig({
		'dist_js_path': dist_js_path,
		'src_js_path':src_js_path,
		pkg:require('./package.json')
	});

	grunt.loadTasks('grunt');

	// task setup
	grunt.registerTask('build', 'Build site files for testing or deployment.', 
		[
		//'uglify', 
		//'babel',
		'browserify'
		]);
	//grunt.registerTask('default', ['uglify']);
};