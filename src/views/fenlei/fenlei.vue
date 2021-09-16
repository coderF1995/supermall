<template>
  <div class="background">
    <img src="./img/yw1.jpeg" class="img1">
    <ul>
      <li><img src="./img/yw1.jpeg"></li>
      <li><img src="./img/yw1.jpeg"></li>
      <li><img src="./img/yw1.jpeg"></li>
      <li><img src="./img/yw1.jpeg"></li>
      <li><img src="./img/yw1.jpeg"></li>
      <li><img src="./img/yw1.jpeg"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "fenlei"
}
</script>

<style scope>
  .background{
    width: 100%;
    height: calc(100vh - 49px);
    background-color: #0A246A;
  }

  .img1{
    width: 100%;
    height: 100%;
  }
  ul{
    transform-style: preserve-3d;
    position: relative;
    bottom: 50%;
    left: 50%;
    /*background-color: #0A246A;*/
    height: 60px;
    width: 60px;
    transform: rotateX(-30deg);
    animation: sport 6s linear 0s infinite normal;
  }

  ul li{
    position: absolute;
    left: 0;
    top: 0;
    list-style: none;
    width: 90px;
    height: 90px;
    font-size: 10px;
    text-align: center;
    line-height: 60px;
  }

  ul li:nth-child(1){
    background-color: green;
    transform: rotateY(60deg) translateZ(90px);

  }

  ul li:nth-child(2){
    background-color: blue;
    transform: rotateY(120deg) translateZ(90px);
  }

  ul li:nth-child(3){
    background-color: yellow;
    transform: rotateY(180deg) translateZ(90px);
  }

  ul li:nth-child(4){
    background-color: pink;
    transform: rotateY(240deg) translateZ(90px);
  }

  ul li:nth-child(5){
    background-color:  purple;
    transform: rotateY(300deg) translateZ(90px);
  }

  ul li:nth-child(6){
    background-color: gold;
    transform: rotateY(360deg) translateZ(90px);
  }

  ul li img{
    width: 90px;
    height: 90px;
    border: 1px solid blue;
  }



  @keyframes sport {
    from{
            transform: rotateY(0deg) rotateX(-10deg) ;
    } to {
            transform:  rotateY(360deg) rotateX(-10deg)  ;
          }

  }

</style>
