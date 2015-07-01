/* https://github.com/cowboy/wesbos/commit/5a2980a7818957cbaeedcd7552af9ce54e05e3fb */
var source_js_path = 'app/js/';
var dest_js_path = 'dest/js/';

module.exports = function(grunt) {
	grunt.initConfig({
		'dest_js_path': dest_js_path,
		'source_js_path':source_js_path,
		pkg:require('./package.json')
	});

	grunt.loadTasks('grunt');

	// task setup
	grunt.registerTask('build', 'Build site files for testing or deployment.', ['uglify']);
	//grunt.registerTask('default', ['uglify']);
};