const base = require('@frontend-bindings/conventions-use-prettier')
module.exports = {
  ...base,
  // @TODO: Make this work with ESLint so we can remove lines below
  // otherwise, we keep them here.
  trailingComma: 'none',
  semi: false
}
