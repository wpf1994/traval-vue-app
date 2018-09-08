<template>
  <div>
    <div class="off-list-style" v-for="(item, index) in list">
      <router-link :to="{ name: 'PlayDetail', params: { id: index }}" tag="div" class="">
        <div class="play-img-style">
          <img :src="item.imageUrl">
        </div>
        <div class="item-info">
          <span>{{ item.name }}</span>
          <span>￥{{ item.nowPrice }}</span>
        </div>
        <div class="item-detail">
          <span>优惠时间：</span>
          <span>{{ item.offTimeStart }}</span><span class="middle-label">~</span><span>{{ item.offTimeEnd }}</span></spam><span>{{ item.oldPrice }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  import ShowImg from '@/assets/one.jpg'
  export default {
    name: 'playList',
    data () {
      return {
        list: [
          {imageUrl: ShowImg, name: '卡丁车', offTimeStart: '2016/4/6', offTimeEnd: '2016/5/8', oldPrice: '200', nowPrice: '100'},
          {imageUrl: ShowImg, name: '漂流', offTimeStart: '2016/4/6', offTimeEnd: '2016/5/8', oldPrice: '111', nowPrice: '100'},
          {imageUrl: ShowImg, name: '哈哈', offTimeStart: '2016/4/6', offTimeEnd: '2016/5/8', oldPrice: '222', nowPrice: '100'},
          {imageUrl: ShowImg, name: '嘿嘿', offTimeStart: '2016/4/6', offTimeEnd: '2016/5/8', oldPrice: '333', nowPrice: '100'}
        ]
      }
    }

  }
</script>
<style>
  .off-list-style {
    padding: 20px;
    border-bottom: 2px solid #F5F5F5;
  }
  .off-list-style .play-img-style{
    margin-bottom: 10px;
  }
  .off-list-style img{
    height: 166px;
    width: 100%;
    border-radius: 15px;
  }
  .item-info{
    margin-bottom: 10px;
  }
  .item-info span:first-child {
    color: #000000;
    font-size: 22px;
    font-weight: bold;
  }
  .item-info span:last-child {
    float: right;
    font-size: 22px;
    color: #FF782D;
    font-weight: bold;
  }
  .item-detail span:last-child{
    float: right;
    text-decoration: line-through;
  }
  .middle-label{
    padding: 0 5px;
  }
</style>
