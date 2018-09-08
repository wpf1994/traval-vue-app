<template>
  <div>
    <x-header :left-options="{backText: '', showBack: true}">酒店推荐</x-header>

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
      <p><span>房间：</span><span>标准间、三人间、单人间</span></p>
    </div>
    <div class="ho-detail-body">
      <p><span>地址：</span><span>这是一个遥远的地方</span><label><img :src="location">定位</label></p>
    </div>
    <div class="ho-detail-body">
      <p><span>电话：</span><span><img :src="phone">123456789</span></p>
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
    name: 'hotelRoomDetail',
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

</style>
