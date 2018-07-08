// Include nodejs modules
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// Main task
gulp.task('serve', ['sass'], () => {
    browserSync.init({
        server: "./src"
    });

    gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers & insert css prefixes
gulp.task('sass', () => {
  return gulp.src("src/scss/*.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 3 versions'],
    cascade: false
  }))

  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(gulp.dest("src/css"))
  .pipe(browserSync.stream());
});

// Set start task
gulp.task('start', ['serve']);
