<template>
  <Swiper>
    <Swiper-item v-for="item in banners" >
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </Swiper-item>
  </Swiper>

</template>

<script>
import {Swiper,SwiperItem} from "../../../components/commom/swiper/index"
export default {
  name: "homeSwiper",
  data(){
    return{
      isload:false
    }
},
  props:{
    banners:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  methods:{
    imageLoad(){
      if(!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style>

</style>
