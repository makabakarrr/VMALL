var gulp = require('gulp');
var sass = require('gulp-sass')
gulp.task('sass',function () {
    gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./details.css/'));
});

gulp.task('scsstocss',function () {
    gulp.watch('./sass/*.scss',['sass']);
});