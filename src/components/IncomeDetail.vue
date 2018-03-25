<template>
  <div class="income">
    <div class="tabs">
      <div class="tab_item">
        <router-link to="/selledProduct">已卖产品</router-link>
      </div>
      <div class="tab_item">
        <router-link to="/invitedMebber">邀请会员</router-link>
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

  .tabs
    display flex
    line-height 40px
    .tab_item
      flex 1
      display inline-block
      line-height 40px
</style>
