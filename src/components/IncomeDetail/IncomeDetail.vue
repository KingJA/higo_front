<template>
  <div class="income">
    <div class="tabs border-1px">
      <div class="tab_item">
        <router-link to="/selledProduct">已卖产品({{OrderCount}})</router-link>
      </div>
      <div class="tab_item">
        <router-link to="/invitedMebber">邀请会员({{userCount}})</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view  :data="data"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        userCount:0,
        OrderCount:0,
        data:{}
      }
    },
    created() {
      let token = localStorage.getItem('token');
      console.log('token:' + token);
      this.$http.get("/v1/cps/list?token=" + token).then(res => {
        console.log(res.data.data);
        this.userCount=res.data.data.usercount;
        this.OrderCount=res.data.data.ordercount;
        this.data=res.data.data;
      }).catch(error => {
        console.log('error:' + error)
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  @import "../../common/stylus/function.styl"
  @import "../../common/stylus/color.styl"
.income
  height 100%
  .tabs
    text-align: center;
    display flex
    border-1px(#CCCCCC)
    .tab_item
      flex 1
      display inline-block
      line-height px2rem(50)
      & > a
        padding-right 10px
        padding-left 10px
        display inline-block
        line-height px2rem(50)
        color $font_3
        font-size px2rem(15)
        &.router-link-exact-active
          color $orange
          border-bottom 2px solid $orange
</style>
