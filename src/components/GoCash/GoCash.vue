<template>
  <div class="goCash full_screen">

    <div class="wrap_bg">
      <p class="tip_money center">可提金额</p>
      <div class="wrap_money center">
        <span class="money">{{balance}}</span>
        <span class="money_yuan">元</span>
      </div>
    </div>
    <!--金额输入框-->
    <div class="wrap_input">
      <div class="input_money hidden">
        <span class="symbol_rmb">¥</span>
        <input type="text" placeholder="请输入转出金额" class="input" v-model="money"/>
        <span class="float_rifht btn_out_all" @click="getAll">全部转出</span>
      </div>
    </div>
    <p class="btn_confirm_out center" @click="getMoney">确定转出</p>
    <p class="tip_out">1.预计到账时间：48小时内，节假日顺延</p>
    <p class="tip_out">2.每个账号免费体现额度为500元，超出部分将收取3%的服务费</p>
  </div>
</template>

<script>
  import {getToken} from '@/common/js/utils.js'
  import {Toast} from 'mint-ui';

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        balance: '',
        money: ''
      }
    },
    created() {
      console.log('token:' + getToken())
      this.getBalance();
    },
    methods: {
      getBalance() {
        this.$http.post("/v1/cps/wallet", {token: getToken()}).then(res => {
          console.log('res:' + res.data.data);
          this.balance = res.data.data;
        }).catch(error => {
          console.log('error:' + error)
        });
      },
      getMoney() {
        if (!this.money) {
          Toast("请输入提现金额");
          return
        }
        this.$http.post('/v1/cps/withdraw', {token: getToken(), money: this.money}).then(res => {
          Toast('提现成功');
          this.balance=this.balance-this.money;
        }).catch(error => {

        })
      },
      getAll() {
        this.money = this.balance;
      }
    }


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/function.styl"
  @import "../../common/stylus/color.styl"
  .goCash
    .tip_money
      font-size px2rem(14)
      color $white
    .wrap_money
      color $white
      margin-top 20px
      .money
        font-size px2rem(35)
      .money_yuan
        font-size px2rem(17)
    .wrap_input
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)
      position relative
      margin-right 5%
      margin-left 5%
      border-radius 4px
      background $white
      padding-top 40px
      padding-bottom 40px
      padding-right 25px
      padding-left 25px
      .btn_out_all, .input, .symbol_rmb
        display block
        line-height px2rem(30)
      .btn_out_all
        float right
        text-align center
        display inline-block
        border 1px solid $orange
        color $orange
        border-radius 4px
        width px2rem(73)
        height px2rem(28)
        font-size px2rem(15)
      .input
        float left
        font-size px2rem(15)
        color $font_9
        width px2rem(150)
      .symbol_rmb
        float left
        margin-right 10px
        font-size px2rem(30)
        color $font_3
    .btn_confirm_out
      width px2rem(350)
      height px2rem(50)
      background $orange
      color $white
      border-radius px2rem(50)
      font-size px2rem(17)
      line-height px2rem(50)
      margin-left px2rem(12.5)
      margin-top px2rem(40)
      margin-bottom px2rem(40)
    .tip_out
      width px2rem(350)
      margin-left px2rem(12.5)
      margin-bottom px2rem(10)
      color $font_9
      font-size px2rem(13)
    .wrap_bg
      background-image url('bg_cash.png')
      height px2rem(206.5)
      background-size px2rem(375) px2rem(206.5)
      padding-top px2rem(52.5)
      box-sizing border-box
</style>
