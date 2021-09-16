<template>
  <div class="cart">
<!--    导航-->
    <NavBar class="nav-bar">
      <div slot="center">购物车（{{cartLength}}）</div>
    </NavBar>

<!--    商品列表-->
    <cart-list :cartLength="cartLength"></cart-list>




<!--    底部汇总-->
    <cartBottomBar></cartBottomBar>
  </div>
</template>

<script>
import NavBar from "../../components/commom/navBar/NavBar";
import CartList from "./childComps/cartList";
import cartBottomBar from "./childComps/cartBottomBar";


export default {
  name: "Cart",
  components:{
    NavBar,
    CartList,
    cartBottomBar

  },
  computed:{
    cartLength() {
      return this.$store.getters.cartLength
    }
  }
}
</script>

<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
  /*font-weight:700 ;*/
}
.cart{
  height: 100vh;
}


</style>
