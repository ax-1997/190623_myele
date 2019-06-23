<template>
  <div class="profile">
    <!-- 个人页头部 -->
    <header-top title="我的"></header-top>

    <!-- 用户登录 -->
    <section class="profile-number">
      <router-link to="/login" class="profile_link">
        <div class="profile_image">
          <i class="iconfont icon-geren"></i>
        </div>
        <div class="user_info">
          <p class="login">登录/注册</p>
          <p class="user_icon">
            <i class="iconfont icon-shouji"></i>
          </p>
          <span class="user_msg">暂无绑定手机号</span>
        </div>
        <div class="arrow">
          <i class="iconfont icon-arrow"></i>
        </div>
      </router-link>
    </section>

    <!-- 优惠信息 -->
    <section class="profile_info_data border-1px">
      <ul class="info_data_list">
        <a href="javascript:;" class="info_data_link">
          <span class="info_data_top">
            <span>0.00</span>
          元</span>
          <div class="info_data_bottom">我的余额</div>
        </a>
        <a href="javascript:;" class="info_data_link">
          <span class="info_data_top">
            <span>0</span>
          个</span>
          <div class="info_data_bottom">我的优惠</div>
        </a>
        <a href="javascript:;" class="info_data_link">
          <span class="info_data_top">
            <span>0</span>
          分</span>
          <div class="info_data_bottom">我的积分</div>
        </a>
      </ul>
    </section>
    <!-- 订单信息 -->
    <section class="profile_my_order">
      <a href="javascript:;" class="myorder">
        <i class="iconfont icon-liebiao1"></i>
        <span class="order_div">
          <span>我的订单</span>
          <i class="iconfont icon-arrow"></i>
        </span>
      </a>
      <a href="javascript:;" class="myorder">
        <i class="iconfont icon-jifen5"></i>
        <span class="order_div">
          <span>积分商城</span>
          <i class="iconfont icon-arrow"></i>
        </span>
      </a>
      <a href="javascript:;" class="myorder">
        <i class="iconfont icon-vip"></i>
        <span class="order_div">
          <span>硅谷外卖会员单</span>
          <i class="iconfont icon-arrow"></i>
        </span>
      </a>
    </section>
    <!-- 服务中心 -->
    <section class="profile_my_order border-1px">
      <a href="javascript:;" class="myorder">
        <i class="iconfont icon-fuwuzhongxin"></i>
        <span class="order_div">
          <span>服务中心</span>
          <i class="iconfont icon-arrow"></i>
        </span>
      </a>
    </section>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
  name: 'Profile',
  components: { HeaderTop }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .profile
    width 100%
    overflow hidden // 让页面不虽其他页面滚动
    /*.profile_header
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
    .profile-number
      width 100%
      height: 100px
      margin-top 45px
      border-top 2px solid rgba(230,0,38,.4)
      .profile_link
        clearFix()
        display: block
        width: 100%
        height: 100px
        padding 20px 10px
        background-color $red
        box-sizing border-box
        position relative
        .profile_image
          height 62px
          width 62px
          border-radius 31px
          overflow hidden
          float: left;
          .iconfont
            font-size 62px
            background-color #e4e4e4
        .user_info
          float left
          display inline-block
          font-size 18px
          color #fff
          padding-left 3px
          .login
            padding 6px 0 8px 10px
            font-weight bold
          .user_icon
            float left
            margin 3px 0 0 7px
            .icon-shouji
              font-size 20px
        .user_msg
          float left
          font-size 14px
          line-height 19px
          margin-top 5px
        .arrow
          color #e7e7e7
          position absolute
          right 15px
          top 50%
          transform translateY(-50%)
    .profile_info_data
      bottom-border-1px(#e4e4e4)
      width 100%
      background-color #fff
      .info_data_list
        display flex
        .info_data_link
          flex 1
          text-align center
          border-right 1px solid #f1f1f1
          .info_data_top
            display block
            font-size 14px
            color #333
            padding 15px 5px 10px 5px
            span
              display inline-block
              color #f90
              font-size 30px
              font-weight 700
              line-height 30px
          .info_data_bottom
            font-size 14px
            padding-bottom 10px
            color #666
            font-weight 400
        .info_data_link:nth-of-type(2)
          .info_data_top
            span
              color #ff5f3e //#6ac20b
        .info_data_link:nth-of-type(3)
          border-right 0
          .info_data_top
            span
              color #6ac20b
    .profile_my_order
      margin-top 10px
      top-border-1px(#e4e4e4)
      background-color #fff
      .myorder
        display flex
        align-items center
        padding-left 15px
        .icon-liebiao1
          color $red
          font-size 16px
        .icon-jifen5
          color #ff5e86
          font-size 26px
          margin-left -4px
        .icon-vip
          color #f90
          font-size 30px
          margin-left -4px
        .icon-fuwuzhongxin
          color #69b414
          font-size 30px
          margin-left -4px
        .order_div
          width 100%
          border-bottom 1px solid #f1f1f1
          padding 18px 10px 18px 0
          font-size 16px
          margin-left 10px
          color #333
          .icon-arrow
            float right
            color #bbb


</style>
