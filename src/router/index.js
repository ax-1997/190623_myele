/* 路由器对象模块 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order'
import Proflile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'

// 声明使用插件
Vue.use(VueRouter)
// VueRouter库是构造函数类型
export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    }, {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    }, {
      path: '/profile',
      component: Proflile,
      meta: {
        showFooter: true
      }
    }, {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    }, {
      path: '/login',
      component: Login
    }, {
      path: '/',
      redirect: '/msite'
    }
  ]
})
