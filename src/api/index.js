/*
 包含n个接口请求函数的模块
 函数的返回值 promise对象
 因为暴露多个函数所以不用default
 */
import ajax from './ajax'

// 1、根据经纬度获取位置详情  latitude经度 longitude纬度
// http://localhost:3000/position/:geohash
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)

// 2、获取食品分类列表
// http://localhost:3000/index_category
export const reqFoodTypes = () => ajax('/index_category')

// 3、根据经纬度获取商铺列表
// http://localhost:3000/shops?latitude=40.10038&longitude=116.36867
// 如果想传递一个参数(longitude, latitude)写成({longitude, latitude})
export const reqShops = (longitude, latitude) => ajax('/shops', {longitude, latitude})
// 如果想换参数名，可以这样写(a, b) => ajax('/shops',{latitude:a, longitude:b})

// 4、根据经纬度和关键字搜索商铺列表
// http://localhost:3000/search_shops?keyword=test&geohash=40.10038,116.36867
export const reqSearchShops = (geohash, keyword) => ajax('/search_shops', {geohash, keyword})

// 5、获取一次性验证码
export const reqCaptcha = () => ajax('/captcha')

// 6、用户名密码登陆
export const reqLoginPwd = (name, pwd, captcha) => ajax('/login_pwd', {name, pwd, captcha}, 'POST')

// 7、发送短信验证码
export const reqSendCode = (phone) => ajax('/sendcode', {phone})
// 8、手机号验证码登陆
export const reqLoginMsg = (phone, code) => ajax('/login_sms', {phone, code}, 'POST')

// 9、根据会话获取用户信息
export const reqUserInfo = () => ajax('/userinfo')

// 10、用户登出
export const reqLogOut = () => ajax('/logout')
