<template>
  <div v-if="Object.keys(goods).length !==0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBaseInfo",
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .info-title{
    color: #222;
    margin-top: 6px;
  }

  .info-price{
    margin-top: 10px;
  }
  .info-price .n-price{
    font-size: 24px;
    color:var(--color-high-text);
  }

  .info-price .o-price{
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .discount{

    display: inline-block;
    padding-right:5px;
    padding-left: 5px;
    color: white;
    background-color: rgb(248,85,124);
    border-radius: 50px;
    font-size: 10px;
    /*width: 47px;*/
    /*height: 20px;*/
    margin-left: 6px;
    text-align: center;
    line-height: 20px;
    white-space: nowrap;
  }
  .info-other{
    display: flex;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(247,246,251);

  }

  .info-other span{
    flex:1;
    font-size: 10px;
    color: gray;
    margin-top: 10px;
  }
  .info-other span:nth-child(2){
    text-align: center;
  }
  .info-other span:nth-child(3){
    text-align: right;
  }

  .info-service img{
    height: 13px;
    width: 13px;
  }
  .info-service{

    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 5px solid rgb(247,246,251);

  }
  .info-service .info-service-item{


    text-align:center;
    font-size: 13px;
    white-space: nowrap;
    color: #222;

  }
  .n-price{
    color: rgb(248,85,124) !important;
  }
</style>
