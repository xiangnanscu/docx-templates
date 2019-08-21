var browserify = require("browserify");
var fs = require("fs");

var buffer = browserify("libss/indexBrowser.js")
  .transform("babelify", {
    presets: ["es2015"]
  })
  // .transform('uglifyify', { global: true  })
  .bundle();
buffer.pipe(fs.createWriteStream("dist/docxt.js"));
// buffer.pipe(fs.createWriteStream("dist/docxt2.js"));