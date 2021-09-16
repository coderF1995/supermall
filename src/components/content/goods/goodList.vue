<template>
  <div class="goods">
    <good-list-item v-for="item in goods" :goods-item="item"></good-list-item>
  </div>
</template>

<script>
import goodListItem from "./goodListItem";
export default {
  name: "goodList",
  components:{
    goodListItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return[]
      }
    }
  },

}
</script>

<style scope>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }


</style>
