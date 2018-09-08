// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import AMap from 'vue-amap'
import store from './store/'
import 'flex.css'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(VueResource)
Vue.use(AMap)
AMap.initAMapApiLoader({
  key: 'c4a881b17616e97c7f4045538a5a5f0e',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'Geolocation']
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
