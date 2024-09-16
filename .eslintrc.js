module.exports = {
  extends: ['universe/native'],
  env: {
    node: true,
  },
  rules: {
    'import/order': 0,
    '@typescript-eslint/ban-types': 'off',
    'no-var': 'error',
    'no-console': 'warn',
    'prettier/prettier': ['error', { bracketSameLine: false }],
  },
};
