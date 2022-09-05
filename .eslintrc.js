module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'multiline-ternary': 'off',
    'object-curly-spacing': 'off',
    'space-before-function-paren': 'off',
    'react/display-name': 'off'
  }
}
