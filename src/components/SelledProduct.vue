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
            <div>
              <span class="orderId">订单号:{{item.orderId}}</span>
              <span class="money float_rifht">返现:¥{{item.money}}</span>
            </div>
            <span class="count">数量:¥{{item.count}}</span>
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
  @import "../common/stylus/mixin.styl"
  @import "../common/stylus/function.styl"

  .item_selled_product
    border-bottom 3px solid #bebebe
    .head_selled_product
      position relative
      border-1px(#bebebe)
      .name
        border-right 1px solid #bebebe
        padding-right 10px
        font-size px2rem(12)
        color: #999999

      .phone
        font-size px2rem(12)
        color: #999999
      .date
        font-size px2rem(12)
        color: #999999
    .content_selled_product
      padding 10px
      .title
        font-size px2rem(15)
        color: #333333
      .orderId,.count
        font-size px2rem(13)
        color: #666666
      .money
        font-size px2rem(14)
        color: #333333
</style>
