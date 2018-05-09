<template>
  <div class="invitedMember">
    <ul>
      <li class="item_invited_member" v-for="item in data.user">

        <p class="div_name">{{item.nickname}}  {{item.mobile}} </p>

        <p class="date">成为会员时间:{{item.created_at}}</p>


        <div class="wrap_income" v-if="false">
          <span class="float_left">收益:  ¥</span>
          <span class="money float_left">0</span>
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
            name: '马先生',
            phone: '18888888888',
            date: '2018-03-22',
            money: 160,
          },
          {
            name: '郑先生',
            phone: '18888888887',
            date: '2018-03-25',
            money: 120,
          }
        ]
      }
    },
    props: {
      data: {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/function.styl"
  @import "../../common/stylus/color.styl"
.invitedMember
  background $divider
  height 100%
  .item_invited_member
    background $white
    position relative
    padding px2rem(10)
    border-bottom px2rem(1) solid $divider
    .div_name
      margin-bottom px2rem(15)
      font-size px2rem(15)
      color $font_3
    .wrap_income
      position absolute
      top 50%
      right 20px
      transform translateY(-50%)
    .date
      font-size px2rem(12)
      color $font_9
    .wrap_income
      span
        line-height px2rem(14)
        color #353535
        display block
        font-size px2rem(14)
      .money
        font-size px2rem(17)
        font-weight bold





</style>
