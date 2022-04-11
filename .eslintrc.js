module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  globals: {
    __DEV__: true,
    __VERSION__: true
  },
  extends: [
    './packages/eslint-config-base/start.js',
    './packages/eslint-config-js/js.js',
    './packages/eslint-config-base/end.js'
  ]
}
