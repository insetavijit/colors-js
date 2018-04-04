var
    gulp = require("gulp"),
    color = require("ansi-colors"),
    log = require("fancy-log"),
    sourcemaps = require("gulp-sourcemaps"),
    plumber = require('gulp-plumber'),
    ts = require("gulp-typescript"),
    merge = require('merge2'),
    cp = require('copy'),
    del = require('del'),
    pkg = require('./package.json'),
    date = new Date(),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    dir = {
        "src": "src",
        "tsRoot": "src",
        "ts":'src/**/**.ts',
        "dist": "dist",
        "bin": ".bin",
        'types' : 'typings/cust'
    };

    /**
     * gulp v4.0
     * all changed !
     * 
     */
/* - the follow
clear ( .bin + dist + typings ) 
    --> sftLibs ( sft-vendor + sft-js [ with min version of js ] )
        --> event ( pug || ts || scss || js -( is tsc  + ... ) )
            --> extarnal methods :

*/

/**
 * @description Gulp clear task list [ 1 - stp / 4 ] 
 */
gulp.task('clr:bin' , gulp.series(()=>{
    return del(dir.bin + '/*');
}))
gulp.task('clr:types' , gulp.series(()=>{
    return del(dir.types + '/*');
}))
gulp.task('clr:dist' , gulp.series(()=>{
    return del(dir.dist + '/*');
}))

/**
 * @description Gulp sftLibs task list [ 2 - stp / 4 ]
 * 
 */

gulp.task('sft:map', gulp.series((done) => {
        gulp.src([
            dir.bin + '/js/**.map'
        ])
        .pipe(gulp.dest(dir.dist));
        done();
}))

/**
 * @description ts c
 */
gulp.task('tsc', gulp.series('clr:bin', 'clr:types' , (done) => {
    var
        tSrc = gulp.src(dir.ts)
            .pipe(sourcemaps.init())
            .pipe(ts({
                declaration: true,
                removeComments: true
            }));
    return merge([
        tSrc.dts.pipe(gulp.dest(dir.types)),
        tSrc.js.pipe(sourcemaps.write("."))
            .pipe(gulp.dest(dir.bin + '/js'))
    ]);
    done();
}));
gulp.task('js' , gulp.series('tsc'  , 'sft:map', (done)=>{
    gulp.src(dir.bin + '/js/**.js')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(gulp.dest(dir.dist)) // save .js
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dir.dist))
    done();
}))
/**
 * @description because gulp 4.0 not support methode buinding before decliaring methods 
 * we are decliaring them at verry last point 
 * so , we have those methods to run as we want
 */

gulp.task('clear', gulp.parallel('clr:bin', 'clr:dist', 'clr:types'));
/*| build tasks  */

gulp.task('js:w' , gulp.parallel('js' , (done)=>{
    gulp.watch(dir.ts, gulp.parallel('js'))
    done();
}));
gulp.task('all', gulp.series('clear', 'js'));
gulp.task('all:w', gulp.series( 'clear','js:w'));
