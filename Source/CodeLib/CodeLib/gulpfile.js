/// <binding AfterBuild='copy' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

//https://semaphoreci.com/community/tutorials/getting-started-with-gulp-js

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var jsSources = ['wwwroot/scripts/*.js'];
var webConfig = ['obj/Debug/netcoreapp3.0/PubTmp/Out/web.config'];
var jsonFile = ['package.json',
    'bin/Debug/netcoreapp3.0/CodeLib.runtimeconfig.json',
    'bin/Debug/netcoreapp3.0/CodeLib.deps.json',
    'appsettings.json',
    'appsettings.Development.json'
];
var wwwroot = ['wwwroot'];
var dllFile = ['bin/Debug/netcoreapp3.0/CodeLib.dll',
    'bin/Debug/netcoreapp3.0/CodeLib.exe',
    'bin/Debug/netcoreapp3.0/CodeLib.pdb',
    'bin/Debug/netcoreapp3.0/CodeLib.Views.dll',
    'bin/Debug/netcoreapp3.0/CodeLib.Views.pdb'
];

var desFolder = 'D:\Project Web\CodeLibrary\test';

gulp.task('copy', gulp.series(function () {
    gulp.src(webConfig).pipe(gulp.dest(desFolder));
    //gulp.src(jsonFile).pipe(gulp.dest(desFolder));
    //gulp.src(wwwroot).pipe(gulp.dest(desFolder));
    //gulp.src(dllFile).pipe(gulp.dest(desFolder));
}));

gulp.task('js', gulp.series(function () {
    gulp.src(jsSources)
        .pipe(uglify())
        .pipe(concat('script.js'))
        .pipe(gulp.dest(jsSources));        
}));

gulp.task("default", gulp.series('copy'));