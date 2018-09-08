<template>
  <div>
    <x-header :left-options="{backText: '', showBack: true}">票务详情</x-header>

    <div class="con_img"><img :src="content.imageUrl">
      <span class="ms">
        <div class="ms-label">
          <span class="ms-label-span">
            {{ content.name }}
          </span>
          <div class="ms-img">
            <span>推荐:</span>
            <template v-for="item in 5">
              <img :src="startImg">
            </template>
          </div>
        </div>

      </span>
    </div>
    <div class="play-detail-price">
      <span>
        ￥{{ content.nowPrice }}
      </span>
      <span>
        ￥{{ content.oldPrice }}
      </span>
    </div>
    <div>
      <p class="detail-content-title"><span>项目包括：</span></p>
      <p class="detail-content-span"><span>你好啊这个阿什</span></p>
      <p class="detail-content-title"><span>使用时间：</span></p>
      <p class="detail-content-span"><span>你好啊这个阿什</span></p>
      <p class="detail-content-title"><span>购票须知：</span></p>
      <p class="detail-content-span"><span v-html="spanHtml"></span></p>
    </div>
  </div>
</template>
<script>
  import { XHeader } from 'vux'
  import ShowImg from '@/assets/one.jpg'
  import StartImg from '@/assets/img/home/start.png'
  export default {
    name: 'playDetail',
    data () {
      return {
        list: [
          {imageUrl: ShowImg, name: '卡丁车', startNum: 5, oldPrice: '200', nowPrice: '100'},
          {imageUrl: ShowImg, name: '漂流', startNum: 3, oldPrice: '111', nowPrice: '100'},
          {imageUrl: ShowImg, name: '哈哈', startNum: 0, oldPrice: '222', nowPrice: '100'},
          {imageUrl: ShowImg, name: '嘿嘿', startNum: 4, oldPrice: '333', nowPrice: '100'}
        ],
        content: {},
        startImg: StartImg,
        spanHtml: '<p>1、你好啊合格内容.</p><p>2、哈哈哈</p>'
      }
    },
    components: {
      XHeader
    },
    created () {
      this.initData()
    },
    methods: {
      initData () {
        this.content = this.list[this.$route.params.id]
      }
    }
  }
</script>
<style>
  .detail-content-title{
    padding-left: 20px;
    font-size: 16px;
    font-weight: bold;
  }
  .detail-content-span{
    padding-left: 20px;
    font-size: 13px;
    margin: 7px 0;
  }
  .play-detail-price{
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid #F5F5F5;
    padding-left: 20px;
  }
  .play-detail-price span:first-child{
    font-size: 24px;
    font-weight: bold;
    color: #FF782D;
  }
  .play-detail-price span:last-child{
    font-size: 24px;
    font-weight: bold;
    text-decoration: line-through;
    font-size: 14px;
  }
  .con_img{
    position: relative;
    height: 173px;
  }
  .con_img img{
    height: 173px;
    width: 100%;
  }
  .ms{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 40px;
    line-height: 40px;
    background: #000;
    opacity: 0.5;
    color: #ffffff;
    width: 100%;
  }
  .ms-img{
    float: right;
  }
  .ms-img img{
    vertical-align: sub;
    width: 25px;
    height: 25px;
  }
  .ms-label{
    padding-left: 20px;
  }
  .ms-label .ms-label-span{
    font-size: 22px;
  }
</style>
