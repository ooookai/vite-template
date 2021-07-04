module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
      },
    ],
  },
}
