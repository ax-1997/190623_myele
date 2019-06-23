<template>
  <div>
    <!-- 附近商家 -->
    <ul class="shop_list">
      <li class="shop_li border-1px" v-for="item in shopList" :key="item.id">
            <a>
              <div class="shop_left">
                <img src=./images/shop/1.jpg>
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">{{item.title}}</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <div class="shop_rating_order_left">
                    <div class="star stasr-24">
                      <span class="star_item on"></span>
                      <span class="star_item on"></span>
                      <span class="star_item on"></span>
                      <span class="star_item half"></span>
                      <span class="star_item off"></span>
                    </div>
                    <span class="rating_section">3.6</span>
                    <div class="order_section">月销{{item.num}}单</div>
                  </div>
                  <div class="shop_rating_order_right">胖丁专卖</div>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>￥{{item.sendStart}}起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约￥{{item.sendPrice}}</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
      <!--<li class="shop_li border-1px">
            <a>
              <div class="shop_left">
                <img src="./images/shop/2.jpg">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">胖丁汉堡寄售胖丁</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <div class="shop_rating_order_left">
                    <div class="star stasr-24">
                      <span class="star_item on"></span>
                      <span class="star_item on"></span>
                      <span class="star_item on"></span>
                      <span class="star_item on"></span>
                      <span class="star_item off"></span>
                    </div>
                    <span class="rating_section">4.1</span>
                    <div class="order_section">月销106单</div>
                  </div>
                  <div class="shop_rating_order_right">胖丁专卖</div>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>￥18起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约￥3</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
      <li class="shop_li border-1px">
            <a>
              <div class="shop_left">
                <img src="./images/shop/3.jpg">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">肯德基白桃乌龙茶</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <div class="shop_rating_order_left">
                    <div class="star stasr-24">
                      <span class="star_item on"></span>
                      <span class="star_item on"></span>
                      <span class="star_item on"></span>
                      <span class="star_item on"></span>
                      <span class="star_item half"></span>
                    </div>
                    <span class="rating_section">4.6</span>
                    <div class="order_section">月销106单</div>
                  </div>
                  <div class="shop_rating_order_right">胖丁专卖</div>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>￥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约￥5</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
      <li class="shop_li border-1px">
            <a>
              <div class="shop_left">
                <img src="./images/shop/4.jpg">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">明信片明信片</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <div class="shop_rating_order_left">
                    <div class="star stasr-24">
                      <span class="star_item on"></span>
                      <span class="star_item on"></span>
                      <span class="star_item on"></span>
                      <span class="star_item on"></span>
                      <span class="star_item half"></span>
                    </div>
                    <span class="rating_section">4.6</span>
                    <div class="order_section">月销106单</div>
                  </div>
                  <div class="shop_rating_order_right">胖丁专卖</div>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>￥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约￥5</span>
                  </p>
                </section>
              </div>
            </a>
          </li>-->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ShopList',
  props: {
    shopList: Array
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .shop_list
    width 100%
    .shop_li
      width 100%
      position: relative
      bottom-border-1px(#f1f1f1)
      > a
        overflow hidden
        display block
        width: 100%
        padding 15px 8px
        box-sizing border-box
        .shop_left
          width 23%
          padding-right 10px
          box-sizing border-box
          float left
          > img
            display block
            width 100%
            height 100%
        .shop_right
          width 77%
          float right
          .shop_detail_header
            width 100%
            overflow hidden
            .shop_title
              float left
              width 150px
              color #333
              font-size 16px
              font-weight bold
              &::before
                content "品牌"
                display inline-block
                font-size 11px
                line-height 11px
                background-color #ffd930
                padding 2px
                margin-right 8px
            .shop_detail_ul
              float right
              margin-top 3px
              font-size 12px
              .supports
                display inline-block
                color #999
                padding 0 2px
                border 1px solid #f1f1f1
                border-radius 2px
          .shop_rating_order
            overflow hidden
            width 100%
            height 16px
            margin 18px 0 8px 0
            .shop_rating_order_left
              width: 150px
              float: left
              font-size 12px
              .star
                float left
                .star_item
                  display inline-block
                  width: 10px
                  height: 10px
                  background-size 10px 10px
                  &.on
                    background-image url('images/stars/star24_on@3x.png')
                  &.half
                    background-image url('./images/stars/star24_half@3x.png')
                  &.off
                    background-image url('./images/stars/star24_off@3x.png')
              .rating_section
                color #ff6600
                margin-left 4px
                float: left;
              .order_section
                float right
                color #666
            .shop_rating_order_right
              float right
              padding 1px
              border 1px solid $red
              box-sizing border-box
              color $red
              margin -3px -8px 0 0
              transform scale(0.7)
              border-radius 3px
          .shop_distance
            font-size 12px
            color #666
            .shop_delivery_msg
              .segmentation
                color #ccc
</style>
