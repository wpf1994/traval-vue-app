<template>
  <div>
    <x-header :left-options="{showBack: true, backText: ''}">路线</x-header>

    <div class="way-header">
      <img :src="car">
      <span>自驾行</span>
    </div>
    <template v-for="item in 4">
      <ListItem></ListItem>
    </template>
    <div class="way-header">
      <img :src="airplane">
      <span>公共交通</span>
    </div>
    <div class="way-detail-text">
      <span>
        你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊
      </span>
    </div>
  </div>
</template>
<script>
  import { XHeader } from 'vux'
  import Car from '@/assets/img/home/car.png'
  import Airplane from '@/assets/img/home/airplane.png'
  import ListItem from './listItem/ListItem'
  export default {
    name: 'goWay',
    data () {
      return {
        car: Car,
        airplane: Airplane
      }
    },
    components: {
      ListItem, XHeader
    }
  }
</script>
<style>
  .way-header{
    height: 50px;
    line-height: 50px;
    padding-left: 10px;
    font-size: 18px;
    color: #00B690;
    font-weight: bold;
    border-bottom: 1px solid #E4E1E2;
  }
  .way-header img{
    height: 25px;
    vertical-align: middle;
  }
  .way-detail-text{
    margin: 10px;
    font-size: 13px;
    color: #656565;
  }
</style>
