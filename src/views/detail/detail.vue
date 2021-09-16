<template>
  <div id="detail" class="detail-nav">
    <detail-nav-bar @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info  ref="params" :param-info="paramInfo" ></detail-param-info>
      <detail-comment-info  ref="comment" :comment-info="commentInfo" ></detail-comment-info>
      <goodList ref="recommend" :goods="recommends" ></goodList>
    </scroll>
    <detailBottomBar @addCart="addToCart"></detailBottomBar>
    <backTop @click.native="backClick" v-show="isShowBackTop"></backTop>
    <toast :message="message" :show="show"></toast>
  </div>

</template>

<script>
import detailNavBar from "./childComps/detailNavBar";
import detailSwiper from './childComps/detailSwiper'
import detailBaseInfo from "./childComps/detailBaseInfo";
import DetailShopInfo from "./childComps/detailShopInfo";
import Scroll from "../../components/commom/scroll/scroll";
import detailGoodsInfo from "./childComps/detailGoodsInfo";
import detailParamInfo from "./childComps/detailParamInfo";
import detailCommentInfo from "./childComps/detailCommentInfo";
import detailBottomBar from "./childComps/detailBottomBar";
import backTop from "../../components/content/backTop/backTop";
import toast from "../../components/commom/toast/toast";

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "../../network/detail";
import goodList from "../../components/content/goods/goodList";
export default {
  name: "detail",
  components:{
    Scroll,
    DetailShopInfo,
    detailSwiper,
    detailNavBar,
    detailBaseInfo,
    detailGoodsInfo,
    detailParamInfo,
    detailCommentInfo,
    goodList,
    detailBottomBar,
    backTop,
    toast

  },
  data(){
    return{
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      themeTopYs:[],
      positionY:0,
      currentIndex:0,
      isShowBackTop:true,
      message:'',
      show:false
    }
  }, methods:{
    imageLoad(){
      this.$refs.scroll.refresh()
      this.$refs.scroll.refresh()
      this.themeTopYs = []
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)

      console.log(this.themeTopYs)
    },
    titleClick(index) {
      this.$refs.scroll.scroll.scrollTo(0,-this.themeTopYs[index],500)
    },
    contentScroll(position){
       this.positionY = -position.y
      let length = this.themeTopYs.length
      for(let i = 0 ; i < length ; i++ ){
        if(this.currentIndex !== i && ((i < length - 1 && this.positionY >= this.themeTopYs[i] && this.positionY < this.themeTopYs[i+1]) || (i === length -1
          && this.positionY >= this.themeTopYs[i]))){
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      this.isShowBackTop = (-position.y) > 1000
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0,600)
    },
    addToCart() {
      //1.获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

    //2.将商品添加到购物车里
    //   this.$store.commit('addCart',product)
      this.$store.dispatch('addCart',product).then(res=>{
        this.show=true
        this.message = res
        console.log(res)

        setTimeout(()=>{
          this.show =false
          this.message = ''
        },1500)
      })

    }
  },
  created(){
    // 保存传入的iid
    this.iid = this.$route.params.iid

  //  根据iid请求详情数据
    getDetail(this.iid).then(res=>{
      // console.log(res);
      const data = res.result
      //获取顶部轮播图数据
      this.topImages =data.itemInfo.topImages

      //  获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

    // 获取店铺信息
      this.shop = new Shop(data.shopInfo)

    //  获取商品详情数据
      this.detailInfo = data.detailInfo;


    // 获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      // console.log(this.paramInfo)

      //  获取评论的信息
      if(data.rate.cRate != 0){
        this.commentInfo = data.rate.list[0]
      }


    })

    //  请求推荐数据
    getRecommend().then(res=>{
      this.recommends = res.data.list
    })
  },
  mounted() {
       this.$bus.$on('detailItemImageLoad',()=>{
         this.$refs.scroll.refresh()

      })
  },
  updated() {

  }

}
</script>

<style scoped>
  #detail{
    position: relative;
    background-color: #fff;
    z-index:100;
    height: 100vh;
  }

  .detail-nav{
    /*position:relative;*/
    /*z-index: 99;*/
    background-color: #fff;
  }

  /*.content{*/
  /*  height: calc(100% - 44px - 49px);*/
  /*  !*overflow: hidden;*!*/
  /*}*/
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
