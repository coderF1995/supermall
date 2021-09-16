<template>
  <div class="check-button">
    <img src="../../../assets/image/cart/img.png" alt="" v-show="isChecked">
  </div>
</template>

<script>
export default {
  name: "checkButton",
  props:{
    isChecked:{
      type:Boolean,
      default:true
    }
  }
}
</script>

<style scoped>
  img{
    width: 15px;
    height: 15px;
    /*transform: translate(3px,-2px);*/

  }
  .check-button{
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #aaa;
    width: 19px;
    height: 19px;
  }

  .check{
    border-color: red;
  }

</style>
