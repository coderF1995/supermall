<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

<!--    加:能将3当做number类型传输给子组件，如果没有:，传输的是string类型-->
    <tab-control :titles="['流行','新款','精选']" class="tab-control"
                 @tabClick="tabClick"
                 ref="tabControl1" v-show="isTabFixed"></tab-control>
    <scroll class="content" ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <featureView></featureView>
      <tab-control :titles="['流行','新款','精选']" class="tab-control"
                   @tabClick="tabClick"
                   ref="tabControl2"></tab-control>
      <goodList :goods="goods[currentType].list"></goodList>
    </scroll>

    <backTop @click.native="backClick" v-show="isShowBackTop"></backTop>

  </div>
</template>

<script>
 import NavBar from '../../components/commom/navBar/NavBar.vue'
 import homeSwiper from "./childComps/homeSwiper"
 import recommendView from "./childComps/recommendView"
 import featureView from "./childComps/FeatureView"
 import tabControl from "../../components/content/tabControl/tabControl";
 import goodList from "../../components/content/goods/goodList";
 import scroll from "../../components/commom/scroll/scroll";
 import backTop from "../../components/content/backTop/backTop";


 import {getHomeMultidata,getHomeGoods} from '../../network/home'

export default {
  name: "",
  components:{
    recommendView,
    NavBar,
    homeSwiper,
    featureView,
    tabControl,
    goodList,
    scroll,
    backTop
  },
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      isShowBackTop:true,
      currentType:'pop',
      tabOffsetTop:0,
      isTabFixed:null,
      saveY:0
    }
  },
  created(){
    // 1.实例创建好后请求数据
    this.getHomeMultidata()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    // this.$bus.$on('itemImageLoad',()=>{
    //   this.$refs.scroll.refresh()
    // })
    },
  mounted() {
    this.$bus.$on('homeItemImgLoad',()=>{
      this.$refs.scroll.refresh()

    })

  },
  methods:{
    //事件监听
    tabClick(index){
      switch(index){
        case 0:
          this.currentType='pop'
          break
        case 1:
          this.currentType='new'
          break
        case 2:
          this.currentType='sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0,600)
    },
    contentScroll(position){
      //判断backTop是否显示
      this.isShowBackTop = (-position.y) > 1000

    //决定第一个tabControl是否显示
      this.isTabFixed = (-position.y) > this.tabOffsetTop

    },
    loadMore(){
      this.getHomeGoods(this.currentType)

    },
    swiperImageLoad(){
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    activated(){
      this.refs.scroll.scrollTo(0,this.saveY,0)
      this.refs.scroll.refresh()
    },
    deactivated(){
      this.saveY = this.$refs.scroll.scroll.y
    },
    //网络请求
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        console.log(res.data)
        this.banners=res.data.banner.list
        this.recommends=res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page =this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        console.log(res.data)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1

        this.$refs.scroll.finishPullUp()
        // this.$refs.scroll.scroll.refresh()

      })
    }
  }
}
</script>


<style scope>
  .home-nav{
    background:var(--color-tint);
    color:#fff;
    /*原生滚动定位*/
    /*position:fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index:9;*/
  }
  #home{
    height: 100vh;
  }
  .tab-control{
    position:relative;
    z-index:9
  }

  /*.content{*/
  /*  !*视口高度减去上下两个固定导航*!*/
  /*  height:calc(100% - 93px);*/
  /*  overflow: hidden;*/
  /*  margin-top: 43px;*/
  /*}*/
  /*content的第二种定位方法*/
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
