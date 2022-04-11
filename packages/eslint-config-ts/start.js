module.exports = {
  extends: ['@peterek/base/start', require.resolve('eslint-config-standard')],
  parser: '@typescript-eslint/parser',
  settings: require('@peterek/eslint-config-base/import')
}
