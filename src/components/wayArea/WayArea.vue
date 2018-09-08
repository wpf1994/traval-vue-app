<template>
    <div>
        <x-header :left-options="{showBack: false}">导览</x-header>

        <div id="areaShow">
            <div id="demoComponent" class="demo-component" style="height: 100%;">
                <el-amap-search-box class="search-box" :search-option="searchOption"
                                    :on-search-result="onSearchResult"></el-amap-search-box>
                <el-amap vid="amap" :zoom="zoom" :center="center" :plugin="plugin">
                    <el-amap-marker v-for="marker in markers" :position="marker.position" :events="marker.events"
                                    :visible="marker.visible" :draggable="marker.draggable"></el-amap-marker>
                </el-amap>
            </div>
        </div>
        <div class="way-area-button-position">
            <div class="icon-text-div" @click="showMessage = true">
                <i aria-hidden="true" class="fa fa-commenting"></i>
                <br>
                <span>解说</span>
            </div>
            <div class="icon-text-div" @click="showPopUp">
                <i aria-hidden="true" class="fa fa-arrows"></i>
                <br>
                <span>路线</span>
            </div>
        </div>

        <x-dialog v-model="showMessage" class="dialog-demo" :hideOnBlur="true">
            <div class="img-box">
                <img src="https://static.vux.li/demo/1.jpg" style="max-width:100%;">
            </div>
            <div class="text-box">
                <div class="text-div-tox">
                    <span>望和楼讲解</span>
                    <div style="float: right" v-show="textShow === false" @click="textShow = true">
                        <span>查看详情</span>
                        <i class="fa fa-angle-double-down" aria-hidden="true"></i>
                    </div>
                    <div style="float: right" v-show="textShow === true" @click="textShow = false">
                        <span>收起详情</span>
                        <i class="fa fa-angle-double-up" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="close-icon" @click="showMessage = false">
                <i class="fa fa-times" aria-hidden="true"></i>
            </div>
            <div class="message-dialog-text" v-show="textShow === true">
                <p>
          <span>
            这个事故不割嘎嘎啊噶几个iajgia家具iaji家具啊这个事故不割嘎嘎啊噶几个iajgia家具iaji家具啊这个事故不割嘎嘎啊噶几个iajgia家具iaji家具啊
            这个事故不割嘎嘎啊噶几个iajgia家具iaji家具啊这个事故不割嘎嘎啊噶几个iajgia家具iaji家具啊这个事故不割嘎嘎啊噶几个iajgia家具iaji家具啊
          </span>
                </p>
            </div>
            <div style="margin: 5px">
                <audio-player :sources="audioSources" :loop="true"></audio-player>
            </div>
        </x-dialog>

        <popup v-model="waySelected" :height="pooHeight" ref="popUpId" :class="{'self-show-style': bottomSelect === false, 'provide-show-style': bottomSelect === true}">
            <div style="height: 100%">
                <div v-show="bottomSelect === true" style="margin-bottom: 60px;">
                    <x-header :left-options="{showBack: true, showText: '', preventGoBack: true }"
                              @on-click-back="waySelected = false">老牛湾精选路线
                    </x-header>
                    <div style="overflow-y: auto;" id="waySelectText">
                        <div class="way-header">
                            <img :src="car">
                            <span>畅游长线</span>
                        </div>
                        <template v-for="item in 2">
                            <WayItem class="select-go-way" @click="selectGoWay"></WayItem>
                        </template>
                        <div class="way-header">
                            <img :src="take">
                            <span>精品短线</span>
                        </div>
                        <template v-for="item in 2">
                            <WayItem @click="selectGoWay"></WayItem>
                        </template>
                        <div class="button-select-way">
                            <div class="button-sign-in">
                                <button>选好了，出发吧！</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div v-show="bottomSelect === false" style="margin-bottom: 60px">
                    <x-header :left-options="{showBack: true, showText: '', preventGoBack: true }"
                              @on-click-back="waySelected = false">老牛湾自选路线
                    </x-header>
                    <div flex="box:last" style="margin: 20px 10px">
                        <div class="select-wrapper">
                            <select id="color" v-model="orderTravelPoint">
                                <template v-for="item in travelList">
                                    <option>{{ item }}</option>
                                </template>
                            </select>
                        </div>
                        <div class="select-icon" @click="addWayItem">
                            <i style="color: #12d2ac" class="fa fa-plus-square-o" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="my-area-intro-div" >
                        <p id="introDivText">
                            <span>这是一个新的城池，新的地点，你好啊，为什么啊哈哈哈嘿嘿嘿为什么啊哈哈哈嘿嘿嘿为什么啊哈哈哈嘿嘿嘿为什么啊哈哈哈嘿嘿嘿</span>
                            <span @click="showMessage = true">查看详情<i class="fa fa-angle-right" aria-hidden="true"></i><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                        </p>
                    </div>
                    <div id="selfSelected" style="overflow-y: auto">
                        <template v-for="(item, index) in list">
                            <div class="self-way-select-list" flex="box:last">
                                <div class="self-way-select-name">
                                    <span>{{ index }}、{{ item }}asddddddddddddddddddddddddddd</span>
                                </div>
                                <div class="self-way-select-icon">
                                    <i style="color: #12d2ac" class="fa fa-arrow-up" aria-hidden="true" @click="upSelect(index)"></i>
                                    <i style="color: #12d2ac" class="fa fa-arrow-down" aria-hidden="true" @click="downSelect(index)"></i>
                                    <i style="color: #FF630C" class="fa fa-trash-o" aria-hidden="true" @click="deleteSelect(index)"></i>
                                </div>
                            </div>
                        </template>
                    </div>
                    <div class="button-select-way">
                        <div class="button-sign-in">
                            <button>选好了，出发吧！</button>
                        </div>
                    </div>
                </div>
                <div flex="box:mean main:center cross:center" class="tabBar-bottom">
                    <div :class="{'pop-up-bottom-select': bottomSelect === true}" @click="showProvideWay">
                        <i class="fa fa-star-o" aria-hidden="true"></i><br/>
                        <span>推荐路线</span>
                    </div>
                    <div :class="{'pop-up-bottom-select': bottomSelect === false}" @click="showSelfWay">
                        <i class="fa fa-eye" aria-hidden="true"></i><br/>
                        <span>自选路线</span>
                    </div>
                </div>
            </div>
        </popup>
    </div>
