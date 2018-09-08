<template>
  <div>
    <x-header :left-options="{backText: '', showBack: true}">用户注册</x-header>

    <InputImg :imgUrl="AccountImg" :selectUrl="AccountSelectImg" v-model="accountInfo" input-type="text" placeHolder="请输入手机号"></InputImg>
    <div class="sign-in-validate">
      <InputImg :imgUrl="Validate" :selectUrl="ValidateSelectImg" v-model="accountValidate" input-type="text" placeHolder="请输入验证码"></InputImg>
      <button>发送短信验证码</button>
    </div>
    <InputImg :imgUrl="PswImg" :selectUrl="PswSelectImg" v-model="accountPsw" input-type="password" placeHolder="请输入密码"></InputImg>
    <div class="check-box">
      <input type="checkbox" v-model="checkValue">
      <span @click="selectCheckBox">我已阅读并同意接受协议</span>
    </div>
    <div class="button-sign-in">
      <button @click="signIn">注册</button>
    </div>
  </div>
</template>
<script>
  import { XHeader } from 'vux'
  import InputImg from '@/components/person/children/InputImg'
  import AccountImg from '@/assets/img/person/iphone.png'
  import AccountSelectImg from '@/assets/img/person/iphone_select.png'
  import PswImg from '@/assets/img/person/psw.png'
  import PswSelectImg from '@/assets/img/person/psw_select.png'
  import Validate from '@/assets/img/person/validate.png'
  import ValidateSelectImg from '@/assets/img/person/validate_select.png'
  export default {
    name: 'signIn',
    data () {
      return {
        AccountImg: AccountImg,
        AccountSelectImg: AccountSelectImg,
        PswImg: PswImg,
        PswSelectImg: PswSelectImg,
        Validate: Validate,
        ValidateSelectImg: ValidateSelectImg,
        accountInfo: '',
        accountPsw: '',
        accountValidate: '',
        checkValue: true
      }
    },
    methods: {
      signIn () {
        console.log(this.checkValue)
      },
      selectCheckBox () {
        this.checkValue = !this.checkValue
      }
    },
    components: {
      InputImg, XHeader
    }
  }
</script>
<style>
  .button-sign-in{
    margin: 60px 10px 10px 10px;
  }
  .button-sign-in button{
    height: 45px;
    width: 100%;
    color: #fff;
    background-color: #FF630C;
    border: none;
    border-radius: 8px;
    font-size: 18px;
  }
  .check-box{
    margin: 10px;
    height: 25px;
    line-height: 25px;
  }
  .check-box input[type=checkbox]{
    vertical-align: middle;
    height: 20px;
    width: 20px;
  }
  .check-box span{
    font-size: 14px;
  }
  .sign-in-validate{
    display: flex;
  }
  .sign-in-validate button{
    width: 150px;
    height: 42px;
    margin: 10px;
    border-radius: 8px;
    border: none;
    color: #fff;
    background-color: #12D2AB;
  }
</style>
