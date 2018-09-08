<template>
  <div class="quick-tab-bottom" flex="box:mean">
    <router-link :to="{ name: 'Food' }" tag="div" class="home-quick-url">
      <img src="../../../assets/img/home/food.png">
      <p><span>特色美食</span></p>
    </router-link>
    <router-link :to="{name: 'Hotel' }" tag="div" class="home-quick-url">
      <img src="../../../assets/img/home/hotel.png">
      <p>
        <span>主题酒店</span>
      </p>
    </router-link>
    <router-link :to="{name: 'GoWay' }" tag="div" class="home-quick-url">
        <img src="../../../assets/img/home/line_way.png">
        <p>
          <span>出行线路</span>
        </p>
    </router-link>
    <router-link :to="{name: 'Play' }" tag="div" class="home-quick-url">
      <img src="../../../assets/img/home/play.png">
      <p>
        <span>娱乐项目</span>
      </p>
    </router-link>
  </div>
</template>
<script>
  export default {
    name: 'quickTab'
  }
</script>
<style>
  .quick-tab-bottom {
    background-color: #ffffff;
    margin-bottom: 6px;
    border-bottom: 2px solid #E4E1E2;
    padding: 10px 1px;
  }
  .home-quick-url img{
    width: 100%;
    height: 90px;
  }
  .home-quick-url p{
    text-align: center;
  }

</style>
