(function(){
    'use strict';

    module.exports = function(grunt) {

        var scriptsDirectory,
            stylesDirectory;

        scriptsDirectory = 'src/scripts/';
        stylesDirectory = 'src/styles/';

        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),

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
            },

            //Concatenation
            concat: {               
                jsConcat: {
                    src: ['src/scripts/jquery.min.js', 'src/scripts/bootstrap.min.js', 'src/scripts/angular.min.js', 'src/**/*.module.js', 'src/**/*.service.js', 'src/**/*.routing.js', 'src/**/*.controller.js'],
                    dest: 'dist/built.js'
            },
                 cssConcat: {
                     src: ['src/styles/bootstrap.min.css', 'src/styles/tether.min.css','src/styles/ng-notify.min.css', 'src/styles/ngPrint.min.css', 'src/assets/main.css'],
                     dest: 'dist/styles.css'
                }
            },

            //Minification
            uglify: {
                jsToDistMin: {
                    options: {
                        mangle:true
                    },
                    files: [{
                        cwd: 'dist/',
                        src: 'built.js',
                        dest: 'dist/built.min.js'
                    }]
                }
            },
    
            cssmin: {
                cssToDistMin: {
                    files: [{
                        cwd: 'dist/',
                        src: 'styles.css',
                        dest: 'dist/styles.min.css'
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
                        src: ['**/*.html','!index.html'],
                        dest: 'dist/'
                    }]
                }
            } 
        })
            
            grunt.registerTask('default', [
                'dev'
            ]);

            grunt.registerTask('dev', [
                'copy:jsNpmToScripts',
                'copy:cssNpmToStyles'
            ]);

            grunt.registerTask('prod', [
                'concat:jsConcat',
                'uglify:jsToDistMin',
                'cssmin:cssToDistMin',
                'htmlmin:htmlToDistMin'
            ]);

            grunt.loadNpmTasks('grunt-contrib-concat');
            grunt.loadNpmTasks('grunt-contrib-uglify');
            grunt.loadNpmTasks('grunt-contrib-cssmin');
            grunt.loadNpmTasks('grunt-contrib-htmlmin');
            grunt.loadNpmTasks('grunt-contrib-copy');
        }
})();