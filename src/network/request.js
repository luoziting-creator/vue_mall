import axios from 'axios'

export function request(config){
 
    // 1.创建axios实例
    const instance=axios.create({
      baseURL: "http://152.136.185.210:7878/api/m5",
      timeout: 5000,
      // header:{}

    })
    // 2.axios 的拦截器
    // 2.1请求拦截的作用
    // instance3.interceptors.request.use(config=>{
    //   console.log(config)
      // 1.在拦截之前可能要做一些事情，① config中的一些信息不符合服务器的要求  比如请求头
      // ② 比如每次发送请求的时候，都希望在界面中显示一个请求的图标
      // ③  某些网络请求（比如登录 token），必须携带一个一些特殊的信息
    //   return config

    // },err=>{
    //   console.log(err)
    // })

    // 2.2 响应拦截
    instance.interceptors.response.use(res=>{
      // console.log(res)
      return res.data
    },err=>{
      console.log(err)
    })
    // instance3本身返回的就是一个promise，所以没必要再次进行return promise
    // 3. 发送真正的网络请求
    return instance(config)
    
}


