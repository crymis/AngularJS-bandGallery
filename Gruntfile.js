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
        files: ["app/**/*", "!app/**/*.less"]
      },
      less : {
        files: ["app/**/*.less"],
        tasks: ["less"]
      }
    },
    // less for css
    less: {
      development: {
        files: {
          "app/css/style.css": "app/css/style.less"
        }
      }
    },
    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
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
              connect.static("app")
            ];
          }
        }
      }
    }
  });

  // after config, register needed tasks to be started on specific command
  grunt.registerTask("serve", ["connect", "watch"]);
};
