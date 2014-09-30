module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        files: {
          "css/timeline.css": "less/timeline.less",
          "demo/css/timeline.css": "less/timeline.less",
        }
      }
    },
    watch: {
      files: 'less/**/*.less',
      tasks: 'less'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
}
