
// https://poi.js.org/config.html#entry
const entry = {
  layout: 'src/layout/bundle.js'
}

const output = {
  format: 'cjs',
  target: 'web',
  dir: 'dist/poi',
  clean: false,
}

const babel = {
  jsx: 'vue'
}

/** @type {import('poi').Config} */
const config = {
  entry,
  output,
  babel,
}

module.exports = config

