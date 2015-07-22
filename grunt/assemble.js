module.exports = function(grunt) {
grunt.config('assemble', {
	options: {
    flatten: true,
    //data: [
    //  '<%= src %>/data/*.json'
    //],
    partials: [
      '<%= src_templates_partials_path %>**/*.hbs'
    ],
    layoutdir: '<%= src_templates_path %>',
    layout: false,
  },
  // Pages
  server: {
    options: {
      // options here
    },
    files: {
      '<%= dist_path %>': '<%= src_templates_pages_path %>**/*.hbs'
    }
  }
});

grunt.loadNpmTasks('assemble');

};