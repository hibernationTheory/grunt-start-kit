module.exports = function(grunt) {
grunt.config('uglify', {
		my_target: {
			files: {
				'<%= dest_js_path %>output.min.js':['app/*.js', '<%= source_js_path %>*.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};