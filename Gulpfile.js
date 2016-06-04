var gulp = require('gulp');
var concat = require('gulp-concat');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');

gulp.task('min-css', function() {
    gulp.src([
        './bower_components/material-design-color-palette/css/material-design-color-palette.min.css',
        './bower_components/angular-material/angular-material.min.css'
        ])
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('./app/css/'));
});

gulp.task('min-js', function() {
    gulp.src('./app/js/services/*.js')
        .pipe(concat('services.js'))
        .pipe(gulp.dest('./app/js/'));

    gulp.src('./app/js/controllers/*.js')
        .pipe(concat('controllers.js'))
        .pipe(gulp.dest('./app/js/'));

    gulp.src([
        './bower_components/angular/angular.min.js',
        './bower_components/angular-animate/angular-animate.min.js',
        './bower_components/angular-aria/angular-aria.min.js',
        './bower_components/angular-messages/angular-messages.min.js',
        './bower_components/angular-resource/angular-resource.min.js',
        './bower_components/angular-route/angular-route.min.js',
        './bower_components/angular-material/angular-material.min.js'
        ])
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('./app/js/'));
});

gulp.task('compileSass', function() {
	gulp.src('./app/scss/*.scss')
		.pipe(sass({outputStyle:"compressed"}).on('error', sass.logError))
		.pipe(concat('main.min.css'))
		.pipe(gulp.dest('./app/css/'));
});

gulp.task('distribute', function() {
});

gulp.task('compileSass:watch', function() {
	gulp.watch('./app/scss/*.scss', ['compileSass']);
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

gulp.task('default', ['styles', 'compileSass:watch', 'scripts', 'serve']);
