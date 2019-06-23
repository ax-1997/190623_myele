<template>
  <!-- 头部 -->
  <header class="header">
    <slot name="left"></slot>
    <span class="header_title ellipsis">
      <span class="header_title_text ellipsis">{{title}}</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>

<script>
export default {
  name: 'HeaderTop',
  props: {
    title: String
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .header
    z-index 100
    background-color $red
    position: fixed
    left: 0
    top: 0
    width: 100%
    height: 45px
    color #fff
    .header_search
      position: absolute
      left: 15px
      top: 50%
      transform translateY(-50%)
      width: 10%
      height: 50%
      .icon-sousuo
        font-size 25px;
    .header_title
      font-size 22px
      position: absolute
      left 50%
      top 50%
      transform translate(-50%,-50%)
      width: 50%
      text-align: center
    .header_login
      position: absolute
      right: 15px
      top 50%
      transform: translateY(-50%)
      font-size 14px
</style>
