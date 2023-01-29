module.exports = {
  ignorePatterns: [
    // disable linter for tests and stories, not worth it
    '*.stories.tsx',
    '*.test.ts',
    '*.test.tsx',

    // disable js config specific files
    'config-overrides.js',
    '.eslintrc.js',
    'external/**',
  ],
  extends: ['react-app', 'react-app/jest', 'plugin:jsx-a11y/recommended', 'plugin:import/recommended', 'prettier'],
  plugins: ['import'],
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
      },
    },
  },
};
