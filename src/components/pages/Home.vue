<template>
  <div>
    <div class="container">
      <!-- =section block start= -->
      <div class="section" style="text-align:center;padding-top: 200px">
        <div class="cube" style="margin:auto;">
          <div class="front">
            <img class="rotatelogo" src="static/igalia-logo.png" />
          </div>
          <div class="back">
            <img class="rotatelogo" src="static/igalia-logo.png" />
          </div>
          <div class="top">
            <img class="rotatelogo" src="static/igalia-logo.png" />
          </div>
          <div class="bottom">
            <img class="rotatelogo" src="static/igalia-logo.png" />
          </div>
          <div class="left">
            <img class="rotatelogo" src="static/igalia-logo.png" />
          </div>
          <div class="right">
            <img class="rotatelogo" src="static/igalia-logo.png" />
          </div>
        </div><!-- =cube section end// -->
      </div><!-- = section block end// -->
      <!-- =vertical-spin block start= -->

    </div><!-- =container end// -->


  </div>
</template>


<script>
  export default {
  }
</script>



<style lang="less">

  .section{
    perspective: 800px;
    perspective-origin: 50% 100px;
    margin-top: 40px;
  }
  .cube {
    position: relative;
    width: 200px;
    transform-style: preserve-3d;
    padding-top: 40px;
    animation: cube-spin 5s infinite linear;
    div {
      padding: 30px;
      img {
        max-width: 100%;
        height: auto;
      }
      position: absolute;
      width: 200px;
      height: 200px;
      background: rgba(255, 255, 255, 0.1);
      box-shadow: inset 0 0 30px rgba(125, 125, 125, 0.8);
      font-size: 20px;
      text-align: center;
      line-height: 170px;
      color: rgba(0, 0, 0, 0.5);
      font-family: sans-serif;
      text-transform: uppercase;
    }
  }
  .back {
    transform: translateZ(-100px) rotateY(180deg);
  }
  .right {
    transform: rotateY(-270deg) translateX(100px);
    transform-origin: top right;
  }
  .left {
    transform: rotateY(270deg) translateX(-100px);
    transform-origin: center left;
  }
  .top {
    transform: rotateX(-90deg) translateY(-100px);
    transform-origin: top center;
  }
  .bottom {
    transform: rotateX(90deg) translateY(100px);
    transform-origin: bottom center;
  }
  .front {
    transform: translateZ(100px);
  }


  @keyframes cube-spin{
    0% {
      transform: rotateY(0);
    }
    100% {
      transform: rotateY(360deg);
    }
  }


</style>
