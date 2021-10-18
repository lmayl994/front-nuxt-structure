module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': 'error',
    'tabWidth': 2,
    'singleQuote': true,
    'trailingComma': 'all',
    'bracketSpacing': true,
    'semi': true,
    'useTabs': false,
    'bracketSpacing': true,
    'arrowParens': 'always'

  },
}
