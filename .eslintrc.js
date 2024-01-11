module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['unused-imports'],
  rules: {
    indent: ['error', 2],
    'no-console': 'error',
    semi: ['warn', 'always'],
    'no-extra-semi': 'warn',
    'no-undef': 'error',
    'unused-imports/no-unused-imports': 'error',
    "eol-last": "error"
  }
};
