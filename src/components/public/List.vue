<template>
  <div class="travel-list">
    <div v-for="item in list" class="travel-detail">
      <div>
        <img :src="item.imgage">
      </div>
      <div class="travel-label">
        <h3>{{ item.title }}</h3>
        <div class="food-span">
          <label>介绍：</label><span>{{ item.content }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'travelList',
    data () {
      return {
      }
    },
    mounted () {
      this.$store.dispatch('touristList')
    },
    computed: {
      ...mapGetters({
        list: 'getDetail'
      })
    }

  }
</script>
<style>
  .food-span {
    padding-top: 15px;
    color: #999999;
    font-size: 15px;
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;

  }
  .food-span label{
    color: #656565;
  }
  .travel-list {
    background-color: #ffffff;
    margin-bottom: 55px;
    overflow-x: hidden;
  }
  .travel-detail {
    display: inline-flex;
    padding: 15px 8px;
    border-bottom: 2px solid #E4E1E2;
    width: 100%;
  }
  .travel-detail .travel-label{
    margin-left: 10px;
    margin-right: 25px;
  }
  .travel-detail .travel-label h3{
    margin: 0;
    font-size: 20px;
    color: #5CCCB5;
    margin-bottom: 15px;
  }
  .travel-detail img {
    width: 120px;
    height: 110px;
  }
</style>
