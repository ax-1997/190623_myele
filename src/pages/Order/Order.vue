<template>
  <div class="order">
    <!-- 订单页头部 -->
    <header-top title="订单列表"></header-top>

    <section class="order_no_login">
      <img src="./images/person.png" alt="">
      <h3>登录后查看外卖订单</h3>
      <button>立即登录</button>
    </section>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
  name: 'Order',
  components: { HeaderTop }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .order
    width: 100%
    /*.order_header
      z-index 100
      background-color $red
      position: fixed
      left: 0
      top: 0
      width: 100%
      height: 45px
      color #fff
      .header_title
        font-size 22px
        position: absolute
        left 50%
        top 50%
        transform translate(-50%,-50%)
        width: 50%
        text-align: center*/
    .order_no_login
      padding-top 140px
      text-align: center
      img
        width 60%
      h3
        padding 10px 0
        font-size 17px
        color #6a6a6a
      button
        font-size 14px
        padding 10px 20px
        background-color $red
        color #fff
        outline none
        border 0
        border-radius 5px
</style>
