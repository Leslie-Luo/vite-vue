<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="nav-btn">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive" />
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.keepAlive" />
  </router-view>
</template>

<script>
export default {};
</script>

<style lang="scss">
#app {
  margin-top: 60px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .nav-btn {
    a {
      margin: 0 20px;
      font-size: 30px;
    }

    margin-bottom: 10px;
  }
}
</style>
