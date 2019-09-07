import bili from '@frontend-bindings/conventions-use-bili'
import { Config, ConfigOutput } from 'bili'

const input = {
  index: 'src/layout/index.vue',
  mixins: 'src/layout/mixins/index.js',
  sfc: 'src/layout/bundle.js'
}

/** @type {import('bili').ConfigOutput} */
const output: ConfigOutput = {
  dir: 'dist/lib',
  format: ['esm', 'cjs'],
  sourceMap: true,
  minify: true
}

const plugins = {
  babel: {
    // https://github.com/rollup/rollup-plugin-babel
    // https://github.com/egoist/bili/issues/196#issuecomment-499325258
    runtimeHelpers: true,
    presetOptions: {
      corejs: 3
    }
  },
  vue: {
    // https://rollup-plugin-vue.vuejs.org/options.html#normalizer
    // https://bili.egoist.sh/#/recipes/vue-component
    include: '**/*.vue'
  },
  copy: {
    targets: [
      { src: 'src/styles/', dest: 'dist' },
      { src: 'src/layout/', dest: 'dist/sfc' }
    ]
  },
  svg: true
}

const config: Config = {
  ...bili(input)(process.env),
  input,
  plugins,
  output
}

export default config
