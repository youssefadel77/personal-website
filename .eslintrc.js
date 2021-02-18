module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'script'
  },
  extends: [
    // https://github.com/standard/standard
    'standard',
    // https://github.com/prettier/eslint-config-prettier
    'prettier',
    'prettier/standard'
  ],
  plugins: ['import', 'node', 'prettier', 'promise', 'standard'],
  rules: {
    'import/no-relative-parent-imports': 'off',
    'import/order': 'off'
  }
};
