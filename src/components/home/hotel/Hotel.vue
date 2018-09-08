<template>
  <div>
    <x-header :left-options="{backText: '', showBack: true}">酒店</x-header>

    <div class="hotel-list">
      <template v-for="item in list">
        <router-link :to="{name:'HotelRoomDetail'}" tag="div" class="">
          <AreaList labelText="价格" :itemValue="item"></AreaList>
        </router-link>
      </template>
    </div>
  </div>
</template>
<script>
  import { XHeader } from 'vux'
  import logoUrl from '@/assets/logo.png'
  import AreaList from './children/AreaList'
  export default {
    name: 'hotel',
    data () {
      return {
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
      AreaList, XHeader
    }
  }
</script>
