<template>
  <div class="goCash full_screen">

    <div class="wrap_bg">
      <p class="tip_money center">可提金额</p>
      <div class="wrap_money center">
        <span class="money">16588</span>
        <span class="money_yuan">元</span>
      </div>
    </div>


    <div class="wrap_input">
      <div class="input_money">
        <span class="symbol_rmb">¥</span>
        <input type="text" placeholder="请输入转出金额" class="input"/>
        <span class="float_rifht btn_out_all">全部转出</span>
      </div>
    </div>
    <p class="btn_confirm_out center">确定转出</p>
    <p class="tip_out">1.预计到账时间：48小时内，节假日顺延</p>
    <p class="tip_out">2.每个账号免费体现额度为500元，超出部分将收取3%的服务费</p>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/function.styl"
  .goCash
    .tip_money
      font-size 12px
      color #fff
    .wrap_money
      color #fff
      margin-top 20px
      .money
        font-size 30px
    .wrap_input
      position relative
      margin-right 5%
      margin-left 5%
      border-radius 4px
      background #fff
      padding-top 40px
      padding-bottom 40px
      padding-right 25px
      padding-left 25px
      .btn_out_all
        text-align center
        display inline-block
        border 1px solid #f66b21
        color #f66b21
        border-radius 4px
        width px2rem(73)
        height px2rem(28)
        font-size px2rem(15)
        line-height px2rem(28)
      .input
        font-size px2rem(15)
        color #999999
        line-height 30px
        position absolute
        top 50%
        transform translateY(-50%)
        width 50%
      .symbol_rmb
        margin-right 10px
        font-size px2rem(30)
        color #333333
    .btn_confirm_out
      width px2rem(350)
      height px2rem(50)
      background #ff7314
      color #fff
      border-radius px2rem(50)
      font-size px2rem(17)
      line-height px2rem(50)
      margin-left px2rem(12.5)
    .tip_out
      margin-right 5%
      margin-left 5%
      margin-bottom 10px
      color #999999
      font-size 15px

    .wrap_bg
      background-image  url('../../../static/img/bg_cash.png')
      height px2rem(206.5)
      background-size px2rem(375) px2rem(206.5)
      padding-top px2rem(52.5)
      box-sizing border-box
</style>
