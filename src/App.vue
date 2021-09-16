<template>
  <div id="app">
     <keep-alive exclude="detail">
       <router-view></router-view>
     </keep-alive>
    <Main-tab-bar></Main-tab-bar>
  </div>
</template>

<script>

 import MainTabBar from "./components/content/mainTabBar/mainTabBar"

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
