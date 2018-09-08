<template>
  <div id="app">
    <router-view style="margin-bottom: 60px"></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
  import Tabbar from '@/components/public/Tabbar'
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Hello! Vonic.'
      }
    },
    components: {
      Tabbar
    }
  }
</script>
