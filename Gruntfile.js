/*global module:false*/
module.exports = function(grunt) {
    
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  // Project configuration.
  grunt.initConfig({
    qunit: {
      all: ['tests/tests.html']
    },
    jshint: {
      files: {
          src: ['src/example/**/*.js'],
          tests: ['tests/example/**/*.js']
      },
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
        browser: true,
        globals: {
          QUnit: true, 
          define: true
        }
      }
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', ['jshint','qunit']);

};
