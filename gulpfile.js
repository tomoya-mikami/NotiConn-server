const gulp = require("gulp");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const uglify = require("gulp-uglify");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const webpackConfig = require("./webpack.config");
const typescript = require('gulp-typescript');

gulp.task('ts', function () {
    return gulp.src([
        './src/*.ts',
        '!./node_modules/**'
    ])
        .pipe(typescript())
        .pipe(gulp.dest('./dist'));
});

gulp.task("webpack", () => {
    return webpackStream(webpackConfig, webpack)
        .pipe(plumber())
        .pipe(gulp.dest("dist"));
});

gulp.task("uglify", () => {
    return gulp.src('dist/bundle.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task("default", gulp.series('ts', 'webpack', 'uglify', done => {
    done();
}));
