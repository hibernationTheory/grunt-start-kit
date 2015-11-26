/* triggers a task when a change is detected at specified folder */
/* source: https://github.com/gruntjs/grunt-contrib-connect */
/* source for connect livereload middleware : https://github.com/intesso/connect-livereload */

module.exports = function(grunt) {
grunt.config('connect', {
	connect: {
	    server: {
			options: {
				port: '<%= port %>',
				hostname: 'localhost',
				base: '<%= dist_path %>'
	      	},
	      	dev: {
	      		options:{
		      		middleware: function (connect) {
						return [
							require('connect-livereload')()
						];
					}
				}
      		}
    	}
	}
});

grunt.loadNpmTasks('grunt-contrib-connect'); // enter the full plugin name here (as it is in package.json)
};