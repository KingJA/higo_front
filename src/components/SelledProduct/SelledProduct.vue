<template>
  <div class="selledProduct">
    <ul>
      <li class="item_selled_product" v-for="item in items">
        <div>
          <div class="head_selled_product  border-1px">
            <span class="name">{{item.name}}</span>
            <span class="phone">{{item.phone}}</span>
            <span class="date">{{item.date}}</span>
          </div>
          <div class="content_selled_product">
            <h3 class="title">{{item.title}}</h3>
            <p class="orderId">订单号:{{item.orderId}}</p>
            <p class="count">数量:¥{{item.count}}</p>
            <div class="wrap_income">
              <span class="float_left">返现:  ¥</span>
              <span class="money float_left">{{item.money}}</span>
            </div>
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
            name: '马先生',
            phone: '18888888888',
            date: '2018-03-22 10:25:30',
            title: '《神秘巨星》',
            orderId: '1635454634846',
            money: 160,
            count: 5,
          },
          {
            name: '郑先生',
            phone: '18888888887',
            date: '2018-03-25 10:25:30',
            title: '《Good Day》',
            orderId: '3652454634846',
            money: 120,
            count: 3,
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  @import "../../common/stylus/function.styl"
  @import "../../common/stylus/color.styl"
  .selledProduct
    background $divider
    height 100%
    .item_selled_product
      background $white
      border-bottom px2rem(5) solid $divider
      .head_selled_product
        position relative
        overflow hidden
        border-1px($divider)
        padding px2rem(10)
        .name, .phone, .date
          display block
          font-size px2rem(12)
          color $font_9
        .name
          border-right 1px solid $divider
          padding-right px2rem(15)
          line-height px2rem(13)
          margin-right px2rem(15)
        .name, .phone
          float left
        .date
          float right
      .content_selled_product
        position relative
        padding px2rem(10)
        .title
          font-size px2rem(15)
          color: $font_3
        .orderId, .count
          font-size px2rem(13)
          color: $font_6
        .orderId
          margin-top px2rem(10)
          margin-bottom px2rem(10)
        .wrap_income
          position absolute
          top 50%
          right 20px
          transform translateY(-50%)
          span
            line-height px2rem(14)
            color #353535
            display block
            font-size px2rem(14)
          .money
            font-size px2rem(17)
            font-weight bold
</style>
