var gulp = require('gulp');
var concat = require('gulp-concat');
var server = require('gulp-server-livereload');

gulp.task('styles', function() {
    return gulp.src('./bower_components/**/*.min.css')
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('./app/css/'));
});

gulp.task('scripts', function() {
    return gulp.src('./bower_components/**/*.min.js')
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('./app/js/'));
});

gulp.task('serve', function() {
    gulp.src('app')
        .pipe(server({
            livereload: true,
            directoryFile: './app/index.html',
			port: 8080,
            open: true
        }));
});

gulp.task('default', ['styles', 'scripts', 'serve']);
