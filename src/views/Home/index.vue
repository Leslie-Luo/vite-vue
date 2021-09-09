<!--
 * @Author: leslie
 * @Date: 2021-08-25 09:38:02
 * @LastEditors: leslie
 * @LastEditTime: 2021-08-25 09:38:02
 * @Description: 请填写简介
-->
<template>
  <div>
    Home
    <div>
      <van-button>Axios</van-button>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant';
import { getSerialDetail } from '@/api/api';
export default {
  components: {
    'van-button': Button,
  },
  created() {
    this.getSerialDetailTest();
  },
  methods: {
    getSerialDetailTest() {
      getSerialDetail()
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
