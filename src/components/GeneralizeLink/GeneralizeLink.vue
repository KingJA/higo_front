<template>
  <div class="generalizeLink full_screen">
    <div class="wrap_generalizeLink">
      <div class="wrap_info">
        <img src="../../assets/logo.png" width="60" height="60" class="head_generalize_line" />
        <div class="user_info">
          <p class="name">{{getNickname}}</p>
          <p class="inviteId">邀请码:--</p>
        </div>


      </div>
      <div class="wrap_invite_qcode">
        <img src="../../../static/img/invite_qcode.png" class="invite_qcode"/>
      </div>
      <p class="hit_download">长按扫码二维码，立即下载嬉逛APP</p>
    </div>
    <p class="btn_share center">分享给好友</p>
    <div class="wrap_inviteId center hidden">
      <span class="invite_text">我的邀请码: </span>
      <span class="inviteId">--</span>
      <span class="btn_copy">复制邀请码</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        nickname: ''
      }
    },
    created() {
      this.getLink();
    },
    computed:{
      getNickname() {
        if (localStorage.getItem('nickname')) {
          return localStorage.getItem('nickname');
        } else {
          return '';
        }
      }
    },
    methods: {
      getLink() {
        let token = localStorage.getItem('token');
        console.log('token:' + token);
        this.$http.get("/v1/cps/link?token=" + token).then(res => {
          this.nickname = res.data.data.nickname;
        }).catch(error => {
          console.log('error:' + error)
        });
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/function.styl"
  @import "../../common/stylus/color.styl"
  .generalizeLink
    padding-top px2rem(20)
    .wrap_generalizeLink
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)
      box-sizing border-box
      width px2rem(300)
      padding px2rem(15)
      margin-left px2rem(37.5)
      background $white
      border-radius 4px
      text-align center
      .wrap_info
        text-align left
        position relative
        .head_generalize_line
          border-radius px2rem(50)
          width px2rem(50)
          height px2rem(50)
          margin-right px2rem(25)
        .user_info
          position absolute
          top 50%
          transform translateY(-50%)
          display inline-block
          .name
            margin-bottom px2rem(10)
            font-size px2rem(15)
            color $font_3
          .inviteId
            font-size px2rem(15)
            color $orange

      .wrap_invite_qcode
        margin-top px2rem(15)
        margin-bottom px2rem(10)
        .invite_qcode
          width px2rem(267.5)
          height px2rem(267.5)
      .hit_download
        font-size px2rem(10.5)
        color $font_6
        text-align center

  .btn_share
    line-height px2rem(44)
    text-align center
    font-size px2rem(15)
    margin-top px2rem(30)
    margin-left px2rem(37.5)
    background $orange
    width px2rem(300)
    height px2rem(44)
    border-radius px2rem(44)
    color $white

  .wrap_inviteId
    margin-top px2rem(30)
    .invite_text, .inviteId, .btn_copy
      display inline-block

    .invite_text
      font-size px2rem(15)
      color $font_3
    .inviteId
      font-size px2rem(15)
      color $orange
      margin-right px2rem(10)
    .btn_copy
      border 1px solid $orange
      color $orange
      font-size px2rem(12)
      border-radius px2rem(22.5)
      height px2rem(22.5)
      line-height px2rem(22.5)
      width px2rem(85)

</style>
