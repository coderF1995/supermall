<template>
  <tab-bar class="tabb">
    <tab-bar-item path="/home" activeColor="pink">
      <img slot="item-icon" src="../../../assets/image/tarbaritem/home.png">
      <img slot="item-icon-active" src="../../../assets/image/tarbaritem/homeactive.png">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/fenlei" activeColor="pink">
      <img slot="item-icon" src="../../../assets/image/tarbaritem/fenlei.png" >
      <img slot="item-icon-active" src="../../../assets/image/tarbaritem/fenleiactive.png">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shop" activeColor="pink">
      <img slot="item-icon" src="../../../assets/image/tarbaritem/shop.png" >
      <img slot="item-icon-active" src="../../../assets/image/tarbaritem/shopactive.png">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/wode" activeColor="pink">
      <img slot="item-icon" src="../../../assets/image/tarbaritem/wode.png" >
      <img slot="item-icon-active" src="../../../assets/image/tarbaritem/wodeactive.png">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import tabBar from "../../commom/tabBar/tabBar";
  import tabBarItem from "../../commom/tabBar/tarbaritem";
  export default {
    components:{
      tabBar,
      tabBarItem
    },
    name: "mainTabBar"
  }
</script>

<style scoped>

</style>
