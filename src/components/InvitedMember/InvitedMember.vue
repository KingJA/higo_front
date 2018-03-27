<template>
  <div class="invitedMember">
    <ul>
      <li class="item_invited_member" v-for="item in items">

        <div class="div_name">
          <span class="name">{{item.name}}</span>
          <span class="phone">{{item.phone}}</span>
        </div>

        <div>
          <span class="date">成为会员时间:{{item.date}}</span>

        </div>

        <span class="money">收益:¥{{item.money}}</span>

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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">

  .item_invited_member
    position relative
    padding 10px
    border-bottom 1px solid #bebebe
    .div_name
      margin-bottom 10px
    .money
      position absolute
      top 50%
      right 20px
      transform translateY(-50%)
</style>
