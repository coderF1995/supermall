<template>
  <div>
    <swiper class="detail-swiper">
      <swiper-item v-for="item in topImages" :key="item">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/commom/swiper'
export default {
  name: "detailSwiper",
  components: {Swiper,SwiperItem},
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },

}
</script>

<style scoped>
  .detail-swiper{
    height: 300px;
    overflow: hidden;
  }
</style>
