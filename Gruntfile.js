module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      // sass files get compiled into css files
     sass: {
      dist: {
        files: {    //where files go to or from
            'dev/css/style.css': 'dev/scss/style.scss',   // destination: source
            'dev/css/smiley.css': 'dev/scss/smiley.scss'
      }
      }
     },
     // Jade compiler
     jade: {
       compile: {
           files: [{
              src: "**/*.jade",
              dest: "dist/html/",  // output jade files to an html folder
              ext: ".html",
              expand: true,  
              cwd: "dev/jade/" // grab jade files from a folder called jade
           }]
       }
     },
    // JShint
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      css: {
        files: ['dev/scss/*.scss', '<%= jshint.files %>'],
        tasks: ['sass', 'jshint', 'autoprefixer']
      },
       jade: {
                files: ['jade/*.jade'], // watch jade files in jade folder
                tasks: ['jade']
       },
       options: {
          livereload: true
       }
    },
    autoprefixer: {
      options: {
        browsers: ['last 5 version', 'ie 7', 'ie 8', 'ie 9']
      },
      no_dest: {
        src: 'dev/css/style.css'
      }
    },
    connect: {
        server: {
          options: {
            port: 9001,
            base: ''
          }
        }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('prefixr', ['autoprefixer']);

  grunt.registerTask('default', ['jshint', 'sass','jade','connect','watch']);

};