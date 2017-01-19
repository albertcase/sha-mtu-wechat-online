'use strict';
var module_path = '../../../';
var gulp = require(module_path+'gulp');
var uglify = require(module_path+'gulp-uglify');
var pump = require(module_path+'pump');

var fjs = [
  {
    'old':'../../src/Wechat/ApiBundle/Resources/public/js/before',
    'new':'../../src/Wechat/ApiBundle/Resources/public/js'
  },
];

var fcss = [
  {
    'old':'../../src/Wechat/ApiBundle/Resources/public/css/before',
    'new':'../../src/Wechat/ApiBundle/Resources/public/js'
  },
];

gulp.task('compress', function (cb) {
  pump([
        gulp.src('lib/*.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});
