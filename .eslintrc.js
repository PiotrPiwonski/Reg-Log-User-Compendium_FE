module.exports = {
  ignorePatterns: [
    // disable linter for tests and stories, not worth it
    '*.test.ts',
    '*.test.tsx',
  ],
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'prettier',
    'plugin:css/recommended',
    'plugin:css-modules/recommended',
  ],
  plugins: ['import', 'css', 'css-modules'],
  rules: {
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'prefer-const': 'warn',
    'no-console': 'warn',
    'no-shadow': 'off',
    'no-multiple-empty-lines': 'error',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/prefer-readonly': 'off',
    '@typescript-eslint/no-implicit-any-catch': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'import/order': [
      1,
      {
        groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
        'newlines-between': 'always',
      },
    ],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
        exclude: ['types/frontend'],
      },
    },
    'import/ignore': ['.css$'],
  },
};
