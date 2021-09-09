/*
 * @Author: leslie
 * @Date: 2021-08-25 10:27:13
 * @LastEditors: leslie
 * @LastEditTime: 2021-08-25 10:27:13
 * @Description: systemInfo
 */
import axios from './axios';
let baseURL = import.meta.env.VITE_APP_API_BASE_URL;

export const getSerialDetail = (params = {}) => {
  const url = `${baseURL}/page/serial/detail`;
  return axios.get(url, { params });
};
