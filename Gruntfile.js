module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      dist: {
        src: 'src/js/<%= pkg.name %>.js',
        dest: 'dist/js/<%= pkg.name %>.min.js'
      },
      demo: {
        src: 'src/js/<%= pkg.name %>.js',
        dest: 'demo/js/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      js: {
        files: ['src/js/<%= pkg.name %>.js'],
        tasks: ['uglify']
      }
    },
    copy: {
      dist: {
        files: [{
            cwd: 'src/js',
            src: '**/*',
            dest: 'dist/js',
            expand: true
          }
        ],
      },
      demo: {
        files: [{
            cwd: 'dist/js',
            src: 'typo.min.js',
            dest: 'demo/js',
            expand: true
          }
        ],
      },
      git: {
        files: [{
            cwd: 'dist',
            src: '**/*',
            dest: '../git/typo/dist',
            expand: true
          },
          {
            cwd: 'src',
            src: '**/*',
            dest: '../git/typo/src',
            expand: true
          },
          {
            cwd: 'demo',
            src: '**/*',
            dest: '../git/typo/demo',
            expand: true
          },
          {
            cwd: '',
            src: 'Gruntfile.js',
            dest: '../git/typo',
            expand: true
          },
          {
            cwd: '',
            src: 'package.json',
            dest: '../git/typo',
            expand: true
          }
        ],
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('dist', ['copy:dist']);
  grunt.registerTask('demo', ['copy:demo']);
  grunt.registerTask('git', ['copy:git']);
  grunt.registerTask('all', ['copy:dist', 'copy:demo', 'copy:git']); 
};