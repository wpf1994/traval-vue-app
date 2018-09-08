<template>
  <div>
    <x-header :left-options="{backText: '', showBack: true}">用户登录</x-header>

    <div class="title-picture-logo">
      <img :src="titleImg">
    </div>
    <InputImg :imgUrl="AccountImg" :selectUrl="AccountSelectImg" v-model="accountInfo" input-type="text" placeHolder="请输入手机号"></InputImg>
    <InputImg :imgUrl="PswImg" :selectUrl="PswSelectImg" v-model="accountPsw" input-type="password" placeHolder="请输入密码"></InputImg>
    <div class="hint-label">
      <span>忘记密码？</span>
      <span>短信验证登陆</span>
    </div>
    <div class="button-sign-in" style="margin-top: 30px">
      <button @click="logoIn">登录</button>
    </div>
  </div>
</template>
<script>
  import { XHeader } from 'vux'
  import InputImg from '@/components/person/children/InputImg'
  import LogoTitleImg from '@/assets/img/person/logo_title.png'
  import AccountImg from '@/assets/img/person/iphone.png'
  import AccountSelectImg from '@/assets/img/person/iphone_select.png'
  import PswImg from '@/assets/img/person/psw.png'
  import PswSelectImg from '@/assets/img/person/psw_select.png'
  export default {
    name: 'logoIn',
    data () {
      return {
        titleImg: LogoTitleImg,
        AccountImg: AccountImg,
        AccountSelectImg: AccountSelectImg,
        PswImg: PswImg,
        PswSelectImg: PswSelectImg,
        accountInfo: '',
        accountPsw: ''
      }
    },
    methods: {
      logoIn () {
        this.$router.push({name: 'PersonHome'})
      }
    },
    components: {
      InputImg, XHeader
    }
  }
</script>
<style>
  .title-picture-logo{
    height: 210px;
    text-align: center;
    line-height: 210px;
  }
  .title-picture-logo img{
    height: 150px;
    vertical-align: middle;
  }
  .hint-label{
    color: #72D3BE;
    font-size: 13px;
    margin: 10px;
  }
</style>
