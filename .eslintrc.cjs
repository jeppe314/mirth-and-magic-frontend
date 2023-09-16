module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    // "eslint:recommended",
    'plugin:@typescript-eslint/recommended',
    // "plugin:react-hooks/recommended",
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/prop-types': 'off', // Since you're using TypeScript, you might not need PropTypes validation
    'react/jsx-props-no-spreading': 'off', // If you use prop spreading, you might want to turn this off
    '@typescript-eslint/explicit-function-return-type': 'off', // Consider turning this on if you want to enforce return types on functions
    '@typescript-eslint/no-unused-vars': ['error'], // Warns if you have any unused variables in your TypeScript files
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'prettier/prettier': 'error', // Ensures that your code conforms to Prettier formatting
    'max-len': [1, { code: 120 }],
  },
};
