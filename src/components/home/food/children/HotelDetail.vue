<template>
  <div>
    <x-header :left-options="{backText: '', showBack: true}">饭馆推荐</x-header>

    <router-link :to="{name: 'HotelPictureList'}" tag="div" class="">
      <Swipe></Swipe>
    </router-link>
    <div class="ho-text">
      <div class="ho-text-absolute">
        <span >推荐：</span>
        <template v-for="item in 5">
          <img :src="startImg">
        </template>
      </div>
    </div>
    <div class="ho-detail-title">
      <span>好再来饭馆</span>
      <i class="fa fa-map-marker icon-style" aria-hidden="true">
        相距1.2km
      </i>
    </div>
    <div class="ho-detail-body">
      <p><span>人均：</span><span>75元</span></p>
    </div>
    <div class="ho-detail-body">
      <p>
        <span>地址：</span><span>每天最多申请三笔；每笔不低于500元。每笔不低于500元每笔不低于500元每笔不低于500元每笔不低于500元</span>
        <label><img :src="location">定位</label>
      </p>
    </div>
    <div class="ho-detail-body">
      <p><span>电话：</span><span><img :src="phone">123456789</span></p>
    </div>
    <div class="ho-detail-body">
      <p><span>标签：</span><span>陕北菜</span></p>
    </div>
    <div class="ho-detail-body">
      <p><span>简介：</span><span>每天最多申请三笔；每笔不低于500元。每笔不低于500元每笔不低于500元每笔不低于500元每笔不低于500元每天最多申请三笔；每笔不低于500元。每笔不低于500元每笔不低于500元每笔不低于500元每笔不低于500元每天最多申请三笔；每笔不低于500元。每笔不低于500元每笔不低于500元每笔不低于500元每笔不低于500元</span></p>
    </div>
  </div>
</template>
<script>
  import { XHeader } from 'vux'
  import Swipe from '@/components/home/children/Swipe'
  import StartImg from '@/assets/img/home/start.png'
  import Location from '@/assets/img/home/location.png'
  import Phone from '@/assets/img/home/phone.png'
  export default {
    name: 'hotelDetail',
    data () {
      return {
        content: {name: 'AAA'},
        startImg: StartImg,
        location: Location,
        phone: Phone
      }
    },
    components: {
      Swipe, XHeader
    }
  }
</script>
<style>
  .ho-text{
    position: relative;
  }
  .ho-text .ho-text-absolute{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 30px;
    line-height: 30px;
    background: #000;
    opacity: 0.5;
    color: #ffffff;
    width: 100%;
  }
  .ho-detail-body{
    text-indent: -49px;
    margin-left: 50px;
    line-height: 25px;
    padding: 0 10px;
  }
  .ho-detail-body span:last-child{
    color: #4F4F4F;
  }
  .ho-detail-body label{
    color: #027DFF;
  }
  .ho-detail-body span img{
    height: 15px;
    vertical-align: sub;
  }
  .ho-detail-body label img{
    height: 15px;
  }
  .ho-text .ho-text-absolute span{
    padding-left: 15px;
  }
  .ho-text img{
    vertical-align: sub;
    width: 20px;
    height: 20px;
  }
  .ho-detail-title{
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid #cdcdcd;
    padding-left: 10px;
  }
  .ho-detail-title span{
    color: #505050;
    font-weight: bold;
  }
  .ho-detail-title i{
    font-size: 13px;
    float: right;
    line-height: 45px;
    padding-right: 10px;
  }
  .mint-swipe-indicators{
    left: 85%;
    z-index: 1000;
    bottom: 2px;
  }
</style>
