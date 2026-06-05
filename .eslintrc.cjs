module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: ['.next', 'dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  rules: {},
}
