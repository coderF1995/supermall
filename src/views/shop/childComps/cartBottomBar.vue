<template>
  <div class="bottom-bar">
    <div class="check-content">
     <check-button class="check-button"
                   :is-checked="isSelectAll"
                   @click.native="checkClick"></check-button>
       <span>全选</span>
    </div>
    <div class="price">
      合计：{{totalPrice}}
    </div>
    <div class="calculate" @click="calcClick">
      去计算：{{checkLength}}
    </div>
  </div>
</template>

<script>
import checkButton from "../../../components/content/checkButton/checkButton";
export default {
  name: "cartBottomBar",
  components:{
    checkButton
  },
  computed:{
    totalPrice(){
      return "￥"+this.$store.state.cartList.filter(item=>{
        return item.checked
      }).reduce((preValue,item)=>{
          return preValue + item.price*item.count
      },0).toFixed(2)
    },
    checkLength(){
      return this.$store.state.cartList.filter(item=>item.checked).length
    },
    isSelectAll(){
      // return !(this.cartList.filter(item=> !item.checked).length)
      if(this.$store.state.cartList.length === 0) return false
      return !this.$store.state.cartList.find(item=>!item.checked)
    },
  },
  methods:{
    checkClick(){
      if(this.isSelectAll){
      //  全部选中
        this.$store.state.cartList.forEach(item=>item.checked = false)
      } else {  //部分或全部没有被选中
        this.$store.state.cartList.forEach(item=>item.checked = true)
      }
    },
    calcClick(){
      if(!this.isSelectAll){

      }
    }
  }
}
</script>

<style scope>
  .bottom-bar{
    position: relative;
    display: flex;
    height: 49px;
    background-color: #eee;
    line-height: 49px;
    top: 10px;

  }

  .check-content{
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-right:10px ;
    width: 60px;
  }

  .check-button{
    width: 20px;
    height: 20px;
    /*把继承的line-height:40px；覆盖*/
    line-height: 20px;
  }

  .price{
    flex: 1;
  }
  .calculate{
    width: 90px;
    color: #fff;
    background-color: red;
    text-align: center;
  }
</style>
