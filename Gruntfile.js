module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        nggettext_extract: {
            pot: {
                files: {
                    'private/po/template.pot': ['client/*.html', 'client/views/*/*.html', 'client/views/*/*/*.html', 'client/partials/*/*.html', 'client/partials/*.html', 'client/*.compatibility']
                }
            },
        },
        nggettext_compile: {
            all: {
                files: {
                    'client/js/translations.js': ['private/po/*.po']
                }
            },
        },
    });
    grunt.loadNpmTasks('grunt-angular-gettext');

    grunt.registerTask('default', ['nggettext_extract', 'nggettext_compile']);
};