var browserify = require('browserify');
var fs = require('fs');

browserify('test/index.js')
  .transform(require('stringify'), {
    appliesTo: { includeExtensions: ['.html'] }
  })
  .bundle().pipe(process.stdout);
