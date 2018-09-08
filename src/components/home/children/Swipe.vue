<template>
  <div class="page-swipe">
    <mt-swipe :auto="3000">
      <mt-swipe-item>
        <img src="../../../assets/one.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../../assets/two.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../../assets/three.jpg">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
  export default {
    name: 'swipe'
  }
</script>
<style>
  .mint-swipe-indicator{
    opacity: 0.8;
    background-color: #ffffff;
  }
  .mint-swipe-indicator.is-active{
    background-color: #FF9900
  }
  .page-swipe .mint-swipe {
    height: 200px;
    color: #403E3E;
    font-size: 30px;
    text-align: center;
  }
  .page-swipe .mint-swipe-item {
    line-height: 200px;
  }
</style>
