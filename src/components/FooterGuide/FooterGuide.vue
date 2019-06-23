<template>
  <div class="footer-guide">
    <div href="javascript:;" class="guide_item" :class="{on: '/msite' === $route.path}" @click="goTo('/msite')" >
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </div>
    <div href="javascript:;" class="guide_item" :class="{on: '/search' === $route.path}" @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont icon-soushuo"></i>
      </span>
      <span>搜索</span>
    </div>
    <div href="javascript:;" class="guide_item" :class="{on: '/order' === $route.path}" @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan-"></i>
      </span>
      <span>订单</span>
    </div>
    <div href="javascript:;" class="guide_item" :class="{on: '/profile' === $route.path}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterGuide',
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .footer-guide
    top-border-1px(#e4e4e4)
    background-color: #fff
    position: fixed
    z-index: 100
    left 0
    right 0
    bottom 0
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1;
      text-align center
      flex-direction column
      margin 5px
      color #333
      &.on
        color: $red
      span
        font-size 12px
        margin 2px 0
        .iconfont
          font-size 22px

/*  .content
    > div
      display: none
      &.on
        display: block
      > section
        header*/
</style>
