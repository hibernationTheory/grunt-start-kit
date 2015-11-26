/* triggers a task when a change is detected at specified folder */
/* source: https://github.com/gruntjs/grunt-contrib-connect */

module.exports = function(grunt) {
grunt.config('connect', {
	connect: {
	    server: {
			options: {
				port: '<%= port %>',
				base: '<%= dist_path %>'
	      	}
	    }
  	}
});

grunt.loadNpmTasks('grunt-contrib-connect'); // enter the full plugin name here (as it is in package.json)
};