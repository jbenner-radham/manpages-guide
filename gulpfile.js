'use strict';

const $           = require('gulp-load-plugins')();
const browserSync = require('browser-sync').create();
const dateTime    = require('@radioactivehamster/date-time');
const fs          = require('fs');
const gulp        = require('gulp');
const pkg         = require('./package.json');
const yaml        = require('js-yaml');

gulp.task('js', () => {
    return gulp.src('src/js/**/*.js')
               .pipe($.eslint())
               .pipe($.eslint.format())
               .pipe($.eslint.failAfterError())
               .pipe($.plumber())
               .pipe($.sourcemaps.init())
               .pipe($.babel())
               .pipe($.sourcemaps.write('.'))
               .pipe(gulp.dest('dist'))
               .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', ['js'], () => {
    browserSync.init({
        notify: true,
        port:   9000,
        server: {
            baseDir: ['.tmp', 'app']
        }
    });

    gulp.watch([
        'app/*.html',
        '.tmp/**/*.*'
    ]).on('change', browserSync.reload);

    gulp.watch('.tmp/js/**/*.js', ['scripts']);
});

gulp.task('handlebars', () => {
    let author = pkg.author.replace(/ <.+>/i, '');
    let tidyrc = yaml.load(fs.readFileSync('./.tidyrc').toString());

    return gulp.src('./src/templates/**/*.hbs')
               .pipe($.stachio({author: author, timestamp: dateTime()}))
               .pipe($.htmlhint())
               .pipe($.htmlhint.reporter())
               .pipe($.htmltidy(tidyrc))
               .pipe(gulp.dest('./dist'));
});

gulp.task('yaml', () => {
    return gulp.src('./data/*.yml')
               .pipe($.yaml({space: 4}))
               .pipe(gulp.dest('./data/'));
});

gulp.task('default', ['serve']);
