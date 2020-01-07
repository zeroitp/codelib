/// <binding />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

//https://semaphoreci.com/community/tutorials/getting-started-with-gulp-js

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var run = require('gulp-run');

var jsSources = ['wwwroot/scripts/*.js'];
var webConfig = ['obj/Debug/netcoreapp3.0/PubTmp/Out/web.config'];
var jsonFile = ['bin/Debug/netcoreapp3.0/*.json'];
var wwwroot = ['wwwroot'];
var dllFile = ['bin/Debug/netcoreapp3.0/*.dll',
    'bin/Debug/netcoreapp3.0/*.pdb',
    'bin/Debug/netcoreapp3.0/*.exe'
];

var desFolder = 'D:/Project Web/CodeLibrary/publish/';

gulp.task('copy', gulp.series(function (done) {
    gulp.src(webConfig).pipe(gulp.dest(desFolder));
    gulp.src(jsonFile).pipe(gulp.dest(desFolder));
    gulp.src(wwwroot).pipe(gulp.dest(desFolder));
    gulp.src(dllFile).pipe(gulp.dest(desFolder));

    done();
}));

gulp.task('js', gulp.series(function (done) {
    gulp.src(jsSources)
        .pipe(uglify())
        .pipe(concat('script.js'))
        .pipe(gulp.dest(jsSources));

    done();
}));

gulp.task("default", gulp.series('copy', 'js'));