<template>
  <div class="tab-bar-item" @click="btnClick">
    <div v-if="!isShow"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "tarbaritem",
  data(){
    return{
      // isShow:true,

    }
  },
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  computed:{
    isShow(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isShow ? {color: this.activeColor} : {}
    }
  },
  methods:{
    btnClick(){
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
  }
  /*.active{*/
  /*  color: @activeColor;*/
  /*}*/
</style>
