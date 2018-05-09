<template>
  <div class="login">
    <input type="text" placeholder="请输入手机号" class="input_mobile" v-model="mobile"/>
    <div class="wrap_code">
      <input type="text" placeholder="请输入验证码" class="input_code" v-model="code"/>

      <span class="code" @click="getCode">获取验证码</span>
    </div>
    <p class="btn_confirm_out center" @click="login">登录</p>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Toast} from 'mint-ui';

  export default {
    name: "login",
    data() {
      return {
        mobile: '',
        code: ''
      }
    },
    methods: {
      getCode() {
        if (!this.mobile) {
          console.log('请输入手机号码');
          Toast("请输入手机号码");
          return;
        }
        this.$http.post('/v1/sms', {mobile: this.mobile, type: 'cpslogin'}).then(res => {
          Toast('已发送验证码到该手机');
        }).catch(error => {

        })
      },
      login() {
        if (!this.mobile) {
          Toast("请输入手机号码");
        }
        if (!this.code) {
          Toast("请输入验证码");
        }
        this.$http.post('/v1/cpslogin', {mobile: this.mobile, code: this.code}).then(res => {
          Toast('登录成功');
          localStorage.setItem('token',res.data.data.token)
          this.$router.push({name: 'Main'});
        }).catch(error => {

        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/function.styl"
  @import "../../common/stylus/color.styl"
  .login
    width 80%
    margin 0 auto
    padding-top px2rem(50)
    .wrap_code
      display flex
      margin-top px2rem(20)
      .code
        flex 1
        text-align center
        font-size px2rem(12)
        line-height px2rem(30)
        height px2rem(30)
        background $orange
        color $white
        border-radius px2rem(4)
      .input_code
        flex 3
        outline none
        font-size px2rem(15)
        border-bottom 1px solid $bg_gray
        margin-right px2rem(15)
        color $font_9
    .input_mobile
      outline none
      font-size px2rem(15)
      border-bottom 1px solid $bg_gray
      width 100%
      color $font_9

    .btn_confirm_out
      width 100%
      height px2rem(50)
      background $orange
      color $white
      border-radius px2rem(30)
      font-size px2rem(17)
      line-height px2rem(50)
      margin-top px2rem(40)
</style>
