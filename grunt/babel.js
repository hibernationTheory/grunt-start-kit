module.exports = function(grunt) {
grunt.config('babel', {
	options: {
		sourceMap: true
    },
	dist: {
		files: {
			'src/app_babel.js': 'src/app.js'
		}
	}
});

grunt.loadNpmTasks('grunt-babel');

};