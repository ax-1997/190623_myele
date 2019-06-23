<template>
  <div id="app">
    <router-view></router-view>
    <footer-guide v-show="$route.meta.showFooter"></footer-guide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  name: 'App',
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" scoped>
@import './common/stylus/mixins.styl'

.header // 公共头部
    background-color $red
    position: fixed
    left: 0
    top: 0
    height 45px
    width 100%
    .header_search
      width 10%
      height 50%
      position absolute
      top 50%
      left 15px
      transform translateY(-50%)
      .iconfont
        font-size 22px
    .header_title
      position absolute
      top 50%
      left 50%
      transform: translate(-50%, -50%)
      width 30%
      font-size 22px
      text-align: center
</style>
