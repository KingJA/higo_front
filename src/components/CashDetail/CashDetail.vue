<template>
  <div class="cashDetail">
    <Empty></Empty>
    <ul>
      <li class="item_cash_detail" v-for="item in items">
        <p class="cash_type">{{getTypeStr(item.type)}}</p>
        <p class="date">{{item.created_at}}</p>
        <div class="div_status">
          <span class="status">{{getStatusStr(item.status)}}</span>
          <div class="wrap_money">
            <span class="money">{{item.money}}</span>
            <span class="unit">元</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui';
  import Empty from '@/components/Empty/Empty'
  export default {
    components:{Empty},
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        isEmpty: false,

        items: [
          //type 1微信提现 2支付宝提现 3银行卡提现 4现金 5其他
          //status 0申请提现 1提现成功 2提现中 3提现失败
        ]
      }
    },
    created() {
      this.getCashRecords();
    },
    methods: {
      getCashRecords() {
        let token = localStorage.getItem('token');
        console.log('token:' + token);
        this.$http.get("/v1/cps/withdrawlist?token=" + token).then(res => {
          this.items = res.data.data;
          if (this.items.length === 0) {
            this.isEmpty = true;
            Toast('暂无提现记录');
          }
        }).catch(error => {
          console.log('error:' + error)
        });
      },
      getStatusStr(status) {
        // 0申请提现 1提现成功 2提现中 3提现失败
        let statusArr = ['申请提现', '提现成功', '提现中', '提现失败'];
        return statusArr[status];
      },
      getTypeStr(status) {
        // 1微信提现 2支付宝提现 3银行卡提现 4现金 5其他
        let statusArr = ['','微信提现', '支付宝提现', '银行卡提现', '现金', '其他'];
        return statusArr[status];
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/function.styl"
  @import "../../common/stylus/color.styl"
  .cashDetail
    height 100%
    background $bg_gray
    .item_cash_detail
      background $white
      position relative
      padding px2rem(10)
      border-bottom px2rem(1) solid $divider
      .cash_type
        margin-bottom 10px
        font-size px2rem(15)
        color $font_3
      .date
        font-size px2rem(12)
        color $font_9
      .div_status
        position absolute
        top 50%
        right px2rem(10)
        transform translateY(-50%)
        .status, .wrap_money
          display block
          float left
        .status
          margin-right px2rem(73)
          font-size px2rem(13.5)
          color $font_6
          line-height px2rem(17)
        .wrap_money
          color $font_3
          overflow hidden
          .money, .unit
            display block
            float left
            font-weight bold
          .money
            font-size px2rem(17)
          .unit
            font-size px2rem(11)
            line-height px2rem(17)
</style>
