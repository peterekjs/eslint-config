const standard = {
  ...require('prettier-config-standard')
}
if (standard.jsxBracketSameLine) {
  standard.braketSameLine = standard.jsxBracketSameLine
  delete standard.jsxBracketSameLine
}

module.exports = {
  plugins: ['prettier'],
  extends: ['standard'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        ...standard,
        endOfLine: 'auto'
      }
    ]
  }
}
