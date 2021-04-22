const gulp = require('gulp') 
const sass = require('gulp-sass') 
const concat = require('gulp-concat') 
const cssnano =require('gulp-cssnano')
const browserSync = require('browser-sync')

function style() {
    return gulp.src('./src/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream())
}

function watch() {
    browserSync. init({
        server:{
            baseDir:'./src',
            index: "/index.html"
        }
    })
}

gulp.watch('./src/sass/*.sass').on('change', gulp.series(style,browserSync.reload));

exports.watch = watch;