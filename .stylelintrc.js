/*
 * @Author: leslie
 * @Date: 2021-08-25 14:09:06
 * @LastEditors: leslie
 * @LastEditTime: 2021-08-25 14:09:06
 * @Description: stylelint
 */
module.exports = {
  defaultSeverity: 'error',
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'], //指定规则扩展
  plugins: ['stylelint-order'], //载入插件
  rules: {
    'no-empty-source': null,
  },
};
