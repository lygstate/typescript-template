const path = require('path');

module.exports = {
  extends: ['airbnb/base', 'airbnb-typescript/base'],
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
  ignorePatterns: ['**/dist/**/*', '**/vendor/*.js'],
  overrides: [
    {
    },
  ],
  rules: {
    'import/no-extraneous-dependencies': [
      'off', // disable first
      // waiting https://github.com/import-js/eslint-plugin-import/issues/2430
      {
        packageDir: [
          path.join(__dirname, './packages/empty')
        ],
      },
    ],
    "no-param-reassign": ["error", { "props": false }],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-underscore-dangle': [
      'error',
      {
        enforceInMethodNames: true,
        allowAfterThis: true,
      },
    ],
    'import/prefer-default-export': 'off',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
