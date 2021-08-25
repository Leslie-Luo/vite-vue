/*
 * @Author: leslie
 * @Date: 2021-08-25 10:53:58
 * @LastEditors: leslie
 * @LastEditTime: 2021-08-25 10:53:58
 * @Description: .eslintrc
 */
module.exports = {
  parser: 'vue-eslint-parser',
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
