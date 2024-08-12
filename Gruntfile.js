const { watch } = require("fs");

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            },
            html: {
                files: ['src/index.html', 'src/bolsa-familia.html', 'src/boletim-historico.html', 'src/aproveitamento-estudos.html'],
                tasks: ['replace:dev']
            }
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'ENDERECO_DO_MAIN_JS',
                            replacement: '../src/scripts/main.js'
                        },
                        {
                            match: 'ENDERECO_DO_BOLSA_JS',
                            replacement: '../src/scripts/bolsa-familia.js'
                        },
                        {
                            match: 'ENDERECO_DO_APROV_JS',
                            replacement: '../src/scripts/aproveitamento-estudos.js'
                        },
                        {
                            match: 'ENDERECO_DO_BOLETIM_JS',
                            replacement: '../src/scripts/boletim-historico.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html', 'src/bolsa-familia.html', 'src/boletim-historico.html', 'src/aproveitamento-estudos.html'],
                        dest: 'dev/'
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'ENDERECO_DO_MAIN_JS',
                            replacement: './scripts/main.min.js'
                        },
                        {
                            match: 'ENDERECO_DO_BOLSA_JS',
                            replacement: './scripts/bolsa-familia.min.js'
                        },
                        {
                            match: 'ENDERECO_DO_APROV_JS',
                            replacement: './scripts/aproveitamento-estudos.min.js'
                        },
                        {
                            match: 'ENDERECO_DO_BOLETIM_JS',
                            replacement: './scripts/boletim-historico.min.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html', 'prebuild/bolsa-familia.html', 'prebuild/boletim-historico.html', 'prebuild/aproveitamento-estudos.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'prebuild/index.html': 'src/index.html',
                    'prebuild/bolsa-familia.html': 'src/bolsa-familia.html',
                    'prebuild/boletim-historico.html': 'src/boletim-historico.html',
                    'prebuild/aproveitamento-estudos.html': 'src/aproveitamento-estudos.html'
                }
            }
        },
        clean: ['prebuild'],
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js',
                    'dist/scripts/aproveitamento-estudos.min.js': 'src/scripts/aproveitamento-estudos.js',
                    'dist/scripts/boletim-historico.min.js': 'src/scripts/boletim-historico.js',
                    'dist/scripts/bolsa-familia.min.js': 'src/scripts/bolsa-familia.js'
                }
            }
        }
    })


grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-replace');
grunt.loadNpmTasks('grunt-contrib-htmlmin');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-uglify');


grunt.registerTask('default', ['watch']);
grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist', 'clean', 'uglify']);

}