</template>

<script>
  import Car from '@/assets/img/home/car.png'
  import Take from '@/assets/img/home/take.png'

  import WayItem from './wayItem/WayItem'
  import cov from './children/covAudio'
  import AudioPlayer from './children/audioPlayer'
  import {XHeader, XDialog, Popup, Selector} from 'vux'
  export default {
    name: 'demoComponent',
    components: {
      XHeader, XDialog, Popup, WayItem, Selector, cov, AudioPlayer
    },
    mounted () {
      document.getElementById('areaShow').style.height = (document.documentElement.clientHeight - 152) + 'px'
    },
    data () {
      let self = this
      return {
        searchOption: {
          city: '呼和浩特',
          citylimit: true
        },
        markers: [
          {
            position: [111.701188, 40.838005],
            events: {
              click: () => {
                this.showPopUpWay('我家')
              },
              dragend: (e) => {
                this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
              }
            },
            visible: true,
            draggable: false
          }
        ],
        zoom: 15,
        center: [111.701188, 40.835425],
        plugin: [{
          pName: 'Geolocation',
          events: {
            init (o) {
              o.getCurrentPosition((status, result) => {
                console.log(result)
                if (result.position !== undefined) {
                  self.center = [result.position.lng, result.position.lat]
                  self.calcLngLat(result.position)
                }
              })
            }
          }
        }],
        audioSources: [
          'http://covteam.u.qiniudn.com/test2.mp3'
        ],
        audio: {
          title: 'ninelie-Aimer',
          src: 'http://covteam.u.qiniudn.com/test2.mp3',
          poster: 'http://covteam.u.qiniudn.com/ka2.jpg',
          options: {
            preload: false,
            autoplay: false,
            rate: 1,
            loop: false,
            volume: 0.5
          }
        },
        travelList: ['你家', '我家'],
        orderTravelPoint: '',
        list: ['1', '2', '3', '4', '5', '6'],
        pooHeight: '100%',
        car: Car,
        take: Take,
        waySelected: false,
        showMessage: false,
        textShow: false,
        bottomSelect: true
      }
    },
    methods: {
      calcLngLat (position) {
        var centerLat = position.lat * Math.PI / 180.0
        var markLat = this.markers[0].position[1] * Math.PI / 180.0
        var lngReduce = (position.lng - this.markers[0].position[0]) * Math.PI / 180.0
        var latReduce = (position.lat - this.markers[0].position[1]) * Math.PI / 180.0
        var distance = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(latReduce / 2), 2) +
            Math.cos(centerLat) * Math.cos(markLat) * Math.pow(Math.sin(lngReduce / 2), 2)))
        distance = Math.round(distance * 10000 * 6378.137) / 10000
        if (distance < 0.5) {
          this.showMessage = true
//          this.$refs.playTem.play()
        }
      },
      onSearchResult (pois) {
        console.log(pois)
        if (pois.length > 0) {
          alert(pois)
        }
      },
      onChange (val) {
        console.log(val)
      },
      addWayItem () {
        this.list.push(this.orderTravelPoint)
      },
      swapItems (arr, index1, index2) {
        arr[index1] = arr.splice(index2, 1, arr[index1])[0]
      },
      upSelect (index) {
        if (index === 0) {
          return
        } else {
          this.swapItems(this.list, index, index - 1)
        }
      },
      downSelect (index) {
        if (index === this.list.length - 1) {
          return
        } else {
          this.swapItems(this.list, index, index + 1)
        }
      },
      deleteSelect (index) {
        this.list.splice(index, 1)
      },
      selectGoWay () {

      },
      showPopUp () {
        this.waySelected = true
        this.showProvideWay()
      },
      showPopUpWay (index) {
        this.waySelected = true
        this.orderTravelPoint = index
        this.showSelfWay()
      },
      showProvideWay () {
        this.bottomSelect = true
        document.getElementById('waySelectText').style.height = (document.documentElement.clientHeight - 151) + 'px'
      },
      showSelfWay () {
        this.bottomSelect = false
        setTimeout(() => {
          var height = document.documentElement.clientHeight - 270 - document.querySelector('#introDivText').offsetHeight
          document.getElementById('selfSelected').style.height = height + 'px'
        })
      }
    }
  }
  /* eslint-disable */
  /* eslint-enable */
</script>

<style lang="less">
    @import "../../assets/style/wayArea.less";

</style>
