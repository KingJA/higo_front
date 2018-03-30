<template>
  <div class="main">
    <div class="head">
        <img class="wrap_icon" src="../assets/head.jpg"/>
      <p class="name">达芬奇</p>
      <p class="id">ID:12345</p>
      <div class="money">
        <div class="money_item">
          <h1 class="money_num">128800</h1>
          <p class="money_text">我的收益</p>
        </div>
        <div class="money_item">
          <h1 class="money_num">128800</h1>
          <p class="money_text">我的收益</p>
        </div>
      </div>

    </div>
    <div class="navs">
      <ul class="nav_line">
        <li class="nav_item" @click="goPath(paths[0])">
          <div class="wrap_nav_item">
            <img class="tab_icon" src="/static/img/ic_income.png" width="40" height="40"/>
            <p class="tab_text">收益明细</p>
          </div>
        </li>
        <li class="nav_item" @click="goPath(paths[1])">
          <div class="wrap_nav_item">
            <img class="tab_icon" src="/static/img/ic_link.png" width="40" height="40"/>
            <p class="tab_text">推广链接</p>
          </div>
        </li>
      </ul>
      <ul class="nav_line">
        <li class="nav_item" @click="goPath(paths[2])">
          <div class="wrap_nav_item">
            <img class="tab_icon" src="/static/img/ic_cash_record.png" width="40" height="40"/>
            <p class="tab_text">提现记录</p>
          </div>

        </li>
        <li class="nav_item" @click="goPath(paths[3])">
          <div class="wrap_nav_item">
            <img class="tab_icon" src="/static/img/ic_go_cash.png" width="40" height="40"/>
            <p class="tab_text">我要提现</p>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    methods: {
      goPath(path) {
        this.$router.push(path)
      }

    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        paths: ['/incomeDetail', '/generalizeLink', '/cashDetail', '/goCash',]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../common/stylus/function.styl"
  .main
    position relative
    text-align: center;
    background #ECEDF1
    height 100%
    .head
      height px2rem(250)
      background #F9601A
      color: #fff
      .wrap_icon
        margin-top px2rem(12)
        border-radius px2rem(70)
        border 2px solid #FAB088
        width px2rem(70)
        height px2rem(70)
      .name
      .id
        font-size px2rem(14)
        margin-top px2rem(10)

    .navs
      box-sizing border-box
      position absolute
      top px2rem(220)
      left px2rem(15)
      background #ffffff
      width px2rem(345)
      margin 0 auto
      border-radius 6px
      .item
        display inline-block

      .nav_line
        display flex
        height px2rem(125)
        .nav_item
          text-align center
          flex 1
          border-right: 1px solid rgba(7, 17, 27, 0.1);
          border-bottom: 1px solid rgba(7, 17, 27, 0.1);
          .tab_text
            margin-top px2rem(12)
            color #333333
            font-size px2rem(14)
          .tab_icon
            width px2rem(37)
            height px2rem(37)
          .wrap_nav_item
            position relative
            top 50%
            transform translateY(-50%)
    .money
      margin-top px2rem(20)
      display flex
      text-align center
      .money_item
        flex 1
        .money_num
          font-size px2rem(24)
        .money_text
          margin-top px2rem(7)
          font-size px2rem(14)

</style>
