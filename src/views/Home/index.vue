<!--
 * @Author: leslie
 * @Date: 2021-08-25 09:38:02
 * @LastEditors: leslie
 * @LastEditTime: 2021-08-25 09:38:02
 * @Description: 请填写简介
-->
<template>
  <div>Home</div>
</template>

<script>
import { login } from '@/api/systemInfo';
export default {
  created() {
    this.loginTest();
  },
  methods: {
    loginTest() {
      login()
        .then((result) => {
          console.log('result: ', result);
        })
        .catch((error) => {
          console.log('error: ', error);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
