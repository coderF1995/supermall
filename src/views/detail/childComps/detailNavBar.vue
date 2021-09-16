<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" v-on:click="backClick">
        <img src="../../../assets/image/detail/img.png">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles"
             class="title-item"
             :class="{active:index===currentIndex}"
             v-on:click="titleClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/commom/navBar/NavBar";

export default {
  name: "detailNavBar",
  components:{
    NavBar
  },
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    titleClick(index){
      this.currentIndex = index
      this.$emit('titleClick',index)
    },
    backClick(){
      this.$router.back()
    }
  },

}
</script>

<style scoped>
  .title{
    display:flex;
    font-size:13px;
  }

  .title-item{
    flex:1;
  }

  .active{
    color:hotpink;
  }

  .back img{
    margin-top: 10px;
    width: 25px;
    height: 25px;
  }

</style>
