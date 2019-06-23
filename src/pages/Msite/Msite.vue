<template>
  <section class="msite ">
    <!-- 首页头部 -->
    <header-top title="湖北省武汉市😀416号猪猪乐园">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </header-top>

    <!-- 首页导航 -->
    <nav class="msite_nav">
      <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide">
            <a href="javascript:;" class="link_to_food">
              <span class="food_container">
                <img src="./images/nav/1.jpg" alt="">
              </span>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <span class="food_container">
              <img src="./images/nav/2.jpg" alt="">
            </span>
              <span>美食</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <span class="food_container">
              <img src="./images/nav/4.jpg" alt="">
            </span>
              <span>商超便利</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <span class="food_container">
                <img src="./images/nav/2.jpg" alt="">
              </span>
              <span>美食</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <span class="food_container">
              <img src="./images/nav/5.jpg" alt="">
            </span>
              <span>糕点</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <span class="food_container">
              <img src="./images/nav/6.jpg" alt="">
            </span>
              <span>三明治</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <span class="food_container">
                <img src="./images/nav/7.jpg" alt="">
              </span>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <span class="food_container">
              <img src="./images/nav/8.jpg" alt="">
            </span>
              <span>土豪推荐</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;" class="link_to_food">
              <span class="food_container">
                <img src="./images/nav/2.jpg" alt="">
              </span>
              <span>商超便利</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;" class="link_to_food">
              <span class="food_container">
                <img src="./images/nav/2.jpg" alt="">
              </span>
              <span>美食</span>
            </a>
          </div>

        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>

    <!-- 首页附近商家 -->
    <div class="msite_shop_list">
      <div class="shop_header">
        <div class="shop_header_title">
          <i class="iconfont icon-xuanxiang"></i>
          <span>附近商家</span>
        </div>
      </div>
      <div class="shop_container">
        <shop-list :shopList="shopList"></shop-list>
        <!--<ul class="shop_list">
          <li class="shop_li border-1px">
            <a>
              <div class="shop_left">
                <img src="./images/shop/1.jpg">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">竹林小筑</h4>
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
          </li>
        </ul>-->
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper'
import '../../../node_modules/swiper/dist/css/swiper.css'
import HeaderTop from  '../../components/HeaderTop/HeaderTop'
import ShopList from '../../components/ShopList/ShopList'
export default {
  name: 'Msite',
  data () {
    return {
      shopList: [
        {
          id: '1',
          title: '竹林小筑🏠',
          num: 106,
          sendStart: 20,
          sendPrice: 5
        },
        {
          id: '2',
          title: '竹林小筑🏠',
          num: 106,
          sendStart: 20,
          sendPrice: 5
        },
        {
          id: '3',
          title: '竹林小筑🏠',
          num: 106,
          sendStart: 20,
          sendPrice: 5
        }
      ]
    }
  },
  components: {
    HeaderTop,
    ShopList
  },
  methods: {
    _initSwiper () {
      new Swiper('.swiper-container', {
        loop: true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  },
  mounted () {
    this._initSwiper()
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .msite // 首页
    width 100%
    /*.msite_header
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
        font-size 20px
        position: absolute
        left 50%
        top 50%
        transform translate(-50%,-50%)
        width: 50%
      .header_login
        position: absolute
        right: 15px
        top 50%
        transform: translateY(-50%)
        font-size 14px*/
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background-color: #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width: 25%
              .food_container
                display block
                width: 100%
                text-align: center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 12px
                color: #666
        .swiper-pagination-bullet-active
          background $red !important
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      width 100%
      background-color #fff
      .shop_header
        width 100%
        height 20px
        padding 10px 10px 0 10px
        color #333
        .shop_header_title
          font-size 14px
        .icon-xuanxiang
          color #999
      .shop_container
        width 100%
        /*.shop_list
          width 100%
          .shop_li
            width 100%
            position: relative
            bottom-border-1px(#f5f5f5)
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
                      color #ccc*/
</style>
