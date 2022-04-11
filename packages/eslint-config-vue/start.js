module.exports = {
  extends: [
    '@peterek/base/start',
    'plugin:vue/essential',
    require.resolve('eslint-config-standard')
  ],
  env: {
    'vue/setup-compiler-macros': true
  },
  settings: require('@peterek/eslint-config-base/import')
}
