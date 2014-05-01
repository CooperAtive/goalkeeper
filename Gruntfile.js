'use strict';

module.exports = function(grunt) {
    //build
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-browserify');
    //testing
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-casperjs');
    //deploy
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-forever');

    grunt.initConfig({
        //============== ENVIRONMENT
        env: {
            options: {
            },
            dev: {
                NODE_ENV: 'dev'
            },
            test: {
                NODE_ENV: 'test'
            }
        },
        //=============== TESTING
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/*.js']
            }
        },

        casperjs: {
            options: {
                async: {
                    parallel: false
                }
            },
            files: ['test/acceptance/*_test.js']
        },
        //=============== DEPLOY
        watch: {
            all: {
                files:['server.js', './**/*.js' ],
                tasks:['jshint']
            },
            express: {
                files: [
                    'server.js',
                    'api/**/*',
                    'public/js/**/*',
                    'routes/**/*.js',
                    'modles/**/*.js',
                    'index.html',
                    'Gruntfile.js'
                ],
                tasks: [ 'build:dev', 'express:dev' ],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        },

        forever: {
            server: {
                options: {
                    index: 'server.js',
                }
            }
        },

        //============= DEVELOPMENT
        jshint: {
            all: ['Gruntfile.js', 'server.js', 'api/**/*.js', 'public/js/**/*.js'],
            options: {
                jshintrc: true
            }
        },
        browserify: {
            prod: {
                src: ['public/js/*.js'],
                dest: 'dist/browser.js',
                options: {
                    transform: ['debowerify', 'hbsfy', 'uglifyify'],
                    debug: false
                }
            },
            dev: {
                src: ['public/js/app.js', 'public/js/*.js'],
                dest: 'dist/browser.js',
                options: {
                    transform: ['hbsfy'],
                    debug: true
                }
            }
        },
        clean: {
            build: {
                src: ['dist', 'dist']
            }
        },
        less: {
            development: {
                options: {
                    paths: ['assets/css']
                },
                files: {
                    'path/to/result.css': 'path/to/source.less'
                }
            },
            production: {
                options: {
                    paths: ['assets/css'],
                    cleancss: true,
                },
                files: {
                    'path/to/result.css': 'path/to/source.less'
                }
            }
        },
        emberTemplates: {
            compile: {
                options: {
                    templateBasePath: /public\/js\/templates\//
                },
                    files: {
                        'public/js/templates.js': 'public/js/templates/**/*.hbs'
                    }
            }
        },
        express: {
            options: {
                // Override defaults here
            },
            dev: {
                options: {
                    script: 'server.js',
                    node_env: 'dev'
                }
            },
            prod: {
                options: {
                    script: 'server.js',
                    node_env: 'production'
                }
            },
            test: {
                options: {
                    script: 'server.js',
                    node_env: 'test'
                }
            }
        }

    });
    grunt.registerTask('test', ['build:dev', 'env:dev', 'mochaTest']);
    grunt.registerTask('test:acceptance', ['build:dev', 'express:dev', 'casperjs', 'dropUsers']);
    grunt.registerTask('build:dev', ['emberTemplates']);
    grunt.registerTask('build:prod', ['clean', 'emberTemplates', 'concat', 'uglify']);
    grunt.registerTask('server', [ 'env:dev', 'build:dev', 'express:dev', 'watch:express']);
    grunt.registerTask('travis', [ 'mochaTest']);

};
