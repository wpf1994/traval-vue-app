<template>
  <div>
    <x-header :left-options="{backText: '', showBack: true}">相册</x-header>
    <div class="picture-layout">
      <template v-for="(item, index) in list">
        <div class="picture-set">
          <img class="previewer-demo-img"  :src="item.src" @click="show(index)">
          <p>哈哈</p>
        </div>
      </template>
    </div>
    <previewer :list="list" ref="previewer" :options="options"></previewer>
  </div>
</template>
<script>
  import One from '@/assets/one.jpg'
  import Two from '@/assets/two.jpg'
  import { Previewer, XHeader } from 'vux'
  export default {
    name: 'hotelPictureList',
    components: {
      Previewer, XHeader
    },
    data () {
      return {
        list: [{
          src: One,
          w: 709,
          h: 449
        },
        {
          src: Two,
          w: 369,
          h: 300
        },
        {
          src: One,
          w: 709,
          h: 449
        },
        {
          src: Two,
          w: 369,
          h: 300
        }],
        options: {
          getThumbBoundsFn (index) {
            let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
            let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
            let rect = thumbnail.getBoundingClientRect()
            return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
          }
        }
      }
    },
    methods: {
      show (index) {
        this.$refs.previewer.show(index)
      }
    }
  }
</script>
<style>
  .picture-layout{
    margin: 10px;
  }
  .picture-set{
    display: inline-block;
    width: 33.3%;
    text-align: center;
  }
  .picture-set img{
    width: 90%;
    height: 60%;
  }
</style>
