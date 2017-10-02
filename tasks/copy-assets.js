/**
 * Copy html, css, js and image files into dist directory
 */
var gulp = require('gulp');
var rename = require('gulp-rename');
var merge = require('merge-stream');

gulp.task('copy-assets', ['clean-dist'], function(){
    var comfortaaCss = gulp.src('node_modules/typeface-comfortaa/index.css')
        .pipe(rename('font-comfortaa.css'))
        .pipe(gulp.dest('dist/css/'));
    var lib = gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/handlebars/handlebars.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js'])
        .pipe(gulp.dest('dist/js/'));
    var fonts = gulp.src(['node_modules/typeface-comfortaa/files/*',
              'node_modules/lato-font/fonts/lato-light/*',
              'node_modules/lato-font/fonts/lato-light-italic/*',
              'node_modules/lato-font/fonts/lato-normal/*',
              'node_modules/lato-font/fonts/lato-normal-italic/*',
              'node_modules/lato-font/fonts/lato-medium/*',
              'node_modules/lato-font/fonts/lato-medium-italic/*',
              'node_modules/lato-font/fonts/lato-semibold/*',
              'node_modules/lato-font/fonts/lato-semibold-italic/*',
              'node_modules/lato-font/fonts/lato-bold/*',
              'node_modules/lato-font/fonts/lato-bold-italic/*',
              'node_modules/font-awesome/fonts/*'])
        .pipe(gulp.dest('dist/fonts/'));
    var img = gulp.src('content/img/*')
        .pipe(gulp.dest('dist/img/'));
    var articleImg = gulp.src('content/md/*/img/*')
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest('dist/img/'));

    return merge(comfortaaCss, lib, fonts, img, articleImg);
});