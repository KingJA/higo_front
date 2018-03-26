<template>
  <div class="main">
    <div class="head">
      <div>
        <img class="wrap_icon" src="../assets/head.jpg" width="100" height="100"/>
      </div>
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
        <li class="nav_item">
          <div>
            <img class="tab_icon" src="../assets/head.jpg" width="40" height="40"/>
            <p><a href="#/incomeDetail" class="tab_text">收益明细</a><br></p>
          </div>

        </li>
        <li class="nav_item">
          <div>
            <img class="tab_icon" src="../assets/head.jpg" width="40" height="40"/>
            <p><a href="#/incomeDetail" class="tab_text">推广链接</a><br></p>
          </div>

        </li>
      </ul>
      <ul class="nav_line">
        <li class="nav_item">
          <div>
            <img class="tab_icon" src="../assets/head.jpg" width="40" height="40"/>
            <p><a href="#/incomeDetail" class="tab_text">提现记录</a><br></p>
          </div>

        </li>
        <li class="nav_item">
          <div>
            <img class="tab_icon" src="../assets/head.jpg" width="40" height="40"/>
            <p><a href="#/incomeDetail" class="tab_text">我要提现</a><br></p>
          </div>

        </li>
      </ul>

      <!--<a href="#/generalizeLink">推广链接</a><br>-->
      <!--<a href="#/cashDetail">提现记录</a><br>-->
      <!--<a href="#/goCash">我要提现</a><br>-->

    </div>

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
  .main
    background #ECEDF1
    height 100%
    .head
      position relative
      height 45%
      background #F9601A
      color: #fff
      .wrap_icon
        margin-top 20px
        border-radius 100px
        border 2px solid #FAB088
      .name
      .id
        margin-top 10px

    .navs
      position absolute
      top 40%
      left 5%
      background #ffffff
      width 90%
      margin 0 auto
      border-radius 6px
      .item
        display inline-block

      .nav_line
        display flex
        .nav_item
          padding-top 40px
          padding-bottom 20px
          flex 1
          text-align center
          display inline-block
          border-right: 1px solid rgba(7, 17, 27, 0.1);
          border-bottom: 1px solid rgba(7, 17, 27, 0.1);
          p
            margin-top 10px
            .tab_text
              color #000

    .money
      margin-top 10px
      display flex
      text-align center
      .money_item
        flex 1
        .money_num
          font-size 30px
        .money_text
          margin-top 8px
          font-size 14px

</style>
