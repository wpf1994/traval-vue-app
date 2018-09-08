<template>
  <div class="person-first">
    <x-header :left-options="{showBack: false}">老牛湾智能导览</x-header>
    <swiper :list="pictureList"></swiper>
    <div flex="box=mean" class="guide-header-tab-div">
      <div class="guide-quick-tab">
        <img :src="ChiImg">
      </div>
      <div class="guide-quick-tab">
        <img :src="ZhuImg">
      </div>
      <div class="guide-quick-tab">
        <img :src="XingImg">
      </div>
      <div class="guide-quick-tab tab-last">
        <img :src="WanImg">
      </div>
    </div>
    <div class="guide-header-text">
      <span>
        畅想特色美食
      </span>
    </div>
    <div class="header-span-title">
      <p><span>------　　享美食　　------</span></p>
      <div flex="box-mean" class="guide-header-tab-div">
        <div class="guide-quick-tab">
          <img src="https://static.vux.li/demo/1.jpg">
          <p><span>大鱼</span></p>
        </div>
        <div class="guide-quick-tab">
          <img src="https://static.vux.li/demo/2.jpg">
          <p><span>小虾</span></p>
        </div>
        <div class="guide-quick-tab tab-last">
          <img src="https://static.vux.li/demo/1.jpg">
          <p><span>母鸡</span></p>
        </div>
      </div>
    </div>
    <div class="header-span-title">
      <p><span>------　　下馆子　　------</span></p>
      <div flex="box-mean" class="guide-header-tab-div">
        <div class="guide-quick-tab">
          <img src="https://static.vux.li/demo/1.jpg">
          <p><span>大鱼</span></p>
        </div>
        <div class="guide-quick-tab">
          <img src="https://static.vux.li/demo/2.jpg">
          <p><span>小虾</span></p>
        </div>
        <div class="guide-quick-tab tab-last">
          <img src="https://static.vux.li/demo/1.jpg">
          <p><span>母鸡</span></p>
        </div>
      </div>
    </div>
    <div class="guide-header-text">
      <span>
        住陕北风情名宿
      </span>
    </div>
    <div class="guide-hotel-content">
      <div class="guide-hotel-group">
        <div class="guide-hotel-group-left">
          <div class="content-div">
            <span flex="main:center cross:center">西风瘦马</span>
          </div>
        </div>
        <div class="guide-hotel-group-right">
          <img src="https://static.vux.li/demo/1.jpg">
        </div>
      </div>
      <div class="guide-hotel-group">
        <div class="guide-hotel-group-left">
          <div class="content-div">
            <span flex="main:center cross:center">流水人家</span>
          </div>
        </div>
        <div class="guide-hotel-group-right">
          <img src="https://static.vux.li/demo/1.jpg">
        </div>
      </div>
    </div>
    <div class="guide-hotel-content">
      <div class="guide-hotel-group">
        <div class="guide-hotel-group-left">
          <div class="content-div">
            <span flex="main:center cross:center">流水人家</span>
          </div>
        </div>
        <div class="guide-hotel-group-right">
          <img src="https://static.vux.li/demo/1.jpg">
        </div>
      </div>
      <div class="guide-hotel-group">
        <div class="guide-hotel-group-left">
          <div class="content-div">
            <span flex="main:center cross:center">西风瘦马</span>
          </div>
        </div>
        <div class="guide-hotel-group-right">
          <img src="https://static.vux.li/demo/1.jpg">
        </div>
      </div>
    </div>
    <div class="guide-header-text">
      <span>
        深度游玩老牛湾
      </span>
    </div>
    <div class="guide-inline-content">
      <div class="guide-inline-left">
        <img src="https://static.vux.li/demo/2.jpg">
      </div>
      <div class="guide-inline-right">
        <div flex="box=mean">
          <div class="guide-inline-right-top-left">
            <img src="https://static.vux.li/demo/2.jpg" >
          </div>
          <div class="guide-inline-right-top-right">
            <img src="https://static.vux.li/demo/2.jpg">
          </div>
        </div>
        <div class="guide-inline-right-bottom">
          <img src="https://static.vux.li/demo/2.jpg">
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import ChiImg from '@/assets/img/guide/chi.png'
  import ZhuImg from '@/assets/img/guide/zhu.png'
  import XingImg from '@/assets/img/guide/xing.png'
  import WanImg from '@/assets/img/guide/wan.png'

  import { Swiper, XHeader } from 'vux'
  export default {
    name: 'guide',
    data () {
      return {
        ChiImg: ChiImg,
        ZhuImg: ZhuImg,
        XingImg: XingImg,
        WanImg: WanImg,
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
      Swiper, XHeader
    }
  }
</script>
<style>
  .guide-header-text{
    height: 52px;
    line-height: 52px;
    background-color: #eaeaea;
    font-size: 20px;
    color: #999;
    border-top: 1px solid #cdcdcd;
    border-bottom: 1px solid #cdcdcd;
    padding-left: 15px;
  }
  .guide-header-tab-div{
    margin: 25px 15px;
  }
  .guide-quick-tab{
    padding-right: 10px;
  }
  .guide-quick-tab.tab-last{
    padding-right: 0px;
  }
  .guide-quick-tab p{
    margin: 5px 0;
  }
  .guide-quick-tab img{
    width: 100%;
  }
  .header-span-title p{
    text-align: center;
    font-size: 18px;
    color: #505050;
  }

  .guide-hotel-content{
    margin: 15px;
  }
  .guide-hotel-group{
    display: inline-flex;
    width: 49%;
  }
  .guide-hotel-group-left{
    height: 50px;
    width: 50px;
    background-color: #10b5a0;
    padding: 8px;
  }
  .guide-hotel-group-left .content-div{
    border: 1px solid #fff;
    height: 100%;
  }
  .guide-hotel-group-left .content-div span{
    color: #fff;
    font-size: 11px;
    height: 100%;
    width: 34px;
    padding: 0 8px;
    text-align: center;
  }
  .guide-hotel-group-right img{
    height: 66px;
    width: 100%;
  }
  .guide-inline-content{
    margin: 15px;
    display: inline-flex;
  }
  .guide-inline-content .guide-inline-left{
    width: 30%;
    padding-right: 5px;
  }
  .guide-inline-content .guide-inline-left img{
    width: 100%;
    height: 150px;
  }
  .guide-inline-right{
    width: 70%;
  }
  .guide-inline-right-top-left{
    padding-right: 2px;
  }
  .guide-inline-right-top-left img{
    width: 100%;
    height: 72px;
  }
  .guide-inline-right-top-right{
    padding-left: 2px;
  }
  .guide-inline-right-top-right img{
    width: 100%;
    height: 72px;
  }
  .guide-inline-right-bottom{
    margin-top: 2px;
  }
  .guide-inline-right-bottom img{
    width: 100%;
    height: 72px;
  }
</style>
