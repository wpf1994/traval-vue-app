<template>
  <div class="way-item">
    <div class="way-item-style">
      <p class="way-item-label-title"><span>路线1：</span><span>呼喝浩特哈哈——这是哪到哪啊啊——这是哪到哪啊啊</span></p>
      <p class="way-item-label-detail"><span>这是哪到哪啊啊——这是哪到哪啊啊——这是哪到哪啊啊——这是哪到哪啊啊——这是哪到哪啊啊</span></p>
      <p class="way-item-label-bottom"><span>386.2km</span><span>|</span><span>约3.5小时</span></p>
    </div>
    <div class="way-item-img">
      <img :src="area">
      <br/>
      <span>出发</span>
    </div>
  </div>
</template>
<script>
  import Area from '@/assets/img/home/area.png'
  export default {
    name: 'listItem',
    data () {
      return {
        area: Area
      }
    }
  }
</script>
<style>
  .way-item{
    border-bottom: 1px solid #E4E1E2;
  }
  .way-item-style{
    width: 80%;
    display: inline-block;
    vertical-align: middle;
    padding-left: 10px;
  }
  .way-item-style .way-item-label-title{
    color: #00B690;
    font-size: 15px;
    text-indent: -54px;
    margin-left: 55px;
  }
  .way-item-style .way-item-label-detail{
    font-size: 13px;
    color: #656565;
  }
  .way-item-style .way-item-label-bottom{
    font-size: 11px;
    color: #989898;
  }
  .way-item-img{
    display: inline-block;
    vertical-align: middle;
    text-align: center;
  }
  .way-item-img img{
    width: 30px;
    height: 30px;
  }
</style>
