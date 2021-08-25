/*
 * @Author: leslie
 * @Date: 2021-08-25 10:03:13
 * @LastEditors: leslie
 * @LastEditTime: 2021-08-25 10:03:13
 * @Description: vuex
 */
import { createStore } from 'vuex';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default createStore({
  state,
  getters,
  mutations,
  actions,
});
