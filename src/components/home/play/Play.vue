<template>
  <div class="view-set">
    <x-header :left-options="{backText: '', showBack: true}">游玩</x-header>

    <div class="play-header">
      <img src="../../../assets/img/hot.png">
      <span>发现·限时优惠</span>
    </div>
    <PlayList></PlayList>
  </div>
</template>
<script>
  import { XHeader } from 'vux'
  import PlayList from './children/PlayList'
  export default {
    name: 'play',
    components: {
      PlayList, XHeader
    }
  }
</script>
<style>
  .view-set{
    background-color: #ffffff;
    margin-bottom: 55px;
  }
  .play-header{
    height: 40px;
    background-color: #ffffff;
    line-height: 40px;
    padding-left: 20px;
    border-bottom: 2px solid #F5F5F5;
  }
  .play-header img {
    height: 25px;
    widht: 25px;
    vertical-align: sub;
  }
  .play-header span {
    color: #7CD3C1;
    font-size: 24px;
  }
</style>
