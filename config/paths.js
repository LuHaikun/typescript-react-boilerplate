const fs = require('fs')
const path = require('path')

const NODE_MODULES = '/node_modules/'
const SOURCE_PATH = fs.realpathSync(process.cwd())
const SRC_PATH = path.resolve(SOURCE_PATH, './src')
const DIST_PATH = path.resolve(SOURCE_PATH, './dist')

function getPath (...params) {
  return path.resolve(SOURCE_PATH, ...params)
}

module.exports = {
  getPath,
  SRC_PATH,
  DIST_PATH,
  NODE_MODULES
}
