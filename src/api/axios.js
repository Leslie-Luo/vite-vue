/*
 * @Author: leslie
 * @Date: 2021-08-25 10:26:06
 * @LastEditors: leslie
 * @LastEditTime: 2021-08-25 10:26:06
 * @Description: axios
 */
import axios from 'axios';
const service = axios.create({
  timeout: 30000, // 请求超时时间设置
});
// 发起请求之前的拦截器
service.interceptors.request.use(
  (config) => {
    // 如果有token 就携带tokon
    // const token = window.localStorage.getItem("accessToken");
    // if (token) {
    //   config.headers.common.Authorization = token;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (response.status !== 200) {
      return Promise.reject(new Error(res.msg || 'Error'));
    }
    if (res.code === 10000) {
      return res.data;
    }
    return Promise.reject(new Error(res.msg || 'Error'));
  },
  (error) => {
    return Promise.reject(error.response.data);
  }
);
export default service;
