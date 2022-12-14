module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'react/jsx-filename-extension': [1, { allow: 'as-needed' }]
  }
};
