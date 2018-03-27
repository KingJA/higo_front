<template>
  <div class="generalizeLink full_screen">
    <div class="wrap_generalizeLink">
      <div class="wrap_info">
        <img src="../../../static/img/jiesen.jpg" width="60" height="60" class="head_generalize_line"/>
        <div class="user_info">
          <p class="name">Jasen</p>
          <span class="inviteId">邀请码:FD1254</span>
        </div>


      </div>
      <div class="wrap_invite_qcode">
        <img src="../../../static/img/invite_qcode.png" width="250" height="250" class="invite_qcode"/>
      </div>

      <p class="hit_download">长按扫码二维码，立即下载嬉逛APP</p>
    </div>

    <p class="btn_share center">分享给好友</p>
    <div class="wrap_inviteId center">
      <span>我的邀请码: </span>
      <span class="inviteId">DFSDF125</span>
      <span class="btn_copy">复制邀请码</span>
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
  .generalizeLink
    padding-top 20px
    .wrap_generalizeLink
      padding 20px
      margin-right 10%
      margin-left 10%
      background #fff
      border-radius 4px
      .wrap_info
        position relative
        .head_generalize_line
          border-radius 60px
          margin-right 20px
        .user_info
          position absolute
          top 50%
          transform translateY(-50%)
          display inline-block
          .name
            margin-bottom 10px
          .inviteId
            color #ff7314

      .wrap_invite_qcode
        text-align center
        .invite_qcode
          margin-top 20px
          margin-bottom 10px
      .hit_download
        font-size 12px
        text-align center
  .btn_share
    margin-top 40px
    background #ff7314
    margin-right 10%
    margin-left 10%
    padding-top 16px
    padding-bottom 16px
    border-radius 50px
    color #fff
  .wrap_inviteId
    margin-top 40px
    .inviteId
      color  #ff7314
      margin-right 10px
    .btn_copy
      display inline-block
      border 1px solid #ff7314
      color  #ff7314
      font-size 12px
      padding-top  5px
      padding-bottom 5px
      padding-right 12px
      padding-left 12px
      border-radius 30px

</style>
