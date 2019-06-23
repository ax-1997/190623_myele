<template>
  <div class="search">
    <!-- 搜索页头部 -->
    <header-top title="搜索">

    </header-top>
    <!-- 搜索框 -->
    <div class="search_form">
      <input class="search_input" type="text" placeholder="请输入商家或者美食名称">
      <input class="search_submit" type="submit" value="提交">
    </div>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
  name: 'Search',
  components: { HeaderTop }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .search
    width 100%
    /*.search_header
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
    .search_form
      background-color #fff
      margin-top 45px
      padding 12px 8px
      .search_input
        width 79%
        color #333
        background-color: #f2f2f2
        line-height 31px
        border-radius 3px
        padding 2px 4px 2px 5px
        box-sizing border-box
      .search_submit
        width 18%
        float right
        height 35px
        background-color $red
        border-radius 3px
        color #fff
        font-weight bold
</style>
