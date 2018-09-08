<template>
  <div class="input-url-style">
    <img :src="showImg">
    <input :type="inputType" :value="value" v-on:input="updateValue($event.target.value)" v-on:focus="setStyle(true)"  ref="input" v-on:blur="setStyle(false)"  :placeholder="inputHolder" />
    <i class="fa fa-times-circle" aria-hidden="true" @click="removeInput" v-if="removeShow"></i>
  </div>
</template>
<script>
  export default {
    name: 'inputImg',
    data () {
      return {
        showImg: this.imgUrl,
        inputHolder: this.placeHolder,
        removeShow: false
      }
    },
    methods: {
      setStyle (data) {
        if (data === true) {
          this.showImg = this.selectUrl
          this.$el.setAttribute('class', 'input-url-style active')
        } else {
          this.showImg = this.imgUrl
          this.$el.setAttribute('class', 'input-url-style')
        }
      },
      updateValue (data) {
        if (data.length > 0) {
          this.removeShow = true
        } else {
          this.removeShow = false
        }
        this.$emit('input', data)
      },
      removeInput () {
        this.$emit('input', '')
      }
    },
    props: ['imgUrl', 'selectUrl', 'placeHolder', 'value', 'inputType']
  }
</script>

<style>
  .input-url-style{
    margin: 10px;
    border: 1px solid #DFDFDF;
    vertical-align: middle;
    line-height: 40px;
    height: 40px;
    border-radius: 8px;
  }
  .input-url-style.active{
    border: 1px solid #00B591;
  }
  .input-url-style img{
    height: 25px;
    vertical-align: middle;
    margin-left: 10px;
  }
  .input-url-style input{
    height: 35px;
    line-height: 35px;
    vertical-align: middle;
    outline: 0;
    appearance: none;
    background-color: transparent;
    border: none;
    font-size: inherit;
    width: 75%;
  }
  .input-url-style i{
    float: right;
    line-height: 40px;
    margin-right: 10px;
  }
</style>
