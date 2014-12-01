module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: ["**/*", "!/**/*.less"]
      },
      less : {
        files: ["**/*.less"],
        tasks: ["less"]
      }
    },
    // less for css
    less: {
      development: {
        files: {
          "css/style.css": "css/style.less"
        }
      }
    },
    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change 'localhost' to '0.0.0.0' to access the server from outside.
        hostname: '127.0.0.1',
        livereload: 9001
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
            ];
          }
        }
      }
    }
  });

  // after config, register needed tasks to be started on specific command
  grunt.registerTask("serve", ["connect", "watch"]);
};
