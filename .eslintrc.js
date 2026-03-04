module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
  },
  babelOptions: {
    presets: ['module:react-native/babel-preset'],
    plugins: ['@babel/plugin-syntax-jsx'],
  },
};
