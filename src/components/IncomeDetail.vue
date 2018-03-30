<template>
  <div class="income">
    <div class="tabs border-1px">
      <div class="tab_item">
        <router-link to="/selledProduct">已卖产品(168)</router-link>
      </div>
      <div class="tab_item">
        <router-link to="/invitedMebber">邀请会员(256)</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
  @import "../common/stylus/mixin.styl"
  @import "../common/stylus/function.styl"
  .tabs
    text-align: center;
    display flex
    border-1px(#bebebe)
    .tab_item
      flex 1
      display inline-block
      line-height px2rem(50)
      & > a
        padding-right 10px
        padding-left 10px
        display inline-block
        line-height px2rem(50)
        color #333333
        font-size px2rem(15)
        &.router-link-exact-active
          color #ff7314
          border-bottom 2px solid #ff7314
</style>
