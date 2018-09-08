<template>
  <div>
    <x-header :left-options="{backText: '', showBack: true}">美食</x-header>

    <mt-navbar v-model="selected">
      <mt-tab-item id="1">特色美食</mt-tab-item>
      <mt-tab-item id="2">饭馆推荐</mt-tab-item>
    </mt-navbar>

    <div >
      <TravelList v-show="selected === '1'"></TravelList>

      <div class="hotel-list" v-show="selected === '2'">
        <template v-for="item in list">
          <router-link :to="{name: 'HotelDetail'}" tag="div" class="">
            <AreaList labelText="人均" :itemValue="item"></AreaList>
          </router-link>
        </template>
      </div>
    </div>

  </div>
</template>
<script>
  import { XHeader } from 'vux'
  import AreaList from '@/components/home/hotel/children/AreaList'
  import TravelList from './../../public/List'
  import logoUrl from '@/assets/logo.png'
  export default {
    name: 'food',
    data () {
      return {
        selected: '1',
        list: [
          {imgage: logoUrl, title: '牛角玩', area: '13', content: '这是一个好的时间和地点这是一个好的时间和'},
          {imgage: logoUrl, title: '牛角玩', area: '13', content: '这是一个好的时间和地点'},
          {imgage: logoUrl, title: '牛角玩', area: '13', content: '这是一个好的时间和地点'},
          {imgage: logoUrl, title: '牛角玩', area: '13', content: '这是一个好的时间和地点这是'},
          {imgage: logoUrl, title: '牛角玩', area: '13', content: '这是一个好的时'},
          {imgage: logoUrl, title: '牛角玩', area: '13', content: '这是一个好的时间和地点这是一个好的点'}
        ]
      }
    },
    components: {
      TravelList, AreaList, XHeader
    }
  }
</script>
<style>
  .mint-tab-item-label{
    font-size: 18px;
  }
  .mint-navbar .mint-tab-item{
    color: #999999;
  }
  .mint-navbar .mint-tab-item.is-selected{
    border-bottom: 3px solid #00B690;
    color: #00B690;
  }
  .vux-header .vux-header-left .left-arrow:before{
    border: 2px solid #fff!important;
    border-right: none!important;
    border-bottom: none!important;
  }
</style>
