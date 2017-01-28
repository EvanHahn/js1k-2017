const path = require('path')
const mkdirp = require('mkdirp')
const jscrush = require('jscrush')
const fs = require('fs')
const uglify = require('uglify-js')
const size = require('./size')

const SRC_PATH = path.resolve(__dirname, '..', 'src', 'index.js')
const DIST_FOLDER = path.resolve(__dirname, '..', 'dist')
const DIST_PATH = path.resolve(DIST_FOLDER, '..', 'index.js')

function build () {
  const minified = uglify.minify(SRC_PATH).code
  const crushed = jscrush(minified)

  if (size(minified) <= size(crushed)) {
    return minified
  } else {
    return crushed
  }
}

if (require.main === module) {
  mkdirp.sync(DIST_FOLDER)
  fs.writeFileSync(DIST_PATH, build(), 'utf8')
}

module.exports = build
