(function(){
    'use strict';

    module.exports = function(grunt) {

        var scriptsDirectory,
            stylesDirectory;

        scriptsDirectory = 'src/scripts/';
        stylesDirectory = 'src/styles/';

        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            //Minification
            uglify: {
                options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
                },
                jsToDistMin: {
                    files: [{
                        expand: true,
                        cwd: 'src/',
                        src: '**/*.js',
                        dest: 'dist/'
                    }]
                }
                },
    
            cssmin: {
                cssToDistMin: {
                    files: [{
                        expand: true,
                        cwd: 'src/',
                        src: '**/*.css',
                        dest: 'dist/'
                    }]
                }
                },

            htmlmin: {
                htmlToDistMin: {
                    options: {                                
                        collapseWhitespace: true,
                        removeComments: true
                    },
                    files: [{
                        expand: true,
                        cwd: 'src/',
                        src: '**/*.html',
                        dest: 'dist/'
                    }]
                }
                }, 
            //Copy files from node-modules to scripts
            copy: {
                cssNpmToStyles: {
                    files: [{
                        expand: true,
                        cwd: './node_modules/bootstrap/dist/css',
                        src: 'bootstrap.min.css*',
                        dest: stylesDirectory
                    }, {
                        expand: true,
                        cwd: './node_modules/tether/dist/css',
                        src: 'tether.min.css*',
                        dest: stylesDirectory
                    }, {
                        expand: true,
                        cwd: './node_modules/ng-notify/dist/css',
                        src: 'ng-notify.min.css*',
                        dest: stylesDirectory
                    }
                ]
                },
                jsNpmToScripts: {
                    files: [{
                        expand: true,
                        cwd: './node_modules/angular/',
                        src: 'angular.min.js*',
                        dest: scriptsDirectory
                    },  {
                        expand: true,
                        cwd: './node_modules/@uirouter/angularjs/release/',
                        src: 'angular-ui-router.min.js*',
                        dest: scriptsDirectory
                    },  {
                        expand: true,
                        cwd: './node_modules/bootstrap/dist/js/',
                        src: 'bootstrap.min.js*',
                        dest: scriptsDirectory
                    },  {
                        expand: true,
                        cwd: './node_modules/jquery/dist/',
                        src: 'jquery.min.js',
                        dest: scriptsDirectory
                    },  {
                        expand: true,
                        cwd: './node_modules/tether/dist/js/',
                        src: 'tether.min.js',
                        dest: scriptsDirectory
                    }, {
                        expand: true,
                        cwd: './node_modules/ng-notify/dist/',
                        src: 'ng-notify.min.js',
                        dest: scriptsDirectory
                    }
                ]
                }
                }    
            })

            grunt.registerTask('default', [
                'dev'
            ]);

            grunt.registerTask('dev', [
                'uglify:jsToDistMin',
                'cssmin:cssToDistMin',
                'htmlmin:htmlToDistMin',
                'copy:jsNpmToScripts',
                'copy:cssNpmToStyles',
            ]);

            grunt.loadNpmTasks('grunt-contrib-uglify');
            grunt.loadNpmTasks('grunt-contrib-cssmin');
            grunt.loadNpmTasks('grunt-contrib-htmlmin');
            grunt.loadNpmTasks('grunt-contrib-copy');
        }
})();