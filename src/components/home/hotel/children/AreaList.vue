<template>
  <div>
    <div class="hotel-detail">
      <div>
        <img :src="item.imgage">
      </div>
      <div class="hotel-label">
        <h3>{{ item.title }}</h3>
        <i class="fa fa-map-marker icon-style" aria-hidden="true">
          <span>距离您{{ item.area }}km</span>
        </i>
        <div class="hotel-middle-label" >
          <label>{{ labelText }}：</label><span>100</span>
        </div>
        <div class="hotel-span">
          <label>地址：</label>
          {{ item.content }}
        </div>
        <!--<div class="hotel-span" ref="hotelSpan">-->
          <!--<label>地址：</label><span></span>-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'arealList',
    data () {
      return {
        item: {}
      }
    },
    mounted () {
      this.item = this.itemValue
    },
    props: [
      'labelText', 'itemValue'
    ]
  }
</script>
<style>
  .hotel-span {
    color: #999999;
    font-size: 15px;
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

  }
  .hotel-span label{
    color: #656565;
  }
  .hotel-list {
    background-color: #ffffff;
    margin-bottom: 55px;
    overflow-x: hidden;
  }
  .hotel-detail {
    display: inline-flex;
    padding: 15px 8px;
    border-bottom: 2px solid #E4E1E2;
    width: 100%;
  }
  .hotel-detail .hotel-label{
    margin-left: 10px;
    margin-right: 20px;
  }
  .hotel-middle-label{
    margin: 0 0 5px 0;
    color: #656565;
  }
  .icon-style{
    margin: 0 0 8px 0;
    color: #DADADA;
  }
  .icon-style span{
    padding-left: 10px;
  }

  .hotel-detail .hotel-label h3{
    margin: 0;
    font-size: 20px;
    color: #5CCCB5;
    margin-bottom: 10px;
  }
  .hotel-detail img {
    width: 120px;
    height: 110px;
  }
</style>
