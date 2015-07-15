module.exports = function(grunt) {
grunt.config('browserify', {
	options: {
		browserifyOptions: {
        	debug: true,
        	extensions: ['.js', '.json', '.es6'],
        	transform:['babelify']
		}
	},
	dist: {
		files: {
			'<%= dist_js_path %>app_browserify.js': ['<%= src_js_path %>app.js'],
		},
	},
});

grunt.loadNpmTasks('grunt-browserify');

};
    