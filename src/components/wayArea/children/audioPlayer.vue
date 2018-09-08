<template>
    <div flex="box:first" style="height: 50px;line-height: 50px;">
        <div @click="togglePlayback" style="font-size: 50px">
            <i v-show="playing === false" class="fa fa-play-circle-o" aria-hidden="true"></i>
            <i v-show="playing === true" class="fa fa-pause-circle" aria-hidden="true"></i>
        </div>
        <div >
            <range style="margin-left: 45px; margin-top: 25px" v-model="processValue" :max="maxTime" decimal></range>
        </div>
    </div>
</template>

<script>
  import VueHowler from 'vue-howler'
  import { Range } from 'vux'
  export default {
    mixins: [VueHowler],
    data () {
      return {
      }
    },
    computed: {
      processValue () {
        var currentValue = parseFloat((this.progress * this.duration / 60).toFixed(2))
        setTimeout(() => {
          document.getElementsByClassName('range-min')[0].innerText = currentValue
        })
        return currentValue
      },
      maxTime () {
        return parseFloat((this.duration / 60).toFixed(2))
      }
    },
    components: {
      Range
    }
  }
</script>
