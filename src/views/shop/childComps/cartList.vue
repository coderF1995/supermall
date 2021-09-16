<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cartListItem v-for="(item,index) in $store.state.cartList"
          :key="index" :item-info="item">
      </cartListItem>
    </scroll>
  </div>
</template>

<script>
import scroll from "../../../components/commom/scroll/scroll";
import cartListItem from "./cartListItem";
export default {
  name: "cartList",
  components:{
    scroll,
    cartListItem
  },
  props:{
    cartLength:{
      type:Number
    }
  },
  activated() {
    this.$refs.scroll.refresh()
  },
}
</script>

<style scoped>

.cart-list{
  height: calc(100% - 90px - 49px);
}

.content{

  height: calc(100% - 90px - 49px);
  overflow: hidden;
}


</style>
