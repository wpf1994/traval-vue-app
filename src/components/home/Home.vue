<template>
  <div>
    <x-header :left-options="{showBack: false}">老牛湾首页</x-header>
    <swiper :list="pictureList"></swiper>
    <QuickTab ></QuickTab>
    <div class="bottom-header">
      <span>景点介绍</span>
    </div>
    <TravelList></TravelList>
  </div>
</template>
<script>
  import { Swiper, XHeader } from 'vux'
  import QuickTab from './children/Quicktab'
  import TravelList from './../public/List'
  export default {
    name: 'home',
    data () {
      return {
        pictureList: [{
          url: 'javascript:',
          img: 'https://static.vux.li/demo/1.jpg',
          title: '送你一朵fua'
        }, {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/2.jpg',
          title: '送你一辆车'
        }, {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/3.jpg',
          title: '送你一次旅行'
        }]
      }
    },
    components: {
      QuickTab, TravelList, XHeader, Swiper
    }
  }
</script>
<style>
  .bottom-header{
    color: #5CCCB5;
    font-size: 24px;
    background-color: #ffffff;
    height: 40px;
    vertical-align: middle;
    line-height: 40px;
    padding-left: 10px;
    margin-bottom: 2px;
  }
  .vux-header{
    background-color: #12d2ab !important;
  }
</style>
