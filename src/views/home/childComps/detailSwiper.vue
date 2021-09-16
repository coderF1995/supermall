<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>

import {swiperItem,swiper} from '../../../components/commom/swiper'
export default {
  name: "detailSwiper",
  components:{
    swiper,
    swiperItem
  }
}
</script>

<style scoped>
 .detail-swiper{
   height: 300px;
   overflow:hidden;
 }
</style>
