/*
 * @Author: leslie
 * @Date: 2021-08-25 10:27:13
 * @LastEditors: leslie
 * @LastEditTime: 2021-08-25 10:27:13
 * @Description: systemInfo
 */
import axios from './axios';
let baseURL = '';
if (process.env.NODE_ENV === 'development') {
  baseURL = '/api';
} else if (window.location.host.indexOf('imagiclamp.cn') !== -1) {
  baseURL = 'https://dev.imagiclamp.cn/chery';
} else {
  baseURL = 'https://chery.ihuyue.cn/chery';
}
export const login = function (data) {
  return axios({
    url: `${baseURL}/user/h5_login`,
    data,
    method: 'post',
  });
};
