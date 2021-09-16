<template>
  <div ref="wrapper">
      <div class="url">
        <slot></slot>
      </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"

  export default {
    name: "scroll",
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return {
        scroll:null,
      }
    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll.refresh()
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad
      })
      //监听滚动事件
      this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)
      })

      //监听上拉事件
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })

    }
    }

</script>

<style scope>

</style>
