/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      src: ['src/example/**/*.js'],
	  tests: ['tests/example/**/*.js']
    },
    qunit: {
      files: ['tests/tests.html']
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
	  
	  src: {
		globals: { define: true }
	  },
      tests: {
		globals: { QUnit: true, define: true }
	  }
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'lint qunit');

};
