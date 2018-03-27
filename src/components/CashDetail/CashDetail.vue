<template>
  <div class="cashDetail">
    <ul>
      <li class="item_cash_detail" v-for="item in items">
        <p class="cash_type">{{item.cashType}}</p>
        <p class="date">{{item.date}}</p>

        <div class="div_status">
          <span class="status">{{item.status}}</span>
          <span class="money">{{item.money}}元</span>
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
  .item_cash_detail
    position relative
    padding 10px
    border-bottom 1px solid #bebebe
    .cash_type
      margin-bottom 10px
    .div_status
      position absolute
      top 50%
      right 20px
      transform translateY(-50%)
      .status
        margin-right 40px

</style>
