<template>
  <div class="cashDetail">
    <ul>
      <li class="item_cash_detail" v-for="item in items">
        <p class="cash_type">{{item.cashType}}</p>
        <p class="date">{{item.date}}</p>
        <div class="div_status">
          <span class="status">{{item.status}}</span>
          <div class="wrap_money">
            <span class="money">{{item.money}}</span>
            <span class="unit">元</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        items: [
          {
            cashType: '微信提现',
            status: '打款中',
            date: '2018-03-22 10:25:33',
            money: 160,
          },
          {
            cashType: '微信提现',
            status: '打款中',
            date: '2018-03-22 10:25:33',
            money: 120,
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/function.styl"
  .cashDetail
    height 100%
    background #EFEFF4
    .item_cash_detail
      background #ffffff
      position relative
      padding px2rem(10)
      border-bottom px2rem(1) solid #EFEFF4
      .cash_type
        margin-bottom 10px
        font-size px2rem(15)
        color #333333
      .date
        font-size px2rem(12)
        color #999999
      .div_status
        position absolute
        top 50%
        right px2rem(10)
        transform translateY(-50%)
        .status, .wrap_money
          display block
          float left
        .status
          margin-right px2rem(73)
          font-size px2rem(13.5)
          color #666666
          line-height px2rem(17)
        .wrap_money
          color #333333
          overflow hidden
          .money,.unit
            display block
            float left
            font-weight bold
          .money
            font-size px2rem(17)
          .unit
            font-size px2rem(11)
            line-height px2rem(17)

</style>
