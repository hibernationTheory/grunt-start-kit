/* https://github.com/cowboy/wesbos/commit/5a2980a7818957cbaeedcd7552af9ce54e05e3fb */

var src_path = 'src/';
var dist_path = 'dist/';

var src_js_path = src_path + 'static/js/';
var dist_js_path = dist_path + 'static/js/';

var src_templates_path = src_path + 'templates/layout';
var src_templates_pages_path = src_path + 'templates/pages/';
var src_templates_partials_path = src_path + 'templates/partials/';

module.exports = function(grunt) {
	grunt.initConfig({
		'src_path': src_path,
		'dist_path':dist_path,
		'dist_js_path': dist_js_path,
		'src_js_path':src_js_path,
		'src_templates_path':src_templates_path,
		'src_templates_pages_path':src_templates_pages_path,
		'src_templates_partials_path':src_templates_partials_path,
		pkg:require('./package.json')
	});

	grunt.loadTasks('grunt');

	// task setup
	grunt.registerTask('build', 'Build site files for testing or deployment.', 
		[
		'assemble',
		'copy',
		//'uglify', 
		//'babel',
		'browserify'
		]);
	//grunt.registerTask('default', ['uglify']);
};