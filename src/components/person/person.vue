<template>
  <div class="person-first">
    <x-header :left-options="{showBack: false}">我的</x-header>
    <PictureLogo></PictureLogo>
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
  import { XHeader } from 'vux'
  import PictureLogo from './children/PictureLogo'
  export default {
    name: 'person',
    components: {
      PictureLogo, XHeader
    }
  }
</script>
<style>
  .person-first{
    margin-bottom: 55px;
  }
  .person-label{
    height: 20px;
    line-height: 20px;
    background-color: #EAEAEA;
    font-size: 12px;
    color: #B1B1B1;
    padding-left: 11px;
  }
  .mint-cell{
    border-bottom: 1px solid #d4d4d4;
  }
  .mint-cell img{
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
</style>
