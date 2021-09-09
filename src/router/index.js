/*
 * @Author: leslie
 * @Date: 2021-08-25 09:37:29
 * @LastEditors: leslie
 * @LastEditTime: 2021-08-25 09:37:31
 * @Description: router 路由配置
 */
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  // 开启历史模式
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: '首页',
        keepAlive: false, // 设置页面是否需要使用缓存-默认为 false
      },
      component: () => import('@/views/Home/index.vue'),
    },
    {
      path: '/about',
      name: 'About',
      meta: {
        title: '关于',
        keepAlive: true, // 设置页面是否需要使用缓存-默认为 false
      },
      component: () => import('@/views/About/index.vue'),
    },
  ],
});

export default router;
