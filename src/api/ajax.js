/*
  ajax请求函数模块
  返回值 promise对象(异步返回的数据是response.data)
 */
import axios from 'axios'
export default ajax(url, data={}, type='GET'){

  return new Promise (function (resolve, reject) {
  // 下面的let promise得到的是response，而我们需要的是它下面的data，所以这里再包裹一层，这个promise对象得到的是response.data

    // 执行异步ajax请求
    let promise
    if(type === 'GET') {
      // 准备url query数据参数
      let dataStr = '' // 数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
        // name=zs
      })
      if (datastr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        // 如果不为空 不要最后一个&
        url = url + '?' + dataStr
      }
      // 发送GET请求
      promise = axios.get(url)
    } else {
      // 发送POST请求
      promise = axios.post(url, data)
    }
    // 成功时调用resolve()得到response.data
    promise.then(response => { // 回调成功
      resolve(response.data)
    })
      // 失败了调用reject()
      .catch(error => { // 回调失败
        reject(error)
      })

  })
}
