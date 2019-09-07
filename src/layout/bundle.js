/**
 * Bundle up Vue components
 *
 * INCOMPLETE.
 *
 * See https://poi.js.org/
 */

import * as importingComponents from './components'
import * as mixins from './mixins'
import Layout from './index.vue'

const components = {
  Layout,
  ...importingComponents
}

export { components, mixins }

/**
 * Do pretty much the same as ../icons/index.svg.
 * This time, it's for properly packaging Layout.
 */
const req = require.context('../icons/svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

export const install = function(Vue, opts = {}) {
  /* eslint-disable no-unused-vars */
  for (const [name, component] of Object.entries(components)) {
    const hypenated = name.replace(/\B([A-Z])/g, '-$1').toLowerCase()
    // console.log('element-ui', name, hypenated)
    Vue.component(hypenated, component)
  }
}
