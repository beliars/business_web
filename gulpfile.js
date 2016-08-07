var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    notify = require('gulp-notify'),
    minify = require('gulp-cssmin'),
    sass = require('gulp-sass');

gulp.task('minify_js', function() {
    	gulp.src('js/src/*.js')
            .pipe(concat('script.js'))
            .pipe(uglify())
            .pipe(gulp.dest('js/prod'))
            .pipe(notify('Minify js is completed!'));
});

gulp.task('minify_css', function() {
        gulp.src('css/src/*.scss')
            .pipe(sass())
            .pipe(concat('styles.css'))
            .pipe(minify())
            .pipe(gulp.dest('css/prod'))
            .pipe(notify('Minify css is completed!'));
});

gulp.task('default', function() {
    gulp.watch('js/src/*.js', ['minify_js']);
    gulp.watch('css/src/*.scss', ['minify_css']);
});
