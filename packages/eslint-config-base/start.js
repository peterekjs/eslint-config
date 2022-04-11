const isProduction = process.env.NODE_ENV === 'production'
const errorOnProductionOnly = isProduction ? 'error' : 'warn'

module.exports = {
  extends: ['./prettier.js'],

  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: false
    }
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ],

  rules: {
    'no-console': errorOnProductionOnly,
    'no-debugger': errorOnProductionOnly,
    'no-unused-vars': errorOnProductionOnly
  }
}
