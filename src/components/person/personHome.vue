<template>
  <div>
    <x-header :left-options="{showBack: false}">我的</x-header>
    <blur :blur-amount=5 :url="url">
      <p class="center"><img :src="url"><br/><span>wpf</span></p>
    </blur>
    <div class="person-label">
      <span>
        我的收藏
      </span>
    </div>
    <div class="quick-tab-bottom person-home" flex="box:mean">
      <router-link :to="{ name: 'Food' }" tag="div" class="home-quick-url person-home">
        <img src="../../assets/img/person/food.png">
        <p><span>我的美食</span></p>
      </router-link>
      <router-link :to="{name: 'Hotel' }" tag="div" class="home-quick-url person-home">
        <img src="../../assets/img/person/stay.png">
        <p>
          <span>我的住宿</span>
        </p>
      </router-link>
      <router-link :to="{name: 'GoWay' }" tag="div" class="home-quick-url person-home">
        <img src="../../assets/img/person/way.png">
        <p>
          <span>我的路线</span>
        </p>
      </router-link>
      <router-link :to="{name: 'Play' }" tag="div" class="home-quick-url person-home">
        <img src="../../assets/img/person/play.png">
        <p>
          <span>我的娱乐</span>
        </p>
      </router-link>
    </div>
    <div class="person-label">
      <span>
        关于我们
      </span>
    </div>
    <div>
      <mt-cell title="给我们好评" is-link>
        <img slot="icon" src="../../assets/img/person/rated.png">
      </mt-cell>
      <mt-cell title="意见反馈" is-link>
        <img slot="icon" src="../../assets/img/person/fallback.png" >
      </mt-cell>
      <mt-cell title="分享应用" is-link>
        <img slot="icon" src="../../assets/img/person/share.png" >
      </mt-cell>
      <mt-cell title="系统设置" is-link>
        <img slot="icon" src="../../assets/img/person/set.png">
      </mt-cell>
    </div>
  </div>
</template>
<script>
  import { XHeader, Blur } from 'vux'
  export default {
    name: 'personHome',
    data () {
      return {
        url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg'
      }
    },
    components: {
      XHeader, Blur
    }
  }
</script>
<style>
  .quick-tab-bottom.person-home{
    margin-bottom: 0;
  }
  .center {
    text-align: center;
    padding-top: 20px;
    color: #fff;
    font-size: 18px;
  }
  .center img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid #ececec;
  }
  .home-quick-url.person-home{
    text-align: center;
  }
  .home-quick-url.person-home img{
    height: 75px;
    width: 75px;
  }
  .home-quick-url.person-home p{
    margin: 0;
  }
</style>
