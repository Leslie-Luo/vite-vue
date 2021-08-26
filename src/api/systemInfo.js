/*
 * @Author: leslie
 * @Date: 2021-08-25 10:27:13
 * @LastEditors: leslie
 * @LastEditTime: 2021-08-25 10:27:13
 * @Description: systemInfo
 */
import axios from './axios';
let baseURL = import.meta.env.VITE_APP_API_BASE_URL;

export const login = function (data) {
  return axios({
    url: `${baseURL}/user/h5_login`,
    data,
    method: 'post',
  });
};
