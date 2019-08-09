const plugins = {
  babel: {
    // https://github.com/rollup/rollup-plugin-babel
    // https://github.com/egoist/bili/issues/196#issuecomment-499325258
    runtimeHelpers: true,
    presetOptions: {
      corejs: 3,
    }
  },
  vue: {
    // https://rollup-plugin-vue.vuejs.org/options.html#normalizer
    // https://bili.egoist.sh/#/recipes/vue-component
    include: '**/*.vue',
  },
  copy: {
    targets: [
      { src: 'src/styles/', dest: 'dist' },
      { src: 'src/layout/', dest: 'dist/sfc' },
    ],
  },
  svg: true,
}

const input = {
  index: 'src/layout/index.vue',
  mixins: 'src/layout/mixins/index.js',
  sfc: 'src/layout/bundle.js',
}

/** @type {import('bili').ConfigOutput} */
const output = {
  dir: 'dist/lib',
  format: ['esm', 'cjs'],
}

/** @type {import('bili').Config} */
module.exports = {
  comments: true,
  input,
  output,
  plugins,
}
