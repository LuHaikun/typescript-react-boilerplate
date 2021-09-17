module.exports = {
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'jsx-a11y','import'],
  env: {
    browser: true,
    es6: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    'func-names': 'off',
    'no-plusplus': 'off',
    'no-unused-vars': 'off',
    'linebreak-style': 'off',
    'no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    "react/jsx-props-no-spreading": "off",
    'import/extensions': ['error', 'ignorePackages', { 'js': 'never', 'jsx': 'never', 'ts': 'never', 'tsx': 'never' }],
    'react/jsx-filename-extension': ['error', { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/prop-types': ['off', { ignore: ['children'] }],
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/react-in-jsx-scope': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/display-name': 'off',
    'jsx-a11y/anchor-is-valid': 'off'
  }
}