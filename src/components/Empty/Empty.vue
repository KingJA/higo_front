<template>
  <div class="empty">
    <img src="../../assets/empty.png" class="img">
    <p class="tip">暂无数据</p>
  </div>


</template>

<script type="text/ecmascript-6">
  export default {
    name: "empty"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/function.styl"
  @import "../../common/stylus/color.styl"
  .empty
    text-align center
    width 100%
    height 100%
    .img
      width px2rem(196)
      height  px2rem(128)
      margin-top 50%
    .tip
      font-size px2rem(18)
      color $font_9
</style>
