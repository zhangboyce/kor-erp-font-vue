<template>
  <div id="app">
    <router-view name="page"></router-view>
  </div>
</template>

<script>
    export default {
        name: "App",
    }
</script>

<style lang="less" scoped>
  #app {
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
