<template>
  <mt-tabbar :fixed="true">
    <div class="range-tab" :class="{ active: barSelect === 1 }" @click="setUrl(1, 'Home')">
      <mt-tab-item id="首页">
        <img slot="icon" v-if="barSelect === 1"  src="../../assets/img/home/home_select.png">
        <img slot="icon" v-else src="../../assets/img/home/home.png">
        首页
      </mt-tab-item>
    </div>
    <div class="range-tab" :class="{ active: barSelect === 2 }" @click="setUrl(2, 'WayArea')">
      <mt-tab-item id="导览">
        <img slot="icon" v-if="barSelect === 2" src="../../assets/img/home/guide_select.png">
        <img slot="icon" v-else src="../../assets/img/home/guide.png">
        导览
      </mt-tab-item>
    </div>
    <div class="range-tab" :class="{ active: barSelect === 3 }" @click="setUrl(3, 'Guide')">
      <mt-tab-item id="攻略">
        <img slot="icon" v-if="barSelect === 3" src="../../assets/img/home/raider_select.png">
        <img slot="icon" v-else src="../../assets/img/home/raider.png">
        攻略
      </mt-tab-item>
    </div>
    <div class="range-tab" :class="{ active: barSelect === 4 }" @click="setUrl(4, 'Person')">
      <mt-tab-item id="我的">
        <img slot="icon" v-if="barSelect === 4" src="../../assets/img/home/person_select.png">
        <img slot="icon" v-else src="../../assets/img/home/person.png">
        我的
      </mt-tab-item>
    </div>
  </mt-tabbar>
</template>
<script>
  export default {
    name: 'tabBar',
    data () {
      return {
        barSelect: 1
      }
    },
    methods: {
      setUrl (index, urlName) {
        this.barSelect = index
        this.$router.push({name: urlName})
      }
    }
  }
</script>
<style>
  .range-tab{
    width: 25%;
  }
  .range-tab.active{
    color: #12d2ab ;
  }
</style>
