// https://github.com/benmosher/eslint-plugin-import/issues/1396
const resolver = {
  [require.resolve('eslint-import-resolver-node')]: {}
}

module.exports = {
  'import/resolver': resolver,
  'import/extensions': ['.js', '.jsx', '.mjs', '.cjs', '.ts', '.tsx']
}
