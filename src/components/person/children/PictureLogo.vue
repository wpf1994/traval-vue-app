<template>
  <div>
    <div class="person-logo-img">
      <p class="logo-msg">
        <span>您尚未登陆，请先登陆或注册</span>
      </p>
      <p>
        <router-link :to="{name: 'LogoIn'}" tag="button" class="logo-button">登录</router-link>
        <router-link :to="{name: 'SignIn'}" tag="button" class="logo-sign">注册</router-link>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'pictureLogo'
  }
</script>
<style>
  .person-logo-img{
    background: url('../../../assets/one.jpg') no-repeat;
    background-size: cover;
    height: 197px;
    text-align: center;
  }
  .logo-msg{
    margin-top: 0;
    padding-top: 60px;
    color: #fff;
  }
  .logo-button{
    height: 40px;
    width: 80px;
    border-radius: 6px;
    background-color: #12D2AB;
    color: #fff;
    font-size: 18px;
    margin-right: 60px;
    border: none;
  }
  .logo-sign{
    height: 40px;
    width: 80px;
    border-radius: 6px;
    background-color: #FF630C;
    color: #fff;
    font-size: 18px;
    border: none;
  }
</style>
