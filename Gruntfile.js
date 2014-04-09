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
    //testing
    grunt.loadNpmTasks('grunt-simple-mocha');
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
        simplemocha: {
            test: {
                src:['test/*.js', '!test/acceptance/*_test.js'],
                options:{
                    reporter: 'spec',
                    slow: 500,
                    timeout: 1000,
                    node_env: 'test'
                }
            }
        },

        casperjs: {
            options: {
                async: {
                    parallel: false
                }
            },
            files: []//**********add acceptance tests
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
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'bower_components/handlebars/handlebars.js',
                    'bower_components/ember/ember.js',
                    'bower_components/ember-data/ember-data.js',
                    'bower_components/moment/moment.js',
                    'public/js/app.js',
                    'public/js/store.js',
                    'public/js/helpers/helpers.js',
                    'public/js/router.js',
                    'public/js/routes/*.js',
                    'public/js/controllers/*.js',
                    'public/js/views/*.js'
                ],
                dest: 'dist/built.js'
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
    grunt.registerTask('test', ['build:dev', 'env:dev', 'simplemocha']);
    grunt.registerTask('test:acceptance', ['build:dev', 'express:dev', 'casperjs', 'dropUsers']);
    grunt.registerTask('build:dev', ['emberTemplates']);
    grunt.registerTask('build:prod', ['clean', 'emberTemplates', 'concat', 'uglify']);
    grunt.registerTask('server', [ 'env:dev', 'build:dev', 'express:dev', 'watch:express']);
    grunt.registerTask('travis', [ 'jshint', 'test']);

};
